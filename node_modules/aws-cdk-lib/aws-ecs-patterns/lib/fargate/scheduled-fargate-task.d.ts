import { Construct } from 'constructs';
import { FargateTaskDefinition } from '../../../aws-ecs';
import { EcsTask } from '../../../aws-events-targets';
import { FargateServiceBaseProps } from '../base/fargate-service-base';
import { ScheduledTaskBase, ScheduledTaskBaseProps, ScheduledTaskImageProps } from '../base/scheduled-task-base';
/**
 * The properties for the ScheduledFargateTask task.
 */
export interface ScheduledFargateTaskProps extends ScheduledTaskBaseProps, FargateServiceBaseProps {
    /**
     * The properties to define if using an existing TaskDefinition in this construct.
     * ScheduledFargateTaskDefinitionOptions or ScheduledFargateTaskImageOptions must be defined, but not both.
     *
     * @default none
     */
    readonly scheduledFargateTaskDefinitionOptions?: ScheduledFargateTaskDefinitionOptions;
    /**
     * The properties to define if the construct is to create a TaskDefinition.
     * ScheduledFargateTaskDefinitionOptions or ScheduledFargateTaskImageOptions must be defined, but not both.
     *
     * @default none
     */
    readonly scheduledFargateTaskImageOptions?: ScheduledFargateTaskImageOptions;
}
/**
 * The properties for the ScheduledFargateTask using an image.
 */
export interface ScheduledFargateTaskImageOptions extends ScheduledTaskImageProps, FargateServiceBaseProps {
}
/**
 * The properties for the ScheduledFargateTask using a task definition.
 */
export interface ScheduledFargateTaskDefinitionOptions {
    /**
     * The task definition to use for tasks in the service. Image or taskDefinition must be specified, but not both.
     *
     * [disable-awslint:ref-via-interface]
     *
     * @default - none
     */
    readonly taskDefinition: FargateTaskDefinition;
}
/**
 * A scheduled Fargate task that will be initiated off of CloudWatch Events.
 */
export declare class ScheduledFargateTask extends ScheduledTaskBase {
    /**
     * The Fargate task definition in this construct.
     */
    readonly taskDefinition: FargateTaskDefinition;
    /**
     * The ECS task in this construct.
     */
    readonly task: EcsTask;
    /**
     * Constructs a new instance of the ScheduledFargateTask class.
     */
    constructor(scope: Construct, id: string, props: ScheduledFargateTaskProps);
}
