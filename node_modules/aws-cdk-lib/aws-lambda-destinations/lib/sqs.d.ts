import { Construct } from 'constructs';
import * as lambda from '../../aws-lambda';
import * as sqs from '../../aws-sqs';
/**
 * Use a SQS queue as a Lambda destination
 */
export declare class SqsDestination implements lambda.IDestination {
    private readonly queue;
    constructor(queue: sqs.IQueue);
    /**
     * Returns a destination configuration
     */
    bind(_scope: Construct, fn: lambda.IFunction, _options?: lambda.DestinationOptions): lambda.DestinationConfig;
}
