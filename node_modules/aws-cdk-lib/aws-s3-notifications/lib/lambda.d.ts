import { Construct } from 'constructs';
import * as lambda from '../../aws-lambda';
import * as s3 from '../../aws-s3';
/**
 * Use a Lambda function as a bucket notification destination
 */
export declare class LambdaDestination implements s3.IBucketNotificationDestination {
    private readonly fn;
    constructor(fn: lambda.IFunction);
    bind(_scope: Construct, bucket: s3.IBucket): s3.BucketNotificationDestinationConfig;
}
