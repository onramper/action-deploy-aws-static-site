import { Construct } from 'constructs';
import * as iam from '../../../aws-iam';
import * as sfn from '../../../aws-stepfunctions';
/**
 * Properties for calling an AWS service's API action from your
 * state machine.
 *
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/supported-services-awssdk.html
 */
export interface CallAwsServiceProps extends sfn.TaskStateBaseProps {
    /**
     * The AWS service to call.
     *
     * @see https://docs.aws.amazon.com/step-functions/latest/dg/supported-services-awssdk.html
     */
    readonly service: string;
    /**
     * The API action to call.
     *
     * Use camelCase.
     */
    readonly action: string;
    /**
     * Parameters for the API action call.
     *
     * Use PascalCase for the parameter names.
     *
     * @default - no parameters
     */
    readonly parameters?: {
        [key: string]: any;
    };
    /**
     * The resources for the IAM statement that will be added to the state
     * machine role's policy to allow the state machine to make the API call.
     *
     * By default the action for this IAM statement will be `service:action`.
     */
    readonly iamResources: string[];
    /**
     * The action for the IAM statement that will be added to the state
     * machine role's policy to allow the state machine to make the API call.
     *
     * Use in the case where the IAM action name does not match with the
     * API service/action name, e.g. `s3:ListBuckets` requires `s3:ListAllMyBuckets`.
     *
     * @default - service:action
     */
    readonly iamAction?: string;
    /**
     * Additional IAM statements that will be added to the state machine
     * role's policy.
     *
     * Use in the case where the call requires more than a single statement to
     * be executed, e.g. `rekognition:detectLabels` requires also S3 permissions
     * to read the object on which it must act.
     *
     * @default - no additional statements are added
     */
    readonly additionalIamStatements?: iam.PolicyStatement[];
}
/**
 * A StepFunctions task to call an AWS service API
 */
export declare class CallAwsService extends sfn.TaskStateBase {
    private readonly props;
    protected readonly taskMetrics?: sfn.TaskMetricsConfig;
    protected readonly taskPolicies?: iam.PolicyStatement[];
    constructor(scope: Construct, id: string, props: CallAwsServiceProps);
    /**
     * @internal
     */
    protected _renderTask(): any;
}
