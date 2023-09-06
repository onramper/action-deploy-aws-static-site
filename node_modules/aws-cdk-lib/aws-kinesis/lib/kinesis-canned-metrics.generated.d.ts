export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class KinesisMetrics {
    static readProvisionedThroughputExceededSum(dimensions: {
        StreamName: string;
    }): MetricWithDims<{
        StreamName: string;
    }>;
    static writeProvisionedThroughputExceededSum(dimensions: {
        StreamName: string;
    }): MetricWithDims<{
        StreamName: string;
    }>;
    static getRecordsIteratorAgeMillisecondsMaximum(dimensions: {
        StreamName: string;
    }): MetricWithDims<{
        StreamName: string;
    }>;
    static putRecordSuccessSum(dimensions: {
        StreamName: string;
    }): MetricWithDims<{
        StreamName: string;
    }>;
    static putRecordsSuccessSum(dimensions: {
        StreamName: string;
    }): MetricWithDims<{
        StreamName: string;
    }>;
    static putRecordsBytesSum(dimensions: {
        StreamName: string;
    }): MetricWithDims<{
        StreamName: string;
    }>;
    static getRecordsSuccessSum(dimensions: {
        StreamName: string;
    }): MetricWithDims<{
        StreamName: string;
    }>;
    static getRecordsBytesSum(dimensions: {
        StreamName: string;
    }): MetricWithDims<{
        StreamName: string;
    }>;
    static getRecordsRecordsSum(dimensions: {
        StreamName: string;
    }): MetricWithDims<{
        StreamName: string;
    }>;
    static getRecordsLatencyMaximum(dimensions: {
        StreamName: string;
    }): MetricWithDims<{
        StreamName: string;
    }>;
    static incomingBytesSum(dimensions: {
        StreamName: string;
    }): MetricWithDims<{
        StreamName: string;
    }>;
    static incomingRecordsSum(dimensions: {
        StreamName: string;
    }): MetricWithDims<{
        StreamName: string;
    }>;
}
