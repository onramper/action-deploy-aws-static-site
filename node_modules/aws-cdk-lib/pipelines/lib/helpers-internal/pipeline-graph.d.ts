import { Graph, GraphNode } from './graph';
import { PipelineQueries } from './pipeline-queries';
import { FileSet, StackAsset, StackDeployment, Step } from '../blueprint';
import { PipelineBase } from '../main/pipeline-base';
export interface PipelineGraphProps {
    /**
     * Add a self-mutation step.
     *
     * @default false
     */
    readonly selfMutation?: boolean;
    /**
     * Publishes the template asset to S3.
     *
     * @default false
     */
    readonly publishTemplate?: boolean;
    /**
     * Whether to combine asset publishers for the same type into one step
     *
     * @default false
     */
    readonly singlePublisherPerAssetType?: boolean;
    /**
     * Add a "prepare" step for each stack which can be used to create the change
     * set. If this is disabled, only the "execute" step will be included.
     *
     * @default true
     */
    readonly prepareStep?: boolean;
}
/**
 * Logic to turn the deployment blueprint into a graph
 *
 * This code makes all the decisions on how to lay out the CodePipeline
 */
export declare class PipelineGraph {
    readonly pipeline: PipelineBase;
    /**
     * A Step object that may be used as the producer of FileSets that should not be represented in the graph
     */
    static readonly NO_STEP: Step;
    readonly graph: AGraph;
    readonly cloudAssemblyFileSet: FileSet;
    readonly queries: PipelineQueries;
    private readonly added;
    private readonly assetNodes;
    private readonly assetNodesByType;
    private readonly synthNode?;
    private readonly selfMutateNode?;
    private readonly stackOutputDependencies;
    /** Mapping steps to depbuilders, satisfied by the step itself  */
    private readonly nodeDependencies;
    private readonly publishTemplate;
    private readonly prepareStep;
    private readonly singlePublisher;
    private lastPreparationNode?;
    private _fileAssetCtr;
    private _dockerAssetCtr;
    constructor(pipeline: PipelineBase, props?: PipelineGraphProps);
    isSynthNode(node: AGraphNode): boolean;
    private addBuildStep;
    private addWave;
    private addStage;
    private addChangeSetNode;
    private addPrePost;
    private topLevelGraph;
    /**
     * Add a Node to a Graph for a given Step
     *
     * Adds all dependencies for that Node to the same Step as well.
     */
    private addStepNode;
    /**
     * Add dependencies that aren't in the pipeline yet
     *
     * Build steps reference as many sources (or other builds) as they want, which will be added
     * automatically. Do that here. We couldn't do it earlier, because if there were dependencies
     * between steps we didn't want to reparent those unnecessarily.
     */
    private addMissingDependencyNodes;
    private publishAsset;
    /**
     * Simplify the stack name by removing the `Stage-` prefix if it exists.
     */
    private simpleStackName;
}
type GraphAnnotation = {
    readonly type: 'group';
} | {
    readonly type: 'stack-group';
    readonly stack: StackDeployment;
} | {
    readonly type: 'publish-assets';
    readonly assets: StackAsset[];
} | {
    readonly type: 'step';
    readonly step: Step;
    isBuildStep?: boolean;
} | {
    readonly type: 'self-update';
} | {
    readonly type: 'prepare';
    readonly stack: StackDeployment;
} | ExecuteAnnotation | {
    readonly type: {
        error: 'you must add a default case to your switch';
    };
};
interface ExecuteAnnotation {
    readonly type: 'execute';
    /**
     * The stack to deploy
     */
    readonly stack: StackDeployment;
    /**
     * Whether or not outputs should be captured
     */
    readonly captureOutputs: boolean;
    /**
     * If this is executing a change set, or should do a direct deployment
     *
     * @default false
     */
    readonly withoutChangeSet?: boolean;
}
export type AGraphNode = GraphNode<GraphAnnotation>;
export type AGraph = Graph<GraphAnnotation>;
export {};
