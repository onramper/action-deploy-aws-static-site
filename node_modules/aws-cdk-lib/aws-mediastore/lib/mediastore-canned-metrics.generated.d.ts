export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class MediaStoreMetrics {
    static requestCountSum(dimensions: {
        ContainerName: string;
    }): MetricWithDims<{
        ContainerName: string;
    }>;
    static turnaroundTimeAverage(dimensions: {
        ContainerName: string;
    }): MetricWithDims<{
        ContainerName: string;
    }>;
    static _4XxErrorCountSum(dimensions: {
        ContainerName: string;
    }): MetricWithDims<{
        ContainerName: string;
    }>;
    static _5XxErrorCountSum(dimensions: {
        ContainerName: string;
    }): MetricWithDims<{
        ContainerName: string;
    }>;
    static bytesDownloadedSum(dimensions: {
        ContainerName: string;
    }): MetricWithDims<{
        ContainerName: string;
    }>;
    static bytesUploadedSum(dimensions: {
        ContainerName: string;
    }): MetricWithDims<{
        ContainerName: string;
    }>;
    static totalTimeAverage(dimensions: {
        ContainerName: string;
    }): MetricWithDims<{
        ContainerName: string;
    }>;
}
