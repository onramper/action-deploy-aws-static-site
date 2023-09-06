export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class AppSyncMetrics {
    static _4XxErrorSum(dimensions: {
        GraphQLAPIId: string;
    }): MetricWithDims<{
        GraphQLAPIId: string;
    }>;
    static _5XxErrorSum(dimensions: {
        GraphQLAPIId: string;
    }): MetricWithDims<{
        GraphQLAPIId: string;
    }>;
    static latencyAverage(dimensions: {
        GraphQLAPIId: string;
    }): MetricWithDims<{
        GraphQLAPIId: string;
    }>;
}
