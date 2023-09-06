import { Construct } from 'constructs';
import { IMesh } from './mesh';
import { RouteSpec } from './route-spec';
import { IVirtualRouter } from './virtual-router';
import * as cdk from '../../core';
/**
 * Interface for which all Route based classes MUST implement
 */
export interface IRoute extends cdk.IResource {
    /**
     * The name of the route
     *
     * @attribute
     */
    readonly routeName: string;
    /**
     * The Amazon Resource Name (ARN) for the route
     *
     * @attribute
     */
    readonly routeArn: string;
    /**
     * The VirtualRouter the Route belongs to
     */
    readonly virtualRouter: IVirtualRouter;
}
/**
 * Base interface properties for all Routes
 */
export interface RouteBaseProps {
    /**
     * The name of the route
     *
     * @default - An automatically generated name
     */
    readonly routeName?: string;
    /**
     * Protocol specific spec
     */
    readonly routeSpec: RouteSpec;
}
/**
 * Properties to define new Routes
 */
export interface RouteProps extends RouteBaseProps {
    /**
     * The service mesh to define the route in
     */
    readonly mesh: IMesh;
    /**
     * The VirtualRouter the Route belongs to
     */
    readonly virtualRouter: IVirtualRouter;
}
/**
 * Route represents a new or existing route attached to a VirtualRouter and Mesh
 *
 * @see https://docs.aws.amazon.com/app-mesh/latest/userguide/routes.html
 */
export declare class Route extends cdk.Resource implements IRoute {
    /**
     * Import an existing Route given an ARN
     */
    static fromRouteArn(scope: Construct, id: string, routeArn: string): IRoute;
    /**
     * Import an existing Route given attributes
     */
    static fromRouteAttributes(scope: Construct, id: string, attrs: RouteAttributes): IRoute;
    /**
     * The name of the Route
     */
    readonly routeName: string;
    /**
     * The Amazon Resource Name (ARN) for the route
     */
    readonly routeArn: string;
    /**
     * The VirtualRouter the Route belongs to
     */
    readonly virtualRouter: IVirtualRouter;
    constructor(scope: Construct, id: string, props: RouteProps);
}
/**
 * Interface with properties ncecessary to import a reusable Route
 */
export interface RouteAttributes {
    /**
     * The name of the Route
     */
    readonly routeName: string;
    /**
     * The VirtualRouter the Route belongs to
     */
    readonly virtualRouter: IVirtualRouter;
}
