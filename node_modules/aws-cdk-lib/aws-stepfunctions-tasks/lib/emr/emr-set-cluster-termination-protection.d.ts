import { Construct } from 'constructs';
import * as iam from '../../../aws-iam';
import * as sfn from '../../../aws-stepfunctions';
/**
 * Properties for EmrSetClusterTerminationProtection
 *
 */
export interface EmrSetClusterTerminationProtectionProps extends sfn.TaskStateBaseProps {
    /**
     * The ClusterId to update.
     */
    readonly clusterId: string;
    /**
     * Termination protection indicator.
     */
    readonly terminationProtected: boolean;
}
/**
 * A Step Functions Task to to set Termination Protection on an EMR Cluster.
 *
 */
export declare class EmrSetClusterTerminationProtection extends sfn.TaskStateBase {
    private readonly props;
    protected readonly taskPolicies?: iam.PolicyStatement[];
    protected readonly taskMetrics?: sfn.TaskMetricsConfig;
    constructor(scope: Construct, id: string, props: EmrSetClusterTerminationProtectionProps);
    /**
     * @internal
     */
    protected _renderTask(): any;
}
