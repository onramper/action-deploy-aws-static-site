export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class SNSMetrics {
    static numberOfNotificationsDeliveredSum(dimensions: {
        TopicName: string;
    }): MetricWithDims<{
        TopicName: string;
    }>;
    static numberOfNotificationsFailedSum(dimensions: {
        TopicName: string;
    }): MetricWithDims<{
        TopicName: string;
    }>;
    static numberOfMessagesPublishedSum(dimensions: {
        TopicName: string;
    }): MetricWithDims<{
        TopicName: string;
    }>;
    static publishSizeAverage(dimensions: {
        TopicName: string;
    }): MetricWithDims<{
        TopicName: string;
    }>;
    static smsSuccessRateSum(dimensions: {
        TopicName: string;
    }): MetricWithDims<{
        TopicName: string;
    }>;
}
