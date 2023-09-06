import { Construct } from 'constructs';
import { ManagedRule, RuleProps } from './rule';
import * as iam from '../../aws-iam';
import * as sns from '../../aws-sns';
import { Duration } from '../../core';
/**
 * Construction properties for a AccessKeysRotated
 */
export interface AccessKeysRotatedProps extends RuleProps {
    /**
     * The maximum number of days within which the access keys must be rotated.
     *
     * @default Duration.days(90)
     */
    readonly maxAge?: Duration;
}
/**
 * Checks whether the active access keys are rotated within the number of days
 * specified in `maxAge`.
 *
 * @see https://docs.aws.amazon.com/config/latest/developerguide/access-keys-rotated.html
 *
 * @resource AWS::Config::ConfigRule
 */
export declare class AccessKeysRotated extends ManagedRule {
    constructor(scope: Construct, id: string, props?: AccessKeysRotatedProps);
}
/**
 * Construction properties for a CloudFormationStackDriftDetectionCheck
 */
export interface CloudFormationStackDriftDetectionCheckProps extends RuleProps {
    /**
     * Whether to check only the stack where this rule is deployed.
     *
     * @default false
     */
    readonly ownStackOnly?: boolean;
    /**
     * The IAM role to use for this rule. It must have permissions to detect drift
     * for AWS CloudFormation stacks. Ensure to attach `config.amazonaws.com` trusted
     * permissions and `ReadOnlyAccess` policy permissions. For specific policy permissions,
     * refer to https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html.
     *
     * @default - A role will be created
     */
    readonly role?: iam.IRole;
}
/**
 * Checks whether your CloudFormation stacks' actual configuration differs, or
 * has drifted, from its expected configuration.
 *
 * @see https://docs.aws.amazon.com/config/latest/developerguide/cloudformation-stack-drift-detection-check.html
 *
 * @resource AWS::Config::ConfigRule
 */
export declare class CloudFormationStackDriftDetectionCheck extends ManagedRule {
    private readonly role;
    constructor(scope: Construct, id: string, props?: CloudFormationStackDriftDetectionCheckProps);
}
/**
 * Construction properties for a CloudFormationStackNotificationCheck.
 */
export interface CloudFormationStackNotificationCheckProps extends RuleProps {
    /**
     * A list of allowed topics. At most 5 topics.
     *
     * @default - No topics.
     */
    readonly topics?: sns.ITopic[];
}
/**
 * Checks whether your CloudFormation stacks are sending event notifications to
 * a SNS topic. Optionally checks whether specified SNS topics are used.
 *
 * @see https://docs.aws.amazon.com/config/latest/developerguide/cloudformation-stack-notification-check.html
 *
 * @resource AWS::Config::ConfigRule
 */
export declare class CloudFormationStackNotificationCheck extends ManagedRule {
    constructor(scope: Construct, id: string, props?: CloudFormationStackNotificationCheckProps);
}
