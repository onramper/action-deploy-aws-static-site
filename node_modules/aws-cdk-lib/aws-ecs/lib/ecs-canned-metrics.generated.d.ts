export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class ECSMetrics {
    static cpuUtilizationAverage(dimensions: {
        ClusterName: string;
        ServiceName: string;
    }): MetricWithDims<{
        ClusterName: string;
        ServiceName: string;
    }>;
    static cpuUtilizationAverage(dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static memoryUtilizationAverage(dimensions: {
        ClusterName: string;
        ServiceName: string;
    }): MetricWithDims<{
        ClusterName: string;
        ServiceName: string;
    }>;
    static memoryUtilizationAverage(dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static cpuReservationAverage(dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static memoryReservationAverage(dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static gpuReservationAverage(dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
}
