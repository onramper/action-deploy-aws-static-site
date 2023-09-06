import * as iam from '../../../aws-iam';
import * as sns from '../../../aws-sns';
import * as cdk from '../../../core';
import { CloudFormationRuleConstraintOptions, CommonConstraintOptions, StackSetsConstraintOptions, TagUpdateConstraintOptions } from '../constraints';
import { IPortfolio } from '../portfolio';
import { IProduct } from '../product';
import { CfnPortfolioProductAssociation } from '../servicecatalog.generated';
import { TagOptions } from '../tag-options';
export declare class AssociationManager {
    static associateProductWithPortfolio(portfolio: IPortfolio, product: IProduct, options: CommonConstraintOptions | undefined): {
        associationKey: string;
        cfnPortfolioProductAssociation: CfnPortfolioProductAssociation;
    };
    static constrainTagUpdates(portfolio: IPortfolio, product: IProduct, options: TagUpdateConstraintOptions): void;
    static notifyOnStackEvents(portfolio: IPortfolio, product: IProduct, topic: sns.ITopic, options: CommonConstraintOptions): void;
    static constrainCloudFormationParameters(portfolio: IPortfolio, product: IProduct, options: CloudFormationRuleConstraintOptions): void;
    static setLaunchRole(portfolio: IPortfolio, product: IProduct, launchRole: iam.IRole, options: CommonConstraintOptions): void;
    static setLocalLaunchRoleName(portfolio: IPortfolio, product: IProduct, launchRoleName: string, options: CommonConstraintOptions): void;
    static deployWithStackSets(portfolio: IPortfolio, product: IProduct, options: StackSetsConstraintOptions): void;
    static associateTagOptions(resource: cdk.IResource, resourceId: string, tagOptions: TagOptions): void;
    private static setLaunchRoleConstraint;
    private static stackSetConstraintLogicalId;
    private static launchRoleConstraintLogicalId;
    private static prettyPrintAssociation;
    private static formatTemplateRule;
    private static formatAssertions;
}
