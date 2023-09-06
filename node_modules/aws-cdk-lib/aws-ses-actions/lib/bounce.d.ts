import * as ses from '../../aws-ses';
import * as sns from '../../aws-sns';
/**
 * Construction properties for a BounceTemplate.
 */
export interface BounceTemplateProps {
    /**
     * Human-readable text to include in the bounce message.
     */
    readonly message: string;
    /**
     * The SMTP reply code, as defined by RFC 5321.
     *
     * @see https://tools.ietf.org/html/rfc5321
     */
    readonly smtpReplyCode: string;
    /**
     * The SMTP enhanced status code, as defined by RFC 3463.
     *
     * @see https://tools.ietf.org/html/rfc3463
     */
    readonly statusCode?: string;
}
/**
 * A bounce template.
 */
export declare class BounceTemplate {
    readonly props: BounceTemplateProps;
    static readonly MAILBOX_DOES_NOT_EXIST: BounceTemplate;
    static readonly MESSAGE_TOO_LARGE: BounceTemplate;
    static readonly MAILBOX_FULL: BounceTemplate;
    static readonly MESSAGE_CONTENT_REJECTED: BounceTemplate;
    static readonly TEMPORARY_FAILURE: BounceTemplate;
    constructor(props: BounceTemplateProps);
}
/**
 * Construction properties for a bounce action.
 */
export interface BounceProps {
    /**
     * The template containing the message, reply code and status code.
     */
    readonly template: BounceTemplate;
    /**
     * The email address of the sender of the bounced email. This is the address
     * from which the bounce message will be sent.
     */
    readonly sender: string;
    /**
     * The SNS topic to notify when the bounce action is taken.
     *
     * @default no notification
     */
    readonly topic?: sns.ITopic;
}
/**
 * Rejects the received email by returning a bounce response to the sender and,
 * optionally, publishes a notification to Amazon SNS.
 */
export declare class Bounce implements ses.IReceiptRuleAction {
    private readonly props;
    constructor(props: BounceProps);
    bind(_rule: ses.IReceiptRule): ses.ReceiptRuleActionConfig;
}
