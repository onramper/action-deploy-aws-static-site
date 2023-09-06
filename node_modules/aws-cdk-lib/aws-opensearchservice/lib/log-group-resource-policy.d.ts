import { Construct } from 'constructs';
import * as iam from '../../aws-iam';
import * as cr from '../../custom-resources';
/**
 * Construction properties for LogGroupResourcePolicy
 */
export interface LogGroupResourcePolicyProps {
    /**
     * The log group resource policy name
     */
    readonly policyName: string;
    /**
     * The policy statements for the log group resource logs
     */
    readonly policyStatements: [iam.PolicyStatement];
}
/**
 * Creates LogGroup resource policies.
 */
export declare class LogGroupResourcePolicy extends cr.AwsCustomResource {
    constructor(scope: Construct, id: string, props: LogGroupResourcePolicyProps);
}
