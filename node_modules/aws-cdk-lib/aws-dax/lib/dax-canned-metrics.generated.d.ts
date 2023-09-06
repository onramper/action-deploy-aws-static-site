export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class DAXMetrics {
    static cpuUtilizationAverage(dimensions: {}): MetricWithDims<{}>;
    static failedRequestCountSum(dimensions: {}): MetricWithDims<{}>;
    static batchGetItemRequestCountSum(dimensions: {}): MetricWithDims<{}>;
    static errorRequestCountSum(dimensions: {}): MetricWithDims<{}>;
    static estimatedDbSizeAverage(dimensions: {}): MetricWithDims<{}>;
    static evictedSizeAverage(dimensions: {}): MetricWithDims<{}>;
    static faultRequestCountSum(dimensions: {}): MetricWithDims<{}>;
    static getItemRequestCountSum(dimensions: {}): MetricWithDims<{}>;
    static itemCacheHitsSum(dimensions: {}): MetricWithDims<{}>;
    static itemCacheMissesSum(dimensions: {}): MetricWithDims<{}>;
    static queryCacheHitsSum(dimensions: {}): MetricWithDims<{}>;
    static queryRequestCountSum(dimensions: {}): MetricWithDims<{}>;
    static scanCacheHitsSum(dimensions: {}): MetricWithDims<{}>;
    static totalRequestCountSum(dimensions: {}): MetricWithDims<{}>;
}
