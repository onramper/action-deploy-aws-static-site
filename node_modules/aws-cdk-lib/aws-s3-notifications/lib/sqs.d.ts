import { Construct } from 'constructs';
import * as s3 from '../../aws-s3';
import * as sqs from '../../aws-sqs';
/**
 * Use an SQS queue as a bucket notification destination
 */
export declare class SqsDestination implements s3.IBucketNotificationDestination {
    private readonly queue;
    constructor(queue: sqs.IQueue);
    /**
     * Allows using SQS queues as destinations for bucket notifications.
     * Use `bucket.onEvent(event, queue)` to subscribe.
     */
    bind(_scope: Construct, bucket: s3.IBucket): s3.BucketNotificationDestinationConfig;
}
