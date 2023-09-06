import { DlqDestinationConfig, IEventSourceDlq, IEventSourceMapping, IFunction } from '../../aws-lambda';
import * as sns from '../../aws-sns';
/**
 * An SNS dead letter queue destination configuration for a Lambda event source
 */
export declare class SnsDlq implements IEventSourceDlq {
    private readonly topic;
    constructor(topic: sns.ITopic);
    /**
     * Returns a destination configuration for the DLQ
     */
    bind(_target: IEventSourceMapping, targetHandler: IFunction): DlqDestinationConfig;
}
