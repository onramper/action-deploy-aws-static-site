import { Construct } from 'constructs';
import { ProductionVariant } from './base-types';
import * as iam from '../../../aws-iam';
import * as kms from '../../../aws-kms';
import * as sfn from '../../../aws-stepfunctions';
/**
 * Properties for creating an Amazon SageMaker endpoint configuration
 *
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/connect-sagemaker.html
 */
export interface SageMakerCreateEndpointConfigProps extends sfn.TaskStateBaseProps {
    /**
     * The name of the endpoint configuration.
     */
    readonly endpointConfigName: string;
    /**
     * AWS Key Management Service key that Amazon SageMaker
     * uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint.
     *
     * @default - None
     */
    readonly kmsKey?: kms.IKey;
    /**
     * An list of ProductionVariant objects, one for each model that you want to host at this endpoint.
     * Identifies a model that you want to host and the resources to deploy for hosting it.
     * If you are deploying multiple models, tell Amazon SageMaker how to distribute traffic among the models by specifying variant weights.
     */
    readonly productionVariants: ProductionVariant[];
    /**
     * Tags to be applied to the endpoint configuration.
     *
     * @default - No tags
     */
    readonly tags?: sfn.TaskInput;
}
/**
 * A Step Functions Task to create a SageMaker endpoint configuration
 *
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/connect-sagemaker.html
 */
export declare class SageMakerCreateEndpointConfig extends sfn.TaskStateBase {
    private readonly props;
    private static readonly SUPPORTED_INTEGRATION_PATTERNS;
    protected readonly taskMetrics?: sfn.TaskMetricsConfig;
    protected readonly taskPolicies?: iam.PolicyStatement[];
    private readonly integrationPattern;
    constructor(scope: Construct, id: string, props: SageMakerCreateEndpointConfigProps);
    /**
     * @internal
     */
    protected _renderTask(): any;
    private renderParameters;
    private makePolicyStatements;
    private validateProductionVariants;
}
