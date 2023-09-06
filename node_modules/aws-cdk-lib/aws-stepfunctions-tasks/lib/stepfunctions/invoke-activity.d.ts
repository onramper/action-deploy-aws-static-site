import { Construct } from 'constructs';
import * as iam from '../../../aws-iam';
import * as sfn from '../../../aws-stepfunctions';
/**
 * Properties for invoking an Activity worker
 */
export interface StepFunctionsInvokeActivityProps extends sfn.TaskStateBaseProps {
    /**
     * Step Functions Activity to invoke
     */
    readonly activity: sfn.IActivity;
    /**
     * Parameters pass a collection of key-value pairs, either static values or JSONPath expressions that select from the input.
     *
     * @see https://docs.aws.amazon.com/step-functions/latest/dg/input-output-inputpath-params.html#input-output-parameters
     *
     * @default No parameters
     */
    readonly parameters?: {
        [name: string]: any;
    };
}
/**
 * A Step Functions Task to invoke an Activity worker.
 *
 * An Activity can be used directly as a Resource.
 */
export declare class StepFunctionsInvokeActivity extends sfn.TaskStateBase {
    private readonly props;
    protected readonly taskMetrics?: sfn.TaskMetricsConfig;
    protected readonly taskPolicies?: iam.PolicyStatement[];
    constructor(scope: Construct, id: string, props: StepFunctionsInvokeActivityProps);
    /**
     * @internal
     */
    protected _renderTask(): any;
}
