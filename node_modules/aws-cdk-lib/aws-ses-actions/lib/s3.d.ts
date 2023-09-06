import * as kms from '../../aws-kms';
import * as s3 from '../../aws-s3';
import * as ses from '../../aws-ses';
import * as sns from '../../aws-sns';
/**
 * Construction properties for a S3 action.
 */
export interface S3Props {
    /**
     * The S3 bucket that incoming email will be saved to.
     */
    readonly bucket: s3.IBucket;
    /**
     * The master key that SES should use to encrypt your emails before saving
     * them to the S3 bucket.
     *
     * @default no encryption
     */
    readonly kmsKey?: kms.IKey;
    /**
     * The key prefix of the S3 bucket.
     *
     * @default no prefix
     */
    readonly objectKeyPrefix?: string;
    /**
     * The SNS topic to notify when the S3 action is taken.
     *
     * @default no notification
     */
    readonly topic?: sns.ITopic;
}
/**
 * Saves the received message to an Amazon S3 bucket and, optionally, publishes
 * a notification to Amazon SNS.
 */
export declare class S3 implements ses.IReceiptRuleAction {
    private readonly props;
    constructor(props: S3Props);
    bind(rule: ses.IReceiptRule): ses.ReceiptRuleActionConfig;
}
