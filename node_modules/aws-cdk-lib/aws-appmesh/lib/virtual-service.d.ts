import { Construct } from 'constructs';
import { CfnVirtualService } from './appmesh.generated';
import { IMesh } from './mesh';
import { IVirtualNode } from './virtual-node';
import { IVirtualRouter } from './virtual-router';
import * as cdk from '../../core';
/**
 * Represents the interface which all VirtualService based classes MUST implement
 */
export interface IVirtualService extends cdk.IResource {
    /**
     * The name of the VirtualService
     *
     * @attribute
     */
    readonly virtualServiceName: string;
    /**
     * The Amazon Resource Name (ARN) for the virtual service
     *
     * @attribute
     */
    readonly virtualServiceArn: string;
    /**
     * The Mesh which the VirtualService belongs to
     */
    readonly mesh: IMesh;
}
/**
 * The properties applied to the VirtualService being defined
 */
export interface VirtualServiceProps {
    /**
     * The name of the VirtualService.
     *
     * It is recommended this follows the fully-qualified domain name format,
     * such as "my-service.default.svc.cluster.local".
     *
     * Example value: `service.domain.local`
     * @default - A name is automatically generated
     */
    readonly virtualServiceName?: string;
    /**
     * The VirtualNode or VirtualRouter which the VirtualService uses as its provider
     */
    readonly virtualServiceProvider: VirtualServiceProvider;
}
/**
 * VirtualService represents a service inside an AppMesh
 *
 * It routes traffic either to a Virtual Node or to a Virtual Router.
 *
 * @see https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_services.html
 */
export declare class VirtualService extends cdk.Resource implements IVirtualService {
    /**
     * Import an existing VirtualService given an ARN
     */
    static fromVirtualServiceArn(scope: Construct, id: string, virtualServiceArn: string): IVirtualService;
    /**
     * Import an existing VirtualService given its attributes
     */
    static fromVirtualServiceAttributes(scope: Construct, id: string, attrs: VirtualServiceAttributes): IVirtualService;
    /**
     * The name of the VirtualService, it is recommended this follows the fully-qualified domain name format.
     */
    readonly virtualServiceName: string;
    /**
     * The Amazon Resource Name (ARN) for the virtual service
     */
    readonly virtualServiceArn: string;
    /**
     * The Mesh which the VirtualService belongs to
     */
    readonly mesh: IMesh;
    constructor(scope: Construct, id: string, props: VirtualServiceProps);
}
/**
 * Interface with properties ncecessary to import a reusable VirtualService
 */
export interface VirtualServiceAttributes {
    /**
     * The name of the VirtualService, it is recommended this follows the fully-qualified domain name format.
     */
    readonly virtualServiceName: string;
    /**
     * The Mesh which the VirtualService belongs to
     */
    readonly mesh: IMesh;
}
/**
 * Properties for a VirtualService provider
 */
export interface VirtualServiceProviderConfig {
    /**
     * Virtual Node based provider
     *
     * @default - none
     */
    readonly virtualNodeProvider?: CfnVirtualService.VirtualNodeServiceProviderProperty;
    /**
     * Virtual Router based provider
     *
     * @default - none
     */
    readonly virtualRouterProvider?: CfnVirtualService.VirtualRouterServiceProviderProperty;
    /**
     * Mesh the Provider is using
     *
     * @default - none
     */
    readonly mesh: IMesh;
}
/**
 * Represents the properties needed to define the provider for a VirtualService
 */
export declare abstract class VirtualServiceProvider {
    /**
     * Returns a VirtualNode based Provider for a VirtualService
     */
    static virtualNode(virtualNode: IVirtualNode): VirtualServiceProvider;
    /**
     * Returns a VirtualRouter based Provider for a VirtualService
     */
    static virtualRouter(virtualRouter: IVirtualRouter): VirtualServiceProvider;
    /**
     * Returns an Empty Provider for a VirtualService. This provides no routing capabilities
     * and should only be used as a placeholder
     */
    static none(mesh: IMesh): VirtualServiceProvider;
    /**
     * Enforces mutual exclusivity for VirtualService provider types.
     */
    abstract bind(_construct: Construct): VirtualServiceProviderConfig;
}
