export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class AppStreamMetrics {
    static capacityUtilizationAverage(dimensions: {
        Fleet: string;
    }): MetricWithDims<{
        Fleet: string;
    }>;
    static insufficientCapacityErrorSum(dimensions: {
        Fleet: string;
    }): MetricWithDims<{
        Fleet: string;
    }>;
    static actualCapacityAverage(dimensions: {
        Fleet: string;
    }): MetricWithDims<{
        Fleet: string;
    }>;
    static availableCapacityAverage(dimensions: {
        Fleet: string;
    }): MetricWithDims<{
        Fleet: string;
    }>;
    static desiredCapacityAverage(dimensions: {
        Fleet: string;
    }): MetricWithDims<{
        Fleet: string;
    }>;
    static inUseCapacityAverage(dimensions: {
        Fleet: string;
    }): MetricWithDims<{
        Fleet: string;
    }>;
    static pendingCapacityAverage(dimensions: {
        Fleet: string;
    }): MetricWithDims<{
        Fleet: string;
    }>;
    static runningCapacityAverage(dimensions: {
        Fleet: string;
    }): MetricWithDims<{
        Fleet: string;
    }>;
}
