export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class CloudWatchSyntheticsMetrics {
    static _2XxSum(dimensions: {
        CanaryName: string;
    }): MetricWithDims<{
        CanaryName: string;
    }>;
    static _4XxSum(dimensions: {
        CanaryName: string;
    }): MetricWithDims<{
        CanaryName: string;
    }>;
    static _5XxSum(dimensions: {
        CanaryName: string;
    }): MetricWithDims<{
        CanaryName: string;
    }>;
    static durationMaximum(dimensions: {
        CanaryName: string;
    }): MetricWithDims<{
        CanaryName: string;
    }>;
    static failedSum(dimensions: {
        CanaryName: string;
    }): MetricWithDims<{
        CanaryName: string;
    }>;
    static failedRequestsSum(dimensions: {
        CanaryName: string;
    }): MetricWithDims<{
        CanaryName: string;
    }>;
    static successPercentAverage(dimensions: {
        CanaryName: string;
    }): MetricWithDims<{
        CanaryName: string;
    }>;
}
