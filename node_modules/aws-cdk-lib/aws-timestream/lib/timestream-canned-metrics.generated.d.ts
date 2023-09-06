export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class TimestreamMetrics {
    static userErrorsSum(dimensions: {
        Operation: string;
        DatabaseName: string;
        TableName: string;
    }): MetricWithDims<{
        Operation: string;
        DatabaseName: string;
        TableName: string;
    }>;
    static userErrorsSum(dimensions: {
        Operation: string;
        DatabaseName: string;
        TableName: string;
    }): MetricWithDims<{
        Operation: string;
        DatabaseName: string;
        TableName: string;
    }>;
    static systemErrorsSum(dimensions: {
        Operation: string;
        DatabaseName: string;
        TableName: string;
    }): MetricWithDims<{
        Operation: string;
        DatabaseName: string;
        TableName: string;
    }>;
    static systemErrorsSum(dimensions: {
        Operation: string;
        DatabaseName: string;
        TableName: string;
    }): MetricWithDims<{
        Operation: string;
        DatabaseName: string;
        TableName: string;
    }>;
    static successfulRequestLatencySampleCount(dimensions: {
        Operation: string;
        DatabaseName: string;
        TableName: string;
    }): MetricWithDims<{
        Operation: string;
        DatabaseName: string;
        TableName: string;
    }>;
    static successfulRequestLatencySampleCount(dimensions: {
        Operation: string;
        DatabaseName: string;
        TableName: string;
    }): MetricWithDims<{
        Operation: string;
        DatabaseName: string;
        TableName: string;
    }>;
    static successfulRequestLatencyp95(dimensions: {
        Operation: string;
        DatabaseName: string;
        TableName: string;
    }): MetricWithDims<{
        Operation: string;
        DatabaseName: string;
        TableName: string;
    }>;
}
