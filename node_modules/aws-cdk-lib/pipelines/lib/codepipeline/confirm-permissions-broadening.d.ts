import { CodePipelineActionFactoryResult, ICodePipelineActionFactory, ProduceActionOptions } from './codepipeline-action-factory';
import { IStage } from '../../../aws-codepipeline';
import * as sns from '../../../aws-sns';
import { Stage } from '../../../core';
import { Step } from '../blueprint';
/**
 * Properties for a `PermissionsBroadeningCheck`
 */
export interface PermissionsBroadeningCheckProps {
    /**
     * The CDK Stage object to check the stacks of
     *
     * This should be the same Stage object you are passing to `addStage()`.
     */
    readonly stage: Stage;
    /**
     * Topic to send notifications when a human needs to give manual confirmation
     *
     * @default - no notification
     */
    readonly notificationTopic?: sns.ITopic;
}
/**
 * Pause the pipeline if a deployment would add IAM permissions or Security Group rules
 *
 * This step is only supported in CodePipeline pipelines.
 */
export declare class ConfirmPermissionsBroadening extends Step implements ICodePipelineActionFactory {
    private readonly props;
    constructor(id: string, props: PermissionsBroadeningCheckProps);
    produceAction(stage: IStage, options: ProduceActionOptions): CodePipelineActionFactoryResult;
    private getOrCreateSecCheck;
}
