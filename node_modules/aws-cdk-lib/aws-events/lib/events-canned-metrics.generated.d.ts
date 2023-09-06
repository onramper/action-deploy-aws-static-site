export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class EventsMetrics {
    static invocationsSum(dimensions: {
        RuleName: string;
    }): MetricWithDims<{
        RuleName: string;
    }>;
    static failedInvocationsSum(dimensions: {
        RuleName: string;
    }): MetricWithDims<{
        RuleName: string;
    }>;
    static deadLetterInvocationsSum(dimensions: {
        RuleName: string;
    }): MetricWithDims<{
        RuleName: string;
    }>;
    static triggeredRulesSum(dimensions: {
        RuleName: string;
    }): MetricWithDims<{
        RuleName: string;
    }>;
    static matchedEventsSum(dimensions: {
        RuleName: string;
    }): MetricWithDims<{
        RuleName: string;
    }>;
    static throttledRulesSum(dimensions: {
        RuleName: string;
    }): MetricWithDims<{
        RuleName: string;
    }>;
}
