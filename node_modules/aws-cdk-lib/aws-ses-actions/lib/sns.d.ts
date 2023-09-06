import * as ses from '../../aws-ses';
import * as sns from '../../aws-sns';
/**
 * The type of email encoding to use for a SNS action.
 */
export declare enum EmailEncoding {
    /**
     * Base 64
     */
    BASE64 = "Base64",
    /**
     * UTF-8
     */
    UTF8 = "UTF-8"
}
/**
 * Construction properties for a SNS action.
 */
export interface SnsProps {
    /**
     * The encoding to use for the email within the Amazon SNS notification.
     *
     * @default UTF-8
     */
    readonly encoding?: EmailEncoding;
    /**
     * The SNS topic to notify.
     */
    readonly topic: sns.ITopic;
}
/**
 * Publishes the email content within a notification to Amazon SNS.
 */
export declare class Sns implements ses.IReceiptRuleAction {
    private readonly props;
    constructor(props: SnsProps);
    bind(_rule: ses.IReceiptRule): ses.ReceiptRuleActionConfig;
}
