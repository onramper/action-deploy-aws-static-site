export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class GlobalAcceleratorMetrics {
    static newFlowCountSum(dimensions: {
        Accelerator: string;
    }): MetricWithDims<{
        Accelerator: string;
    }>;
    static processedBytesInSum(dimensions: {
        Accelerator: string;
    }): MetricWithDims<{
        Accelerator: string;
    }>;
    static processedBytesOutSum(dimensions: {
        Accelerator: string;
    }): MetricWithDims<{
        Accelerator: string;
    }>;
}
