import { Construct } from 'constructs';
import { CfnVirtualNode } from './appmesh.generated';
import * as acm from '../../aws-certificatemanager';
/**
 * A wrapper for the tls config returned by `TlsCertificate.bind`
 */
export interface TlsCertificateConfig {
    /**
     * The CFN shape for a TLS certificate
     */
    readonly tlsCertificate: CfnVirtualNode.ListenerTlsCertificateProperty;
}
/**
 * Represents a TLS certificate
 */
export declare abstract class TlsCertificate {
    /**
     * Returns an File TLS Certificate
     */
    static file(certificateChainPath: string, privateKeyPath: string): MutualTlsCertificate;
    /**
     * Returns an ACM TLS Certificate
     */
    static acm(certificate: acm.ICertificate): TlsCertificate;
    /**
     * Returns an SDS TLS Certificate
     */
    static sds(secretName: string): MutualTlsCertificate;
    /**
     * Returns TLS certificate based provider.
     */
    abstract bind(_scope: Construct): TlsCertificateConfig;
}
/**
 * Represents a TLS certificate that is supported for mutual TLS authentication.
 */
export declare abstract class MutualTlsCertificate extends TlsCertificate {
    protected readonly differentiator = false;
}
