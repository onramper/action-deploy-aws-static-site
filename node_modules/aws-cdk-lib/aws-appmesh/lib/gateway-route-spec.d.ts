import { Construct } from 'constructs';
import { CfnGatewayRoute } from './appmesh.generated';
import { HeaderMatch } from './header-match';
import { HttpRouteMethod } from './http-route-method';
import { HttpGatewayRoutePathMatch } from './http-route-path-match';
import { QueryParameterMatch } from './query-parameter-match';
import { IVirtualService } from './virtual-service';
/**
 * Configuration for gateway route host name match.
 */
export interface GatewayRouteHostnameMatchConfig {
    /**
     * GatewayRoute CFN configuration for host name match.
     */
    readonly hostnameMatch: CfnGatewayRoute.GatewayRouteHostnameMatchProperty;
}
/**
 * Used to generate host name matching methods.
 */
export declare abstract class GatewayRouteHostnameMatch {
    /**
     * The value of the host name must match the specified value exactly.
     *
     * @param name The exact host name to match on
     */
    static exactly(name: string): GatewayRouteHostnameMatch;
    /**
     * The value of the host name with the given name must end with the specified characters.
     *
     * @param suffix The specified ending characters of the host name to match on
     */
    static endsWith(suffix: string): GatewayRouteHostnameMatch;
    /**
     * Returns the gateway route host name match configuration.
     */
    abstract bind(scope: Construct): GatewayRouteHostnameMatchConfig;
}
/**
 * The criterion for determining a request match for this GatewayRoute.
 */
export interface HttpGatewayRouteMatch {
    /**
     * Specify how to match requests based on the 'path' part of their URL.
     *
     * @default - matches requests with any path
     */
    readonly path?: HttpGatewayRoutePathMatch;
    /**
     * Specifies the client request headers to match on. All specified headers
     * must match for the gateway route to match.
     *
     * @default - do not match on headers
     */
    readonly headers?: HeaderMatch[];
    /**
     * The gateway route host name to be matched on.
     *
     * @default - do not match on host name
     */
    readonly hostname?: GatewayRouteHostnameMatch;
    /**
     * The method to match on.
     *
     * @default - do not match on method
     */
    readonly method?: HttpRouteMethod;
    /**
     * The query parameters to match on.
     * All specified query parameters must match for the route to match.
     *
     * @default - do not match on query parameters
     */
    readonly queryParameters?: QueryParameterMatch[];
    /**
     * When `true`, rewrites the original request received at the Virtual Gateway to the destination Virtual Service name.
     * When `false`, retains the original hostname from the request.
     *
     * @default true
     */
    readonly rewriteRequestHostname?: boolean;
    /**
     * The port number to match on.
     *
     * @default - no default port
     */
    readonly port?: number;
}
/**
 * The criterion for determining a request match for this GatewayRoute
 */
export interface GrpcGatewayRouteMatch {
    /**
     * Create service name based gRPC gateway route match.
     *
     * @default - no matching on service name
     */
    readonly serviceName?: string;
    /**
     * Create host name based gRPC gateway route match.
     *
     * @default - no matching on host name
     */
    readonly hostname?: GatewayRouteHostnameMatch;
    /**
     * Create metadata based gRPC gateway route match.
     * All specified metadata must match for the route to match.
     *
     * @default - no matching on metadata
     */
    readonly metadata?: HeaderMatch[];
    /**
     * When `true`, rewrites the original request received at the Virtual Gateway to the destination Virtual Service name.
     * When `false`, retains the original hostname from the request.
     *
     * @default true
     */
    readonly rewriteRequestHostname?: boolean;
    /**
     * The port to match from the request.
     *
     * @default - do not match on port
     */
    readonly port?: number;
}
/**
 * Base options for all gateway route specs.
 */
export interface CommonGatewayRouteSpecOptions {
    /**
     * The priority for the gateway route. When a Virtual Gateway has multiple gateway routes, gateway route match
     * is performed in the order of specified value, where 0 is the highest priority,
     * and first matched gateway route is selected.
     *
     * @default - no particular priority
     */
    readonly priority?: number;
}
/**
 * Properties specific for HTTP Based GatewayRoutes
 */
export interface HttpGatewayRouteSpecOptions extends CommonGatewayRouteSpecOptions {
    /**
     * The criterion for determining a request match for this GatewayRoute.
     * When path match is defined, this may optionally determine the path rewrite configuration.
     *
     * @default - matches any path and automatically rewrites the path to '/'
     */
    readonly match?: HttpGatewayRouteMatch;
    /**
     * The VirtualService this GatewayRoute directs traffic to
     */
    readonly routeTarget: IVirtualService;
}
/**
 * Properties specific for a gRPC GatewayRoute
 */
export interface GrpcGatewayRouteSpecOptions extends CommonGatewayRouteSpecOptions {
    /**
     * The criterion for determining a request match for this GatewayRoute
     */
    readonly match: GrpcGatewayRouteMatch;
    /**
     * The VirtualService this GatewayRoute directs traffic to
     */
    readonly routeTarget: IVirtualService;
}
/**
 * All Properties for GatewayRoute Specs
 */
export interface GatewayRouteSpecConfig {
    /**
     * The spec for an http gateway route
     *
     * @default - no http spec
     */
    readonly httpSpecConfig?: CfnGatewayRoute.HttpGatewayRouteProperty;
    /**
     * The spec for an http2 gateway route
     *
     * @default - no http2 spec
     */
    readonly http2SpecConfig?: CfnGatewayRoute.HttpGatewayRouteProperty;
    /**
     * The spec for a grpc gateway route
     *
     * @default - no grpc spec
     */
    readonly grpcSpecConfig?: CfnGatewayRoute.GrpcGatewayRouteProperty;
    /**
     * The priority for the gateway route. When a Virtual Gateway has multiple gateway routes, gateway route match
     * is performed in the order of specified value, where 0 is the highest priority,
     * and first matched gateway route is selected.
     *
     * @default - no particular priority
     */
    readonly priority?: number;
}
/**
 * Used to generate specs with different protocols for a GatewayRoute
 */
export declare abstract class GatewayRouteSpec {
    /**
     * Creates an HTTP Based GatewayRoute
     *
     * @param options - no http gateway route
     */
    static http(options: HttpGatewayRouteSpecOptions): GatewayRouteSpec;
    /**
     * Creates an HTTP2 Based GatewayRoute
     *
     * @param options - no http2 gateway route
     */
    static http2(options: HttpGatewayRouteSpecOptions): GatewayRouteSpec;
    /**
     * Creates an gRPC Based GatewayRoute
     *
     * @param options - no grpc gateway route
     */
    static grpc(options: GrpcGatewayRouteSpecOptions): GatewayRouteSpec;
    /**
     * Called when the GatewayRouteSpec type is initialized. Can be used to enforce
     * mutual exclusivity with future properties
     */
    abstract bind(scope: Construct): GatewayRouteSpecConfig;
}
