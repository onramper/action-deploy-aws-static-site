import { StreamEventSource, StreamEventSourceProps } from './stream';
import * as dynamodb from '../../aws-dynamodb';
import * as lambda from '../../aws-lambda';
export interface DynamoEventSourceProps extends StreamEventSourceProps {
}
/**
 * Use an Amazon DynamoDB stream as an event source for AWS Lambda.
 */
export declare class DynamoEventSource extends StreamEventSource {
    private readonly table;
    private _eventSourceMappingId?;
    private _eventSourceMappingArn?;
    constructor(table: dynamodb.ITable, props: DynamoEventSourceProps);
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
