import { ICertificate } from './certificate';
import * as cloudwatch from '../../aws-cloudwatch';
import { Resource } from '../../core';
/**
 * Shared implementation details of ICertificate implementations.
 *
 * @internal
 */
export declare abstract class CertificateBase extends Resource implements ICertificate {
    abstract readonly certificateArn: string;
    /**
      * If the certificate is provisionned in a different region than the
      * containing stack, this should be the region in which the certificate lives
      * so we can correctly create `Metric` instances.
      */
    protected readonly region?: string;
    metricDaysToExpiry(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
}
