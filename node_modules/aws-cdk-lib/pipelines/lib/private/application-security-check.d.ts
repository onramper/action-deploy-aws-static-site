import { Construct } from 'constructs';
import * as codebuild from '../../../aws-codebuild';
import * as cp from '../../../aws-codepipeline';
import * as lambda from '../../../aws-lambda';
/**
 * Properties for an ApplicationSecurityCheck
 */
export interface ApplicationSecurityCheckProps {
    /**
     * The pipeline that will be automatically approved
     *
     * Will have a tag added to it.
     */
    readonly codePipeline: cp.Pipeline;
}
/**
 * A construct containing both the Lambda and CodeBuild Project
 * needed to conduct a security check on any given application stage.
 *
 * The Lambda acts as an auto approving mechanism that should only be
 * triggered when the CodeBuild Project registers no security changes.
 *
 * The CodeBuild Project runs a security diff on the application stage,
 * and exports the link to the console of the project.
 */
export declare class ApplicationSecurityCheck extends Construct {
    /**
     * A lambda function that approves a Manual Approval Action, given
     * the following payload:
     *
     * {
     *  "PipelineName": [CodePipelineName],
     *  "StageName": [CodePipelineStageName],
     *  "ActionName": [ManualApprovalActionName]
     * }
     */
    readonly preApproveLambda: lambda.Function;
    /**
     * A CodeBuild Project that runs a security diff on the application stage.
     *
     * - If the diff registers no security changes, CodeBuild will invoke the
     *   pre-approval lambda and approve the ManualApprovalAction.
     * - If changes are detected, CodeBuild will exit into a ManualApprovalAction
     */
    readonly cdkDiffProject: codebuild.Project;
    constructor(scope: Construct, id: string, props: ApplicationSecurityCheckProps);
}
