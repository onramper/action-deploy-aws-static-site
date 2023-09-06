import { Construct } from 'constructs';
import * as lambda from '../../aws-lambda';
import * as logs from '../../aws-logs';
/**
 * Options that may be provided to LambdaDestination
 */
export interface LambdaDestinationOptions {
    /** Whether or not to add Lambda Permissions.
     * @default true
     */
    readonly addPermissions?: boolean;
}
/**
 * Use a Lambda Function as the destination for a log subscription
 */
export declare class LambdaDestination implements logs.ILogSubscriptionDestination {
    private readonly fn;
    private readonly options;
    /**  LambdaDestinationOptions */
    constructor(fn: lambda.IFunction, options?: LambdaDestinationOptions);
    bind(scope: Construct, logGroup: logs.ILogGroup): logs.LogSubscriptionDestinationConfig;
}
