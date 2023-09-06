import * as ec2 from '../../aws-ec2';
import * as ga from '../../aws-globalaccelerator';
/**
 * Properties for a NetworkLoadBalancerEndpoint
 */
export interface InstanceEndpointProps {
    /**
     * Endpoint weight across all endpoints in the group
     *
     * Must be a value between 0 and 255.
     *
     * @default 128
     */
    readonly weight?: number;
    /**
     * Forward the client IP address
     *
     * GlobalAccelerator will create Network Interfaces in your VPC in order
     * to preserve the client IP address.
     *
     * Client IP address preservation is supported only in specific AWS Regions.
     * See the GlobalAccelerator Developer Guide for a list.
     *
     * @default true if available
     */
    readonly preserveClientIp?: boolean;
}
/**
 * Use an EC2 Instance as a Global Accelerator Endpoint
 */
export declare class InstanceEndpoint implements ga.IEndpoint {
    private readonly instance;
    private readonly options;
    readonly region?: string;
    constructor(instance: ec2.IInstance, options?: InstanceEndpointProps);
    renderEndpointConfiguration(): any;
}
