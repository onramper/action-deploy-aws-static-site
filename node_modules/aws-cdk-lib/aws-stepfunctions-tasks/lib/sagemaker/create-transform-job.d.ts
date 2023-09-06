import { Construct } from 'constructs';
import { BatchStrategy, ModelClientOptions, TransformInput, TransformOutput, TransformResources } from './base-types';
import * as iam from '../../../aws-iam';
import * as sfn from '../../../aws-stepfunctions';
import { Size } from '../../../core';
/**
 * Properties for creating an Amazon SageMaker transform job task
 *
 */
export interface SageMakerCreateTransformJobProps extends sfn.TaskStateBaseProps {
    /**
     * Transform Job Name.
     */
    readonly transformJobName: string;
    /**
     * Role for the Transform Job.
     *
     * @default - A role is created with `AmazonSageMakerFullAccess` managed policy
     */
    readonly role?: iam.IRole;
    /**
     * Number of records to include in a mini-batch for an HTTP inference request.
     *
     * @default - No batch strategy
     */
    readonly batchStrategy?: BatchStrategy;
    /**
     * Environment variables to set in the Docker container.
     *
     * @default - No environment variables
     */
    readonly environment?: {
        [key: string]: string;
    };
    /**
     * Maximum number of parallel requests that can be sent to each instance in a transform job.
     *
     * @default - Amazon SageMaker checks the optional execution-parameters to determine the settings for your chosen algorithm.
     * If the execution-parameters endpoint is not enabled, the default value is 1.
     */
    readonly maxConcurrentTransforms?: number;
    /**
     * Maximum allowed size of the payload, in MB.
     *
     * @default 6
     */
    readonly maxPayload?: Size;
    /**
     * Name of the model that you want to use for the transform job.
     */
    readonly modelName: string;
    /**
     * Configures the timeout and maximum number of retries for processing a transform job invocation.
     *
     * @default - 0 retries and 60 seconds of timeout
     */
    readonly modelClientOptions?: ModelClientOptions;
    /**
     * Tags to be applied to the train job.
     *
     * @default - No tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Dataset to be transformed and the Amazon S3 location where it is stored.
     */
    readonly transformInput: TransformInput;
    /**
     * S3 location where you want Amazon SageMaker to save the results from the transform job.
     */
    readonly transformOutput: TransformOutput;
    /**
     * ML compute instances for the transform job.
     *
     * @default - 1 instance of type M4.XLarge
     */
    readonly transformResources?: TransformResources;
}
/**
 * Class representing the SageMaker Create Transform Job task.
 *
 */
export declare class SageMakerCreateTransformJob extends sfn.TaskStateBase {
    private readonly props;
    private static readonly SUPPORTED_INTEGRATION_PATTERNS;
    protected readonly taskPolicies?: iam.PolicyStatement[];
    protected readonly taskMetrics?: sfn.TaskMetricsConfig;
    /**
     * Dataset to be transformed and the Amazon S3 location where it is stored.
     */
    private readonly transformInput;
    /**
     * ML compute instances for the transform job.
     */
    private readonly transformResources;
    private readonly integrationPattern;
    private _role?;
    constructor(scope: Construct, id: string, props: SageMakerCreateTransformJobProps);
    /**
     * @internal
     */
    protected _renderTask(): any;
    /**
     * The execution role for the Sagemaker transform job.
     *
     * Only available after task has been added to a state machine.
     */
    get role(): iam.IRole;
    private renderParameters;
    private renderModelClientOptions;
    private renderTransformInput;
    private renderTransformOutput;
    private renderTransformResources;
    private makePolicyStatements;
}
