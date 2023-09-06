import * as ec2 from '../../aws-ec2';
import * as elbv2 from '../../aws-elasticloadbalancingv2';
/**
 * An EC2 instance that is the target for load balancing
 *
 * If you register a target of this type, you are responsible for making
 * sure the load balancer's security group can connect to the instance.
 */
export declare class InstanceIdTarget implements elbv2.IApplicationLoadBalancerTarget, elbv2.INetworkLoadBalancerTarget {
    private readonly instanceId;
    private readonly port?;
    /**
     * Create a new Instance target
     *
     * @param instanceId Instance ID of the instance to register to
     * @param port Override the default port for the target group
     */
    constructor(instanceId: string, port?: number | undefined);
    /**
     * Register this instance target with a load balancer
     *
     * Don't call this, it is called automatically when you add the target to a
     * load balancer.
     */
    attachToApplicationTargetGroup(targetGroup: elbv2.IApplicationTargetGroup): elbv2.LoadBalancerTargetProps;
    /**
     * Register this instance target with a load balancer
     *
     * Don't call this, it is called automatically when you add the target to a
     * load balancer.
     */
    attachToNetworkTargetGroup(targetGroup: elbv2.INetworkTargetGroup): elbv2.LoadBalancerTargetProps;
    private attach;
}
export declare class InstanceTarget extends InstanceIdTarget {
    /**
     * Create a new Instance target
     *
     * @param instance Instance to register to
     * @param port Override the default port for the target group
     */
    constructor(instance: ec2.Instance, port?: number);
}
