export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class LogsMetrics {
    static incomingLogEventsSum(dimensions: {
        LogGroupName: string;
    }): MetricWithDims<{
        LogGroupName: string;
    }>;
    static incomingBytesSum(dimensions: {
        LogGroupName: string;
    }): MetricWithDims<{
        LogGroupName: string;
    }>;
}
