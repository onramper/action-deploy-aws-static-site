import { Construct } from 'constructs';
import * as eks from '../../../aws-eks';
import * as iam from '../../../aws-iam';
import * as sfn from '../../../aws-stepfunctions';
/**
 * Class that supports methods which return the EKS cluster name depending on input type.
 */
export declare class EksClusterInput {
    readonly clusterName: string;
    /**
     * Specify an existing EKS Cluster as the name for this Cluster
     */
    static fromCluster(cluster: eks.ICluster): EksClusterInput;
    /**
     * Specify a Task Input as the name for this Cluster
     */
    static fromTaskInput(taskInput: sfn.TaskInput): EksClusterInput;
    /**
     * Initializes the clusterName
     *
     * @param clusterName The name of the EKS Cluster
     */
    private constructor();
}
/**
 * Properties to define a EMR Containers CreateVirtualCluster Task on an EKS cluster
 */
export interface EmrContainersCreateVirtualClusterProps extends sfn.TaskStateBaseProps {
    /**
     * EKS Cluster or task input that contains the name of the cluster
     */
    readonly eksCluster: EksClusterInput;
    /**
     * The namespace of an EKS cluster
     *
     * @default - 'default'
     */
    readonly eksNamespace?: string;
    /**
     * Name of the virtual cluster that will be created.
     *
     * @default - the name of the state machine execution that runs this task and state name
     */
    readonly virtualClusterName?: string;
    /**
     * The tags assigned to the virtual cluster
     *
     * @default {}
     */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
 * Task that creates an EMR Containers virtual cluster from an EKS cluster
 *
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/connect-emr-eks.html
 */
export declare class EmrContainersCreateVirtualCluster extends sfn.TaskStateBase {
    private readonly props;
    private static readonly SUPPORTED_INTEGRATION_PATTERNS;
    protected readonly taskMetrics?: sfn.TaskMetricsConfig;
    protected readonly taskPolicies?: iam.PolicyStatement[];
    private readonly integrationPattern;
    constructor(scope: Construct, id: string, props: EmrContainersCreateVirtualClusterProps);
    /**
     * @internal
     */
    protected _renderTask(): any;
    private createPolicyStatements;
}
