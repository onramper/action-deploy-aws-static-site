export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class ElasticMapReduceMetrics {
    static appsCompletedSum(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static appsFailedSum(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static appsKilledSum(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static appsPendingSum(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static appsRunningSum(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static appsSubmittedSum(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static backupFailedAverage(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static capacityRemainingGbSum(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static containerAllocatedSum(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static containerPendingSum(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static containerPendingRatioSum(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static containerReservedSum(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static coreNodesPendingAverage(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static coreNodesRunningAverage(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static corruptBlocksSum(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static dfsPendingReplicationBlocksSum(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static hbaseBackupFailedSum(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static hdfsBytesReadSum(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static hdfsBytesWrittenSum(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static hdfsUtilizationAverage(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static isIdleAverage(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static jobsFailedAverage(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static jobsRunningAverage(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static liveDataNodesAverage(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static liveTaskTrackersAverage(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static mapSlotsOpenAverage(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static mapTasksRemainingAverage(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static mapTasksRunningAverage(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static memoryAllocatedMbSum(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static memoryReservedMbSum(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static memoryTotalMbSum(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static missingBlocksAverage(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static mostRecentBackupDurationAverage(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static mrActiveNodesSum(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static mrDecommissionedNodesSum(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static mrLostNodesSum(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static mrRebootedNodesSum(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static mrTotalNodesSum(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static mrUnhealthyNodesSum(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static multiMasterInstanceGroupNodesRequestedSum(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static multiMasterInstanceGroupNodesRunningSum(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static multiMasterInstanceGroupNodesRunningPercentageAverage(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static pendingDeletionBlocksSum(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static reduceSlotsOpenAverage(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static reduceTasksRemainingAverage(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static reduceTasksRunningAverage(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static remainingMapTasksPerSlotAverage(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static s3BytesReadSum(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static s3BytesWrittenSum(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static taskNodesPendingAverage(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static taskNodesRunningAverage(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static timeSinceLastSuccessfulBackupAverage(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static totalLoadAverage(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static underReplicatedBlocksSum(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
    static yarnMemoryAvailablePercentageAverage(dimensions: {
        JobFlowId: string;
    }): MetricWithDims<{
        JobFlowId: string;
    }>;
}
