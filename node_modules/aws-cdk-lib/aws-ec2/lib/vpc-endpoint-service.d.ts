import { Construct } from 'constructs';
import { ArnPrincipal } from '../../aws-iam';
import { IResource, Resource } from '../../core';
/**
 * A load balancer that can host a VPC Endpoint Service
 *
 */
export interface IVpcEndpointServiceLoadBalancer {
    /**
     * The ARN of the load balancer that hosts the VPC Endpoint Service
     *
     * @attribute
     */
    readonly loadBalancerArn: string;
}
/**
 * A VPC endpoint service.
 *
 */
export interface IVpcEndpointService extends IResource {
    /**
     * The service name of the VPC Endpoint Service that clients use to connect to,
     * like com.amazonaws.vpce.<region>.vpce-svc-xxxxxxxxxxxxxxxx
     *
     * @attribute
     */
    readonly vpcEndpointServiceName: string;
    /**
     * The id of the VPC Endpoint Service that clients use to connect to,
     * like vpce-svc-xxxxxxxxxxxxxxxx
     *
     * @attribute
     */
    readonly vpcEndpointServiceId: string;
}
/**
 * A VPC endpoint service
 * @resource AWS::EC2::VPCEndpointService
 *
 */
export declare class VpcEndpointService extends Resource implements IVpcEndpointService {
    /**
     * One or more network load balancers to host the service.
     * @attribute
     */
    readonly vpcEndpointServiceLoadBalancers: IVpcEndpointServiceLoadBalancer[];
    /**
     * Whether to require manual acceptance of new connections to the service.
     *
     */
    readonly acceptanceRequired: boolean;
    /**
     * Whether to enable the built-in Contributor Insights rules provided by AWS PrivateLink.
     *
     */
    readonly contributorInsightsEnabled?: boolean;
    /**
     * One or more Principal ARNs to allow inbound connections to.
     *
     */
    readonly allowedPrincipals: ArnPrincipal[];
    /**
     * The id of the VPC Endpoint Service, like vpce-svc-xxxxxxxxxxxxxxxx.
     * @attribute
     */
    readonly vpcEndpointServiceId: string;
    /**
     * The service name of the VPC Endpoint Service that clients use to connect to,
     * like com.amazonaws.vpce.<region>.vpce-svc-xxxxxxxxxxxxxxxx
     *
     * @attribute
     */
    readonly vpcEndpointServiceName: string;
    private readonly endpointService;
    constructor(scope: Construct, id: string, props: VpcEndpointServiceProps);
}
/**
 * Construction properties for a VpcEndpointService.
 *
 */
export interface VpcEndpointServiceProps {
    /**
     * One or more load balancers to host the VPC Endpoint Service.
     *
     */
    readonly vpcEndpointServiceLoadBalancers: IVpcEndpointServiceLoadBalancer[];
    /**
     * Whether requests from service consumers to connect to the service through
     * an endpoint must be accepted.
     * @default true
     *
     */
    readonly acceptanceRequired?: boolean;
    /**
     * Indicates whether to enable the built-in Contributor Insights rules provided by AWS PrivateLink.
     * @default false
     *
     */
    readonly contributorInsights?: boolean;
    /**
     * IAM users, IAM roles, or AWS accounts to allow inbound connections from.
     * These principals can connect to your service using VPC endpoints. Takes a
     * list of one or more ArnPrincipal.
     * @default - no principals
     *
     */
    readonly allowedPrincipals?: ArnPrincipal[];
}
