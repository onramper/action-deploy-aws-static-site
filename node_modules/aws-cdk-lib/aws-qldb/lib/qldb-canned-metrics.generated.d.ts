export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class QLDBMetrics {
    static commandLatencyAverage(dimensions: {
        LedgerName: string;
    }): MetricWithDims<{
        LedgerName: string;
    }>;
    static journalStorageSum(dimensions: {
        LedgerName: string;
    }): MetricWithDims<{
        LedgerName: string;
    }>;
    static indexedStorageSum(dimensions: {
        LedgerName: string;
    }): MetricWithDims<{
        LedgerName: string;
    }>;
    static isImpairedSum(dimensions: {
        LedgerName: string;
    }): MetricWithDims<{
        LedgerName: string;
    }>;
    static occConflictExceptionsSum(dimensions: {
        LedgerName: string;
    }): MetricWithDims<{
        LedgerName: string;
    }>;
    static readIOsSum(dimensions: {
        LedgerName: string;
    }): MetricWithDims<{
        LedgerName: string;
    }>;
    static session4XxExceptionsSum(dimensions: {
        LedgerName: string;
    }): MetricWithDims<{
        LedgerName: string;
    }>;
    static session5XxExceptionsSum(dimensions: {
        LedgerName: string;
    }): MetricWithDims<{
        LedgerName: string;
    }>;
    static sessionRateExceededExceptionsSum(dimensions: {
        LedgerName: string;
    }): MetricWithDims<{
        LedgerName: string;
    }>;
    static writeIOsSum(dimensions: {
        LedgerName: string;
    }): MetricWithDims<{
        LedgerName: string;
    }>;
}
