import { Construct } from 'constructs';
import * as iam from '../../../aws-iam';
import * as sfn from '../../../aws-stepfunctions';
/**
 * Properties for EmrModifyInstanceFleetByName
 *
 */
export interface EmrModifyInstanceFleetByNameProps extends sfn.TaskStateBaseProps {
    /**
     * The ClusterId to update.
     */
    readonly clusterId: string;
    /**
     * The InstanceFleetName to update.
     */
    readonly instanceFleetName: string;
    /**
     * The target capacity of On-Demand units for the instance fleet.
     *
     * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_InstanceFleetModifyConfig.html
     *
     * @default - None
     */
    readonly targetOnDemandCapacity: number;
    /**
     * The target capacity of Spot units for the instance fleet.
     *
     * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_InstanceFleetModifyConfig.html
     *
     * @default - None
     */
    readonly targetSpotCapacity: number;
}
/**
 * A Step Functions Task to to modify an InstanceFleet on an EMR Cluster.
 *
 */
export declare class EmrModifyInstanceFleetByName extends sfn.TaskStateBase {
    private readonly props;
    protected readonly taskPolicies?: iam.PolicyStatement[];
    protected readonly taskMetrics?: sfn.TaskMetricsConfig;
    constructor(scope: Construct, id: string, props: EmrModifyInstanceFleetByNameProps);
    /**
     * @internal
     */
    protected _renderTask(): any;
}
