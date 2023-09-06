export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class CloudWatchMetricStreamsMetrics {
    static metricUpdateSum(dimensions: {
        MetricStreamName: string;
    }): MetricWithDims<{
        MetricStreamName: string;
    }>;
    static publishErrorRateAverage(dimensions: {
        MetricStreamName: string;
    }): MetricWithDims<{
        MetricStreamName: string;
    }>;
}
