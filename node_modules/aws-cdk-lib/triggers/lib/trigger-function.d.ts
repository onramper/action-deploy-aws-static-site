import { Construct } from 'constructs';
import { ITrigger, Trigger, TriggerOptions } from '.';
import * as lambda from '../../aws-lambda';
/**
 * Props for `InvokeFunction`.
 */
export interface TriggerFunctionProps extends lambda.FunctionProps, TriggerOptions {
}
/**
 * Invokes an AWS Lambda function during deployment.
 */
export declare class TriggerFunction extends lambda.Function implements ITrigger {
    /**
     * The underlying trigger resource.
     */
    readonly trigger: Trigger;
    constructor(scope: Construct, id: string, props: TriggerFunctionProps);
    executeAfter(...scopes: Construct[]): void;
    executeBefore(...scopes: Construct[]): void;
}
