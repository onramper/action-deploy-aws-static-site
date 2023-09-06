import { Construct } from 'constructs';
import { IContainerDefinition } from './base-types';
import * as ec2 from '../../../aws-ec2';
import * as iam from '../../../aws-iam';
import * as sfn from '../../../aws-stepfunctions';
/**
 * Properties for creating an Amazon SageMaker model
 *
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/connect-sagemaker.html
 */
export interface SageMakerCreateModelProps extends sfn.TaskStateBaseProps {
    /**
     * An execution role that you can pass in a CreateModel API request
     *
     * @default - a role will be created.
     */
    readonly role?: iam.IRole;
    /**
     * The name of the new model.
     */
    readonly modelName: string;
    /**
     * The definition of the primary docker image containing inference code, associated artifacts,
     * and custom environment map that the inference code uses when the model is deployed for predictions.
     */
    readonly primaryContainer: IContainerDefinition;
    /**
     * Specifies the containers in the inference pipeline.
     *
     * @default - None
     */
    readonly containers?: IContainerDefinition[];
    /**
     * Isolates the model container. No inbound or outbound network calls can be made to or from the model container.
     *
     * @default false
     */
    readonly enableNetworkIsolation?: boolean;
    /**
     * The VPC that is accessible by the hosted model
     *
     * @default - None
     */
    readonly vpc?: ec2.IVpc;
    /**
     * The subnets of the VPC to which the hosted model is connected
     * (Note this parameter is only used when VPC is provided)
     *
     * @default - Private Subnets are selected
     */
    readonly subnetSelection?: ec2.SubnetSelection;
    /**
     * Tags to be applied to the model.
     *
     * @default - No tags
     */
    readonly tags?: sfn.TaskInput;
}
/**
 * A Step Functions Task to create a SageMaker model
 *
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/connect-sagemaker.html
 */
export declare class SageMakerCreateModel extends sfn.TaskStateBase implements iam.IGrantable, ec2.IConnectable {
    private readonly props;
    private static readonly SUPPORTED_INTEGRATION_PATTERNS;
    /**
     * Allows specify security group connections for instances of this fleet.
     */
    readonly connections: ec2.Connections;
    /**
     * The execution role for the Sagemaker Create Model API.
     */
    readonly role: iam.IRole;
    readonly grantPrincipal: iam.IPrincipal;
    protected readonly taskMetrics?: sfn.TaskMetricsConfig;
    protected readonly taskPolicies?: iam.PolicyStatement[];
    private readonly vpc?;
    private securityGroup?;
    private readonly securityGroups;
    private readonly subnets?;
    private readonly integrationPattern;
    constructor(scope: Construct, id: string, props: SageMakerCreateModelProps);
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
    private makePolicyStatements;
    private createSagemakerRole;
    private renderVpcConfig;
}
