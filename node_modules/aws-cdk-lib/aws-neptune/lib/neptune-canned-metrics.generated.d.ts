export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class NeptuneMetrics {
    static cpuUtilizationAverage(dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static freeLocalStorageMinimum(dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static freeableMemoryMinimum(dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static gremlinErrorsSum(dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static gremlinRequestsSum(dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static gremlinRequestsPerSecAverage(dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static http413Sum(dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static http500Sum(dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static loaderRequestsSum(dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static networkReceiveThroughputSum(dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static sparqlErrorsSum(dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static sparqlRequestsPerSecSum(dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static volumeBytesUsedSum(dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static volumeReadIoPsSum(dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static volumeWriteIoPsSum(dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
}
