export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class FSxMetrics {
    static dataReadBytesSum(dimensions: {
        FileSystemId: string;
    }): MetricWithDims<{
        FileSystemId: string;
    }>;
    static dataWriteBytesSum(dimensions: {
        FileSystemId: string;
    }): MetricWithDims<{
        FileSystemId: string;
    }>;
    static freeStorageCapacityAverage(dimensions: {
        FileSystemId: string;
    }): MetricWithDims<{
        FileSystemId: string;
    }>;
    static freeDataStorageCapacitySum(dimensions: {
        FileSystemId: string;
    }): MetricWithDims<{
        FileSystemId: string;
    }>;
    static dataReadOperationsSum(dimensions: {
        FileSystemId: string;
    }): MetricWithDims<{
        FileSystemId: string;
    }>;
    static dataWriteOperationsSum(dimensions: {
        FileSystemId: string;
    }): MetricWithDims<{
        FileSystemId: string;
    }>;
    static metadataOperationsSum(dimensions: {
        FileSystemId: string;
    }): MetricWithDims<{
        FileSystemId: string;
    }>;
}
