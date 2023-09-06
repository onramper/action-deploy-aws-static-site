import { DlqDestinationConfig, IEventSourceDlq, IEventSourceMapping, IFunction } from '../../aws-lambda';
import * as sqs from '../../aws-sqs';
/**
 * An SQS dead letter queue destination configuration for a Lambda event source
 */
export declare class SqsDlq implements IEventSourceDlq {
    private readonly queue;
    constructor(queue: sqs.IQueue);
    /**
     * Returns a destination configuration for the DLQ
     */
    bind(_target: IEventSourceMapping, targetHandler: IFunction): DlqDestinationConfig;
}
