import { Construct } from 'constructs';
import { CfnVirtualGateway, CfnVirtualNode } from './appmesh.generated';
import { TlsClientPolicy } from './tls-client-policy';
import { IVirtualService } from './virtual-service';
import * as cdk from '../../core';
/**
 * Represents timeouts for HTTP protocols.
 */
export interface HttpTimeout {
    /**
     * Represents an idle timeout. The amount of time that a connection may be idle.
     *
     * @default - none
     */
    readonly idle?: cdk.Duration;
    /**
     * Represents per request timeout.
     *
     * @default - 15 s
     */
    readonly perRequest?: cdk.Duration;
}
/**
 * Represents timeouts for GRPC protocols.
 */
export interface GrpcTimeout {
    /**
     * Represents an idle timeout. The amount of time that a connection may be idle.
     *
     * @default - none
     */
    readonly idle?: cdk.Duration;
    /**
     * Represents per request timeout.
     *
     * @default - 15 s
     */
    readonly perRequest?: cdk.Duration;
}
/**
 * Represents timeouts for TCP protocols.
 */
export interface TcpTimeout {
    /**
     * Represents an idle timeout. The amount of time that a connection may be idle.
     *
     * @default - none
     */
    readonly idle?: cdk.Duration;
}
/**
 * Represents the outlier detection for a listener.
 */
export interface OutlierDetection {
    /**
     * The base amount of time for which a host is ejected.
     */
    readonly baseEjectionDuration: cdk.Duration;
    /**
     * The time interval between ejection sweep analysis.
     */
    readonly interval: cdk.Duration;
    /**
     * Maximum percentage of hosts in load balancing pool for upstream service that can be ejected. Will eject at
     * least one host regardless of the value.
     */
    readonly maxEjectionPercent: number;
    /**
     * Number of consecutive 5xx errors required for ejection.
     */
    readonly maxServerErrors: number;
}
/**
 * All Properties for Envoy Access logs for mesh endpoints
 */
export interface AccessLogConfig {
    /**
     * VirtualNode CFN configuration for Access Logging
     *
     * @default - no access logging
     */
    readonly virtualNodeAccessLog?: CfnVirtualNode.AccessLogProperty;
    /**
     * VirtualGateway CFN configuration for Access Logging
     *
     * @default - no access logging
     */
    readonly virtualGatewayAccessLog?: CfnVirtualGateway.VirtualGatewayAccessLogProperty;
}
/**
 * Configuration for Envoy Access logs for mesh endpoints
 */
export declare abstract class AccessLog {
    /**
     * Path to a file to write access logs to
     *
     * @default - no file based access logging
     */
    static fromFilePath(filePath: string, loggingFormat?: LoggingFormat): AccessLog;
    /**
     * Called when the AccessLog type is initialized. Can be used to enforce
     * mutual exclusivity with future properties
     */
    abstract bind(scope: Construct): AccessLogConfig;
}
/**
 * All Properties for Envoy Access Logging Format for mesh endpoints
 */
export interface LoggingFormatConfig {
    /**
     * CFN configuration for Access Logging Format
     *
     * @default - no access logging format
     */
    readonly formatConfig?: CfnVirtualNode.LoggingFormatProperty;
}
/**
 * Configuration for Envoy Access Logging Format for mesh endpoints
 */
export declare abstract class LoggingFormat {
    /**
     * Generate logging format from text pattern
     */
    static fromText(text: string): LoggingFormat;
    /**
     * Generate logging format from json key pairs
     */
    static fromJson(jsonLoggingFormat: {
        [key: string]: string;
    }): LoggingFormat;
    /**
     * Called when the Access Log Format is initialized. Can be used to enforce
     * mutual exclusivity with future properties
     */
    abstract bind(): LoggingFormatConfig;
}
/**
 * Represents the properties needed to define backend defaults
 */
export interface BackendDefaults {
    /**
     * TLS properties for Client policy for backend defaults
     *
     * @default - none
     */
    readonly tlsClientPolicy?: TlsClientPolicy;
}
/**
 * Represents the properties needed to define a Virtual Service backend
 */
export interface VirtualServiceBackendOptions {
    /**
     * TLS properties for  Client policy for the backend
     *
     * @default - none
     */
    readonly tlsClientPolicy?: TlsClientPolicy;
}
/**
 * Properties for a backend
 */
export interface BackendConfig {
    /**
     * Config for a Virtual Service backend
     */
    readonly virtualServiceBackend: CfnVirtualNode.BackendProperty;
}
/**
 * Contains static factory methods to create backends
 */
export declare abstract class Backend {
    /**
     * Construct a Virtual Service backend
     */
    static virtualService(virtualService: IVirtualService, props?: VirtualServiceBackendOptions): Backend;
    /**
     * Return backend config
     */
    abstract bind(_scope: Construct): BackendConfig;
}
/**
 * Connection pool properties for HTTP listeners
 */
export interface HttpConnectionPool {
    /**
     * The maximum connections in the pool
     *
     * @default - none
     */
    readonly maxConnections: number;
    /**
     * The maximum pending requests in the pool
     *
     * @default - none
     */
    readonly maxPendingRequests: number;
}
/**
 * Connection pool properties for TCP listeners
 */
export interface TcpConnectionPool {
    /**
     * The maximum connections in the pool
     *
     * @default - none
     */
    readonly maxConnections: number;
}
/**
 * Connection pool properties for gRPC listeners
 */
export interface GrpcConnectionPool {
    /**
     * The maximum requests in the pool
     *
     * @default - none
     */
    readonly maxRequests: number;
}
/**
 * Connection pool properties for HTTP2 listeners
 */
export interface Http2ConnectionPool {
    /**
     * The maximum requests in the pool
     *
     * @default - none
     */
    readonly maxRequests: number;
}
