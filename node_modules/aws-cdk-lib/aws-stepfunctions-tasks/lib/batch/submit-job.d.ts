import { Construct } from 'constructs';
import * as ec2 from '../../../aws-ec2';
import * as iam from '../../../aws-iam';
import * as sfn from '../../../aws-stepfunctions';
import { Size } from '../../../core';
/**
 * The overrides that should be sent to a container.
 */
export interface BatchContainerOverrides {
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
     * Memory reserved for the job.
     *
     * @default - No memory overrides. The memory supplied in the job definition will be used.
     */
    readonly memory?: Size;
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
export interface BatchJobDependency {
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
/**
 * Properties for RunBatchJob
 *
 */
export interface BatchSubmitJobProps extends sfn.TaskStateBaseProps {
    /**
     * The arn of the job definition used by this job.
     */
    readonly jobDefinitionArn: string;
    /**
     * The name of the job.
     * The first character must be alphanumeric, and up to 128 letters (uppercase and lowercase),
     * numbers, hyphens, and underscores are allowed.
     */
    readonly jobName: string;
    /**
     * The arn of the job queue into which the job is submitted.
     */
    readonly jobQueueArn: string;
    /**
     * The array size can be between 2 and 10,000.
     * If you specify array properties for a job, it becomes an array job.
     * For more information, see Array Jobs in the AWS Batch User Guide.
     *
     * @default - No array size
     */
    readonly arraySize?: number;
    /**
     * A list of container overrides in JSON format that specify the name of a container
     * in the specified job definition and the overrides it should receive.
     *
     * @see https://docs.aws.amazon.com/batch/latest/APIReference/API_SubmitJob.html#Batch-SubmitJob-request-containerOverrides
     *
     * @default - No container overrides
     */
    readonly containerOverrides?: BatchContainerOverrides;
    /**
     * A list of dependencies for the job.
     * A job can depend upon a maximum of 20 jobs.
     *
     * @see https://docs.aws.amazon.com/batch/latest/APIReference/API_SubmitJob.html#Batch-SubmitJob-request-dependsOn
     *
     * @default - No dependencies
     */
    readonly dependsOn?: BatchJobDependency[];
    /**
     * The payload to be passed as parameters to the batch job
     *
     * @default - No parameters are passed
     */
    readonly payload?: sfn.TaskInput;
    /**
     * The number of times to move a job to the RUNNABLE status.
     * You may specify between 1 and 10 attempts.
     * If the value of attempts is greater than one,
     * the job is retried on failure the same number of attempts as the value.
     *
     * @default 1
     */
    readonly attempts?: number;
    /**
     * The tags applied to the job request.
     *
     * @default {} - no tags
     */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
 * Task to submits an AWS Batch job from a job definition.
 *
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/connect-batch.html
 */
export declare class BatchSubmitJob extends sfn.TaskStateBase {
    private readonly props;
    private static readonly SUPPORTED_INTEGRATION_PATTERNS;
    protected readonly taskMetrics?: sfn.TaskMetricsConfig;
    protected readonly taskPolicies?: iam.PolicyStatement[];
    private readonly integrationPattern;
    constructor(scope: Construct, id: string, props: BatchSubmitJobProps);
    /**
     * @internal
     */
    protected _renderTask(): any;
    private configurePolicyStatements;
    private configureContainerOverrides;
    private validateTags;
}
