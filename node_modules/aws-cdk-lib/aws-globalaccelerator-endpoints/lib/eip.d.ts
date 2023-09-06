import * as ec2 from '../../aws-ec2';
import * as ga from '../../aws-globalaccelerator';
/**
 * Properties for a NetworkLoadBalancerEndpoint
 */
export interface CfnEipEndpointProps {
    /**
     * Endpoint weight across all endpoints in the group
     *
     * Must be a value between 0 and 255.
     *
     * @default 128
     */
    readonly weight?: number;
}
/**
 * Use an EC2 Instance as a Global Accelerator Endpoint
 */
export declare class CfnEipEndpoint implements ga.IEndpoint {
    private readonly eip;
    private readonly options;
    readonly region?: string;
    constructor(eip: ec2.CfnEIP, options?: CfnEipEndpointProps);
    renderEndpointConfiguration(): any;
}
