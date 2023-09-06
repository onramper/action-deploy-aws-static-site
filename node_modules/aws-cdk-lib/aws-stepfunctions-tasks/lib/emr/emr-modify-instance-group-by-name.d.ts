import { Construct } from 'constructs';
import { EmrCreateCluster } from './emr-create-cluster';
import * as iam from '../../../aws-iam';
import * as sfn from '../../../aws-stepfunctions';
import { Duration } from '../../../core';
/**
 * Properties for EmrModifyInstanceGroupByName
 *
 */
export interface EmrModifyInstanceGroupByNameProps extends sfn.TaskStateBaseProps {
    /**
     * The ClusterId to update.
     */
    readonly clusterId: string;
    /**
     * The InstanceGroupName to update.
     */
    readonly instanceGroupName: string;
    /**
     * The JSON that you want to provide to your ModifyInstanceGroup call as input.
     *
     * This uses the same syntax as the ModifyInstanceGroups API.
     *
     * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_ModifyInstanceGroups.html
     */
    readonly instanceGroup: EmrModifyInstanceGroupByName.InstanceGroupModifyConfigProperty;
}
/**
 * A Step Functions Task to to modify an InstanceGroup on an EMR Cluster.
 *
 */
export declare class EmrModifyInstanceGroupByName extends sfn.TaskStateBase {
    private readonly props;
    protected readonly taskPolicies?: iam.PolicyStatement[];
    protected readonly taskMetrics?: sfn.TaskMetricsConfig;
    constructor(scope: Construct, id: string, props: EmrModifyInstanceGroupByNameProps);
    /**
     * @internal
     */
    protected _renderTask(): any;
}
export declare namespace EmrModifyInstanceGroupByName {
    /**
     * Custom policy for requesting termination protection or termination of specific instances when shrinking an instance group.
     *
     * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_InstanceResizePolicy.html
     *
     */
    interface InstanceResizePolicyProperty {
        /**
         * Specific list of instances to be protected when shrinking an instance group.
         *
         * @default - No instances will be protected when shrinking an instance group
         */
        readonly instancesToProtect?: string[];
        /**
         * Specific list of instances to be terminated when shrinking an instance group.
         *
         * @default - No instances will be terminated when shrinking an instance group.
         */
        readonly instancesToTerminate?: string[];
        /**
         * Decommissioning timeout override for the specific list of instances to be terminated.
         *
         * @default cdk.Duration.seconds
         */
        readonly instanceTerminationTimeout?: Duration;
    }
    /**
     * Policy for customizing shrink operations. Allows configuration of decommissioning timeout and targeted instance shrinking.
     *
     * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_ShrinkPolicy.html
     *
     */
    interface ShrinkPolicyProperty {
        /**
         * The desired timeout for decommissioning an instance. Overrides the default YARN decommissioning timeout.
         *
         * @default - EMR selected default
         */
        readonly decommissionTimeout?: Duration;
        /**
         * Custom policy for requesting termination protection or termination of specific instances when shrinking an instance group.
         *
         * @default - None
         */
        readonly instanceResizePolicy?: InstanceResizePolicyProperty;
    }
    /**
     * Modify the size or configurations of an instance group.
     *
     * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_InstanceGroupModifyConfig.html
     *
     */
    interface InstanceGroupModifyConfigProperty {
        /**
         * A list of new or modified configurations to apply for an instance group.
         *
         * @default - None
         */
        readonly configurations?: EmrCreateCluster.ConfigurationProperty[];
        /**
         * The EC2 InstanceIds to terminate. After you terminate the instances, the instance group will not return to its original requested size.
         *
         * @default - None
         */
        readonly eC2InstanceIdsToTerminate?: string[];
        /**
         * Target size for the instance group.
         *
         * @default - None
         */
        readonly instanceCount?: number;
        /**
         * Policy for customizing shrink operations.
         *
         * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_ShrinkPolicy.html
         *
         * @default - None
         */
        readonly shrinkPolicy?: ShrinkPolicyProperty;
    }
}
