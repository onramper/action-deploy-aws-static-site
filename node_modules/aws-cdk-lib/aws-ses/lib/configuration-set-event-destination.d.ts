import { Construct } from 'constructs';
import { IConfigurationSet } from './configuration-set';
import * as sns from '../../aws-sns';
import { IResource, Resource } from '../../core';
/**
 * A configuration set event destination
 */
export interface IConfigurationSetEventDestination extends IResource {
    /**
     * The ID of the configuration set event destination
     *
     * @attribute
     */
    readonly configurationSetEventDestinationId: string;
}
/**
 * Options for a configuration set event destination
 */
export interface ConfigurationSetEventDestinationOptions {
    /**
     * A name for the configuration set event destination
     *
     * @default - a CloudFormation generated name
     */
    readonly configurationSetEventDestinationName?: string;
    /**
     * Whether Amazon SES publishes events to this destination
     *
     * @default true
     */
    readonly enabled?: boolean;
    /**
     * The event destination
     */
    readonly destination: EventDestination;
    /**
     * The type of email sending events to publish to the event destination
     *
     * @default - send all event types
     */
    readonly events?: EmailSendingEvent[];
}
/**
 * An event destination
 */
export declare abstract class EventDestination {
    /**
     * Use a SNS topic as event destination
     */
    static snsTopic(topic: sns.ITopic): EventDestination;
    /**
     * Use CloudWatch dimensions as event destination
     */
    static cloudWatchDimensions(dimensions: CloudWatchDimension[]): EventDestination;
    /**
     * A SNS topic to use as event destination
     *
     * @default - do not send events to a SNS topic
     */
    abstract readonly topic?: sns.ITopic;
    /**
     * A list of CloudWatch dimensions upon which to categorize your emails
     *
     * @default - do not send events to CloudWatch
     */
    abstract readonly dimensions?: CloudWatchDimension[];
}
/**
 * Properties for a configuration set event destination
 */
export interface ConfigurationSetEventDestinationProps extends ConfigurationSetEventDestinationOptions {
    /**
     * The configuration set that contains the event destination.
     */
    readonly configurationSet: IConfigurationSet;
}
/**
 * Email sending event
 */
export declare enum EmailSendingEvent {
    /**
     * The send request was successful and SES will attempt to deliver the message
     * to the recipient's mail server. (If account-level or global suppression is
     * being used, SES will still count it as a send, but delivery is suppressed.)
     */
    SEND = "send",
    /**
     * SES accepted the email, but determined that it contained a virus and didn’t
     * attempt to deliver it to the recipient’s mail server.
     */
    REJECT = "reject",
    /**
     * (Hard bounce) The recipient's mail server permanently rejected the email.
     * (Soft bounces are only included when SES fails to deliver the email after
     * retrying for a period of time.)
     */
    BOUNCE = "bounce",
    /**
     * The email was successfully delivered to the recipient’s mail server, but the
     * recipient marked it as spam.
     */
    COMPLAINT = "complaint",
    /**
     * SES successfully delivered the email to the recipient's mail server.
     */
    DELIVERY = "delivery",
    /**
     * The recipient received the message and opened it in their email client.
     */
    OPEN = "open",
    /**
     * The recipient clicked one or more links in the email.
     */
    CLICK = "click",
    /**
     * The email wasn't sent because of a template rendering issue. This event type
     * can occur when template data is missing, or when there is a mismatch between
     * template parameters and data. (This event type only occurs when you send email
     * using the `SendTemplatedEmail` or `SendBulkTemplatedEmail` API operations.)
     */
    RENDERING_FAILURE = "renderingFailure",
    /**
     * The email couldn't be delivered to the recipient’s mail server because a temporary
     * issue occurred. Delivery delays can occur, for example, when the recipient's inbox
     * is full, or when the receiving email server experiences a transient issue.
     */
    DELIVERY_DELAY = "deliveryDelay",
    /**
     * The email was successfully delivered, but the recipient updated their subscription
     * preferences by clicking on an unsubscribe link as part of your subscription management.
     */
    SUBSCRIPTION = "subscription"
}
/**
 * A CloudWatch dimension upon which to categorize your emails
 */
export interface CloudWatchDimension {
    /**
     * The place where Amazon SES finds the value of a dimension to publish to
     * Amazon CloudWatch.
     */
    readonly source: CloudWatchDimensionSource;
    /**
     * The name of an Amazon CloudWatch dimension associated with an email sending metric.
     */
    readonly name: string;
    /**
     * The default value of the dimension that is published to Amazon CloudWatch
     * if you do not provide the value of the dimension when you send an email.
     */
    readonly defaultValue: string;
}
/**
 * Source for CloudWatch dimension
 */
export declare enum CloudWatchDimensionSource {
    /**
     * Amazon SES retrieves the dimension name and value from a header in the email.
     *
     * Note: You can't use any of the following email headers as the Dimension Name:
     * `Received`, `To`, `From`, `DKIM-Signature`, `CC`, `message-id`, or `Return-Path`.
     */
    EMAIL_HEADER = "emailHeader",
    /**
     * Amazon SES retrieves the dimension name and value from a tag that you specified in a link.
     *
     * @see https://docs.aws.amazon.com/ses/latest/dg/faqs-metrics.html#sending-metric-faqs-clicks-q5
     */
    LINK_TAG = "linkTag",
    /**
     * Amazon SES retrieves the dimension name and value from a tag that you specify by using the
     * `X-SES-MESSAGE-TAGS` header or the Tags API parameter.
     *
     * You can also use the Message Tag value source to create dimensions based on Amazon SES auto-tags.
     * To use an auto-tag, type the complete name of the auto-tag as the Dimension Name. For example,
     * to create a dimension based on the configuration set auto-tag, use `ses:configuration-set` for the
     * Dimension Name, and the name of the configuration set for the Default Value.
     *
     * @see https://docs.aws.amazon.com/ses/latest/dg/event-publishing-send-email.html
     * @see https://docs.aws.amazon.com/ses/latest/dg/monitor-using-event-publishing.html#event-publishing-how-works
     */
    MESSAGE_TAG = "messageTag"
}
/**
 * A configuration set event destination
 */
export declare class ConfigurationSetEventDestination extends Resource implements IConfigurationSetEventDestination {
    /**
     * Use an existing configuration set
     */
    static fromConfigurationSetEventDestinationId(scope: Construct, id: string, configurationSetEventDestinationId: string): IConfigurationSetEventDestination;
    readonly configurationSetEventDestinationId: string;
    constructor(scope: Construct, id: string, props: ConfigurationSetEventDestinationProps);
}
