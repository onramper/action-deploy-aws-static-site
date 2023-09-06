export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class IoTMetrics {
    static topicMatchSum(dimensions: {
        RuleName: string;
    }): MetricWithDims<{
        RuleName: string;
    }>;
    static parseErrorSum(dimensions: {
        RuleName: string;
    }): MetricWithDims<{
        RuleName: string;
    }>;
    static ruleMessageThrottledSum(dimensions: {
        RuleName: string;
    }): MetricWithDims<{
        RuleName: string;
    }>;
    static ruleNotFoundSum(dimensions: {
        RuleName: string;
    }): MetricWithDims<{
        RuleName: string;
    }>;
}
