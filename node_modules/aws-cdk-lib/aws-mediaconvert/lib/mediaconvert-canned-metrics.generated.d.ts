export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class MediaConvertMetrics {
    static transcodingTimeAverage(dimensions: {
        Queue: string;
    }): MetricWithDims<{
        Queue: string;
    }>;
    static jobsCompletedCountSum(dimensions: {
        Queue: string;
    }): MetricWithDims<{
        Queue: string;
    }>;
    static _8KOutputDurationAverage(dimensions: {
        Queue: string;
    }): MetricWithDims<{
        Queue: string;
    }>;
    static audioOutputDurationAverage(dimensions: {
        Queue: string;
    }): MetricWithDims<{
        Queue: string;
    }>;
    static hdOutputDurationAverage(dimensions: {
        Queue: string;
    }): MetricWithDims<{
        Queue: string;
    }>;
    static jobsErroredCountSum(dimensions: {
        Queue: string;
    }): MetricWithDims<{
        Queue: string;
    }>;
    static sdOutputDurationAverage(dimensions: {
        Queue: string;
    }): MetricWithDims<{
        Queue: string;
    }>;
    static standbyTimeSum(dimensions: {
        Queue: string;
    }): MetricWithDims<{
        Queue: string;
    }>;
    static uhdOutputDurationAverage(dimensions: {
        Queue: string;
    }): MetricWithDims<{
        Queue: string;
    }>;
}
