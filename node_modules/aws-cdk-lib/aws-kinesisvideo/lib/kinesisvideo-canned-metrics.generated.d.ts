export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class KinesisVideoMetrics {
    static getMediaSuccessSum(dimensions: {
        StreamName: string;
    }): MetricWithDims<{
        StreamName: string;
    }>;
    static putMediaSuccessSum(dimensions: {
        StreamName: string;
    }): MetricWithDims<{
        StreamName: string;
    }>;
    static getMediaMillisBehindNowSum(dimensions: {
        StreamName: string;
    }): MetricWithDims<{
        StreamName: string;
    }>;
    static listFragmentsLatencySum(dimensions: {
        StreamName: string;
    }): MetricWithDims<{
        StreamName: string;
    }>;
    static putMediaFragmentIngestionLatencySum(dimensions: {
        StreamName: string;
    }): MetricWithDims<{
        StreamName: string;
    }>;
    static putMediaFragmentPersistLatencySum(dimensions: {
        StreamName: string;
    }): MetricWithDims<{
        StreamName: string;
    }>;
    static putMediaIncomingBytesSum(dimensions: {
        StreamName: string;
    }): MetricWithDims<{
        StreamName: string;
    }>;
    static putMediaIncomingFramesSum(dimensions: {
        StreamName: string;
    }): MetricWithDims<{
        StreamName: string;
    }>;
}
