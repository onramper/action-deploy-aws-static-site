import { Construct } from 'constructs';
import * as iam from '../../../aws-iam';
import * as sfn from '../../../aws-stepfunctions';
/**
 * Properties for creating an Amazon SageMaker endpoint
 *
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/connect-sagemaker.html
 */
export interface SageMakerCreateEndpointProps extends sfn.TaskStateBaseProps {
    /**
     * The name of an endpoint configuration.
     */
    readonly endpointConfigName: string;
    /**
     * The name of the endpoint. The name must be unique within an AWS Region in your AWS account.
     */
    readonly endpointName: string;
    /**
     * Tags to be applied to the endpoint.
     *
     * @default - No tags
     */
    readonly tags?: sfn.TaskInput;
}
/**
 * A Step Functions Task to create a SageMaker endpoint
 *
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/connect-sagemaker.html
 */
export declare class SageMakerCreateEndpoint extends sfn.TaskStateBase {
    private readonly props;
    private static readonly SUPPORTED_INTEGRATION_PATTERNS;
    protected readonly taskMetrics?: sfn.TaskMetricsConfig;
    protected readonly taskPolicies?: iam.PolicyStatement[];
    private readonly integrationPattern;
    constructor(scope: Construct, id: string, props: SageMakerCreateEndpointProps);
    /**
     * @internal
     */
    protected _renderTask(): any;
    private renderParameters;
    private makePolicyStatements;
}
