import { StreamEventSource, StreamEventSourceProps } from './stream';
import * as kinesis from '../../aws-kinesis';
import * as lambda from '../../aws-lambda';
export interface KinesisEventSourceProps extends StreamEventSourceProps {
    /**
     * The time from which to start reading, in Unix time seconds.
     *
     * @default - no timestamp
     */
    readonly startingPositionTimestamp?: number;
}
/**
 * Use an Amazon Kinesis stream as an event source for AWS Lambda.
 */
export declare class KinesisEventSource extends StreamEventSource {
    readonly stream: kinesis.IStream;
    private _eventSourceMappingId?;
    private _eventSourceMappingArn?;
    private startingPositionTimestamp?;
    constructor(stream: kinesis.IStream, props: KinesisEventSourceProps);
    bind(target: lambda.IFunction): void;
    /**
     * The identifier for this EventSourceMapping
     */
    get eventSourceMappingId(): string;
    /**
     * The ARN for this EventSourceMapping
     */
    get eventSourceMappingArn(): string;
}
