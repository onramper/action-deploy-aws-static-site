import * as lambda from '../../aws-lambda';
import * as ses from '../../aws-ses';
import * as sns from '../../aws-sns';
/**
 * The type of invocation to use for a Lambda Action.
 */
export declare enum LambdaInvocationType {
    /**
     * The function will be invoked asynchronously.
     */
    EVENT = "Event",
    /**
     * The function will be invoked sychronously. Use RequestResponse only when
     * you want to make a mail flow decision, such as whether to stop the receipt
     * rule or the receipt rule set.
     */
    REQUEST_RESPONSE = "RequestResponse"
}
/**
 * Construction properties for a Lambda action.
 */
export interface LambdaProps {
    /**
     * The Lambda function to invoke.
     */
    readonly function: lambda.IFunction;
    /**
     * The invocation type of the Lambda function.
     *
     * @default Event
     */
    readonly invocationType?: LambdaInvocationType;
    /**
     * The SNS topic to notify when the Lambda action is taken.
     *
     * @default no notification
     */
    readonly topic?: sns.ITopic;
}
/**
 * Calls an AWS Lambda function, and optionally, publishes a notification to
 * Amazon SNS.
 */
export declare class Lambda implements ses.IReceiptRuleAction {
    private readonly props;
    constructor(props: LambdaProps);
    bind(rule: ses.IReceiptRule): ses.ReceiptRuleActionConfig;
}
