import { Construct } from 'constructs';
import * as iam from '../../aws-iam';
import * as cr from '../../custom-resources';
/**
 * Construction properties for ElasticsearchAccessPolicy
 */
export interface ElasticsearchAccessPolicyProps {
    /**
     * The Elasticsearch Domain name
     */
    readonly domainName: string;
    /**
     * The Elasticsearch Domain ARN
     */
    readonly domainArn: string;
    /**
     * The access policy statements for the Elasticsearch cluster
     */
    readonly accessPolicies: iam.PolicyStatement[];
}
/**
 * Creates LogGroup resource policies.
 */
export declare class ElasticsearchAccessPolicy extends cr.AwsCustomResource {
    private accessPolicyStatements;
    constructor(scope: Construct, id: string, props: ElasticsearchAccessPolicyProps);
    /**
     * Add policy statements to the domain access policy
     */
    addAccessPolicies(...accessPolicyStatements: iam.PolicyStatement[]): void;
}
