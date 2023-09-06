export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class ElasticBeanstalkMetrics {
    static environmentHealthAverage(dimensions: {
        EnvironmentName: string;
    }): MetricWithDims<{
        EnvironmentName: string;
    }>;
    static applicationRequests5XxAverage(dimensions: {
        EnvironmentName: string;
    }): MetricWithDims<{
        EnvironmentName: string;
    }>;
    static applicationRequests2XxAverage(dimensions: {
        EnvironmentName: string;
    }): MetricWithDims<{
        EnvironmentName: string;
    }>;
    static applicationRequests3XxAverage(dimensions: {
        EnvironmentName: string;
    }): MetricWithDims<{
        EnvironmentName: string;
    }>;
    static applicationRequests4XxAverage(dimensions: {
        EnvironmentName: string;
    }): MetricWithDims<{
        EnvironmentName: string;
    }>;
}
