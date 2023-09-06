export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class IoTAnalyticsMetrics {
    static incomingMessagesSum(dimensions: {
        ChannelName: string;
    }): MetricWithDims<{
        ChannelName: string;
    }>;
    static incomingMessagesSum(dimensions: {
        DatasetName: string;
    }): MetricWithDims<{
        DatasetName: string;
    }>;
    static incomingMessagesSum(dimensions: {
        DatastoreName: string;
    }): MetricWithDims<{
        DatastoreName: string;
    }>;
    static incomingMessagesSum(dimensions: {
        PipelineActivityName: string;
    }): MetricWithDims<{
        PipelineActivityName: string;
    }>;
    static actionExecutionSum(dimensions: {
        DatasetName: string;
    }): MetricWithDims<{
        DatasetName: string;
    }>;
    static actionExecutionSum(dimensions: {
        DatastoreName: string;
    }): MetricWithDims<{
        DatastoreName: string;
    }>;
    static actionExecutionSum(dimensions: {
        PipelineActivityName: string;
    }): MetricWithDims<{
        PipelineActivityName: string;
    }>;
    static actionExecutionThrottledSum(dimensions: {
        DatasetName: string;
    }): MetricWithDims<{
        DatasetName: string;
    }>;
    static actionExecutionThrottledSum(dimensions: {
        DatastoreName: string;
    }): MetricWithDims<{
        DatastoreName: string;
    }>;
    static actionExecutionThrottledSum(dimensions: {
        PipelineActivityName: string;
    }): MetricWithDims<{
        PipelineActivityName: string;
    }>;
    static activityExecutionErrorSum(dimensions: {
        DatasetName: string;
    }): MetricWithDims<{
        DatasetName: string;
    }>;
    static activityExecutionErrorSum(dimensions: {
        DatastoreName: string;
    }): MetricWithDims<{
        DatastoreName: string;
    }>;
    static activityExecutionErrorSum(dimensions: {
        PipelineActivityName: string;
    }): MetricWithDims<{
        PipelineActivityName: string;
    }>;
    static pipelineConcurrentExecutionCountSum(dimensions: {
        DatasetName: string;
    }): MetricWithDims<{
        DatasetName: string;
    }>;
    static pipelineConcurrentExecutionCountSum(dimensions: {
        DatastoreName: string;
    }): MetricWithDims<{
        DatastoreName: string;
    }>;
    static pipelineConcurrentExecutionCountSum(dimensions: {
        PipelineActivityName: string;
    }): MetricWithDims<{
        PipelineActivityName: string;
    }>;
}
