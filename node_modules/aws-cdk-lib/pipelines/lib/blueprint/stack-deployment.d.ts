import { AssetType } from './asset-type';
import { Step } from './step';
import * as cxapi from '../../../cx-api';
/**
 * Properties for a `StackDeployment`
 */
export interface StackDeploymentProps {
    /**
     * Artifact ID for this stack
     */
    readonly stackArtifactId: string;
    /**
     * Construct path for this stack
     */
    readonly constructPath: string;
    /**
     * Name for this stack
     */
    readonly stackName: string;
    /**
     * Region where the stack should be deployed
     *
     * @default - Pipeline region
     */
    readonly region?: string;
    /**
     * Account where the stack should be deployed
     *
     * @default - Pipeline account
     */
    readonly account?: string;
    /**
     * Role to assume before deploying this stack
     *
     * @default - Don't assume any role
     */
    readonly assumeRoleArn?: string;
    /**
     * Execution role to pass to CloudFormation
     *
     * @default - No execution role
     */
    readonly executionRoleArn?: string;
    /**
     * Tags to apply to the stack
     *
     * @default - No tags
     */
    readonly tags?: Record<string, string>;
    /**
     * Template path on disk to cloud assembly (cdk.out)
     */
    readonly absoluteTemplatePath: string;
    /**
     * Assets referenced by this stack
     *
     * @default - No assets
     */
    readonly assets?: StackAsset[];
    /**
     * The S3 URL which points to the template asset location in the publishing
     * bucket.
     *
     * @default - Stack template is not published
     */
    readonly templateS3Uri?: string;
}
/**
 * Deployment of a single Stack
 *
 * You don't need to instantiate this class -- it will
 * be automatically instantiated as necessary when you
 * add a `Stage` to a pipeline.
 */
export declare class StackDeployment {
    /**
     * Build a `StackDeployment` from a Stack Artifact in a Cloud Assembly.
     */
    static fromArtifact(stackArtifact: cxapi.CloudFormationStackArtifact): StackDeployment;
    /**
     * Artifact ID for this stack
     */
    readonly stackArtifactId: string;
    /**
     * Construct path for this stack
     */
    readonly constructPath: string;
    /**
     * Name for this stack
     */
    readonly stackName: string;
    /**
     * Region where the stack should be deployed
     *
     * @default - Pipeline region
     */
    readonly region?: string;
    /**
     * Account where the stack should be deployed
     *
     * @default - Pipeline account
     */
    readonly account?: string;
    /**
     * Role to assume before deploying this stack
     *
     * @default - Don't assume any role
     */
    readonly assumeRoleArn?: string;
    /**
     * Execution role to pass to CloudFormation
     *
     * @default - No execution role
     */
    readonly executionRoleArn?: string;
    /**
     * Tags to apply to the stack
     */
    readonly tags: Record<string, string>;
    /**
     * Assets referenced by this stack
     */
    readonly assets: StackAsset[];
    /**
     * Other stacks this stack depends on
     */
    readonly stackDependencies: StackDeployment[];
    /**
     * The asset that represents the CloudFormation template for this stack.
     */
    readonly templateAsset?: StackAsset;
    /**
     * The S3 URL which points to the template asset location in the publishing
     * bucket.
     *
     * This is `undefined` if the stack template is not published. Use the
     * `DefaultStackSynthesizer` to ensure it is.
     *
     * Example value: `https://bucket.s3.amazonaws.com/object/key`
     */
    readonly templateUrl?: string;
    /**
     * Template path on disk to CloudAssembly
     */
    readonly absoluteTemplatePath: string;
    /**
     * Steps that take place before stack is prepared. If your pipeline engine disables 'prepareStep', then this will happen before stack deploys
     */
    readonly pre: Step[];
    /**
     * Steps that take place after stack is prepared but before stack deploys. Your pipeline engine may not disable `prepareStep`.
     */
    readonly changeSet: Step[];
    /**
     * Steps to execute after stack deploys
     */
    readonly post: Step[];
    private constructor();
    /**
     * Add a dependency on another stack
     */
    addStackDependency(stackDeployment: StackDeployment): void;
    /**
     * Adds steps to each phase of the stack
     * @param pre steps executed before stack.prepare
     * @param changeSet steps executed after stack.prepare and before stack.deploy
     * @param post steps executed after stack.deploy
     */
    addStackSteps(pre: Step[], changeSet: Step[], post: Step[]): void;
}
/**
 * An asset used by a Stack
 */
export interface StackAsset {
    /**
     * Absolute asset manifest path
     *
     * This needs to be made relative at a later point in time, but when this
     * information is parsed we don't know about the root cloud assembly yet.
     */
    readonly assetManifestPath: string;
    /**
     * Asset identifier
     */
    readonly assetId: string;
    /**
     * Asset selector to pass to `cdk-assets`.
     */
    readonly assetSelector: string;
    /**
     * Type of asset to publish
     */
    readonly assetType: AssetType;
    /**
     * Role ARN to assume to publish
     *
     * @default - No need to assume any role
     */
    readonly assetPublishingRoleArn?: string;
    /**
     * Does this asset represent the CloudFormation template for the stack
     *
     * @default false
     */
    readonly isTemplate: boolean;
}
