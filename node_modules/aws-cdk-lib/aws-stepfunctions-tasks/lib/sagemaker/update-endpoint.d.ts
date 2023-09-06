import { Construct } from 'constructs';
import * as iam from '../../../aws-iam';
import * as sfn from '../../../aws-stepfunctions';
/**
 * Properties for updating Amazon SageMaker endpoint
 *
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/connect-sagemaker.html
 */
export interface SageMakerUpdateEndpointProps extends sfn.TaskStateBaseProps {
    /**
     * The name of the new endpoint configuration
     */
    readonly endpointConfigName: string;
    /**
     * The name of the endpoint whose configuration you want to update.
     */
    readonly endpointName: string;
}
/**
 * A Step Functions Task to update a SageMaker endpoint
 *
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/connect-sagemaker.html
 */
export declare class SageMakerUpdateEndpoint extends sfn.TaskStateBase {
    private readonly props;
    private static readonly SUPPORTED_INTEGRATION_PATTERNS;
    protected readonly taskMetrics?: sfn.TaskMetricsConfig;
    protected readonly taskPolicies?: iam.PolicyStatement[];
    private readonly integrationPattern;
    constructor(scope: Construct, id: string, props: SageMakerUpdateEndpointProps);
    /**
     * @internal
     */
    protected _renderTask(): any;
    private renderParameters;
    private makePolicyStatements;
}
