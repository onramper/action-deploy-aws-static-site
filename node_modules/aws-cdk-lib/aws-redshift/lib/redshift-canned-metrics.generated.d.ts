export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class RedshiftMetrics {
    static commitQueueLengthAverage(dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static concurrencyScalingActiveClustersAverage(dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static concurrencyScalingSecondsAverage(dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static cpuUtilizationAverage(dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static cpuUtilizationAverage(dimensions: {
        ClusterIdentifier: string;
        NodeID: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        NodeID: string;
    }>;
    static databaseConnectionsAverage(dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static healthStatusSum(dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static maintenanceModeSum(dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static maxConfiguredConcurrencyScalingClustersSum(dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static networkReceiveThroughputSum(dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static networkTransmitThroughputSum(dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static numExceededSchemaQuotasAverage(dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static percentageDiskSpaceUsedAverage(dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static percentageQuotaUsedAverage(dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static queriesCompletedPerSecondSum(dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static queryDurationAverage(dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static queryRuntimeBreakdownSum(dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static readIopsSum(dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static readLatencyAverage(dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static readLatencyAverage(dimensions: {
        ClusterIdentifier: string;
        NodeID: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        NodeID: string;
    }>;
    static readThroughputSum(dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static storageUsedAverage(dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static totalTableCountAverage(dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static wlmQueriesCompletedPerSecondAverage(dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static wlmQueriesCompletedPerSecondAverage(dimensions: {
        ClusterIdentifier: string;
        wlmid: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        wlmid: string;
    }>;
    static wlmQueriesCompletedPerSecondAverage(dimensions: {
        ClusterIdentifier: string;
        QueueName: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        QueueName: string;
    }>;
    static wlmQueryDurationAverage(dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static wlmQueryDurationAverage(dimensions: {
        ClusterIdentifier: string;
        wlmid: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        wlmid: string;
    }>;
    static wlmQueryDurationAverage(dimensions: {
        ClusterIdentifier: string;
        QueueName: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        QueueName: string;
    }>;
    static wlmQueueLengthSum(dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static writeIopsSum(dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static writeLatencyAverage(dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static writeLatencyAverage(dimensions: {
        ClusterIdentifier: string;
        NodeID: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        NodeID: string;
    }>;
    static writeThroughputSum(dimensions: {
        ClusterIdentifier: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
    }>;
    static networkReceiveThroughputAverage(dimensions: {
        ClusterIdentifier: string;
        NodeID: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        NodeID: string;
    }>;
    static networkTransmitThroughputAverage(dimensions: {
        ClusterIdentifier: string;
        NodeID: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        NodeID: string;
    }>;
    static readIopsAverage(dimensions: {
        ClusterIdentifier: string;
        NodeID: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        NodeID: string;
    }>;
    static readThroughputAverage(dimensions: {
        ClusterIdentifier: string;
        NodeID: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        NodeID: string;
    }>;
    static writeIopsAverage(dimensions: {
        ClusterIdentifier: string;
        NodeID: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        NodeID: string;
    }>;
    static writeThroughputAverage(dimensions: {
        ClusterIdentifier: string;
        NodeID: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        NodeID: string;
    }>;
    static queriesCompletedPerSecondAverage(dimensions: {
        ClusterIdentifier: string;
        wlmid: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        wlmid: string;
    }>;
    static wlmQueueWaitTimeAverage(dimensions: {
        ClusterIdentifier: string;
        wlmid: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        wlmid: string;
    }>;
    static wlmQueueWaitTimeAverage(dimensions: {
        ClusterIdentifier: string;
        QueueName: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        QueueName: string;
    }>;
    static wlmRunningQueriesAverage(dimensions: {
        ClusterIdentifier: string;
        wlmid: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        wlmid: string;
    }>;
    static wlmRunningQueriesAverage(dimensions: {
        ClusterIdentifier: string;
        QueueName: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        QueueName: string;
    }>;
    static wlmQueueLengthAverage(dimensions: {
        ClusterIdentifier: string;
        QueueName: string;
    }): MetricWithDims<{
        ClusterIdentifier: string;
        QueueName: string;
    }>;
}
