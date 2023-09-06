import { Construct } from 'constructs';
import { IMesh } from './mesh';
import { ServiceDiscovery } from './service-discovery';
import { AccessLog, BackendDefaults, Backend } from './shared-interfaces';
import { VirtualNodeListener } from './virtual-node-listener';
import * as iam from '../../aws-iam';
import * as cdk from '../../core';
/**
 * Interface which all VirtualNode based classes must implement
 */
export interface IVirtualNode extends cdk.IResource {
    /**
     * The name of the VirtualNode
     *
     * @attribute
     */
    readonly virtualNodeName: string;
    /**
     * The Amazon Resource Name belonging to the VirtualNode
     *
     * Set this value as the APPMESH_VIRTUAL_NODE_NAME environment variable for
     * your task group's Envoy proxy container in your task definition or pod
     * spec.
     *
     * @attribute
     */
    readonly virtualNodeArn: string;
    /**
     * The Mesh which the VirtualNode belongs to
     */
    readonly mesh: IMesh;
    /**
     * Grants the given entity `appmesh:StreamAggregatedResources`.
     */
    grantStreamAggregatedResources(identity: iam.IGrantable): iam.Grant;
}
/**
 * Basic configuration properties for a VirtualNode
 */
export interface VirtualNodeBaseProps {
    /**
     * The name of the VirtualNode
     *
     * @default - A name is automatically determined
     */
    readonly virtualNodeName?: string;
    /**
     * Defines how upstream clients will discover this VirtualNode
     *
     * @default - No Service Discovery
     */
    readonly serviceDiscovery?: ServiceDiscovery;
    /**
     * Virtual Services that this is node expected to send outbound traffic to
     *
     * @default - No backends
     */
    readonly backends?: Backend[];
    /**
     * Initial listener for the virtual node
     *
     * @default - No listeners
     */
    readonly listeners?: VirtualNodeListener[];
    /**
     * Access Logging Configuration for the virtual node
     *
     * @default - No access logging
     */
    readonly accessLog?: AccessLog;
    /**
     * Default Configuration Virtual Node uses to communicate with Virtual Service
     *
     * @default - No Config
     */
    readonly backendDefaults?: BackendDefaults;
}
/**
 * The properties used when creating a new VirtualNode
 */
export interface VirtualNodeProps extends VirtualNodeBaseProps {
    /**
     * The Mesh which the VirtualNode belongs to
     */
    readonly mesh: IMesh;
}
declare abstract class VirtualNodeBase extends cdk.Resource implements IVirtualNode {
    /**
     * The name of the VirtualNode
     */
    abstract readonly virtualNodeName: string;
    /**
     * The Amazon Resource Name belonging to the VirtualNode
     */
    abstract readonly virtualNodeArn: string;
    /**
     * The Mesh which the VirtualNode belongs to
     */
    abstract readonly mesh: IMesh;
    grantStreamAggregatedResources(identity: iam.IGrantable): iam.Grant;
}
/**
 * VirtualNode represents a newly defined AppMesh VirtualNode
 *
 * Any inbound traffic that your virtual node expects should be specified as a
 * listener. Any outbound traffic that your virtual node expects to reach
 * should be specified as a backend.
 *
 * @see https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_nodes.html
 */
export declare class VirtualNode extends VirtualNodeBase {
    /**
     * Import an existing VirtualNode given an ARN
     */
    static fromVirtualNodeArn(scope: Construct, id: string, virtualNodeArn: string): IVirtualNode;
    /**
     * Import an existing VirtualNode given its name
     */
    static fromVirtualNodeAttributes(scope: Construct, id: string, attrs: VirtualNodeAttributes): IVirtualNode;
    /**
     * The name of the VirtualNode
     */
    readonly virtualNodeName: string;
    /**
     * The Amazon Resource Name belonging to the VirtualNode
     */
    readonly virtualNodeArn: string;
    /**
     * The Mesh which the VirtualNode belongs to
     */
    readonly mesh: IMesh;
    private readonly serviceDiscoveryConfig?;
    private readonly backends;
    private readonly listeners;
    constructor(scope: Construct, id: string, props: VirtualNodeProps);
    /**
     * Utility method to add an inbound listener for this VirtualNode
     *
     * Note: At this time, Virtual Nodes support at most one listener. Adding
     * more than one will result in a failure to deploy the CloudFormation stack.
     * However, the App Mesh team has plans to add support for multiple listeners
     * on Virtual Nodes and Virtual Routers.
     *
     * @see https://github.com/aws/aws-app-mesh-roadmap/issues/120
     */
    addListener(listener: VirtualNodeListener): void;
    /**
     * Add a Virtual Services that this node is expected to send outbound traffic to
     */
    addBackend(backend: Backend): void;
}
/**
 * Interface with properties necessary to import a reusable VirtualNode
 */
export interface VirtualNodeAttributes {
    /**
     * The name of the VirtualNode
     */
    readonly virtualNodeName: string;
    /**
     * The Mesh that the VirtualNode belongs to
     */
    readonly mesh: IMesh;
}
export {};
