import { Construct } from 'constructs';
import * as iam from '../../../aws-iam';
import * as sfn from '../../../aws-stepfunctions';
/**
 * Properties for EmrCancelStep
 *
 */
export interface EmrCancelStepProps extends sfn.TaskStateBaseProps {
    /**
     * The ClusterId to update.
     */
    readonly clusterId: string;
    /**
     * The StepId to cancel.
     */
    readonly stepId: string;
}
/**
 * A Step Functions Task to to cancel a Step on an EMR Cluster.
 *
 */
export declare class EmrCancelStep extends sfn.TaskStateBase {
    private readonly props;
    protected readonly taskPolicies?: iam.PolicyStatement[];
    protected readonly taskMetrics?: sfn.TaskMetricsConfig;
    constructor(scope: Construct, id: string, props: EmrCancelStepProps);
    /**
     * @internal
     */
    protected _renderTask(): any;
}
