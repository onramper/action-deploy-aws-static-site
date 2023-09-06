import { Construct } from 'constructs';
import { CfnVirtualNode } from './appmesh.generated';
import { HealthCheck } from './health-checks';
import { ListenerTlsOptions } from './listener-tls-options';
import { GrpcConnectionPool, GrpcTimeout, Http2ConnectionPool, HttpConnectionPool, HttpTimeout, OutlierDetection, TcpConnectionPool, TcpTimeout } from './shared-interfaces';
/**
 * Properties for a VirtualNode listener
 */
export interface VirtualNodeListenerConfig {
    /**
     * Single listener config for a VirtualNode
     */
    readonly listener: CfnVirtualNode.ListenerProperty;
}
/**
 * Represents the properties needed to define a Listeners for a VirtualNode
 */
interface VirtualNodeListenerCommonOptions {
    /**
     * Port to listen for connections on
     *
     * @default - 8080
     */
    readonly port?: number;
    /**
     * The health check information for the listener
     *
     * @default - no healthcheck
     */
    readonly healthCheck?: HealthCheck;
    /**
     * Represents the configuration for enabling TLS on a listener
     *
     * @default - none
     */
    readonly tls?: ListenerTlsOptions;
    /**
     * Represents the configuration for enabling outlier detection
     *
     * @default - none
     */
    readonly outlierDetection?: OutlierDetection;
}
interface CommonHttpVirtualNodeListenerOptions extends VirtualNodeListenerCommonOptions {
    /**
     * Timeout for HTTP protocol
     *
     * @default - None
     */
    readonly timeout?: HttpTimeout;
}
/**
 * Represent the HTTP Node Listener property
 */
export interface HttpVirtualNodeListenerOptions extends CommonHttpVirtualNodeListenerOptions {
    /**
     * Connection pool for http listeners
     *
     * @default - None
     */
    readonly connectionPool?: HttpConnectionPool;
}
/**
 * Represent the HTTP2 Node Listener property
 */
export interface Http2VirtualNodeListenerOptions extends CommonHttpVirtualNodeListenerOptions {
    /**
     * Connection pool for http2 listeners
     *
     * @default - None
     */
    readonly connectionPool?: Http2ConnectionPool;
}
/**
 * Represent the GRPC Node Listener property
 */
export interface GrpcVirtualNodeListenerOptions extends VirtualNodeListenerCommonOptions {
    /**
     * Timeout for GRPC protocol
     *
     * @default - None
     */
    readonly timeout?: GrpcTimeout;
    /**
     * Connection pool for http listeners
     *
     * @default - None
     */
    readonly connectionPool?: GrpcConnectionPool;
}
/**
 * Represent the TCP Node Listener property
 */
export interface TcpVirtualNodeListenerOptions extends VirtualNodeListenerCommonOptions {
    /**
     * Timeout for TCP protocol
     *
     * @default - None
     */
    readonly timeout?: TcpTimeout;
    /**
     * Connection pool for http listeners
     *
     * @default - None
     */
    readonly connectionPool?: TcpConnectionPool;
}
/**
 *  Defines listener for a VirtualNode
 */
export declare abstract class VirtualNodeListener {
    /**
     * Returns an HTTP Listener for a VirtualNode
     */
    static http(props?: HttpVirtualNodeListenerOptions): VirtualNodeListener;
    /**
     * Returns an HTTP2 Listener for a VirtualNode
     */
    static http2(props?: Http2VirtualNodeListenerOptions): VirtualNodeListener;
    /**
     * Returns an GRPC Listener for a VirtualNode
     */
    static grpc(props?: GrpcVirtualNodeListenerOptions): VirtualNodeListener;
    /**
     * Returns an TCP Listener for a VirtualNode
     */
    static tcp(props?: TcpVirtualNodeListenerOptions): VirtualNodeListener;
    /**
     * Binds the current object when adding Listener to a VirtualNode
     */
    abstract bind(scope: Construct): VirtualNodeListenerConfig;
}
export {};
