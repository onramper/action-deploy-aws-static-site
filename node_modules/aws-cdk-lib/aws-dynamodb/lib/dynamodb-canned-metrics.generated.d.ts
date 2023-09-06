export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class DynamoDBMetrics {
    static conditionalCheckFailedRequestsSum(dimensions: {
        TableName: string;
    }): MetricWithDims<{
        TableName: string;
    }>;
    static consumedReadCapacityUnitsSum(dimensions: {
        TableName: string;
    }): MetricWithDims<{
        TableName: string;
    }>;
    static consumedReadCapacityUnitsSum(dimensions: {
        TableName: string;
        GlobalSecondaryIndexName: string;
    }): MetricWithDims<{
        TableName: string;
        GlobalSecondaryIndexName: string;
    }>;
    static consumedWriteCapacityUnitsSum(dimensions: {
        TableName: string;
    }): MetricWithDims<{
        TableName: string;
    }>;
    static consumedWriteCapacityUnitsSum(dimensions: {
        TableName: string;
        GlobalSecondaryIndexName: string;
    }): MetricWithDims<{
        TableName: string;
        GlobalSecondaryIndexName: string;
    }>;
    static provisionedReadCapacityUnitsAverage(dimensions: {
        TableName: string;
    }): MetricWithDims<{
        TableName: string;
    }>;
    static provisionedReadCapacityUnitsAverage(dimensions: {
        TableName: string;
        GlobalSecondaryIndexName: string;
    }): MetricWithDims<{
        TableName: string;
        GlobalSecondaryIndexName: string;
    }>;
    static provisionedWriteCapacityUnitsAverage(dimensions: {
        TableName: string;
    }): MetricWithDims<{
        TableName: string;
    }>;
    static provisionedWriteCapacityUnitsAverage(dimensions: {
        TableName: string;
        GlobalSecondaryIndexName: string;
    }): MetricWithDims<{
        TableName: string;
        GlobalSecondaryIndexName: string;
    }>;
    static readThrottleEventsSum(dimensions: {
        TableName: string;
    }): MetricWithDims<{
        TableName: string;
    }>;
    static readThrottleEventsSum(dimensions: {
        TableName: string;
        GlobalSecondaryIndexName: string;
    }): MetricWithDims<{
        TableName: string;
        GlobalSecondaryIndexName: string;
    }>;
    static timeToLiveDeletedItemCountSum(dimensions: {
        TableName: string;
    }): MetricWithDims<{
        TableName: string;
    }>;
    static transactionConflictAverage(dimensions: {
        TableName: string;
    }): MetricWithDims<{
        TableName: string;
    }>;
    static writeThrottleEventsSum(dimensions: {
        TableName: string;
    }): MetricWithDims<{
        TableName: string;
    }>;
    static writeThrottleEventsSum(dimensions: {
        TableName: string;
        GlobalSecondaryIndexName: string;
    }): MetricWithDims<{
        TableName: string;
        GlobalSecondaryIndexName: string;
    }>;
    static successfulRequestLatencyAverage(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static successfulRequestLatencyAverage(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static successfulRequestLatencyAverage(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static successfulRequestLatencyAverage(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static successfulRequestLatencyAverage(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static successfulRequestLatencyAverage(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static successfulRequestLatencyAverage(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static successfulRequestLatencyAverage(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static successfulRequestLatencyAverage(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static successfulRequestLatencyAverage(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static successfulRequestLatencyAverage(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static successfulRequestLatencyAverage(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static successfulRequestLatencyAverage(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static successfulRequestLatencyAverage(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static systemErrorsSum(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static systemErrorsSum(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static systemErrorsSum(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static systemErrorsSum(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static systemErrorsSum(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static systemErrorsSum(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static systemErrorsSum(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static systemErrorsSum(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static systemErrorsSum(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static systemErrorsSum(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static systemErrorsSum(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static systemErrorsSum(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static systemErrorsSum(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static systemErrorsSum(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static throttledRequestsSum(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static throttledRequestsSum(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static throttledRequestsSum(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static throttledRequestsSum(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static throttledRequestsSum(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static throttledRequestsSum(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static throttledRequestsSum(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static throttledRequestsSum(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static throttledRequestsSum(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static throttledRequestsSum(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static throttledRequestsSum(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static throttledRequestsSum(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static throttledRequestsSum(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static throttledRequestsSum(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static returnedItemCountSum(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static returnedItemCountSum(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static returnedItemCountSum(dimensions: {
        TableName: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        Operation: string;
    }>;
    static onlineIndexConsumedWriteCapacitySum(dimensions: {
        TableName: string;
        GlobalSecondaryIndexName: string;
    }): MetricWithDims<{
        TableName: string;
        GlobalSecondaryIndexName: string;
    }>;
    static onlineIndexPercentageProgressAverage(dimensions: {
        TableName: string;
        GlobalSecondaryIndexName: string;
    }): MetricWithDims<{
        TableName: string;
        GlobalSecondaryIndexName: string;
    }>;
    static onlineIndexThrottleEventsSum(dimensions: {
        TableName: string;
        GlobalSecondaryIndexName: string;
    }): MetricWithDims<{
        TableName: string;
        GlobalSecondaryIndexName: string;
    }>;
    static ageOfOldestUnreplicatedRecordAverage(dimensions: {
        TableName: string;
        DelegatedOperation: string;
    }): MetricWithDims<{
        TableName: string;
        DelegatedOperation: string;
    }>;
    static consumedChangeDataCaptureUnitsAverage(dimensions: {
        TableName: string;
        DelegatedOperation: string;
    }): MetricWithDims<{
        TableName: string;
        DelegatedOperation: string;
    }>;
    static throttledPutRecordCountAverage(dimensions: {
        TableName: string;
        DelegatedOperation: string;
    }): MetricWithDims<{
        TableName: string;
        DelegatedOperation: string;
    }>;
    static pendingReplicationCountAverage(dimensions: {
        TableName: string;
        ReceivingRegion: string;
    }): MetricWithDims<{
        TableName: string;
        ReceivingRegion: string;
    }>;
    static replicationLatencyAverage(dimensions: {
        TableName: string;
        ReceivingRegion: string;
    }): MetricWithDims<{
        TableName: string;
        ReceivingRegion: string;
    }>;
    static returnedBytesAverage(dimensions: {
        TableName: string;
        StreamLabel: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        StreamLabel: string;
        Operation: string;
    }>;
    static returnedRecordsCountAverage(dimensions: {
        TableName: string;
        StreamLabel: string;
        Operation: string;
    }): MetricWithDims<{
        TableName: string;
        StreamLabel: string;
        Operation: string;
    }>;
    static accountMaxReadsMaximum(dimensions: {}): MetricWithDims<{}>;
    static accountMaxTableLevelReadsMaximum(dimensions: {}): MetricWithDims<{}>;
    static accountMaxTableLevelWritesMaximum(dimensions: {}): MetricWithDims<{}>;
    static accountMaxWritesMaximum(dimensions: {}): MetricWithDims<{}>;
    static accountProvisionedReadCapacityUtilizationAverage(dimensions: {}): MetricWithDims<{}>;
    static accountProvisionedWriteCapacityUtilizationAverage(dimensions: {}): MetricWithDims<{}>;
    static maxProvisionedTableReadCapacityUtilizationAverage(dimensions: {}): MetricWithDims<{}>;
    static maxProvisionedTableWriteCapacityUtilizationAverage(dimensions: {}): MetricWithDims<{}>;
    static userErrorsSum(dimensions: {}): MetricWithDims<{}>;
}
