import { Construct } from 'constructs';
import * as iam from '../../aws-iam';
import * as cr from '../../custom-resources';
/**
 * Construction properties for OpenSearchAccessPolicy
 */
export interface OpenSearchAccessPolicyProps {
    /**
     * The OpenSearch Domain name
     */
    readonly domainName: string;
    /**
     * The OpenSearch Domain ARN
     */
    readonly domainArn: string;
    /**
     * The access policy statements for the OpenSearch cluster
     */
    readonly accessPolicies: iam.PolicyStatement[];
}
/**
 * Creates LogGroup resource policies.
 */
export declare class OpenSearchAccessPolicy extends cr.AwsCustomResource {
    private accessPolicyStatements;
    constructor(scope: Construct, id: string, props: OpenSearchAccessPolicyProps);
    /**
     * Add policy statements to the domain access policy
     */
    addAccessPolicies(...accessPolicyStatements: iam.PolicyStatement[]): void;
}
