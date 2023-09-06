export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class KinesisAnalyticsMetrics {
    static kpUsAverage(dimensions: {
        Application: string;
    }): MetricWithDims<{
        Application: string;
    }>;
    static millisBehindLatestAverage(dimensions: {
        Application: string;
    }): MetricWithDims<{
        Application: string;
    }>;
}
