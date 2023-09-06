import { Construct } from 'constructs';
import { ICertificate } from '../../aws-certificatemanager';
import { IHostedZone } from '../../aws-route53';
/**
 * Properties to configure an HTTPS Redirect
 */
export interface HttpsRedirectProps {
    /**
     * Hosted zone of the domain which will be used to create alias record(s) from
     * domain names in the hosted zone to the target domain. The hosted zone must
     * contain entries for the domain name(s) supplied through `recordNames` that
     * will redirect to the target domain.
     *
     * Domain names in the hosted zone can include a specific domain (example.com)
     * and its subdomains (acme.example.com, zenith.example.com).
     *
     */
    readonly zone: IHostedZone;
    /**
     * The redirect target fully qualified domain name (FQDN). An alias record
     * will be created that points to your CloudFront distribution. Root domain
     * or sub-domain can be supplied.
     */
    readonly targetDomain: string;
    /**
     * The domain names that will redirect to `targetDomain`
     *
     * @default - the domain name of the hosted zone
     */
    readonly recordNames?: string[];
    /**
     * The AWS Certificate Manager (ACM) certificate that will be associated with
     * the CloudFront distribution that will be created. If provided, the certificate must be
     * stored in us-east-1 (N. Virginia)
     *
     * @default - A new certificate is created in us-east-1 (N. Virginia)
     */
    readonly certificate?: ICertificate;
}
/**
 * Allows creating a domainA -> domainB redirect using CloudFront and S3.
 * You can specify multiple domains to be redirected.
 */
export declare class HttpsRedirect extends Construct {
    constructor(scope: Construct, id: string, props: HttpsRedirectProps);
    /**
     * Gets the stack to use for creating the Certificate
     * If the current stack is not in `us-east-1` then this
     * will create a new `us-east-1` stack.
     *
     * CloudFront is a global resource which you can create (via CloudFormation) from
     * _any_ region. So I could create a CloudFront distribution in `us-east-2` if I wanted
     * to (maybe the rest of my application lives there). The problem is that some supporting resources
     * that CloudFront uses (i.e. ACM Certificates) are required to exist in `us-east-1`. This means
     * that if I want to create a CloudFront distribution in `us-east-2` I still need to create a ACM certificate in
     * `us-east-1`.
     *
     * In order to do this correctly we need to know which region the CloudFront distribution is being created in.
     * We have two options, either require the user to specify the region or make an assumption if they do not.
     * This implementation requires the user specify the region.
     */
    private certificateScope;
    /**
     * Creates a certificate.
     *
     * If the `ROUTE53_PATTERNS_USE_CERTIFICATE` feature flag is set then
     * this will use the `Certificate` class otherwise it will use the
     * `DnsValidatedCertificate` class
     *
     * This is also safe to upgrade since the new certificate will be created and updated
     * on the CloudFront distribution before the old one is deleted.
     */
    private createCertificate;
}
