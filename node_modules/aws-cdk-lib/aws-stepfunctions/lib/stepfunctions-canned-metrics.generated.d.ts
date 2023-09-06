export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class StatesMetrics {
    static executionTimeAverage(dimensions: {
        StateMachineArn: string;
    }): MetricWithDims<{
        StateMachineArn: string;
    }>;
    static executionsFailedSum(dimensions: {
        StateMachineArn: string;
    }): MetricWithDims<{
        StateMachineArn: string;
    }>;
    static executionsSucceededSum(dimensions: {
        StateMachineArn: string;
    }): MetricWithDims<{
        StateMachineArn: string;
    }>;
    static executionsThrottledSum(dimensions: {
        StateMachineArn: string;
    }): MetricWithDims<{
        StateMachineArn: string;
    }>;
    static executionsAbortedSum(dimensions: {
        StateMachineArn: string;
    }): MetricWithDims<{
        StateMachineArn: string;
    }>;
    static executionsTimedOutSum(dimensions: {
        StateMachineArn: string;
    }): MetricWithDims<{
        StateMachineArn: string;
    }>;
    static activityTimeAverage(dimensions: {
        ActivityArn: string;
    }): MetricWithDims<{
        ActivityArn: string;
    }>;
    static activitiesSucceededSum(dimensions: {
        ActivityArn: string;
    }): MetricWithDims<{
        ActivityArn: string;
    }>;
    static activitiesFailedSum(dimensions: {
        ActivityArn: string;
    }): MetricWithDims<{
        ActivityArn: string;
    }>;
    static activitiesHeartbeatTimedOutSum(dimensions: {
        ActivityArn: string;
    }): MetricWithDims<{
        ActivityArn: string;
    }>;
    static activitiesScheduledSum(dimensions: {
        ActivityArn: string;
    }): MetricWithDims<{
        ActivityArn: string;
    }>;
    static activitiesStartedSum(dimensions: {
        ActivityArn: string;
    }): MetricWithDims<{
        ActivityArn: string;
    }>;
    static activitiesTimedOutSum(dimensions: {
        ActivityArn: string;
    }): MetricWithDims<{
        ActivityArn: string;
    }>;
    static activityRunTimeAverage(dimensions: {
        ActivityArn: string;
    }): MetricWithDims<{
        ActivityArn: string;
    }>;
    static activityScheduleTimeAverage(dimensions: {
        ActivityArn: string;
    }): MetricWithDims<{
        ActivityArn: string;
    }>;
}
