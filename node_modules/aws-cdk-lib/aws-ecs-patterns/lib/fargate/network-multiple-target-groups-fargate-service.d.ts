import { Construct } from 'constructs';
import { FargateService, FargateTaskDefinition } from '../../../aws-ecs';
import { NetworkTargetGroup } from '../../../aws-elasticloadbalancingv2';
import { FargateServiceBaseProps } from '../base/fargate-service-base';
import { NetworkMultipleTargetGroupsServiceBase, NetworkMultipleTargetGroupsServiceBaseProps } from '../base/network-multiple-target-groups-service-base';
/**
 * The properties for the NetworkMultipleTargetGroupsFargateService service.
 */
export interface NetworkMultipleTargetGroupsFargateServiceProps extends NetworkMultipleTargetGroupsServiceBaseProps, FargateServiceBaseProps {
    /**
     * Determines whether the service will be assigned a public IP address.
     *
     * @default false
     */
    readonly assignPublicIp?: boolean;
}
/**
 * A Fargate service running on an ECS cluster fronted by a network load balancer.
 */
export declare class NetworkMultipleTargetGroupsFargateService extends NetworkMultipleTargetGroupsServiceBase {
    /**
     * Determines whether the service will be assigned a public IP address.
     */
    readonly assignPublicIp: boolean;
    /**
     * The Fargate service in this construct.
     */
    readonly service: FargateService;
    /**
     * The Fargate task definition in this construct.
     */
    readonly taskDefinition: FargateTaskDefinition;
    /**
     * The default target group for the service.
     * @deprecated - Use `targetGroups` instead.
     */
    readonly targetGroup: NetworkTargetGroup;
    /**
     * Constructs a new instance of the NetworkMultipleTargetGroupsFargateService class.
     */
    constructor(scope: Construct, id: string, props?: NetworkMultipleTargetGroupsFargateServiceProps);
    private createFargateService;
}
