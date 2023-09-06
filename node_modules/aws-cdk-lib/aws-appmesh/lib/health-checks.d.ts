import { Construct } from 'constructs';
import { CfnVirtualGateway, CfnVirtualNode } from './appmesh.generated';
import * as cdk from '../../core';
/**
 * Properties used to define healthchecks.
 */
interface HealthCheckCommonOptions {
    /**
     * The number of consecutive successful health checks that must occur before declaring listener healthy.
     *
     * @default 2
     */
    readonly healthyThreshold?: number;
    /**
     * The time period between each health check execution.
     *
     * @default Duration.seconds(5)
     */
    readonly interval?: cdk.Duration;
    /**
     * The amount of time to wait when receiving a response from the health check.
     *
     * @default Duration.seconds(2)
     */
    readonly timeout?: cdk.Duration;
    /**
     * The number of consecutive failed health checks that must occur before declaring a listener unhealthy.
     *
     * @default - 2
     */
    readonly unhealthyThreshold?: number;
}
/**
 * Properties used to define HTTP Based healthchecks.
 */
export interface HttpHealthCheckOptions extends HealthCheckCommonOptions {
    /**
     * The destination path for the health check request.
     *
     * @default /
     */
    readonly path?: string;
}
/**
 * Properties used to define GRPC Based healthchecks.
 */
export interface GrpcHealthCheckOptions extends HealthCheckCommonOptions {
}
/**
 * Properties used to define TCP Based healthchecks.
 */
export interface TcpHealthCheckOptions extends HealthCheckCommonOptions {
}
/**
 * All Properties for Health Checks for mesh endpoints
 */
export interface HealthCheckConfig {
    /**
     * VirtualNode CFN configuration for Health Checks
     *
     * @default - no health checks
     */
    readonly virtualNodeHealthCheck?: CfnVirtualNode.HealthCheckProperty;
    /**
     * VirtualGateway CFN configuration for Health Checks
     *
     * @default - no health checks
     */
    readonly virtualGatewayHealthCheck?: CfnVirtualGateway.VirtualGatewayHealthCheckPolicyProperty;
}
/**
 * Options used for creating the Health Check object
 */
export interface HealthCheckBindOptions {
    /**
     * Port for Health Check interface
     *
     * @default - no default port is provided
     */
    readonly defaultPort?: number;
}
/**
 * Contains static factory methods for creating health checks for different protocols
 */
export declare abstract class HealthCheck {
    /**
     * Construct a HTTP health check
     */
    static http(options?: HttpHealthCheckOptions): HealthCheck;
    /**
     * Construct a HTTP2 health check
     */
    static http2(options?: HttpHealthCheckOptions): HealthCheck;
    /**
     * Construct a GRPC health check
     */
    static grpc(options?: GrpcHealthCheckOptions): HealthCheck;
    /**
     * Construct a TCP health check
     */
    static tcp(options?: TcpHealthCheckOptions): HealthCheck;
    /**
     * Called when the AccessLog type is initialized. Can be used to enforce
     * mutual exclusivity with future properties
     */
    abstract bind(scope: Construct, options: HealthCheckBindOptions): HealthCheckConfig;
}
export {};
