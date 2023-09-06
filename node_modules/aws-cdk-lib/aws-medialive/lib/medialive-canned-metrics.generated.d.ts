export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class MediaLiveMetrics {
    static activeAlertsMaximum(dimensions: {
        ChannelId: string;
        Pipeline: string;
    }): MetricWithDims<{
        ChannelId: string;
        Pipeline: string;
    }>;
    static inputVideoFrameRateAverage(dimensions: {
        ChannelId: string;
        Pipeline: string;
    }): MetricWithDims<{
        ChannelId: string;
        Pipeline: string;
    }>;
    static fillMsecAverage(dimensions: {
        ChannelId: string;
        Pipeline: string;
    }): MetricWithDims<{
        ChannelId: string;
        Pipeline: string;
    }>;
    static inputLossSecondsSum(dimensions: {
        ChannelId: string;
        Pipeline: string;
    }): MetricWithDims<{
        ChannelId: string;
        Pipeline: string;
    }>;
    static rtpPacketsReceivedSum(dimensions: {
        ChannelId: string;
        Pipeline: string;
    }): MetricWithDims<{
        ChannelId: string;
        Pipeline: string;
    }>;
    static rtpPacketsRecoveredViaFecSum(dimensions: {
        ChannelId: string;
        Pipeline: string;
    }): MetricWithDims<{
        ChannelId: string;
        Pipeline: string;
    }>;
    static rtpPacketsLostSum(dimensions: {
        ChannelId: string;
        Pipeline: string;
    }): MetricWithDims<{
        ChannelId: string;
        Pipeline: string;
    }>;
    static fecRowPacketsReceivedSum(dimensions: {
        ChannelId: string;
        Pipeline: string;
    }): MetricWithDims<{
        ChannelId: string;
        Pipeline: string;
    }>;
    static fecColumnPacketsReceivedSum(dimensions: {
        ChannelId: string;
        Pipeline: string;
    }): MetricWithDims<{
        ChannelId: string;
        Pipeline: string;
    }>;
    static primaryInputActiveMinimum(dimensions: {
        ChannelId: string;
        Pipeline: string;
    }): MetricWithDims<{
        ChannelId: string;
        Pipeline: string;
    }>;
    static networkInAverage(dimensions: {
        ChannelId: string;
        Pipeline: string;
    }): MetricWithDims<{
        ChannelId: string;
        Pipeline: string;
    }>;
    static networkOutAverage(dimensions: {
        ChannelId: string;
        Pipeline: string;
    }): MetricWithDims<{
        ChannelId: string;
        Pipeline: string;
    }>;
    static pipelinesLockedMinimum(dimensions: {
        ChannelId: string;
        Pipeline: string;
    }): MetricWithDims<{
        ChannelId: string;
        Pipeline: string;
    }>;
    static inputTimecodesPresentMinimum(dimensions: {
        ChannelId: string;
        Pipeline: string;
    }): MetricWithDims<{
        ChannelId: string;
        Pipeline: string;
    }>;
}
