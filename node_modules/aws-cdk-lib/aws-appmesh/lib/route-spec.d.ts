import { Construct } from 'constructs';
import { CfnRoute } from './appmesh.generated';
import { HeaderMatch } from './header-match';
import { HttpRouteMethod } from './http-route-method';
import { HttpRoutePathMatch } from './http-route-path-match';
import { QueryParameterMatch } from './query-parameter-match';
import { GrpcTimeout, HttpTimeout, TcpTimeout } from './shared-interfaces';
import { IVirtualNode } from './virtual-node';
import * as cdk from '../../core';
/**
 * Properties for the Weighted Targets in the route
 */
export interface WeightedTarget {
    /**
     * The VirtualNode the route points to
     */
    readonly virtualNode: IVirtualNode;
    /**
     * The weight for the target
     *
     * @default 1
     */
    readonly weight?: number;
    /**
     * The port to match from the request.
     *
     * @default - do not match on port
     */
    readonly port?: number;
}
/**
 * The criterion for determining a request match for this Route
 */
export interface HttpRouteMatch {
    /**
     * Specifies how is the request matched based on the path part of its URL.
     *
     * @default - matches requests with all paths
     */
    readonly path?: HttpRoutePathMatch;
    /**
     * Specifies the client request headers to match on. All specified headers
     * must match for the route to match.
     *
     * @default - do not match on headers
     */
    readonly headers?: HeaderMatch[];
    /**
     * The HTTP client request method to match on.
     *
     * @default - do not match on request method
     */
    readonly method?: HttpRouteMethod;
    /**
     * The client request protocol to match on. Applicable only for HTTP2 routes.
     *
     * @default - do not match on HTTP2 request protocol
     */
    readonly protocol?: HttpRouteProtocol;
    /**
     * The query parameters to match on.
     * All specified query parameters must match for the route to match.
     *
     * @default - do not match on query parameters
     */
    readonly queryParameters?: QueryParameterMatch[];
    /**
     * The port to match from the request.
     *
     * @default - do not match on port
     */
    readonly port?: number;
}
/**
 * Supported :scheme options for HTTP2
 */
export declare enum HttpRouteProtocol {
    /**
     * Match HTTP requests
     */
    HTTP = "http",
    /**
     * Match HTTPS requests
     */
    HTTPS = "https"
}
/**
 * The criterion for determining a request match for this Route.
 * At least one match type must be selected.
 */
export interface GrpcRouteMatch {
    /**
     * Create service name based gRPC route match.
     *
     * @default - do not match on service name
     */
    readonly serviceName?: string;
    /**
     * Create metadata based gRPC route match.
     * All specified metadata must match for the route to match.
     *
     * @default - do not match on metadata
     */
    readonly metadata?: HeaderMatch[];
    /**
     * The method name to match from the request.
     * If the method name is specified, service name must be also provided.
     *
     * @default - do not match on method name
     */
    readonly methodName?: string;
    /**
     * The port to match from the request.
     *
     * @default - do not match on port
     */
    readonly port?: number;
}
/**
 * Base options for all route specs.
 */
export interface RouteSpecOptionsBase {
    /**
     * The priority for the route. When a Virtual Router has multiple routes, route match is performed in the
     * order of specified value, where 0 is the highest priority, and first matched route is selected.
     *
     * @default - no particular priority
     */
    readonly priority?: number;
}
/**
 * Properties specific for HTTP Based Routes
 */
export interface HttpRouteSpecOptions extends RouteSpecOptionsBase {
    /**
     * The criterion for determining a request match for this Route
     *
     * @default - matches on '/'
     */
    readonly match?: HttpRouteMatch;
    /**
     * List of targets that traffic is routed to when a request matches the route
     */
    readonly weightedTargets: WeightedTarget[];
    /**
     * An object that represents a http timeout
     *
     * @default - None
     */
    readonly timeout?: HttpTimeout;
    /**
     * The retry policy
     *
     * @default - no retry policy
     */
    readonly retryPolicy?: HttpRetryPolicy;
}
/**
 * HTTP retry policy
 */
export interface HttpRetryPolicy {
    /**
     * Specify HTTP events on which to retry. You must specify at least one value
     * for at least one types of retry events.
     *
     * @default - no retries for http events
     */
    readonly httpRetryEvents?: HttpRetryEvent[];
    /**
     * The maximum number of retry attempts
     */
    readonly retryAttempts: number;
    /**
     * The timeout for each retry attempt
     */
    readonly retryTimeout: cdk.Duration;
    /**
     * TCP events on which to retry. The event occurs before any processing of a
     * request has started and is encountered when the upstream is temporarily or
     * permanently unavailable. You must specify at least one value for at least
     * one types of retry events.
     *
     * @default - no retries for tcp events
     */
    readonly tcpRetryEvents?: TcpRetryEvent[];
}
/**
 * HTTP events on which to retry.
 */
export declare enum HttpRetryEvent {
    /**
     * HTTP status codes 500, 501, 502, 503, 504, 505, 506, 507, 508, 510, and 511
     */
    SERVER_ERROR = "server-error",
    /**
     * HTTP status codes 502, 503, and 504
     */
    GATEWAY_ERROR = "gateway-error",
    /**
     * HTTP status code 409
     */
    CLIENT_ERROR = "client-error",
    /**
     * Retry on refused stream
     */
    STREAM_ERROR = "stream-error"
}
/**
 * TCP events on which you may retry
 */
export declare enum TcpRetryEvent {
    /**
     * A connection error
     */
    CONNECTION_ERROR = "connection-error"
}
/**
 * Properties specific for a TCP Based Routes
 */
export interface TcpRouteSpecOptions extends RouteSpecOptionsBase {
    /**
     * List of targets that traffic is routed to when a request matches the route
     */
    readonly weightedTargets: WeightedTarget[];
    /**
     * An object that represents a tcp timeout
     *
     * @default - None
     */
    readonly timeout?: TcpTimeout;
}
/**
 * Properties specific for a GRPC Based Routes
 */
export interface GrpcRouteSpecOptions extends RouteSpecOptionsBase {
    /**
     * The criterion for determining a request match for this Route
     */
    readonly match: GrpcRouteMatch;
    /**
     * An object that represents a grpc timeout
     *
     * @default - None
     */
    readonly timeout?: GrpcTimeout;
    /**
     * List of targets that traffic is routed to when a request matches the route
     */
    readonly weightedTargets: WeightedTarget[];
    /**
     * The retry policy
     *
     * @default - no retry policy
     */
    readonly retryPolicy?: GrpcRetryPolicy;
}
/** gRPC retry policy */
export interface GrpcRetryPolicy extends HttpRetryPolicy {
    /**
     * gRPC events on which to retry. You must specify at least one value
     * for at least one types of retry events.
     *
     * @default - no retries for gRPC events
     */
    readonly grpcRetryEvents?: GrpcRetryEvent[];
}
/**
 * gRPC events
 */
export declare enum GrpcRetryEvent {
    /**
     * Request was cancelled
     *
     * @see https://grpc.github.io/grpc/core/md_doc_statuscodes.html
     */
    CANCELLED = "cancelled",
    /**
     * The deadline was exceeded
     *
     * @see https://grpc.github.io/grpc/core/md_doc_statuscodes.html
     */
    DEADLINE_EXCEEDED = "deadline-exceeded",
    /**
     * Internal error
     *
     * @see https://grpc.github.io/grpc/core/md_doc_statuscodes.html
     */
    INTERNAL_ERROR = "internal",
    /**
     * A resource was exhausted
     *
     * @see https://grpc.github.io/grpc/core/md_doc_statuscodes.html
     */
    RESOURCE_EXHAUSTED = "resource-exhausted",
    /**
     * The service is unavailable
     *
     * @see https://grpc.github.io/grpc/core/md_doc_statuscodes.html
     */
    UNAVAILABLE = "unavailable"
}
/**
 * All Properties for Route Specs
 */
export interface RouteSpecConfig {
    /**
     * The spec for an http route
     *
     * @default - no http spec
     */
    readonly httpRouteSpec?: CfnRoute.HttpRouteProperty;
    /**
     * The spec for an http2 route
     *
     * @default - no http2 spec
     */
    readonly http2RouteSpec?: CfnRoute.HttpRouteProperty;
    /**
     * The spec for a grpc route
     *
     * @default - no grpc spec
     */
    readonly grpcRouteSpec?: CfnRoute.GrpcRouteProperty;
    /**
     * The spec for a tcp route
     *
     * @default - no tcp spec
     */
    readonly tcpRouteSpec?: CfnRoute.TcpRouteProperty;
    /**
     * The priority for the route. When a Virtual Router has multiple routes, route match is performed in the
     * order of specified value, where 0 is the highest priority, and first matched route is selected.
     *
     * @default - no particular priority
     */
    readonly priority?: number;
}
/**
 * Used to generate specs with different protocols for a RouteSpec
 */
export declare abstract class RouteSpec {
    /**
     * Creates an HTTP Based RouteSpec
     */
    static http(options: HttpRouteSpecOptions): RouteSpec;
    /**
     * Creates an HTTP2 Based RouteSpec
     *
     */
    static http2(options: HttpRouteSpecOptions): RouteSpec;
    /**
     * Creates a TCP Based RouteSpec
     */
    static tcp(options: TcpRouteSpecOptions): RouteSpec;
    /**
     * Creates a GRPC Based RouteSpec
     */
    static grpc(options: GrpcRouteSpecOptions): RouteSpec;
    /**
     * Called when the RouteSpec type is initialized. Can be used to enforce
     * mutual exclusivity with future properties
     */
    abstract bind(scope: Construct): RouteSpecConfig;
}
