export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class DMSMetrics {
    static cdcLatencyTargetSum(dimensions: {
        ReplicationInstanceIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
    }>;
    static cdcLatencySourceSum(dimensions: {
        ReplicationInstanceIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
    }>;
    static availableMemoryAverage(dimensions: {
        ReplicationInstanceIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
    }>;
    static cdcChangesDiskTargetSum(dimensions: {
        ReplicationInstanceIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
    }>;
    static cdcChangesMemorySourceSum(dimensions: {
        ReplicationInstanceIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
    }>;
    static cdcChangesMemoryTargetSum(dimensions: {
        ReplicationInstanceIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
    }>;
    static cdcIncomingChangesSum(dimensions: {
        ReplicationInstanceIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
    }>;
    static cdcThroughputBandwidthSourceSum(dimensions: {
        ReplicationInstanceIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
    }>;
    static cdcThroughputBandwidthTargetSum(dimensions: {
        ReplicationInstanceIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
    }>;
    static cdcThroughputRowsSourceSum(dimensions: {
        ReplicationInstanceIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
    }>;
    static cdcThroughputRowsTargetSum(dimensions: {
        ReplicationInstanceIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
    }>;
    static cpuAllocatedSum(dimensions: {
        ReplicationInstanceIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
    }>;
    static cpuUtilizationAverage(dimensions: {
        ReplicationInstanceIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
    }>;
    static freeMemoryAverage(dimensions: {
        ReplicationInstanceIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
    }>;
    static fullLoadThroughputBandwidthSourceSum(dimensions: {
        ReplicationInstanceIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
    }>;
    static fullLoadThroughputBandwidthTargetSum(dimensions: {
        ReplicationInstanceIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
    }>;
    static fullLoadThroughputRowsSourceSum(dimensions: {
        ReplicationInstanceIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
    }>;
    static fullLoadThroughputRowsTargetSum(dimensions: {
        ReplicationInstanceIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
    }>;
    static memoryAllocatedAverage(dimensions: {
        ReplicationInstanceIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
    }>;
    static memoryUsageAverage(dimensions: {
        ReplicationInstanceIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
    }>;
    static swapUsageAverage(dimensions: {
        ReplicationInstanceIdentifier: string;
    }): MetricWithDims<{
        ReplicationInstanceIdentifier: string;
    }>;
}
