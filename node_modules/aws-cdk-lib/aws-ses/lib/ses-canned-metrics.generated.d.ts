export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class SESMetrics {
    static bounceSum(dimensions: {
        RuleName: string;
    }): MetricWithDims<{
        RuleName: string;
    }>;
    static bounceSum(dimensions: {
        "ses:configuration-set": string;
    }): MetricWithDims<{
        "ses:configuration-set": string;
    }>;
    static clickSum(dimensions: {
        RuleName: string;
    }): MetricWithDims<{
        RuleName: string;
    }>;
    static clickSum(dimensions: {
        "ses:configuration-set": string;
    }): MetricWithDims<{
        "ses:configuration-set": string;
    }>;
    static complaintSum(dimensions: {
        RuleName: string;
    }): MetricWithDims<{
        RuleName: string;
    }>;
    static complaintSum(dimensions: {
        "ses:configuration-set": string;
    }): MetricWithDims<{
        "ses:configuration-set": string;
    }>;
    static deliverySum(dimensions: {
        RuleName: string;
    }): MetricWithDims<{
        RuleName: string;
    }>;
    static deliverySum(dimensions: {
        "ses:configuration-set": string;
    }): MetricWithDims<{
        "ses:configuration-set": string;
    }>;
    static openSum(dimensions: {
        RuleName: string;
    }): MetricWithDims<{
        RuleName: string;
    }>;
    static openSum(dimensions: {
        "ses:configuration-set": string;
    }): MetricWithDims<{
        "ses:configuration-set": string;
    }>;
    static rejectSum(dimensions: {
        RuleName: string;
    }): MetricWithDims<{
        RuleName: string;
    }>;
    static rejectSum(dimensions: {
        "ses:configuration-set": string;
    }): MetricWithDims<{
        "ses:configuration-set": string;
    }>;
    static renderingFailureSum(dimensions: {
        RuleName: string;
    }): MetricWithDims<{
        RuleName: string;
    }>;
    static renderingFailureSum(dimensions: {
        "ses:configuration-set": string;
    }): MetricWithDims<{
        "ses:configuration-set": string;
    }>;
    static reputationBounceRateAverage(dimensions: {
        RuleName: string;
    }): MetricWithDims<{
        RuleName: string;
    }>;
    static reputationComplaintRateAverage(dimensions: {
        RuleName: string;
    }): MetricWithDims<{
        RuleName: string;
    }>;
    static sendSum(dimensions: {
        RuleName: string;
    }): MetricWithDims<{
        RuleName: string;
    }>;
    static sendSum(dimensions: {
        "ses:configuration-set": string;
    }): MetricWithDims<{
        "ses:configuration-set": string;
    }>;
    static reputationBounceRateSum(dimensions: {
        "ses:configuration-set": string;
    }): MetricWithDims<{
        "ses:configuration-set": string;
    }>;
    static reputationComplaintRateSum(dimensions: {
        "ses:configuration-set": string;
    }): MetricWithDims<{
        "ses:configuration-set": string;
    }>;
}
