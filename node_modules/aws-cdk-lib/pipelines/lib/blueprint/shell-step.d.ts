import { FileSet, IFileSetProducer } from './file-set';
import { StackDeployment } from './stack-deployment';
import { Step } from './step';
import { CfnOutput } from '../../../core';
/**
 * Construction properties for a `ShellStep`.
 */
export interface ShellStepProps {
    /**
     * Commands to run
     */
    readonly commands: string[];
    /**
     * Installation commands to run before the regular commands
     *
     * For deployment engines that support it, install commands will be classified
     * differently in the job history from the regular `commands`.
     *
     * @default - No installation commands
     */
    readonly installCommands?: string[];
    /**
     * Environment variables to set
     *
     * @default - No environment variables
     */
    readonly env?: Record<string, string>;
    /**
     * Set environment variables based on Stack Outputs
     *
     * `ShellStep`s following stack or stage deployments may
     * access the `CfnOutput`s of those stacks to get access to
     * --for example--automatically generated resource names or
     * endpoint URLs.
     *
     * @default - No environment variables created from stack outputs
     */
    readonly envFromCfnOutputs?: Record<string, CfnOutput>;
    /**
     * FileSet to run these scripts on
     *
     * The files in the FileSet will be placed in the working directory when
     * the script is executed. Use `additionalInputs` to download file sets
     * to other directories as well.
     *
     * @default - No input specified
     */
    readonly input?: IFileSetProducer;
    /**
     * Additional FileSets to put in other directories
     *
     * Specifies a mapping from directory name to FileSets. During the
     * script execution, the FileSets will be available in the directories
     * indicated.
     *
     * The directory names may be relative. For example, you can put
     * the main input and an additional input side-by-side with the
     * following configuration:
     *
     * ```ts
     * const script = new pipelines.ShellStep('MainScript', {
     *   commands: ['npm ci','npm run build','npx cdk synth'],
     *   input: pipelines.CodePipelineSource.gitHub('org/source1', 'main'),
     *   additionalInputs: {
     *     '../siblingdir': pipelines.CodePipelineSource.gitHub('org/source2', 'main'),
     *   }
     * });
     * ```
     *
     * @default - No additional inputs
     */
    readonly additionalInputs?: Record<string, IFileSetProducer>;
    /**
     * The directory that will contain the primary output fileset
     *
     * After running the script, the contents of the given directory
     * will be treated as the primary output of this Step.
     *
     * @default - No primary output
     */
    readonly primaryOutputDirectory?: string;
}
/**
 * Run shell script commands in the pipeline. This is a generic step designed
 * to be deployment engine agnostic.
 */
export declare class ShellStep extends Step {
    /**
     * Commands to run
     */
    readonly commands: string[];
    /**
     * Installation commands to run before the regular commands
     *
     * For deployment engines that support it, install commands will be classified
     * differently in the job history from the regular `commands`.
     *
     * @default - No installation commands
     */
    readonly installCommands: string[];
    /**
     * Environment variables to set
     *
     * @default - No environment variables
     */
    readonly env: Record<string, string>;
    /**
     * Set environment variables based on Stack Outputs
     *
     * @default - No environment variables created from stack outputs
     */
    readonly envFromCfnOutputs: Record<string, StackOutputReference>;
    /**
     * Input FileSets
     *
     * A list of `(FileSet, directory)` pairs, which are a copy of the
     * input properties. This list should not be modified directly.
     */
    readonly inputs: FileSetLocation[];
    /**
     * Output FileSets
     *
     * A list of `(FileSet, directory)` pairs, which are a copy of the
     * input properties. This list should not be modified directly.
     */
    readonly outputs: FileSetLocation[];
    private readonly _additionalOutputs;
    private _primaryOutputDirectory?;
    constructor(id: string, props: ShellStepProps);
    /**
     * Configure the given output directory as primary output
     *
     * If no primary output has been configured yet, this directory
     * will become the primary output of this ShellStep, otherwise this
     * method will throw if the given directory is different than the
     * currently configured primary output directory.
     */
    primaryOutputDirectory(directory: string): FileSet;
    /**
     * Add an additional output FileSet based on a directory.
     *
     *
     * After running the script, the contents of the given directory
     * will be exported as a `FileSet`. Use the `FileSet` as the
     * input to another step.
     *
     * Multiple calls with the exact same directory name string (not normalized)
     * will return the same FileSet.
     */
    addOutputDirectory(directory: string): FileSet;
    get consumedStackOutputs(): StackOutputReference[];
}
/**
 * Location of a FileSet consumed or produced by a ShellStep
 */
export interface FileSetLocation {
    /**
     * The (relative) directory where the FileSet is found
     */
    readonly directory: string;
    /**
     * The FileSet object
     */
    readonly fileSet: FileSet;
}
/**
 * A Reference to a Stack Output
 */
export declare class StackOutputReference {
    /** A human-readable description of the producing stack */
    readonly stackDescription: string;
    /** Artifact id of the producing stack */
    private readonly stackArtifactId;
    /** Output name of the producing stack */
    readonly outputName: string;
    /**
     * Create a StackOutputReference that references the given CfnOutput
     */
    static fromCfnOutput(output: CfnOutput): StackOutputReference;
    private constructor();
    /**
     * Whether or not this stack output is being produced by the given Stack deployment
     */
    isProducedBy(stack: StackDeployment): boolean;
}
