import { Construct } from 'constructs';
import * as iam from '../../aws-iam';
import * as kinesis from '../../aws-kinesis';
import * as logs from '../../aws-logs';
/**
 * Customize the Kinesis Logs Destination
 */
export interface KinesisDestinationProps {
    /**
     * The role to assume to write log events to the destination
     *
     * @default - A new Role is created
     */
    readonly role?: iam.IRole;
}
/**
 * Use a Kinesis stream as the destination for a log subscription
 */
export declare class KinesisDestination implements logs.ILogSubscriptionDestination {
    private readonly stream;
    private readonly props;
    /**
     * @param stream The Kinesis stream to use as destination
     * @param props The Kinesis Destination properties
     *
     */
    constructor(stream: kinesis.IStream, props?: KinesisDestinationProps);
    bind(scope: Construct, _sourceLogGroup: logs.ILogGroup): logs.LogSubscriptionDestinationConfig;
}
