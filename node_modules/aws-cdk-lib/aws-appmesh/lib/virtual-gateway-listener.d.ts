import { Construct } from 'constructs';
import { CfnVirtualGateway } from './appmesh.generated';
import { HealthCheck } from './health-checks';
import { ListenerTlsOptions } from './listener-tls-options';
import { GrpcConnectionPool, Http2ConnectionPool, HttpConnectionPool } from './shared-interfaces';
/**
 * Represents the properties needed to define a Listeners for a VirtualGateway
 */
interface VirtualGatewayListenerCommonOptions {
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
}
/**
 * Represents the properties needed to define HTTP Listeners for a VirtualGateway
 */
export interface HttpGatewayListenerOptions extends VirtualGatewayListenerCommonOptions {
    /**
     * Connection pool for http listeners
     *
     * @default - None
     */
    readonly connectionPool?: HttpConnectionPool;
}
/**
 * Represents the properties needed to define HTTP2 Listeners for a VirtualGateway
 */
export interface Http2GatewayListenerOptions extends VirtualGatewayListenerCommonOptions {
    /**
     * Connection pool for http listeners
     *
     * @default - None
     */
    readonly connectionPool?: Http2ConnectionPool;
}
/**
 * Represents the properties needed to define GRPC Listeners for a VirtualGateway
 */
export interface GrpcGatewayListenerOptions extends VirtualGatewayListenerCommonOptions {
    /**
     * Connection pool for http listeners
     *
     * @default - None
     */
    readonly connectionPool?: GrpcConnectionPool;
}
/**
 * Properties for a VirtualGateway listener
 */
export interface VirtualGatewayListenerConfig {
    /**
     * Single listener config for a VirtualGateway
     */
    readonly listener: CfnVirtualGateway.VirtualGatewayListenerProperty;
}
/**
 * Represents the properties needed to define listeners for a VirtualGateway
 */
export declare abstract class VirtualGatewayListener {
    /**
     * Returns an HTTP Listener for a VirtualGateway
     */
    static http(options?: HttpGatewayListenerOptions): VirtualGatewayListener;
    /**
     * Returns an HTTP2 Listener for a VirtualGateway
     */
    static http2(options?: Http2GatewayListenerOptions): VirtualGatewayListener;
    /**
     * Returns a GRPC Listener for a VirtualGateway
     */
    static grpc(options?: GrpcGatewayListenerOptions): VirtualGatewayListener;
    /**
     * Called when the GatewayListener type is initialized. Can be used to enforce
     * mutual exclusivity
     */
    abstract bind(scope: Construct): VirtualGatewayListenerConfig;
}
export {};
