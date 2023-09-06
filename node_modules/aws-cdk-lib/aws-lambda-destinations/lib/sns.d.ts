import { Construct } from 'constructs';
import * as lambda from '../../aws-lambda';
import * as sns from '../../aws-sns';
/**
 * Use a SNS topic as a Lambda destination
 */
export declare class SnsDestination implements lambda.IDestination {
    private readonly topic;
    constructor(topic: sns.ITopic);
    /**
     * Returns a destination configuration
     */
    bind(_scope: Construct, fn: lambda.IFunction, _options?: lambda.DestinationOptions): lambda.DestinationConfig;
}
