import * as elbv2 from '../../aws-elasticloadbalancingv2';
import * as lambda from '../../aws-lambda';
export declare class LambdaTarget implements elbv2.IApplicationLoadBalancerTarget {
    private readonly fn;
    /**
     * Create a new Lambda target
     *
     * @param functionArn The Lambda Function to load balance to
     */
    constructor(fn: lambda.IFunction);
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
