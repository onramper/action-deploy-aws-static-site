export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class EFSMetrics {
    static burstCreditBalanceAverage(dimensions: {
        FileSystemId: string;
    }): MetricWithDims<{
        FileSystemId: string;
    }>;
    static clientConnectionsSum(dimensions: {
        FileSystemId: string;
    }): MetricWithDims<{
        FileSystemId: string;
    }>;
    static dataReadIoBytesAverage(dimensions: {
        FileSystemId: string;
    }): MetricWithDims<{
        FileSystemId: string;
    }>;
    static dataWriteIoBytesAverage(dimensions: {
        FileSystemId: string;
    }): MetricWithDims<{
        FileSystemId: string;
    }>;
    static metaDataIoBytesAverage(dimensions: {
        FileSystemId: string;
    }): MetricWithDims<{
        FileSystemId: string;
    }>;
    static meteredIoBytesAverage(dimensions: {
        FileSystemId: string;
    }): MetricWithDims<{
        FileSystemId: string;
    }>;
    static percentIoLimitAverage(dimensions: {
        FileSystemId: string;
    }): MetricWithDims<{
        FileSystemId: string;
    }>;
    static permittedThroughputAverage(dimensions: {
        FileSystemId: string;
    }): MetricWithDims<{
        FileSystemId: string;
    }>;
    static totalIoBytesSum(dimensions: {
        FileSystemId: string;
    }): MetricWithDims<{
        FileSystemId: string;
    }>;
    static storageBytesAverage(dimensions: {
        FileSystemId: string;
        StorageClass: string;
    }): MetricWithDims<{
        FileSystemId: string;
        StorageClass: string;
    }>;
}
