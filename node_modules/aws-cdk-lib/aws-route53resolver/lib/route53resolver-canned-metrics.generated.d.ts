export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class Route53ResolverMetrics {
    static inboundQueryVolumeSum(dimensions: {
        EndpointId: string;
    }): MetricWithDims<{
        EndpointId: string;
    }>;
    static outboundQueryVolumeSum(dimensions: {
        EndpointId: string;
    }): MetricWithDims<{
        EndpointId: string;
    }>;
    static outboundQueryAggregateVolumeSum(dimensions: {
        EndpointId: string;
    }): MetricWithDims<{
        EndpointId: string;
    }>;
}
