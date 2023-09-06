export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class EC2CapacityReservationsMetrics {
    static instanceUtilizationAverage(dimensions: {
        CapacityReservationId: string;
    }): MetricWithDims<{
        CapacityReservationId: string;
    }>;
    static usedInstanceCountAverage(dimensions: {
        CapacityReservationId: string;
    }): MetricWithDims<{
        CapacityReservationId: string;
    }>;
    static availableInstanceCountAverage(dimensions: {
        CapacityReservationId: string;
    }): MetricWithDims<{
        CapacityReservationId: string;
    }>;
    static totalInstanceCountAverage(dimensions: {
        CapacityReservationId: string;
    }): MetricWithDims<{
        CapacityReservationId: string;
    }>;
}
export declare class EBSMetrics {
    static volumeReadBytesSum(dimensions: {
        VolumeId: string;
    }): MetricWithDims<{
        VolumeId: string;
    }>;
    static volumeWriteBytesSum(dimensions: {
        VolumeId: string;
    }): MetricWithDims<{
        VolumeId: string;
    }>;
    static volumeReadOpsSum(dimensions: {
        VolumeId: string;
    }): MetricWithDims<{
        VolumeId: string;
    }>;
    static volumeTotalReadTimeAverage(dimensions: {
        VolumeId: string;
    }): MetricWithDims<{
        VolumeId: string;
    }>;
    static volumeWriteOpsSum(dimensions: {
        VolumeId: string;
    }): MetricWithDims<{
        VolumeId: string;
    }>;
    static volumeTotalWriteTimeAverage(dimensions: {
        VolumeId: string;
    }): MetricWithDims<{
        VolumeId: string;
    }>;
    static volumeIdleTimeAverage(dimensions: {
        VolumeId: string;
    }): MetricWithDims<{
        VolumeId: string;
    }>;
    static volumeQueueLengthAverage(dimensions: {
        VolumeId: string;
    }): MetricWithDims<{
        VolumeId: string;
    }>;
    static burstBalanceAverage(dimensions: {
        VolumeId: string;
    }): MetricWithDims<{
        VolumeId: string;
    }>;
}
export declare class EC2Metrics {
    static cpuCreditUsageAverage(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static cpuCreditBalanceAverage(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static cpuSurplusCreditBalanceAverage(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static cpuSurplusCreditsChargedAverage(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static cpuUtilizationAverage(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static cpuUtilizationAverage(dimensions: {}): MetricWithDims<{}>;
    static cpuUtilizationAverage(dimensions: {
        AutoScalingGroupName: string;
    }): MetricWithDims<{
        AutoScalingGroupName: string;
    }>;
    static cpuUtilizationAverage(dimensions: {
        ImageId: string;
    }): MetricWithDims<{
        ImageId: string;
    }>;
    static cpuUtilizationAverage(dimensions: {
        InstanceType: string;
    }): MetricWithDims<{
        InstanceType: string;
    }>;
    static diskReadBytesAverage(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static diskReadBytesAverage(dimensions: {}): MetricWithDims<{}>;
    static diskReadBytesAverage(dimensions: {
        AutoScalingGroupName: string;
    }): MetricWithDims<{
        AutoScalingGroupName: string;
    }>;
    static diskReadBytesAverage(dimensions: {
        ImageId: string;
    }): MetricWithDims<{
        ImageId: string;
    }>;
    static diskReadBytesAverage(dimensions: {
        InstanceType: string;
    }): MetricWithDims<{
        InstanceType: string;
    }>;
    static diskReadOpsAverage(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static diskReadOpsAverage(dimensions: {}): MetricWithDims<{}>;
    static diskReadOpsAverage(dimensions: {
        AutoScalingGroupName: string;
    }): MetricWithDims<{
        AutoScalingGroupName: string;
    }>;
    static diskReadOpsAverage(dimensions: {
        ImageId: string;
    }): MetricWithDims<{
        ImageId: string;
    }>;
    static diskReadOpsAverage(dimensions: {
        InstanceType: string;
    }): MetricWithDims<{
        InstanceType: string;
    }>;
    static diskWriteBytesAverage(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static diskWriteBytesAverage(dimensions: {}): MetricWithDims<{}>;
    static diskWriteBytesAverage(dimensions: {
        AutoScalingGroupName: string;
    }): MetricWithDims<{
        AutoScalingGroupName: string;
    }>;
    static diskWriteBytesAverage(dimensions: {
        ImageId: string;
    }): MetricWithDims<{
        ImageId: string;
    }>;
    static diskWriteBytesAverage(dimensions: {
        InstanceType: string;
    }): MetricWithDims<{
        InstanceType: string;
    }>;
    static diskWriteOpsAverage(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static diskWriteOpsAverage(dimensions: {}): MetricWithDims<{}>;
    static diskWriteOpsAverage(dimensions: {
        AutoScalingGroupName: string;
    }): MetricWithDims<{
        AutoScalingGroupName: string;
    }>;
    static diskWriteOpsAverage(dimensions: {
        ImageId: string;
    }): MetricWithDims<{
        ImageId: string;
    }>;
    static diskWriteOpsAverage(dimensions: {
        InstanceType: string;
    }): MetricWithDims<{
        InstanceType: string;
    }>;
    static metadataNoTokenSum(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static metadataNoTokenSum(dimensions: {}): MetricWithDims<{}>;
    static networkInAverage(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static networkInAverage(dimensions: {}): MetricWithDims<{}>;
    static networkInAverage(dimensions: {
        AutoScalingGroupName: string;
    }): MetricWithDims<{
        AutoScalingGroupName: string;
    }>;
    static networkInAverage(dimensions: {
        ImageId: string;
    }): MetricWithDims<{
        ImageId: string;
    }>;
    static networkInAverage(dimensions: {
        InstanceType: string;
    }): MetricWithDims<{
        InstanceType: string;
    }>;
    static networkOutAverage(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static networkOutAverage(dimensions: {}): MetricWithDims<{}>;
    static networkOutAverage(dimensions: {
        AutoScalingGroupName: string;
    }): MetricWithDims<{
        AutoScalingGroupName: string;
    }>;
    static networkOutAverage(dimensions: {
        ImageId: string;
    }): MetricWithDims<{
        ImageId: string;
    }>;
    static networkOutAverage(dimensions: {
        InstanceType: string;
    }): MetricWithDims<{
        InstanceType: string;
    }>;
    static networkPacketsInAverage(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static networkPacketsInAverage(dimensions: {}): MetricWithDims<{}>;
    static networkPacketsInAverage(dimensions: {
        AutoScalingGroupName: string;
    }): MetricWithDims<{
        AutoScalingGroupName: string;
    }>;
    static networkPacketsOutAverage(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static networkPacketsOutAverage(dimensions: {}): MetricWithDims<{}>;
    static networkPacketsOutAverage(dimensions: {
        AutoScalingGroupName: string;
    }): MetricWithDims<{
        AutoScalingGroupName: string;
    }>;
    static statusCheckFailedSum(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static statusCheckFailedInstanceSum(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static statusCheckFailedSystemSum(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
}
export declare class CWAgentMetrics {
    static cpuUsageIdleAverage(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static cpuUsageIowaitAverage(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static cpuUsageStealAverage(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static cpuUsageSystemAverage(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static cpuUsageUserAverage(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static diskInodesFreeSum(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static diskInodesTotalSum(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static diskInodesUsedSum(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static diskUsedPercentAverage(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static diskioIoTimeAverage(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static diskioReadBytesAverage(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static diskioReadsAverage(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static diskioWriteBytesAverage(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static diskioWritesAverage(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static memCachedAverage(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static memTotalAverage(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static memUsedAverage(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static memUsedPercentAverage(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static netstatTcpEstablishedSum(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static netstatTcpTimeWaitSum(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static swapUsedPercentAverage(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static tcPv4ConnectionsEstablishedSum(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static tcPv6ConnectionsEstablishedSum(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static memoryCommittedBytesInUseAverage(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static processorIdleTimeAverage(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static processorInterruptTimeAverage(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static processorUserTimeAverage(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static logicalDiskFreeSpaceAverage(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
    static pagingFileUsageAverage(dimensions: {
        InstanceId: string;
    }): MetricWithDims<{
        InstanceId: string;
    }>;
}
export declare class NATGatewayMetrics {
    static activeConnectionCountMaximum(dimensions: {
        NatGatewayId: string;
    }): MetricWithDims<{
        NatGatewayId: string;
    }>;
    static packetsDropCountSum(dimensions: {
        NatGatewayId: string;
    }): MetricWithDims<{
        NatGatewayId: string;
    }>;
    static bytesInFromDestinationSum(dimensions: {
        NatGatewayId: string;
    }): MetricWithDims<{
        NatGatewayId: string;
    }>;
    static bytesInFromSourceSum(dimensions: {
        NatGatewayId: string;
    }): MetricWithDims<{
        NatGatewayId: string;
    }>;
    static bytesOutToDestinationSum(dimensions: {
        NatGatewayId: string;
    }): MetricWithDims<{
        NatGatewayId: string;
    }>;
    static bytesOutToSourceSum(dimensions: {
        NatGatewayId: string;
    }): MetricWithDims<{
        NatGatewayId: string;
    }>;
    static connectionAttemptCountSum(dimensions: {
        NatGatewayId: string;
    }): MetricWithDims<{
        NatGatewayId: string;
    }>;
    static connectionEstablishedCountSum(dimensions: {
        NatGatewayId: string;
    }): MetricWithDims<{
        NatGatewayId: string;
    }>;
    static errorPortAllocationSum(dimensions: {
        NatGatewayId: string;
    }): MetricWithDims<{
        NatGatewayId: string;
    }>;
    static idleTimeoutCountSum(dimensions: {
        NatGatewayId: string;
    }): MetricWithDims<{
        NatGatewayId: string;
    }>;
    static packetsInFromDestinationSum(dimensions: {
        NatGatewayId: string;
    }): MetricWithDims<{
        NatGatewayId: string;
    }>;
    static packetsInFromSourceSum(dimensions: {
        NatGatewayId: string;
    }): MetricWithDims<{
        NatGatewayId: string;
    }>;
    static packetsOutToDestinationSum(dimensions: {
        NatGatewayId: string;
    }): MetricWithDims<{
        NatGatewayId: string;
    }>;
    static packetsOutToSourceSum(dimensions: {
        NatGatewayId: string;
    }): MetricWithDims<{
        NatGatewayId: string;
    }>;
}
export declare class TransitGatewayMetrics {
    static bytesInSum(dimensions: {
        TransitGateway: string;
    }): MetricWithDims<{
        TransitGateway: string;
    }>;
    static bytesOutSum(dimensions: {
        TransitGateway: string;
    }): MetricWithDims<{
        TransitGateway: string;
    }>;
    static packetDropCountBlackholeSum(dimensions: {
        TransitGateway: string;
    }): MetricWithDims<{
        TransitGateway: string;
    }>;
    static packetDropCountNoRouteSum(dimensions: {
        TransitGateway: string;
    }): MetricWithDims<{
        TransitGateway: string;
    }>;
    static packetsInSum(dimensions: {
        TransitGateway: string;
    }): MetricWithDims<{
        TransitGateway: string;
    }>;
    static packetsOutSum(dimensions: {
        TransitGateway: string;
    }): MetricWithDims<{
        TransitGateway: string;
    }>;
}
export declare class VPNMetrics {
    static tunnelDataInSum(dimensions: {
        VpnId: string;
    }): MetricWithDims<{
        VpnId: string;
    }>;
    static tunnelStateAverage(dimensions: {
        VpnId: string;
    }): MetricWithDims<{
        VpnId: string;
    }>;
    static tunnelDataOutSum(dimensions: {
        VpnId: string;
    }): MetricWithDims<{
        VpnId: string;
    }>;
}
