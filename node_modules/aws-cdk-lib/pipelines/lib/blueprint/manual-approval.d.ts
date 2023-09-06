import { Step } from './step';
/**
 * Construction properties for a `ManualApprovalStep`
 */
export interface ManualApprovalStepProps {
    /**
     * The comment to display with this manual approval
     *
     * @default - No comment
     */
    readonly comment?: string;
}
/**
 * A manual approval step
 *
 * If this step is added to a Pipeline, the Pipeline will
 * be paused waiting for a human to resume it
 *
 * Only engines that support pausing the deployment will
 * support this step type.
 */
export declare class ManualApprovalStep extends Step {
    /**
     * The comment associated with this manual approval
     *
     * @default - No comment
     */
    readonly comment?: string;
    constructor(id: string, props?: ManualApprovalStepProps);
}
