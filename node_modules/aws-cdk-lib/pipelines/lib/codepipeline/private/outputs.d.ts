import * as cp from '../../../../aws-codepipeline';
import { Step } from '../../blueprint/step';
export declare function makeCodePipelineOutput(step: Step, variableName: string): string;
/**
 * If the step is producing outputs, determine a variableNamespace for it, and configure that on the outputs
 */
export declare function namespaceStepOutputs(step: Step, stage: cp.IStage, name: string): string | undefined;
/**
 * Generate a variable namespace from stage and action names
 *
 * Variable namespaces cannot have '.', but they can have '@'. Other than that,
 * action names are more limited so they translate easily.
 */
export declare function namespaceName(stage: cp.IStage, name: string): string;
