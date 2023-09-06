import * as lambda from '../../aws-lambda';
import * as sns from '../../aws-sns';
import * as subs from '../../aws-sns-subscriptions';
/**
 * Properties forwarded to the Lambda Subscription.
 */
export interface SnsEventSourceProps extends subs.LambdaSubscriptionProps {
}
/**
 * Use an Amazon SNS topic as an event source for AWS Lambda.
 */
export declare class SnsEventSource implements lambda.IEventSource {
    readonly topic: sns.ITopic;
    private readonly props?;
    constructor(topic: sns.ITopic, props?: SnsEventSourceProps);
    bind(target: lambda.IFunction): void;
}
