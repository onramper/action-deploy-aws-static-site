import { Construct } from 'constructs';
import * as iam from '../../../aws-iam';
import * as sfn from '../../../aws-stepfunctions';
/**
 * Properties to define a EMR Containers DeleteVirtualCluster Task
 */
export interface EmrContainersDeleteVirtualClusterProps extends sfn.TaskStateBaseProps {
    /**
     * The ID of the virtual cluster that will be deleted.
     */
    readonly virtualClusterId: sfn.TaskInput;
}
/**
 * Deletes an EMR Containers virtual cluster as a Task.
 *
 * @see https://docs.amazonaws.cn/en_us/step-functions/latest/dg/connect-emr-eks.html
 */
export declare class EmrContainersDeleteVirtualCluster extends sfn.TaskStateBase {
    private readonly props;
    private static readonly SUPPORTED_INTEGRATION_PATTERNS;
    protected readonly taskMetrics?: sfn.TaskMetricsConfig;
    protected readonly taskPolicies?: iam.PolicyStatement[];
    private readonly integrationPattern;
    constructor(scope: Construct, id: string, props: EmrContainersDeleteVirtualClusterProps);
    /**
     * @internal
     */
    protected _renderTask(): any;
    private createPolicyStatements;
}
