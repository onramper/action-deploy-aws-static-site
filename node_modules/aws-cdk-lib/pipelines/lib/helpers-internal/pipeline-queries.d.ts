import { StackOutputReference, StackDeployment, StackAsset, StageDeployment } from '../blueprint';
import { PipelineBase } from '../main/pipeline-base';
/**
 * Answer some questions about a pipeline blueprint
 */
export declare class PipelineQueries {
    private readonly pipeline;
    constructor(pipeline: PipelineBase);
    /**
     * Return the names of all outputs for the given stack that are referenced in this blueprint
     */
    stackOutputsReferenced(stack: StackDeployment): string[];
    /**
     * Find the stack deployment that is producing the given reference
     */
    producingStack(outputReference: StackOutputReference): StackDeployment;
    /**
     * All assets referenced in all the Stacks of a StageDeployment
     */
    assetsInStage(stage: StageDeployment): StackAsset[];
}
