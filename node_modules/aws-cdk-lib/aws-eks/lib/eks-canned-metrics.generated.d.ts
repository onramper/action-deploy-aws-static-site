export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class ContainerInsightsMetrics {
    static nodeCpuLimitSum(dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static nodeCpuUsageTotalSum(dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static nodeMemoryLimitSum(dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static nodeMemoryWorkingSetSum(dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static podNetworkRxBytesAverage(dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static podNetworkTxBytesAverage(dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static nodeNetworkTotalBytesAverage(dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static clusterFailedNodeCountAverage(dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static nodeFilesystemUtilizationp90(dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static clusterNodeCountAverage(dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
    static podCpuUtilizationAverage(dimensions: {
        ClusterName: string;
    }): MetricWithDims<{
        ClusterName: string;
    }>;
}
