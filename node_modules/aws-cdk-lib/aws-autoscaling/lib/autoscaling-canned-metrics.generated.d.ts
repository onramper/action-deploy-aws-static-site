export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class AutoScalingMetrics {
    static groupTotalInstancesAverage(dimensions: {
        AutoScalingGroupName: string;
    }): MetricWithDims<{
        AutoScalingGroupName: string;
    }>;
    static groupDesiredCapacityAverage(dimensions: {
        AutoScalingGroupName: string;
    }): MetricWithDims<{
        AutoScalingGroupName: string;
    }>;
    static groupMaxSizeAverage(dimensions: {
        AutoScalingGroupName: string;
    }): MetricWithDims<{
        AutoScalingGroupName: string;
    }>;
    static groupMinSizeAverage(dimensions: {
        AutoScalingGroupName: string;
    }): MetricWithDims<{
        AutoScalingGroupName: string;
    }>;
    static groupTerminatingInstancesAverage(dimensions: {
        AutoScalingGroupName: string;
    }): MetricWithDims<{
        AutoScalingGroupName: string;
    }>;
    static groupPendingInstancesAverage(dimensions: {
        AutoScalingGroupName: string;
    }): MetricWithDims<{
        AutoScalingGroupName: string;
    }>;
    static groupInServiceInstancesAverage(dimensions: {
        AutoScalingGroupName: string;
    }): MetricWithDims<{
        AutoScalingGroupName: string;
    }>;
    static groupStandbyInstancesAverage(dimensions: {
        AutoScalingGroupName: string;
    }): MetricWithDims<{
        AutoScalingGroupName: string;
    }>;
}
