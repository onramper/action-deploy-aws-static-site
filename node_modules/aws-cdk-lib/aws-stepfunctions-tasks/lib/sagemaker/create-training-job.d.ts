import { Construct } from 'constructs';
import { AlgorithmSpecification, Channel, OutputDataConfig, ResourceConfig, StoppingCondition, VpcConfig } from './base-types';
import * as ec2 from '../../../aws-ec2';
import * as iam from '../../../aws-iam';
import * as sfn from '../../../aws-stepfunctions';
/**
 * Properties for creating an Amazon SageMaker training job
 *
 */
export interface SageMakerCreateTrainingJobProps extends sfn.TaskStateBaseProps {
    /**
     * Training Job Name.
     */
    readonly trainingJobName: string;
    /**
     * Role for the Training Job. The role must be granted all necessary permissions for the SageMaker training job to
     * be able to operate.
     *
     * See https://docs.aws.amazon.com/fr_fr/sagemaker/latest/dg/sagemaker-roles.html#sagemaker-roles-createtrainingjob-perms
     *
     * @default - a role will be created.
     */
    readonly role?: iam.IRole;
    /**
     * Identifies the training algorithm to use.
     */
    readonly algorithmSpecification: AlgorithmSpecification;
    /**
     * Isolates the training container. No inbound or outbound network calls can be made to or from the training container.
     *
     * @default false
     */
    readonly enableNetworkIsolation?: boolean;
    /**
     * Algorithm-specific parameters that influence the quality of the model. Set hyperparameters before you start the learning process.
     * For a list of hyperparameters provided by Amazon SageMaker
     * @see https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html
     *
     * @default - No hyperparameters
     */
    readonly hyperparameters?: {
        [key: string]: any;
    };
    /**
     *  Describes the various datasets (e.g. train, validation, test) and the Amazon S3 location where stored.
     */
    readonly inputDataConfig: Channel[];
    /**
     * Tags to be applied to the train job.
     *
     * @default - No tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Identifies the Amazon S3 location where you want Amazon SageMaker to save the results of model training.
     */
    readonly outputDataConfig: OutputDataConfig;
    /**
     * Specifies the resources, ML compute instances, and ML storage volumes to deploy for model training.
     *
     * @default - 1 instance of EC2 `M4.XLarge` with `10GB` volume
     */
    readonly resourceConfig?: ResourceConfig;
    /**
     * Sets a time limit for training.
     *
     * @default - max runtime of 1 hour
     */
    readonly stoppingCondition?: StoppingCondition;
    /**
     * Specifies the VPC that you want your training job to connect to.
     *
     * @default - No VPC
     */
    readonly vpcConfig?: VpcConfig;
    /**
     * Environment variables to set in the Docker container.
     *
     * @default - No environment variables
     */
    readonly environment?: {
        [key: string]: string;
    };
}
/**
 * Class representing the SageMaker Create Training Job task.
 *
 */
export declare class SageMakerCreateTrainingJob extends sfn.TaskStateBase implements iam.IGrantable, ec2.IConnectable {
    private readonly props;
    private static readonly SUPPORTED_INTEGRATION_PATTERNS;
    /**
     * Allows specify security group connections for instances of this fleet.
     */
    readonly connections: ec2.Connections;
    protected readonly taskPolicies?: iam.PolicyStatement[];
    protected readonly taskMetrics?: sfn.TaskMetricsConfig;
    /**
     * The Algorithm Specification
     */
    private readonly algorithmSpecification;
    /**
     * The Input Data Config.
     */
    private readonly inputDataConfig;
    /**
     * The resource config for the task.
     */
    private readonly resourceConfig;
    /**
     * The resource config for the task.
     */
    private readonly stoppingCondition;
    private readonly vpc?;
    private securityGroup?;
    private readonly securityGroups;
    private readonly subnets?;
    private readonly integrationPattern;
    private _role?;
    private _grantPrincipal?;
    constructor(scope: Construct, id: string, props: SageMakerCreateTrainingJobProps);
    /**
     * The execution role for the Sagemaker training job.
     *
     * Only available after task has been added to a state machine.
     */
    get role(): iam.IRole;
    get grantPrincipal(): iam.IPrincipal;
    /**
     * Add the security group to all instances via the launch configuration
     * security groups array.
     *
     * @param securityGroup: The security group to add
     */
    addSecurityGroup(securityGroup: ec2.ISecurityGroup): void;
    /**
     * @internal
     */
    protected _renderTask(): any;
    private renderParameters;
    private renderAlgorithmSpecification;
    private renderInputDataConfig;
    private renderOutputDataConfig;
    private renderResourceConfig;
    private renderStoppingCondition;
    private renderHyperparameters;
    private renderVpcConfig;
    private validateAlgorithmName;
    private makePolicyStatements;
}
