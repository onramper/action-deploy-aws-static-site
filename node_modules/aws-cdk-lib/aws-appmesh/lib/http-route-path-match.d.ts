import { Construct } from 'constructs';
import { CfnGatewayRoute, CfnRoute } from './appmesh.generated';
/**
 * The type returned from the `bind()` method in `HttpRoutePathMatch`.
 */
export interface HttpRoutePathMatchConfig {
    /**
     * Route configuration for matching on the complete URL path of the request.
     *
     * @default - no matching will be performed on the complete URL path
     */
    readonly wholePathMatch?: CfnRoute.HttpPathMatchProperty;
    /**
     * Route configuration for matching on the prefix of the URL path of the request.
     *
     * @default - no matching will be performed on the prefix of the URL path
     */
    readonly prefixPathMatch?: string;
}
/**
 * Defines HTTP route matching based on the URL path of the request.
 */
export declare abstract class HttpRoutePathMatch {
    /**
     * The value of the path must match the specified value exactly.
     * The provided `path` must start with the '/' character.
     *
     * @param path the exact path to match on
     */
    static exactly(path: string): HttpRoutePathMatch;
    /**
     * The value of the path must match the specified regex.
     *
     * @param regex the regex used to match the path
     */
    static regex(regex: string): HttpRoutePathMatch;
    /**
     * The value of the path must match the specified prefix.
     *
     * @param prefix the value to use to match the beginning of the path part of the URL of the request.
     *   It must start with the '/' character. If provided as "/", matches all requests.
     *   For example, if your virtual service name is "my-service.local"
     *   and you want the route to match requests to "my-service.local/metrics", your prefix should be "/metrics".
     */
    static startsWith(prefix: string): HttpRoutePathMatch;
    /**
     * Returns the route path match configuration.
     */
    abstract bind(scope: Construct): HttpRoutePathMatchConfig;
}
/**
 * The type returned from the `bind()` method in `HttpGatewayRoutePathMatch`.
 */
export interface HttpGatewayRoutePathMatchConfig {
    /**
     * Gateway route configuration for matching on the complete URL path of the request.
     *
     * @default - no matching will be performed on the complete URL path
     */
    readonly wholePathMatch?: CfnGatewayRoute.HttpPathMatchProperty;
    /**
     * Gateway route configuration for matching on the prefix of the URL path of the request.
     *
     * @default - no matching will be performed on the prefix of the URL path
     */
    readonly prefixPathMatch?: string;
    /**
     * Gateway route configuration for rewriting the complete URL path of the request..
     *
     * @default - no rewrite will be performed on the request's complete URL path
     */
    readonly wholePathRewrite?: CfnGatewayRoute.HttpGatewayRoutePathRewriteProperty;
    /**
     * Gateway route configuration for rewriting the prefix of the URL path of the request.
     *
     * @default - rewrites the request's URL path to '/'
     */
    readonly prefixPathRewrite?: CfnGatewayRoute.HttpGatewayRoutePrefixRewriteProperty;
}
/**
 * Defines HTTP gateway route matching based on the URL path of the request.
 */
export declare abstract class HttpGatewayRoutePathMatch {
    /**
     * The value of the path must match the specified prefix.
     *
     * @param prefix the value to use to match the beginning of the path part of the URL of the request.
     *   It must start with the '/' character.
     *   When `rewriteTo` is provided, it must also end with the '/' character.
     *   If provided as "/", matches all requests.
     *   For example, if your virtual service name is "my-service.local"
     *   and you want the route to match requests to "my-service.local/metrics", your prefix should be "/metrics".
     * @param rewriteTo Specify either disabling automatic rewrite or rewriting to specified prefix path.
     *   To disable automatic rewrite, provide `''`.
     *   As a default, request's URL path is automatically rewritten to '/'.
     */
    static startsWith(prefix: string, rewriteTo?: string): HttpGatewayRoutePathMatch;
    /**
     * The value of the path must match the specified value exactly.
     * The provided `path` must start with the '/' character.
     *
     * @param path the exact path to match on
     * @param rewriteTo the value to substitute for the matched part of the path of the gateway request URL
     *   As a default, retains original request's URL path.
     */
    static exactly(path: string, rewriteTo?: string): HttpGatewayRoutePathMatch;
    /**
     * The value of the path must match the specified regex.
     *
     * @param regex the regex used to match the path
     * @param rewriteTo the value to substitute for the matched part of the path of the gateway request URL
     *   As a default, retains original request's URL path.
     */
    static regex(regex: string, rewriteTo?: string): HttpGatewayRoutePathMatch;
    /**
     * Returns the gateway route path match configuration.
     */
    abstract bind(scope: Construct): HttpGatewayRoutePathMatchConfig;
}
