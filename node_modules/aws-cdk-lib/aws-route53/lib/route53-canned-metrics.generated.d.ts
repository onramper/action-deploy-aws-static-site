export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class Route53Metrics {
    static healthCheckPercentageHealthyAverage(dimensions: {
        HealthCheckId: string;
    }): MetricWithDims<{
        HealthCheckId: string;
    }>;
    static connectionTimeAverage(dimensions: {
        HealthCheckId: string;
    }): MetricWithDims<{
        HealthCheckId: string;
    }>;
    static healthCheckStatusMinimum(dimensions: {
        HealthCheckId: string;
    }): MetricWithDims<{
        HealthCheckId: string;
    }>;
    static sslHandshakeTimeAverage(dimensions: {
        HealthCheckId: string;
    }): MetricWithDims<{
        HealthCheckId: string;
    }>;
    static childHealthCheckHealthyCountAverage(dimensions: {
        HealthCheckId: string;
    }): MetricWithDims<{
        HealthCheckId: string;
    }>;
    static timeToFirstByteAverage(dimensions: {
        HealthCheckId: string;
    }): MetricWithDims<{
        HealthCheckId: string;
    }>;
}
