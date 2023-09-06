export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class S3Metrics {
    static bucketSizeBytesAverage(dimensions: {
        BucketName: string;
        StorageType: string;
    }): MetricWithDims<{
        BucketName: string;
        StorageType: string;
    }>;
    static numberOfObjectsAverage(dimensions: {
        BucketName: string;
        StorageType: string;
    }): MetricWithDims<{
        BucketName: string;
        StorageType: string;
    }>;
}
