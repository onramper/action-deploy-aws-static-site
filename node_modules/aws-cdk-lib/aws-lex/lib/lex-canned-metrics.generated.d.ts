export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class LexMetrics {
    static runtimeRequestCountSum(dimensions: {
        BotAlias: string;
        BotName: string;
        Operation: string;
    }): MetricWithDims<{
        BotAlias: string;
        BotName: string;
        Operation: string;
    }>;
    static runtimeSuccessfulRequestLatencyAverage(dimensions: {
        BotAlias: string;
        BotName: string;
        Operation: string;
    }): MetricWithDims<{
        BotAlias: string;
        BotName: string;
        Operation: string;
    }>;
    static runtimeInvalidLambdaResponsesSum(dimensions: {
        BotAlias: string;
        BotName: string;
        Operation: string;
    }): MetricWithDims<{
        BotAlias: string;
        BotName: string;
        Operation: string;
    }>;
    static runtimeLambdaErrorsSum(dimensions: {
        BotAlias: string;
        BotName: string;
        Operation: string;
    }): MetricWithDims<{
        BotAlias: string;
        BotName: string;
        Operation: string;
    }>;
    static missedUtteranceCountSum(dimensions: {
        BotAlias: string;
        BotName: string;
        Operation: string;
    }): MetricWithDims<{
        BotAlias: string;
        BotName: string;
        Operation: string;
    }>;
    static runtimePollyErrorsSum(dimensions: {
        BotAlias: string;
        BotName: string;
        Operation: string;
    }): MetricWithDims<{
        BotAlias: string;
        BotName: string;
        Operation: string;
    }>;
    static runtimeSystemErrorsSum(dimensions: {
        BotAlias: string;
        BotName: string;
        Operation: string;
    }): MetricWithDims<{
        BotAlias: string;
        BotName: string;
        Operation: string;
    }>;
    static runtimeThrottledEventsSum(dimensions: {
        BotAlias: string;
        BotName: string;
        Operation: string;
    }): MetricWithDims<{
        BotAlias: string;
        BotName: string;
        Operation: string;
    }>;
    static runtimeUserErrorsSum(dimensions: {
        BotAlias: string;
        BotName: string;
        Operation: string;
    }): MetricWithDims<{
        BotAlias: string;
        BotName: string;
        Operation: string;
    }>;
}
