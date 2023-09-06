export interface MetricWithDims<D> {
    readonly namespace: string;
    readonly metricName: string;
    readonly statistic: string;
    readonly dimensionsMap: D;
}
export declare class FirehoseMetrics {
    static incomingBytesSum(dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static incomingRecordsSum(dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static backupToS3BytesSum(dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static backupToS3DataFreshnessAverage(dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static backupToS3RecordsSum(dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static backupToS3SuccessSum(dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static dataReadFromKinesisStreamBytesSum(dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static dataReadFromKinesisStreamRecordsSum(dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static deliveryToElasticsearchBytesSum(dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static deliveryToElasticsearchRecordsSum(dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static deliveryToElasticsearchSuccessSum(dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static deliveryToRedshiftBytesSum(dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static deliveryToRedshiftRecordsSum(dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static deliveryToRedshiftSuccessSum(dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static deliveryToS3BytesSum(dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static deliveryToS3DataFreshnessAverage(dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static deliveryToS3RecordsSum(dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static deliveryToS3SuccessSum(dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static deliveryToSplunkBytesSum(dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static deliveryToSplunkDataAckLatencyAverage(dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static deliveryToSplunkDataFreshnessAverage(dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static deliveryToSplunkRecordsSum(dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static deliveryToSplunkSuccessSum(dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
    static kinesisMillisBehindLatestAverage(dimensions: {
        DeliveryStreamName: string;
    }): MetricWithDims<{
        DeliveryStreamName: string;
    }>;
}
