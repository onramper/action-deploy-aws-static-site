import { FileSet, IFileSetProducer } from './file-set';
import { StackOutputReference } from './shell-step';
import { Stack } from '../../../core';
/**
 * A generic Step which can be added to a Pipeline
 *
 * Steps can be used to add Sources, Build Actions and Validations
 * to your pipeline.
 *
 * This class is abstract. See specific subclasses of Step for
 * useful steps to add to your Pipeline
 */
export declare abstract class Step implements IFileSetProducer {
    /** Identifier for this step */
    readonly id: string;
    /**
     * Define a sequence of steps to be executed in order.
     *
     * If you need more fine-grained step ordering, use the `addStepDependency()`
     * API. For example, if you want `secondStep` to occur after `firstStep`, call
     * `secondStep.addStepDependency(firstStep)`.
     */
    static sequence(steps: Step[]): Step[];
    /**
     * The list of FileSets consumed by this Step
     */
    readonly dependencyFileSets: FileSet[];
    /**
     * Whether or not this is a Source step
     *
     * What it means to be a Source step depends on the engine.
     */
    readonly isSource: boolean;
    private _primaryOutput?;
    private _dependencies;
    constructor(
    /** Identifier for this step */
    id: string);
    /**
     * Return the steps this step depends on, based on the FileSets it requires
     */
    get dependencies(): Step[];
    /**
     * Return a string representation of this Step
     */
    toString(): string;
    /**
     * The primary FileSet produced by this Step
     *
     * Not all steps produce an output FileSet--if they do
     * you can substitute the `Step` object for the `FileSet` object.
     */
    get primaryOutput(): FileSet | undefined;
    /**
     * Add a dependency on another step.
     */
    addStepDependency(step: Step): void;
    /**
     * Add an additional FileSet to the set of file sets required by this step
     *
     * This will lead to a dependency on the producer of that file set.
     */
    protected addDependencyFileSet(fs: FileSet): void;
    /**
     * Configure the given FileSet as the primary output of this step
     */
    protected configurePrimaryOutput(fs: FileSet): void;
    /**
     * Crawl the given structure for references to StepOutputs and add dependencies on all steps found
     *
     * Should be called in the constructor of subclasses based on what the user
     * passes in as construction properties. The format of the structure passed in
     * here does not have to correspond exactly to what gets rendered into the
     * engine, it just needs to contain the same data.
     */
    protected discoverReferencedOutputs(structure: any): void;
    /**
     * StackOutputReferences this step consumes.
     */
    get consumedStackOutputs(): StackOutputReference[];
}
/**
 * Instructions for additional steps that are run at stack level
 */
export interface StackSteps {
    /**
     * The stack you want the steps to run in
     */
    readonly stack: Stack;
    /**
     * Steps that execute before stack is prepared
     *
     * @default - no additional steps
     */
    readonly pre?: Step[];
    /**
     * Steps that execute after stack is prepared but before stack is deployed
     *
     * @default - no additional steps
     */
    readonly changeSet?: Step[];
    /**
     * Steps that execute after stack is deployed
     *
     * @default - no additional steps
     */
    readonly post?: Step[];
}
