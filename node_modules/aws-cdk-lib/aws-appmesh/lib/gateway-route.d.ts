import { Construct } from 'constructs';
import { GatewayRouteSpec } from './gateway-route-spec';
import { IVirtualGateway } from './virtual-gateway';
import * as cdk from '../../core';
/**
 * Interface for which all GatewayRoute based classes MUST implement
 */
export interface IGatewayRoute extends cdk.IResource {
    /**
     * The name of the GatewayRoute
     *
     * @attribute
     */
    readonly gatewayRouteName: string;
    /**
     * The Amazon Resource Name (ARN) for the GatewayRoute
     *
     * @attribute
     */
    readonly gatewayRouteArn: string;
    /**
     * The VirtualGateway the GatewayRoute belongs to
     */
    readonly virtualGateway: IVirtualGateway;
}
/**
 * Basic configuration properties for a GatewayRoute
 */
export interface GatewayRouteBaseProps {
    /**
     * The name of the GatewayRoute
     *
     * @default - an automatically generated name
     */
    readonly gatewayRouteName?: string;
    /**
     * What protocol the route uses
     */
    readonly routeSpec: GatewayRouteSpec;
}
/**
 * Properties to define a new GatewayRoute
 */
export interface GatewayRouteProps extends GatewayRouteBaseProps {
    /**
     * The VirtualGateway this GatewayRoute is associated with
     */
    readonly virtualGateway: IVirtualGateway;
}
/**
 * GatewayRoute represents a new or existing gateway route attached to a VirtualGateway and Mesh
 *
 * @see https://docs.aws.amazon.com/app-mesh/latest/userguide/gateway-routes.html
 */
export declare class GatewayRoute extends cdk.Resource implements IGatewayRoute {
    /**
     * Import an existing GatewayRoute given an ARN
     */
    static fromGatewayRouteArn(scope: Construct, id: string, gatewayRouteArn: string): IGatewayRoute;
    /**
     * Import an existing GatewayRoute given attributes
     */
    static fromGatewayRouteAttributes(scope: Construct, id: string, attrs: GatewayRouteAttributes): IGatewayRoute;
    /**
     * The name of the GatewayRoute
     */
    readonly gatewayRouteName: string;
    /**
     * The Amazon Resource Name (ARN) for the GatewayRoute
     */
    readonly gatewayRouteArn: string;
    /**
     * The VirtualGateway this GatewayRoute is a part of
     */
    readonly virtualGateway: IVirtualGateway;
    constructor(scope: Construct, id: string, props: GatewayRouteProps);
}
/**
 * Interface with properties necessary to import a reusable GatewayRoute
 */
export interface GatewayRouteAttributes {
    /**
     * The name of the GatewayRoute
     */
    readonly gatewayRouteName: string;
    /**
     * The VirtualGateway this GatewayRoute is associated with.
     */
    readonly virtualGateway: IVirtualGateway;
}
