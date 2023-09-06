import * as codebuild from '../../../aws-codebuild';
import * as ec2 from '../../../aws-ec2';
import * as iam from '../../../aws-iam';
import { Duration } from '../../../core';
import { ShellStep, ShellStepProps } from '../blueprint';
/**
 * Construction props for a CodeBuildStep
 */
export interface CodeBuildStepProps extends ShellStepProps {
    /**
     * Name for the generated CodeBuild project
     *
     * @default - Automatically generated
     */
    readonly projectName?: string;
    /**
     * Additional configuration that can only be configured via BuildSpec
     *
     * You should not use this to specify output artifacts; those
     * should be supplied via the other properties of this class, otherwise
     * CDK Pipelines won't be able to inspect the artifacts.
     *
     * Set the `commands` to an empty array if you want to fully specify
     * the BuildSpec using this field.
     *
     * The BuildSpec must be available inline--it cannot reference a file
     * on disk.
     *
     * @default - BuildSpec completely derived from other properties
     */
    readonly partialBuildSpec?: codebuild.BuildSpec;
    /**
     * The VPC where to execute the SimpleSynth.
     *
     * @default - No VPC
     */
    readonly vpc?: ec2.IVpc;
    /**
     * Which subnets to use.
     *
     * Only used if 'vpc' is supplied.
     *
     * @default - All private subnets.
     */
    readonly subnetSelection?: ec2.SubnetSelection;
    /**
     * Caching strategy to use.
     *
     * @default - No cache
     */
    readonly cache?: codebuild.Cache;
    /**
     * Policy statements to add to role used during the synth
     *
     * Can be used to add acces to a CodeArtifact repository etc.
     *
     * @default - No policy statements added to CodeBuild Project Role
     */
    readonly rolePolicyStatements?: iam.PolicyStatement[];
    /**
     * Custom execution role to be used for the CodeBuild project
     *
     * @default - A role is automatically created
     */
    readonly role?: iam.IRole;
    /**
     * Custom execution role to be used for the Code Build Action
     *
     * @default - A role is automatically created
     */
    readonly actionRole?: iam.IRole;
    /**
     * Changes to environment
     *
     * This environment will be combined with the pipeline's default
     * environment.
     *
     * @default - Use the pipeline's default build environment
     */
    readonly buildEnvironment?: codebuild.BuildEnvironment;
    /**
     * Which security group to associate with the script's project network interfaces.
     * If no security group is identified, one will be created automatically.
     *
     * Only used if 'vpc' is supplied.
     *
     * @default - Security group will be automatically created.
     */
    readonly securityGroups?: ec2.ISecurityGroup[];
    /**
     * The number of minutes after which AWS CodeBuild stops the build if it's
     * not complete. For valid values, see the timeoutInMinutes field in the AWS
     * CodeBuild User Guide.
     *
     * @default Duration.hours(1)
     */
    readonly timeout?: Duration;
    /**
     * ProjectFileSystemLocation objects for CodeBuild build projects.
     *
     * A ProjectFileSystemLocation object specifies the identifier, location, mountOptions, mountPoint,
     * and type of a file system created using Amazon Elastic File System.
     *
     * @default - no file system locations
     */
    readonly fileSystemLocations?: codebuild.IFileSystemLocation[];
    /**
     * Information about logs for CodeBuild projects. A CodeBuild project can create logs in Amazon CloudWatch Logs, an S3 bucket, or both.
     *
     * @default - no log configuration is set
     */
    readonly logging?: codebuild.LoggingOptions;
}
/**
 * Run a script as a CodeBuild Project
 *
 * The BuildSpec must be available inline--it cannot reference a file
 * on disk. If your current build instructions are in a file like
 * `buildspec.yml` in your repository, extract them to a script
 * (say, `build.sh`) and invoke that script as part of the build:
 *
 * ```ts
 * new pipelines.CodeBuildStep('Synth', {
 *   commands: ['./build.sh'],
 * });
 * ```
 */
export declare class CodeBuildStep extends ShellStep {
    /**
     * Name for the generated CodeBuild project
     *
     * @default - No value specified at construction time, use defaults
     */
    readonly projectName?: string;
    /**
     * The VPC where to execute the SimpleSynth.
     *
     * @default - No value specified at construction time, use defaults
     */
    readonly vpc?: ec2.IVpc;
    /**
     * Which subnets to use.
     *
     * @default - No value specified at construction time, use defaults
     */
    readonly subnetSelection?: ec2.SubnetSelection;
    /**
     * Caching strategy to use.
     *
     * @default - No cache
     */
    readonly cache?: codebuild.Cache;
    /**
     * Policy statements to add to role used during the synth
     *
     * @default - No value specified at construction time, use defaults
     */
    readonly rolePolicyStatements?: iam.PolicyStatement[];
    /**
     * Custom execution role to be used for the CodeBuild project
     *
     * @default - No value specified at construction time, use defaults
     */
    readonly role?: iam.IRole;
    /**
     * Custom execution role to be used for the Code Build Action
     *
     * @default - A role is automatically created
     */
    readonly actionRole?: iam.IRole;
    /**
     * Build environment
     *
     * @default - No value specified at construction time, use defaults
     */
    readonly buildEnvironment?: codebuild.BuildEnvironment;
    /**
     * Which security group to associate with the script's project network interfaces.
     *
     * @default - No value specified at construction time, use defaults
     */
    readonly securityGroups?: ec2.ISecurityGroup[];
    /**
     * The number of minutes after which AWS CodeBuild stops the build if it's
     * not complete. For valid values, see the timeoutInMinutes field in the AWS
     * CodeBuild User Guide.
     *
     * @default Duration.hours(1)
     */
    readonly timeout?: Duration;
    /**
     * ProjectFileSystemLocation objects for CodeBuild build projects.
     *
     * A ProjectFileSystemLocation object specifies the identifier, location, mountOptions, mountPoint,
     * and type of a file system created using Amazon Elastic File System.
     *
     * @default - no file system locations
     */
    readonly fileSystemLocations?: codebuild.IFileSystemLocation[];
    /**
     * Information about logs for CodeBuild projects. A CodeBuilde project can create logs in Amazon CloudWatch Logs, an S3 bucket, or both.
     *
     * @default - no log configuration is set
     */
    readonly logging?: codebuild.LoggingOptions;
    private _project?;
    private _partialBuildSpec?;
    private readonly exportedVariables;
    private exportedVarsRendered;
    constructor(id: string, props: CodeBuildStepProps);
    /**
     * CodeBuild Project generated for the pipeline
     *
     * Will only be available after the pipeline has been built.
     */
    get project(): codebuild.IProject;
    /**
     * The CodeBuild Project's principal
     */
    get grantPrincipal(): iam.IPrincipal;
    /**
     * Additional configuration that can only be configured via BuildSpec
     *
     * Contains exported variables
     *
     * @default - Contains the exported variables
     */
    get partialBuildSpec(): codebuild.BuildSpec | undefined;
    /**
     * Reference a CodePipeline variable defined by the CodeBuildStep.
     *
     * The variable must be set in the shell of the CodeBuild step when
     * it finishes its `post_build` phase.
     *
     * @param variableName the name of the variable for reference.
     * @example
     * // Access the output of one CodeBuildStep in another CodeBuildStep
     * declare const pipeline: pipelines.CodePipeline;
     *
     * const step1 = new pipelines.CodeBuildStep('Step1', {
     *   commands: ['export MY_VAR=hello'],
     * });
     *
     * const step2 = new pipelines.CodeBuildStep('Step2', {
     *   env: {
     *     IMPORTED_VAR: step1.exportedVariable('MY_VAR'),
     *   },
     *   commands: ['echo $IMPORTED_VAR'],
     * });
     */
    exportedVariable(variableName: string): string;
    /**
     * Set the internal project value
     *
     * @internal
     */
    _setProject(project: codebuild.IProject): void;
}
