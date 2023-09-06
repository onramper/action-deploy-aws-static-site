export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class IoT1ClickMetrics {
    static totalEventsSum(dimensions: {
        DeviceType: string;
    }): MetricWithDims<{
        DeviceType: string;
    }>;
    static remainingLifeAverage(dimensions: {
        DeviceType: string;
    }): MetricWithDims<{
        DeviceType: string;
    }>;
    static callbackInvocationErrorsSum(dimensions: {
        DeviceType: string;
    }): MetricWithDims<{
        DeviceType: string;
    }>;
}
