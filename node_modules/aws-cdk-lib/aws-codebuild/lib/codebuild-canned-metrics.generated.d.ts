export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class CodeBuildMetrics {
    static succeededBuildsSum(dimensions: {
        ProjectName: string;
    }): MetricWithDims<{
        ProjectName: string;
    }>;
    static failedBuildsSum(dimensions: {
        ProjectName: string;
    }): MetricWithDims<{
        ProjectName: string;
    }>;
    static buildsSum(dimensions: {
        ProjectName: string;
    }): MetricWithDims<{
        ProjectName: string;
    }>;
    static durationAverage(dimensions: {
        ProjectName: string;
    }): MetricWithDims<{
        ProjectName: string;
    }>;
}
