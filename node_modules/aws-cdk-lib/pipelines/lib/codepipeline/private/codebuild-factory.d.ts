import { Construct, IDependable } from 'constructs';
import * as codebuild from '../../../../aws-codebuild';
import * as codepipeline from '../../../../aws-codepipeline';
import * as iam from '../../../../aws-iam';
import { FileSetLocation, ShellStep, StackOutputReference } from '../../blueprint';
import { StepOutput } from '../../helpers-internal/step-output';
import { CodeBuildStep } from '../codebuild-step';
import { CodeBuildOptions } from '../codepipeline';
import { ICodePipelineActionFactory, ProduceActionOptions, CodePipelineActionFactoryResult } from '../codepipeline-action-factory';
export interface CodeBuildFactoryProps {
    /**
     * Name for the generated CodeBuild project
     *
     * @default - Automatically generated
     */
    readonly projectName?: string;
    /**
     * Customization options for the project
     *
     * Will at CodeBuild production time be combined with the option
     * defaults configured on the pipeline.
     *
     * @default - No special values
     */
    readonly projectOptions?: CodeBuildOptions;
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
     * If true, the build spec will be passed via the Cloud Assembly instead of rendered onto the Project
     *
     * Doing this has two advantages:
     *
     * - Bypass size restrictions: the buildspec on the project is restricted
     *   in size, while buildspecs coming from an input artifact are not restricted
     *   in such a way.
     * - Bypass pipeline update: if the SelfUpdate step has to change the buildspec,
     *   that just takes time. On the other hand, if the buildspec comes from the
     *   pipeline artifact, no such update has to take place.
     *
     * @default false
     */
    readonly passBuildSpecViaCloudAssembly?: boolean;
    /**
     * Override the construct tree where the CodeBuild project is created.
     *
     * Normally, the construct tree will look like this:
     *
     *  ── Pipeline
     *      └── 'MyStage'         <- options.scope
     *           └── 'MyAction'   <- this is the CodeBuild project
     *
     * If this flag is set, the construct tree will look like this:
     *
     *  ── Pipeline
     *      └── 'MyStage'                         <- options.scope
     *           └── 'MyAction'                   <- just a scope
     *                  └── 'BackwardsCompatName' <- CodeBuild project
     *
     * This is to maintain logicalID compatibility with the previous iteration
     * of pipelines (where the Action was a construct that would create the Project).
     *
     * @default true
     */
    readonly additionalConstructLevel?: boolean;
    /**
     * Additional dependency that the CodeBuild project should take
     *
     * @default -
     */
    readonly additionalDependable?: IDependable;
    readonly inputs?: FileSetLocation[];
    readonly outputs?: FileSetLocation[];
    readonly stepId?: string;
    readonly commands: string[];
    readonly installCommands?: string[];
    readonly env?: Record<string, string>;
    readonly envFromCfnOutputs?: Record<string, StackOutputReference>;
    /**
     * If given, override the scope from the produce call with this scope.
     */
    readonly scope?: Construct;
    /**
     * Whether or not the given CodeBuild project is going to be the synth step
     *
     * @default false
     */
    readonly isSynth?: boolean;
    /**
     * StepOutputs produced by this CodeBuild step
     */
    readonly producedStepOutputs?: StepOutput[];
}
/**
 * Produce a CodeBuild project from a ShellStep and some CodeBuild-specific customizations
 *
 * The functionality here is shared between the `CodePipeline` translating a `ShellStep` into
 * a CodeBuild project, as well as the `CodeBuildStep` straight up.
 */
export declare class CodeBuildFactory implements ICodePipelineActionFactory {
    private readonly constructId;
    private readonly props;
    static fromShellStep(constructId: string, shellStep: ShellStep, additional?: Partial<CodeBuildFactoryProps>): ICodePipelineActionFactory;
    static fromCodeBuildStep(constructId: string, step: CodeBuildStep, additional?: Partial<CodeBuildFactoryProps>): ICodePipelineActionFactory;
    private _project?;
    private stepId;
    private constructor();
    get project(): codebuild.IProject;
    produceAction(stage: codepipeline.IStage, options: ProduceActionOptions): CodePipelineActionFactoryResult;
}
export declare function mergeCodeBuildOptions(...opts: Array<CodeBuildOptions | undefined>): CodeBuildOptions;
