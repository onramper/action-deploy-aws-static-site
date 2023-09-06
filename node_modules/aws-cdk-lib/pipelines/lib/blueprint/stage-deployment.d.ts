import { StackDeployment } from './stack-deployment';
import { StackSteps, Step } from './step';
import * as cdk from '../../../core';
/**
 * Properties for a `StageDeployment`
 */
export interface StageDeploymentProps {
    /**
     * Stage name to use in the pipeline
     *
     * @default - Use Stage's construct ID
     */
    readonly stageName?: string;
    /**
     * Additional steps to run before any of the stacks in the stage
     *
     * @default - No additional steps
     */
    readonly pre?: Step[];
    /**
     * Additional steps to run after all of the stacks in the stage
     *
     * @default - No additional steps
     */
    readonly post?: Step[];
    /**
     * Instructions for additional steps that are run at the stack level
     *
     * @default - No additional instructions
     */
    readonly stackSteps?: StackSteps[];
}
/**
 * Deployment of a single `Stage`
 *
 * A `Stage` consists of one or more `Stacks`, which will be
 * deployed in dependency order.
 */
export declare class StageDeployment {
    /** The stacks deployed in this stage */
    readonly stacks: StackDeployment[];
    /**
     * Create a new `StageDeployment` from a `Stage`
     *
     * Synthesizes the target stage, and deployes the stacks found inside
     * in dependency order.
     */
    static fromStage(stage: cdk.Stage, props?: StageDeploymentProps): StageDeployment;
    /**
     * The display name of this stage
     */
    readonly stageName: string;
    /**
     * Additional steps that are run before any of the stacks in the stage
     */
    readonly pre: Step[];
    /**
     * Additional steps that are run after all of the stacks in the stage
     */
    readonly post: Step[];
    /**
     * Instructions for additional steps that are run at stack level
     */
    readonly stackSteps: StackSteps[];
    /**
     * Determine if all stacks in stage should be deployed with prepare
     * step or not.
     */
    readonly prepareStep?: boolean;
    private constructor();
    /**
     * Add an additional step to run before any of the stacks in this stage
     */
    addPre(...steps: Step[]): void;
    /**
     * Add an additional step to run after all of the stacks in this stage
     */
    addPost(...steps: Step[]): void;
}
