export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class MediaPackageMetrics {
    static egressRequestCountSum(dimensions: {
        Channel: string;
    }): MetricWithDims<{
        Channel: string;
    }>;
    static egressResponseTimeAverage(dimensions: {
        Channel: string;
    }): MetricWithDims<{
        Channel: string;
    }>;
    static egressBytesSum(dimensions: {
        Channel: string;
    }): MetricWithDims<{
        Channel: string;
    }>;
}
