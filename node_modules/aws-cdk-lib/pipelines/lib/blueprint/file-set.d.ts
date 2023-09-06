import { Step } from './step';
/**
 * A set of files traveling through the deployment pipeline
 *
 * Individual steps in the pipeline produce or consume
 * `FileSet`s.
 */
export declare class FileSet implements IFileSetProducer {
    /** Human-readable descriptor for this file set (does not need to be unique) */
    readonly id: string;
    /**
     * The primary output of a file set producer
     *
     * The primary output of a FileSet is itself.
     */
    readonly primaryOutput?: FileSet;
    private _producer?;
    constructor(
    /** Human-readable descriptor for this file set (does not need to be unique) */
    id: string, producer?: Step);
    /**
     * The Step that produces this FileSet
     */
    get producer(): Step;
    /**
     * Mark the given Step as the producer for this FileSet
     *
     * This method can only be called once.
     */
    producedBy(producer?: Step): void;
    /**
     * Return a string representation of this FileSet
     */
    toString(): string;
}
/**
 * Any class that produces, or is itself, a `FileSet`
 *
 * Steps implicitly produce a primary FileSet as an output.
 */
export interface IFileSetProducer {
    /**
     * The `FileSet` produced by this file set producer
     *
     * @default - This producer doesn't produce any file set
     */
    readonly primaryOutput?: FileSet;
}
