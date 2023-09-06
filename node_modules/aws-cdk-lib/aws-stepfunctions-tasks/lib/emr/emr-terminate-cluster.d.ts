import { Construct } from 'constructs';
import * as iam from '../../../aws-iam';
import * as sfn from '../../../aws-stepfunctions';
/**
 * Properties for EmrTerminateCluster
 *
 */
export interface EmrTerminateClusterProps extends sfn.TaskStateBaseProps {
    /**
     * The ClusterId to terminate.
     */
    readonly clusterId: string;
}
/**
 * A Step Functions Task to terminate an EMR Cluster.
 *
 */
export declare class EmrTerminateCluster extends sfn.TaskStateBase {
    private readonly props;
    private static readonly SUPPORTED_INTEGRATION_PATTERNS;
    protected readonly taskPolicies?: iam.PolicyStatement[];
    protected readonly taskMetrics?: sfn.TaskMetricsConfig;
    private readonly integrationPattern;
    constructor(scope: Construct, id: string, props: EmrTerminateClusterProps);
    /**
     * @internal
     */
    protected _renderTask(): any;
    /**
     * This generates the PolicyStatements required by the Task to call TerminateCluster.
     */
    private createPolicyStatements;
}
