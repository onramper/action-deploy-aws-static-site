export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class RDSMetrics {
    static cpuUtilizationAverage(dimensions: {
        DBInstanceIdentifier: string;
    }): MetricWithDims<{
        DBInstanceIdentifier: string;
    }>;
    static cpuUtilizationAverage(dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static readLatencyAverage(dimensions: {
        DBInstanceIdentifier: string;
    }): MetricWithDims<{
        DBInstanceIdentifier: string;
    }>;
    static readLatencyAverage(dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static databaseConnectionsSum(dimensions: {
        DBInstanceIdentifier: string;
    }): MetricWithDims<{
        DBInstanceIdentifier: string;
    }>;
    static databaseConnectionsSum(dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static freeStorageSpaceAverage(dimensions: {
        DBInstanceIdentifier: string;
    }): MetricWithDims<{
        DBInstanceIdentifier: string;
    }>;
    static freeStorageSpaceAverage(dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static freeableMemoryAverage(dimensions: {
        DBInstanceIdentifier: string;
    }): MetricWithDims<{
        DBInstanceIdentifier: string;
    }>;
    static freeableMemoryAverage(dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static readThroughputAverage(dimensions: {
        DBInstanceIdentifier: string;
    }): MetricWithDims<{
        DBInstanceIdentifier: string;
    }>;
    static readThroughputAverage(dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static readIopsAverage(dimensions: {
        DBInstanceIdentifier: string;
    }): MetricWithDims<{
        DBInstanceIdentifier: string;
    }>;
    static readIopsAverage(dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static writeLatencyAverage(dimensions: {
        DBInstanceIdentifier: string;
    }): MetricWithDims<{
        DBInstanceIdentifier: string;
    }>;
    static writeLatencyAverage(dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static writeThroughputAverage(dimensions: {
        DBInstanceIdentifier: string;
    }): MetricWithDims<{
        DBInstanceIdentifier: string;
    }>;
    static writeThroughputAverage(dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
    static writeIopsAverage(dimensions: {
        DBInstanceIdentifier: string;
    }): MetricWithDims<{
        DBInstanceIdentifier: string;
    }>;
    static writeIopsAverage(dimensions: {
        DBClusterIdentifier: string;
    }): MetricWithDims<{
        DBClusterIdentifier: string;
    }>;
}
