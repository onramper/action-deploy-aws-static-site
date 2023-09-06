import { Construct } from 'constructs';
import { GatewayRoute, GatewayRouteBaseProps } from './gateway-route';
import { IMesh } from './mesh';
import { AccessLog, BackendDefaults } from './shared-interfaces';
import { VirtualGatewayListener, VirtualGatewayListenerConfig } from './virtual-gateway-listener';
import * as iam from '../../aws-iam';
import * as cdk from '../../core';
/**
 * Interface which all Virtual Gateway based classes must implement
 */
export interface IVirtualGateway extends cdk.IResource {
    /**
     * Name of the VirtualGateway
     *
     * @attribute
     */
    readonly virtualGatewayName: string;
    /**
     * The Amazon Resource Name (ARN) for the VirtualGateway
     *
     * @attribute
     */
    readonly virtualGatewayArn: string;
    /**
     * The Mesh which the VirtualGateway belongs to
     */
    readonly mesh: IMesh;
    /**
     * Utility method to add a new GatewayRoute to the VirtualGateway
     */
    addGatewayRoute(id: string, route: GatewayRouteBaseProps): GatewayRoute;
    /**
     * Grants the given entity `appmesh:StreamAggregatedResources`.
     */
    grantStreamAggregatedResources(identity: iam.IGrantable): iam.Grant;
}
/**
 * Basic configuration properties for a VirtualGateway
 */
export interface VirtualGatewayBaseProps {
    /**
     * Name of the VirtualGateway
     *
     * @default - A name is automatically determined
     */
    readonly virtualGatewayName?: string;
    /**
     * Listeners for the VirtualGateway. Only one is supported.
     *
     * @default - Single HTTP listener on port 8080
     */
    readonly listeners?: VirtualGatewayListener[];
    /**
     * Access Logging Configuration for the VirtualGateway
     *
     * @default - no access logging
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
 * Properties used when creating a new VirtualGateway
 */
export interface VirtualGatewayProps extends VirtualGatewayBaseProps {
    /**
     * The Mesh which the VirtualGateway belongs to
     */
    readonly mesh: IMesh;
}
declare abstract class VirtualGatewayBase extends cdk.Resource implements IVirtualGateway {
    /**
     * Name of the VirtualGateway
     */
    abstract readonly virtualGatewayName: string;
    /**
     * The Amazon Resource Name (ARN) for the VirtualGateway
     */
    abstract readonly virtualGatewayArn: string;
    /**
     * The Mesh which the VirtualGateway belongs to
     */
    abstract readonly mesh: IMesh;
    /**
     * Utility method to add a new GatewayRoute to the VirtualGateway
     */
    addGatewayRoute(id: string, props: GatewayRouteBaseProps): GatewayRoute;
    grantStreamAggregatedResources(identity: iam.IGrantable): iam.Grant;
}
/**
 * VirtualGateway represents a newly defined App Mesh Virtual Gateway
 *
 * A virtual gateway allows resources that are outside of your mesh to communicate to resources that
 * are inside of your mesh.
 *
 * @see https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_gateways.html
 */
export declare class VirtualGateway extends VirtualGatewayBase {
    /**
     * Import an existing VirtualGateway given an ARN
     */
    static fromVirtualGatewayArn(scope: Construct, id: string, virtualGatewayArn: string): IVirtualGateway;
    /**
     * Import an existing VirtualGateway given its attributes
     */
    static fromVirtualGatewayAttributes(scope: Construct, id: string, attrs: VirtualGatewayAttributes): IVirtualGateway;
    /**
     * The name of the VirtualGateway
     */
    readonly virtualGatewayName: string;
    /**
     * The Amazon Resource Name (ARN) for the VirtualGateway
     */
    readonly virtualGatewayArn: string;
    /**
     * The Mesh that the VirtualGateway belongs to
     */
    readonly mesh: IMesh;
    protected readonly listeners: VirtualGatewayListenerConfig[];
    constructor(scope: Construct, id: string, props: VirtualGatewayProps);
}
/**
 * Unterface with properties necessary to import a reusable VirtualGateway
 */
export interface VirtualGatewayAttributes {
    /**
     * The name of the VirtualGateway
     */
    readonly virtualGatewayName: string;
    /**
     * The Mesh that the VirtualGateway belongs to
     */
    readonly mesh: IMesh;
}
export {};
