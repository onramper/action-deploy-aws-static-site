import { StageDeployment } from './stage-deployment';
import { StackSteps, Step } from './step';
import * as cdk from '../../../core';
/**
 * Construction properties for a `Wave`
 */
export interface WaveProps {
    /**
     * Additional steps to run before any of the stages in the wave
     *
     * @default - No additional steps
     */
    readonly pre?: Step[];
    /**
     * Additional steps to run after all of the stages in the wave
     *
     * @default - No additional steps
     */
    readonly post?: Step[];
}
/**
 * Multiple stages that are deployed in parallel
 */
export declare class Wave {
    /** Identifier for this Wave */
    readonly id: string;
    /**
     * Additional steps that are run before any of the stages in the wave
     */
    readonly pre: Step[];
    /**
     * Additional steps that are run after all of the stages in the wave
     */
    readonly post: Step[];
    /**
     * The stages that are deployed in this wave
     */
    readonly stages: StageDeployment[];
    constructor(
    /** Identifier for this Wave */
    id: string, props?: WaveProps);
    /**
     * Add a Stage to this wave
     *
     * It will be deployed in parallel with all other stages in this
     * wave.
     */
    addStage(stage: cdk.Stage, options?: AddStageOpts): StageDeployment;
    /**
     * Add an additional step to run before any of the stages in this wave
     */
    addPre(...steps: Step[]): void;
    /**
     * Add an additional step to run after all of the stages in this wave
     */
    addPost(...steps: Step[]): void;
}
/**
 * Options to pass to `addStage`
 */
export interface AddStageOpts {
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
     * Instructions for stack level steps
     *
     * @default - No additional instructions
     */
    readonly stackSteps?: StackSteps[];
}
/**
 * Options to pass to `addWave`
 */
export interface WaveOptions {
    /**
     * Additional steps to run before any of the stages in the wave
     *
     * @default - No additional steps
     */
    readonly pre?: Step[];
    /**
     * Additional steps to run after all of the stages in the wave
     *
     * @default - No additional steps
     */
    readonly post?: Step[];
}
