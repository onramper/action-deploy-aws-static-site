export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class SageMakerMetrics {
    static invocationsSum(dimensions: {
        EndpointName: string;
        VariantName: string;
    }): MetricWithDims<{
        EndpointName: string;
        VariantName: string;
    }>;
    static invocation5XxErrorsSum(dimensions: {
        EndpointName: string;
        VariantName: string;
    }): MetricWithDims<{
        EndpointName: string;
        VariantName: string;
    }>;
    static invocation4XxErrorsSum(dimensions: {
        EndpointName: string;
        VariantName: string;
    }): MetricWithDims<{
        EndpointName: string;
        VariantName: string;
    }>;
    static invocationsPerInstanceSum(dimensions: {
        EndpointName: string;
        VariantName: string;
    }): MetricWithDims<{
        EndpointName: string;
        VariantName: string;
    }>;
    static modelLatencySum(dimensions: {
        EndpointName: string;
        VariantName: string;
    }): MetricWithDims<{
        EndpointName: string;
        VariantName: string;
    }>;
    static overheadLatencySum(dimensions: {
        EndpointName: string;
        VariantName: string;
    }): MetricWithDims<{
        EndpointName: string;
        VariantName: string;
    }>;
}
