import { Construct } from 'constructs';
import { MeshServiceDiscovery } from './service-discovery';
import { VirtualGateway, VirtualGatewayBaseProps } from './virtual-gateway';
import { VirtualNode, VirtualNodeBaseProps } from './virtual-node';
import { VirtualRouter, VirtualRouterBaseProps } from './virtual-router';
import * as cdk from '../../core';
/**
 * A utility enum defined for the egressFilter type property, the default of DROP_ALL,
 * allows traffic only to other resources inside the mesh, or API calls to amazon resources.
 *
 * @default DROP_ALL
 */
export declare enum MeshFilterType {
    /**
     * Allows all outbound traffic
     */
    ALLOW_ALL = "ALLOW_ALL",
    /**
     * Allows traffic only to other resources inside the mesh, or API calls to amazon resources
     */
    DROP_ALL = "DROP_ALL"
}
/**
 * Interface which all Mesh based classes MUST implement
 */
export interface IMesh extends cdk.IResource {
    /**
     * The name of the AppMesh mesh
     *
     * @attribute
     */
    readonly meshName: string;
    /**
     * The Amazon Resource Name (ARN) of the AppMesh mesh
     *
     * @attribute
     */
    readonly meshArn: string;
    /**
     * Creates a new VirtualRouter in this Mesh.
     * Note that the Router is created in the same Stack that this Mesh belongs to,
     * which might be different than the current stack.
     */
    addVirtualRouter(id: string, props?: VirtualRouterBaseProps): VirtualRouter;
    /**
     * Creates a new VirtualNode in this Mesh.
     * Note that the Node is created in the same Stack that this Mesh belongs to,
     * which might be different than the current stack.
     */
    addVirtualNode(id: string, props?: VirtualNodeBaseProps): VirtualNode;
    /**
     * Creates a new VirtualGateway in this Mesh.
     * Note that the Gateway is created in the same Stack that this Mesh belongs to,
     * which might be different than the current stack.
     */
    addVirtualGateway(id: string, props?: VirtualGatewayBaseProps): VirtualGateway;
}
/**
 * Represents a new or imported AppMesh mesh
 */
declare abstract class MeshBase extends cdk.Resource implements IMesh {
    /**
     * The name of the AppMesh mesh
     */
    abstract readonly meshName: string;
    /**
     * The Amazon Resource Name (ARN) of the AppMesh mesh
     */
    abstract readonly meshArn: string;
    /**
     * Adds a VirtualRouter to the Mesh with the given id and props
     */
    addVirtualRouter(id: string, props?: VirtualRouterBaseProps): VirtualRouter;
    /**
     * Adds a VirtualNode to the Mesh
     */
    addVirtualNode(id: string, props?: VirtualNodeBaseProps): VirtualNode;
    /**
     * Adds a VirtualGateway to the Mesh
     */
    addVirtualGateway(id: string, props?: VirtualGatewayBaseProps): VirtualGateway;
}
/**
 * The set of properties used when creating a Mesh
 */
export interface MeshProps {
    /**
     * The name of the Mesh being defined
     *
     * @default - A name is automatically generated
     */
    readonly meshName?: string;
    /**
     * Egress filter to be applied to the Mesh
     *
     * @default DROP_ALL
     */
    readonly egressFilter?: MeshFilterType;
    /**
     * Defines how upstream clients will discover VirtualNodes in the Mesh
     *
     * @default - No Service Discovery
     */
    readonly serviceDiscovery?: MeshServiceDiscovery;
}
/**
 * Define a new AppMesh mesh
 *
 * @see https://docs.aws.amazon.com/app-mesh/latest/userguide/meshes.html
 */
export declare class Mesh extends MeshBase {
    /**
     * Import an existing mesh by arn
     */
    static fromMeshArn(scope: Construct, id: string, meshArn: string): IMesh;
    /**
     * Import an existing mesh by name
     */
    static fromMeshName(scope: Construct, id: string, meshName: string): IMesh;
    /**
     * The name of the AppMesh mesh
     */
    readonly meshName: string;
    /**
     * The Amazon Resource Name (ARN) of the AppMesh mesh
     */
    readonly meshArn: string;
    constructor(scope: Construct, id: string, props?: MeshProps);
}
export {};
