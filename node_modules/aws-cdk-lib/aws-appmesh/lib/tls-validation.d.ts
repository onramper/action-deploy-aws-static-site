import { Construct } from 'constructs';
import { CfnVirtualNode } from './appmesh.generated';
import * as acmpca from '../../aws-acmpca';
/**
 * Represents the properties needed to define TLS Validation context
 */
interface TlsValidationCommon {
    /**
     * Represents the subject alternative names (SANs) secured by the certificate.
     * SANs must be in the FQDN or URI format.
     *
     * @default - If you don't specify SANs on the terminating mesh endpoint,
     * the Envoy proxy for that node doesn't verify the SAN on a peer client certificate.
     * If you don't specify SANs on the originating mesh endpoint,
     * the SAN on the certificate provided by the terminating endpoint must match the mesh endpoint service discovery configuration.
     */
    readonly subjectAlternativeNames?: SubjectAlternativeNames;
}
/**
 * Represents the properties needed to define TLS Validation context
 */
export interface TlsValidation extends TlsValidationCommon {
    /**
     * Reference to where to retrieve the trust chain.
     */
    readonly trust: TlsValidationTrust;
}
/**
 * Represents the properties needed to define TLS Validation context that is supported for mutual TLS authentication.
 */
export interface MutualTlsValidation extends TlsValidationCommon {
    /**
     * Reference to where to retrieve the trust chain.
     */
    readonly trust: MutualTlsValidationTrust;
}
/**
 * All Properties for TLS Validation Trusts for both Client Policy and Listener.
 */
export interface TlsValidationTrustConfig {
    /**
     * VirtualNode CFN configuration for client policy's TLS Validation Trust
     */
    readonly tlsValidationTrust: CfnVirtualNode.TlsValidationContextTrustProperty;
}
/**
 * Defines the TLS Validation Context Trust.
 */
export declare abstract class TlsValidationTrust {
    /**
     * Tells envoy where to fetch the validation context from
     */
    static file(certificateChain: string): MutualTlsValidationTrust;
    /**
     * TLS Validation Context Trust for ACM Private Certificate Authority (CA).
     */
    static acm(certificateAuthorities: acmpca.ICertificateAuthority[]): TlsValidationTrust;
    /**
     * TLS Validation Context Trust for Envoy' service discovery service.
     */
    static sds(secretName: string): MutualTlsValidationTrust;
    /**
     * Returns Trust context based on trust type.
     */
    abstract bind(scope: Construct): TlsValidationTrustConfig;
}
/**
 * Represents a TLS Validation Context Trust that is supported for mutual TLS authentication.
 */
export declare abstract class MutualTlsValidationTrust extends TlsValidationTrust {
    protected readonly differentiator = false;
}
/**
 * All Properties for Subject Alternative Names Matcher for both Client Policy and Listener.
 */
export interface SubjectAlternativeNamesMatcherConfig {
    /**
     * VirtualNode CFN configuration for subject alternative names secured by the certificate.
     */
    readonly subjectAlternativeNamesMatch: CfnVirtualNode.SubjectAlternativeNameMatchersProperty;
}
/**
 * Used to generate Subject Alternative Names Matchers
 */
export declare abstract class SubjectAlternativeNames {
    /**
     * The values of the SAN must match the specified values exactly.
     *
     * @param names The exact values to test against.
     */
    static matchingExactly(...names: string[]): SubjectAlternativeNames;
    /**
     * Returns Subject Alternative Names Matcher based on method type.
     */
    abstract bind(scope: Construct): SubjectAlternativeNamesMatcherConfig;
}
export {};
