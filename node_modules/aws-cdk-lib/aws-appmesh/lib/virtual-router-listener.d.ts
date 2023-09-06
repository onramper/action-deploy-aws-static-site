import { Construct } from 'constructs';
import { CfnVirtualRouter } from './appmesh.generated';
/**
 * Properties for a VirtualRouter listener
 */
export interface VirtualRouterListenerConfig {
    /**
     * Single listener config for a VirtualRouter
     */
    readonly listener: CfnVirtualRouter.VirtualRouterListenerProperty;
}
/**
 * Represents the properties needed to define listeners for a VirtualRouter
 */
export declare abstract class VirtualRouterListener {
    /**
     * Returns an HTTP Listener for a VirtualRouter
     *
     * @param port the optional port of the listener, 8080 by default
     */
    static http(port?: number): VirtualRouterListener;
    /**
     * Returns an HTTP2 Listener for a VirtualRouter
     *
     * @param port the optional port of the listener, 8080 by default
     */
    static http2(port?: number): VirtualRouterListener;
    /**
     * Returns a GRPC Listener for a VirtualRouter
     *
     * @param port the optional port of the listener, 8080 by default
     */
    static grpc(port?: number): VirtualRouterListener;
    /**
     * Returns a TCP Listener for a VirtualRouter
     *
     * @param port the optional port of the listener, 8080 by default
     */
    static tcp(port?: number): VirtualRouterListener;
    /**
     * Called when the VirtualRouterListener type is initialized. Can be used to enforce
     * mutual exclusivity
     */
    abstract bind(scope: Construct): VirtualRouterListenerConfig;
}
