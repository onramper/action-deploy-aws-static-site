import { Construct } from 'constructs';
import { IMesh } from './mesh';
import { Route, RouteBaseProps } from './route';
import { VirtualRouterListener } from './virtual-router-listener';
import * as cdk from '../../core';
/**
 * Interface which all VirtualRouter based classes MUST implement
 */
export interface IVirtualRouter extends cdk.IResource {
    /**
     * The name of the VirtualRouter
     *
     * @attribute
     */
    readonly virtualRouterName: string;
    /**
     * The Amazon Resource Name (ARN) for the VirtualRouter
     *
     * @attribute
     */
    readonly virtualRouterArn: string;
    /**
     * The Mesh which the VirtualRouter belongs to
     */
    readonly mesh: IMesh;
    /**
     * Add a single route to the router
     */
    addRoute(id: string, props: RouteBaseProps): Route;
}
/**
 * Interface with base properties all routers willl inherit
 */
export interface VirtualRouterBaseProps {
    /**
     * Listener specification for the VirtualRouter
     *
     * @default - A listener on HTTP port 8080
     */
    readonly listeners?: VirtualRouterListener[];
    /**
     * The name of the VirtualRouter
     *
     * @default - A name is automatically determined
     */
    readonly virtualRouterName?: string;
}
declare abstract class VirtualRouterBase extends cdk.Resource implements IVirtualRouter {
    /**
     * The name of the VirtualRouter
     */
    abstract readonly virtualRouterName: string;
    /**
     * The Amazon Resource Name (ARN) for the VirtualRouter
     */
    abstract readonly virtualRouterArn: string;
    /**
     * The Mesh which the VirtualRouter belongs to
     */
    abstract readonly mesh: IMesh;
    /**
     * Add a single route to the router
     */
    addRoute(id: string, props: RouteBaseProps): Route;
}
/**
 * The properties used when creating a new VirtualRouter
 */
export interface VirtualRouterProps extends VirtualRouterBaseProps {
    /**
     * The Mesh which the VirtualRouter belongs to
     */
    readonly mesh: IMesh;
}
export declare class VirtualRouter extends VirtualRouterBase {
    /**
     * Import an existing VirtualRouter given an ARN
     */
    static fromVirtualRouterArn(scope: Construct, id: string, virtualRouterArn: string): IVirtualRouter;
    /**
     * Import an existing VirtualRouter given attributes
     */
    static fromVirtualRouterAttributes(scope: Construct, id: string, attrs: VirtualRouterAttributes): IVirtualRouter;
    /**
     * The name of the VirtualRouter
     */
    readonly virtualRouterName: string;
    /**
     * The Amazon Resource Name (ARN) for the VirtualRouter
     */
    readonly virtualRouterArn: string;
    /**
     * The Mesh which the VirtualRouter belongs to
     */
    readonly mesh: IMesh;
    private readonly listeners;
    constructor(scope: Construct, id: string, props: VirtualRouterProps);
    /**
     * Add port mappings to the router
     */
    private addListener;
}
/**
 * Interface with properties ncecessary to import a reusable VirtualRouter
 */
export interface VirtualRouterAttributes {
    /**
     * The name of the VirtualRouter
     */
    readonly virtualRouterName: string;
    /**
     * The Mesh which the VirtualRouter belongs to
     */
    readonly mesh: IMesh;
}
export {};
