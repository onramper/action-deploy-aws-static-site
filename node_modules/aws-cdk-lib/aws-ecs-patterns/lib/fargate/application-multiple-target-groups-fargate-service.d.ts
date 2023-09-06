import { Construct } from 'constructs';
import { FargateService, FargateTaskDefinition } from '../../../aws-ecs';
import { ApplicationTargetGroup } from '../../../aws-elasticloadbalancingv2';
import { ApplicationMultipleTargetGroupsServiceBase, ApplicationMultipleTargetGroupsServiceBaseProps } from '../base/application-multiple-target-groups-service-base';
import { FargateServiceBaseProps } from '../base/fargate-service-base';
/**
 * The properties for the ApplicationMultipleTargetGroupsFargateService service.
 */
export interface ApplicationMultipleTargetGroupsFargateServiceProps extends ApplicationMultipleTargetGroupsServiceBaseProps, FargateServiceBaseProps {
    /**
     * Determines whether the service will be assigned a public IP address.
     *
     * @default false
     */
    readonly assignPublicIp?: boolean;
}
/**
 * A Fargate service running on an ECS cluster fronted by an application load balancer.
 */
export declare class ApplicationMultipleTargetGroupsFargateService extends ApplicationMultipleTargetGroupsServiceBase {
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
    readonly targetGroup: ApplicationTargetGroup;
    /**
     * Constructs a new instance of the ApplicationMultipleTargetGroupsFargateService class.
     */
    constructor(scope: Construct, id: string, props?: ApplicationMultipleTargetGroupsFargateServiceProps);
    private createFargateService;
}
