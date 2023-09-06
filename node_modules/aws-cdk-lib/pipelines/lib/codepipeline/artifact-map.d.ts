import * as cp from '../../../aws-codepipeline';
import { FileSet } from '../blueprint';
/**
 * Translate FileSets to CodePipeline Artifacts
 */
export declare class ArtifactMap {
    private artifacts;
    private usedNames;
    /**
     * Return the matching CodePipeline artifact for a FileSet
     */
    toCodePipeline(x: FileSet): cp.Artifact;
    private makeUniqueName;
}
/**
 * A FileSet created from a CodePipeline artifact
 *
 * You only need to use this if you want to add CDK Pipeline stages
 * add the end of an existing CodePipeline, which should be very rare.
 */
export declare class CodePipelineFileSet extends FileSet {
    /**
     * Turn a CodePipeline Artifact into a FileSet
     */
    static fromArtifact(artifact: cp.Artifact): CodePipelineFileSet;
    /**
     * The artifact this class is wrapping
     *
     * @internal
     */
    readonly _artifact: cp.Artifact;
    private constructor();
}
