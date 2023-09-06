export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class DocDBMetrics {
    static cpuUtilizationAverage(dimensions: {
        DBInstanceIdentifier: string;
    }): MetricWithDims<{
        DBInstanceIdentifier: string;
    }>;
    static databaseConnectionsAverage(dimensions: {
        DBInstanceIdentifier: string;
    }): MetricWithDims<{
        DBInstanceIdentifier: string;
    }>;
    static engineUptimeAverage(dimensions: {
        DBInstanceIdentifier: string;
    }): MetricWithDims<{
        DBInstanceIdentifier: string;
    }>;
    static readThroughputSum(dimensions: {
        DBInstanceIdentifier: string;
    }): MetricWithDims<{
        DBInstanceIdentifier: string;
    }>;
    static writeThroughputSum(dimensions: {
        DBInstanceIdentifier: string;
    }): MetricWithDims<{
        DBInstanceIdentifier: string;
    }>;
}
