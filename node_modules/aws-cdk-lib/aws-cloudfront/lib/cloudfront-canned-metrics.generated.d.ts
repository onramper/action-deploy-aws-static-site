export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class CloudFrontMetrics {
    static requestsSum(dimensions: {
        DistributionId: string;
        Region: string;
    }): MetricWithDims<{
        DistributionId: string;
        Region: string;
    }>;
    static totalErrorRateAverage(dimensions: {
        DistributionId: string;
        Region: string;
    }): MetricWithDims<{
        DistributionId: string;
        Region: string;
    }>;
    static bytesDownloadedSum(dimensions: {
        DistributionId: string;
        Region: string;
    }): MetricWithDims<{
        DistributionId: string;
        Region: string;
    }>;
    static bytesUploadedSum(dimensions: {
        DistributionId: string;
        Region: string;
    }): MetricWithDims<{
        DistributionId: string;
        Region: string;
    }>;
    static _4XxErrorRateAverage(dimensions: {
        DistributionId: string;
        Region: string;
    }): MetricWithDims<{
        DistributionId: string;
        Region: string;
    }>;
    static _5XxErrorRateAverage(dimensions: {
        DistributionId: string;
        Region: string;
    }): MetricWithDims<{
        DistributionId: string;
        Region: string;
    }>;
}
