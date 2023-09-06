import * as ec2 from '../../../aws-ec2';
import * as sfn from '../../../aws-stepfunctions';
import { Duration } from '../../../core';
/**
 * The overrides that should be sent to a container.
 */
export interface ContainerOverrides {
    /**
     * The command to send to the container that overrides
     * the default command from the Docker image or the job definition.
     *
     * @default - No command overrides
     */
    readonly command?: string[];
    /**
     * The environment variables to send to the container.
     * You can add new environment variables, which are added to the container
     * at launch, or you can override the existing environment variables from
     * the Docker image or the job definition.
     *
     * @default - No environment overrides
     */
    readonly environment?: {
        [key: string]: string;
    };
    /**
     * The instance type to use for a multi-node parallel job.
     * This parameter is not valid for single-node container jobs.
     *
     * @default - No instance type overrides
     */
    readonly instanceType?: ec2.InstanceType;
    /**
     * The number of MiB of memory reserved for the job.
     * This value overrides the value set in the job definition.
     *
     * @default - No memory overrides
     */
    readonly memory?: number;
    /**
     * The number of physical GPUs to reserve for the container.
     * The number of GPUs reserved for all containers in a job
     * should not exceed the number of available GPUs on the compute
     * resource that the job is launched on.
     *
     * @default - No GPU reservation
     */
    readonly gpuCount?: number;
    /**
     * The number of vCPUs to reserve for the container.
     * This value overrides the value set in the job definition.
     *
     * @default - No vCPUs overrides
     */
    readonly vcpus?: number;
}
/**
 * An object representing an AWS Batch job dependency.
 */
export interface JobDependency {
    /**
     * The job ID of the AWS Batch job associated with this dependency.
     *
     * @default - No jobId
     */
    readonly jobId?: string;
    /**
     * The type of the job dependency.
     *
     * @default - No type
     */
    readonly type?: string;
}
