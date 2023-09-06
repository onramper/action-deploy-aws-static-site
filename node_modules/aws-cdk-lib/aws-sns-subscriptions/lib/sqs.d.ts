import { SubscriptionProps } from './subscription';
import * as sns from '../../aws-sns';
import * as sqs from '../../aws-sqs';
/**
 * Properties for an SQS subscription
 */
export interface SqsSubscriptionProps extends SubscriptionProps {
    /**
     * The message to the queue is the same as it was sent to the topic
     *
     * If false, the message will be wrapped in an SNS envelope.
     *
     * @default false
     */
    readonly rawMessageDelivery?: boolean;
}
/**
 * Use an SQS queue as a subscription target
 */
export declare class SqsSubscription implements sns.ITopicSubscription {
    private readonly queue;
    private readonly props;
    constructor(queue: sqs.IQueue, props?: SqsSubscriptionProps);
    /**
     * Returns a configuration for an SQS queue to subscribe to an SNS topic
     */
    bind(topic: sns.ITopic): sns.TopicSubscriptionConfig;
    private regionFromArn;
}
