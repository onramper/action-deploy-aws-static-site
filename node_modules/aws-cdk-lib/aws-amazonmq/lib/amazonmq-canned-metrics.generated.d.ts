export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class AmazonMQMetrics {
    static ackRateAverage(dimensions: {
        Broker: string;
    }): MetricWithDims<{
        Broker: string;
    }>;
    static channelCountSum(dimensions: {
        Broker: string;
    }): MetricWithDims<{
        Broker: string;
    }>;
    static confirmRateAverage(dimensions: {
        Broker: string;
    }): MetricWithDims<{
        Broker: string;
    }>;
    static connectionCountSum(dimensions: {
        Broker: string;
    }): MetricWithDims<{
        Broker: string;
    }>;
    static consumerCountSum(dimensions: {
        Broker: string;
    }): MetricWithDims<{
        Broker: string;
    }>;
    static cpuCreditBalanceHeapUsageMaximum(dimensions: {
        Broker: string;
    }): MetricWithDims<{
        Broker: string;
    }>;
    static cpuUtilizationAverage(dimensions: {
        Broker: string;
    }): MetricWithDims<{
        Broker: string;
    }>;
    static currentConnectionsCountSum(dimensions: {
        Broker: string;
    }): MetricWithDims<{
        Broker: string;
    }>;
    static exchangeCountSum(dimensions: {
        Broker: string;
    }): MetricWithDims<{
        Broker: string;
    }>;
    static messageCountSum(dimensions: {
        Broker: string;
    }): MetricWithDims<{
        Broker: string;
    }>;
    static messageReadyCountSum(dimensions: {
        Broker: string;
    }): MetricWithDims<{
        Broker: string;
    }>;
    static messageUnacknowledgedCountSum(dimensions: {
        Broker: string;
    }): MetricWithDims<{
        Broker: string;
    }>;
    static networkInSum(dimensions: {
        Broker: string;
    }): MetricWithDims<{
        Broker: string;
    }>;
    static networkOutSum(dimensions: {
        Broker: string;
    }): MetricWithDims<{
        Broker: string;
    }>;
    static publishRateAverage(dimensions: {
        Broker: string;
    }): MetricWithDims<{
        Broker: string;
    }>;
    static queueCountSum(dimensions: {
        Broker: string;
    }): MetricWithDims<{
        Broker: string;
    }>;
    static totalConsumerCountSum(dimensions: {
        Broker: string;
    }): MetricWithDims<{
        Broker: string;
    }>;
    static totalMessageCountSum(dimensions: {
        Broker: string;
    }): MetricWithDims<{
        Broker: string;
    }>;
    static totalProducerCountSum(dimensions: {
        Broker: string;
    }): MetricWithDims<{
        Broker: string;
    }>;
}
