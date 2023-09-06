import { Construct } from 'constructs';
import { CfnVirtualNode } from '../appmesh.generated';
import { GrpcGatewayRouteMatch } from '../gateway-route-spec';
import { HeaderMatch } from '../header-match';
import { ListenerTlsOptions } from '../listener-tls-options';
import { QueryParameterMatch } from '../query-parameter-match';
import { GrpcRouteMatch } from '../route-spec';
import { TlsClientPolicy } from '../tls-client-policy';
/**
 * Generated Connection pool config
 */
export interface ConnectionPoolConfig {
    /**
     * The maximum connections in the pool
     *
     * @default - none
     */
    readonly maxConnections?: number;
    /**
     * The maximum pending requests in the pool
     *
     * @default - none
     */
    readonly maxPendingRequests?: number;
    /**
     * The maximum requests in the pool
     *
     * @default - none
     */
    readonly maxRequests?: number;
}
/**
 * This is the helper method to render TLS property of client policy.
 */
export declare function renderTlsClientPolicy(scope: Construct, tlsClientPolicy: TlsClientPolicy | undefined): CfnVirtualNode.ClientPolicyTlsProperty | undefined;
/**
 * This is the helper method to render the TLS config for a listener.
 */
export declare function renderListenerTlsOptions(scope: Construct, listenerTls: ListenerTlsOptions | undefined): CfnVirtualNode.ListenerTlsProperty | undefined;
/**
 * This is the helper method to populate mesh owner when it is a shared mesh scenario
 */
export declare function renderMeshOwner(resourceAccount: string, meshAccount: string): string | undefined;
/**
 * This is the helper method to validate the length of HTTP match array when it is specified.
 */
export declare function validateHttpMatchArrayLength(headers?: HeaderMatch[], queryParameters?: QueryParameterMatch[]): void;
/**
 * This is the helper method to validate the length of gRPC match array when it is specified.
 */
export declare function validateGrpcMatchArrayLength(metadata?: HeaderMatch[]): void;
/**
 * This is the helper method to validate at least one of gRPC route match type is defined.
 */
export declare function validateGrpcRouteMatch(match: GrpcRouteMatch): void;
/**
 * This is the helper method to validate at least one of gRPC gateway route match type is defined.
 */
export declare function validateGrpcGatewayRouteMatch(match: GrpcGatewayRouteMatch): void;
