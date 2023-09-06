export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class SQSMetrics {
    static numberOfMessagesSentAverage(dimensions: {
        QueueName: string;
    }): MetricWithDims<{
        QueueName: string;
    }>;
    static approximateNumberOfMessagesDelayedAverage(dimensions: {
        QueueName: string;
    }): MetricWithDims<{
        QueueName: string;
    }>;
    static numberOfMessagesReceivedAverage(dimensions: {
        QueueName: string;
    }): MetricWithDims<{
        QueueName: string;
    }>;
    static numberOfMessagesDeletedAverage(dimensions: {
        QueueName: string;
    }): MetricWithDims<{
        QueueName: string;
    }>;
    static approximateNumberOfMessagesNotVisibleAverage(dimensions: {
        QueueName: string;
    }): MetricWithDims<{
        QueueName: string;
    }>;
    static approximateNumberOfMessagesVisibleAverage(dimensions: {
        QueueName: string;
    }): MetricWithDims<{
        QueueName: string;
    }>;
    static approximateAgeOfOldestMessageAverage(dimensions: {
        QueueName: string;
    }): MetricWithDims<{
        QueueName: string;
    }>;
    static numberOfEmptyReceivesAverage(dimensions: {
        QueueName: string;
    }): MetricWithDims<{
        QueueName: string;
    }>;
    static sentMessageSizeAverage(dimensions: {
        QueueName: string;
    }): MetricWithDims<{
        QueueName: string;
    }>;
}
