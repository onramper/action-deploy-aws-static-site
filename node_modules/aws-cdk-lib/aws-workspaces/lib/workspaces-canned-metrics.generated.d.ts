export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class WorkSpacesMetrics {
    static availableAverage(dimensions: {
        WorkspaceId: string;
    }): MetricWithDims<{
        WorkspaceId: string;
    }>;
    static unhealthyAverage(dimensions: {
        WorkspaceId: string;
    }): MetricWithDims<{
        WorkspaceId: string;
    }>;
    static sessionLaunchTimeAverage(dimensions: {
        WorkspaceId: string;
    }): MetricWithDims<{
        WorkspaceId: string;
    }>;
    static connectionSuccessSum(dimensions: {
        WorkspaceId: string;
    }): MetricWithDims<{
        WorkspaceId: string;
    }>;
    static connectionFailureSum(dimensions: {
        WorkspaceId: string;
    }): MetricWithDims<{
        WorkspaceId: string;
    }>;
    static connectionAttemptSum(dimensions: {
        WorkspaceId: string;
    }): MetricWithDims<{
        WorkspaceId: string;
    }>;
    static inSessionLatencyAverage(dimensions: {
        WorkspaceId: string;
    }): MetricWithDims<{
        WorkspaceId: string;
    }>;
    static sessionDisconnectSum(dimensions: {
        WorkspaceId: string;
    }): MetricWithDims<{
        WorkspaceId: string;
    }>;
    static userConnectedSum(dimensions: {
        WorkspaceId: string;
    }): MetricWithDims<{
        WorkspaceId: string;
    }>;
    static stoppedSum(dimensions: {
        WorkspaceId: string;
    }): MetricWithDims<{
        WorkspaceId: string;
    }>;
    static maintenanceSum(dimensions: {
        WorkspaceId: string;
    }): MetricWithDims<{
        WorkspaceId: string;
    }>;
}
