export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class GameLiftMetrics {
    static activeInstancesAverage(dimensions: {
        FleetId: string;
    }): MetricWithDims<{
        FleetId: string;
    }>;
    static percentIdleInstancesAverage(dimensions: {
        FleetId: string;
    }): MetricWithDims<{
        FleetId: string;
    }>;
    static desiredInstancesAverage(dimensions: {
        FleetId: string;
    }): MetricWithDims<{
        FleetId: string;
    }>;
    static idleInstancesAverage(dimensions: {
        FleetId: string;
    }): MetricWithDims<{
        FleetId: string;
    }>;
    static maxInstancesAverage(dimensions: {
        FleetId: string;
    }): MetricWithDims<{
        FleetId: string;
    }>;
    static minInstancesAverage(dimensions: {
        FleetId: string;
    }): MetricWithDims<{
        FleetId: string;
    }>;
    static instanceInterruptionsSum(dimensions: {
        FleetId: string;
    }): MetricWithDims<{
        FleetId: string;
    }>;
}
