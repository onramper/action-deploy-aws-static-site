import { Construct } from 'constructs';
import * as s3 from '../../aws-s3';
import * as sns from '../../aws-sns';
/**
 * Use an SNS topic as a bucket notification destination
 */
export declare class SnsDestination implements s3.IBucketNotificationDestination {
    private readonly topic;
    constructor(topic: sns.ITopic);
    bind(_scope: Construct, bucket: s3.IBucket): s3.BucketNotificationDestinationConfig;
}
