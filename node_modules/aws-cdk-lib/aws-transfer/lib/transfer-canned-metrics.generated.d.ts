export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class TransferMetrics {
    static bytesInSum(dimensions: {
        ServerId: string;
    }): MetricWithDims<{
        ServerId: string;
    }>;
    static bytesOutSum(dimensions: {
        ServerId: string;
    }): MetricWithDims<{
        ServerId: string;
    }>;
}
