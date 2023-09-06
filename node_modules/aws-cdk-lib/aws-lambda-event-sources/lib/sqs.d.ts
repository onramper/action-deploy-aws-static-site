import * as lambda from '../../aws-lambda';
import * as sqs from '../../aws-sqs';
import { Duration } from '../../core';
export interface SqsEventSourceProps {
    /**
     * The largest number of records that AWS Lambda will retrieve from your event
     * source at the time of invoking your function. Your function receives an
     * event with all the retrieved records.
     *
     * Valid Range: Minimum value of 1. Maximum value of 10.
     * If `maxBatchingWindow` is configured, this value can go up to 10,000.
     *
     * @default 10
     */
    readonly batchSize?: number;
    /**
     * The maximum amount of time to gather records before invoking the function.
     *
     * Valid Range: Minimum value of 0 minutes. Maximum value of 5 minutes.
     *
     * @default - no batching window. The lambda function will be invoked immediately with the records that are available.
     */
    readonly maxBatchingWindow?: Duration;
    /**
     * Allow functions to return partially successful responses for a batch of records.
     *
     * @see https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#services-sqs-batchfailurereporting
     *
     * @default false
     */
    readonly reportBatchItemFailures?: boolean;
    /**
     * If the SQS event source mapping should be enabled.
     *
     * @default true
     */
    readonly enabled?: boolean;
    /**
     * Add filter criteria option
     *
     * @default - None
     */
    readonly filters?: Array<{
        [key: string]: any;
    }>;
    /**
     * The maximum concurrency setting limits the number of concurrent instances of the function that an Amazon SQS event source can invoke.
     *
     * @see https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-max-concurrency
     *
     * Valid Range: Minimum value of 2. Maximum value of 1000.
     *
     * @default - No specific limit.
     */
    readonly maxConcurrency?: number;
}
/**
 * Use an Amazon SQS queue as an event source for AWS Lambda.
 */
export declare class SqsEventSource implements lambda.IEventSource {
    readonly queue: sqs.IQueue;
    private readonly props;
    private _eventSourceMappingId?;
    private _eventSourceMappingArn?;
    constructor(queue: sqs.IQueue, props?: SqsEventSourceProps);
    bind(target: lambda.IFunction): void;
    /**
     * The identifier for this EventSourceMapping
     */
    get eventSourceMappingId(): string;
    /**
     * The ARN for this EventSourceMapping
     */
    get eventSourceMappingArn(): string;
}
