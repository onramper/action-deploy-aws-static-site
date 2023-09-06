import { ContainerOverride } from './run-ecs-task-base-types';
import * as ec2 from '../../../aws-ec2';
import * as ecs from '../../../aws-ecs';
import * as sfn from '../../../aws-stepfunctions';
/**
 * Basic properties for ECS Tasks
 */
export interface CommonEcsRunTaskProps {
    /**
     * The topic to run the task on
     */
    readonly cluster: ecs.ICluster;
    /**
     * Task Definition used for running tasks in the service.
     *
     * Note: this must be TaskDefinition, and not ITaskDefinition,
     * as it requires properties that are not known for imported task definitions
     * If you want to run a RunTask with an imported task definition,
     * consider using CustomState
     */
    readonly taskDefinition: ecs.TaskDefinition;
    /**
     * Container setting overrides
     *
     * Key is the name of the container to override, value is the
     * values you want to override.
     *
     * @default - No overrides
     */
    readonly containerOverrides?: ContainerOverride[];
    /**
     * The service integration pattern indicates different ways to call RunTask in ECS.
     *
     * The valid value for Lambda is FIRE_AND_FORGET, SYNC and WAIT_FOR_TASK_TOKEN.
     *
     * @default FIRE_AND_FORGET
     */
    readonly integrationPattern?: sfn.ServiceIntegrationPattern;
}
