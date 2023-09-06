import { Construct } from 'constructs';
import * as cloudfront from '../../aws-cloudfront';
import * as s3 from '../../aws-s3';
/**
 * Properties to use to customize an S3 Origin.
 */
export interface S3OriginProps extends cloudfront.OriginProps {
    /**
     * An optional Origin Access Identity of the origin identity cloudfront will use when calling your s3 bucket.
     *
     * @default - An Origin Access Identity will be created.
     */
    readonly originAccessIdentity?: cloudfront.IOriginAccessIdentity;
}
/**
 * An Origin that is backed by an S3 bucket.
 *
 * If the bucket is configured for website hosting, this origin will be configured to use the bucket as an
 * HTTP server origin and will use the bucket's configured website redirects and error handling. Otherwise,
 * the origin is created as a bucket origin and will use CloudFront's redirect and error handling.
 */
export declare class S3Origin implements cloudfront.IOrigin {
    private readonly origin;
    constructor(bucket: s3.IBucket, props?: S3OriginProps);
    bind(scope: Construct, options: cloudfront.OriginBindOptions): cloudfront.OriginBindConfig;
}
