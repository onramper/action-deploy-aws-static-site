import { SubscriptionProps } from './subscription';
import * as lambda from '../../aws-lambda';
import * as sns from '../../aws-sns';
/**
 * Properties for a Lambda subscription
 */
export interface LambdaSubscriptionProps extends SubscriptionProps {
}
/**
 * Use a Lambda function as a subscription target
 */
export declare class LambdaSubscription implements sns.ITopicSubscription {
    private readonly fn;
    private readonly props;
    constructor(fn: lambda.IFunction, props?: LambdaSubscriptionProps);
    /**
     * Returns a configuration for a Lambda function to subscribe to an SNS topic
     */
    bind(topic: sns.ITopic): sns.TopicSubscriptionConfig;
    private regionFromArn;
}
