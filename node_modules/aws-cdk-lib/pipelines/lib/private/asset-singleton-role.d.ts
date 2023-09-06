import { Construct } from 'constructs';
import * as iam from '../../../aws-iam';
import { PolicyStatement } from '../../../aws-iam';
/**
 * Role which will be reused across asset jobs
 *
 * Has some '*' resources to save IAM policy space, and will not
 * actually add policies that look like policies that were already added.
 */
export declare class AssetSingletonRole extends iam.Role {
    private _rejectDuplicates;
    private _assumeRoleStatement;
    constructor(scope: Construct, id: string, props: iam.RoleProps);
    addToPrincipalPolicy(statement: PolicyStatement): iam.AddToPrincipalPolicyResult;
    /**
     * Make sure the Role has sts:AssumeRole permissions to the given ARN
     *
     * Will add a new PolicyStatement to the Role if necessary, otherwise add resources to the existing
     * PolicyStatement.
     *
     * Normally this would have been many `grantAssume()` calls (which would get deduplicated by the
     * policy minimization logic), but we have to account for old pipelines that don't have policy
     * minimization enabled.
     */
    addAssumeRole(roleArn: string): void;
}
