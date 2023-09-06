import { Construct } from 'constructs';
import { MessageLanguage } from './common';
import { CloudFormationRuleConstraintOptions, CommonConstraintOptions, StackSetsConstraintOptions, TagUpdateConstraintOptions } from './constraints';
import { IProduct } from './product';
import { TagOptions } from './tag-options';
import * as iam from '../../aws-iam';
import * as sns from '../../aws-sns';
import * as cdk from '../../core';
/**
 * Options for portfolio share.
 */
export interface PortfolioShareOptions {
    /**
     * Whether to share tagOptions as a part of the portfolio share
     *
     * @default - share not specified
     */
    readonly shareTagOptions?: boolean;
    /**
     * The message language of the share.
     * Controls status and error message language for share.
     *
     * @default - English
     */
    readonly messageLanguage?: MessageLanguage;
}
/**
 * A Service Catalog portfolio.
 */
export interface IPortfolio extends cdk.IResource {
    /**
     * The ARN of the portfolio.
     * @attribute
     */
    readonly portfolioArn: string;
    /**
     * The ID of the portfolio.
     * @attribute
     */
    readonly portfolioId: string;
    /**
     * Associate portfolio with an IAM Role.
     * @param role an IAM role
     */
    giveAccessToRole(role: iam.IRole): void;
    /**
     * Associate portfolio with an IAM User.
     * @param user an IAM user
     */
    giveAccessToUser(user: iam.IUser): void;
    /**
     * Associate portfolio with an IAM Group.
     * @param group an IAM Group
     */
    giveAccessToGroup(group: iam.IGroup): void;
    /**
     * Initiate a portfolio share with another account.
     * @param accountId AWS account to share portfolio with
     * @param options Options for the initiate share
     */
    shareWithAccount(accountId: string, options?: PortfolioShareOptions): void;
    /**
     * Associate portfolio with the given product.
     * @param product A service catalog produt.
     */
    addProduct(product: IProduct): void;
    /**
     * Associate Tag Options.
     * A TagOption is a key-value pair managed in AWS Service Catalog.
     * It is not an AWS tag, but serves as a template for creating an AWS tag based on the TagOption.
     */
    associateTagOptions(tagOptions: TagOptions): void;
    /**
     * Add a Resource Update Constraint.
     */
    constrainTagUpdates(product: IProduct, options?: TagUpdateConstraintOptions): void;
    /**
     * Add notifications for supplied topics on the provisioned product.
     * @param product A service catalog product.
     * @param topic A SNS Topic to receive notifications on events related to the provisioned product.
     */
    notifyOnStackEvents(product: IProduct, topic: sns.ITopic, options?: CommonConstraintOptions): void;
    /**
     * Set provisioning rules for the product.
     * @param product A service catalog product.
     * @param options options for the constraint.
     */
    constrainCloudFormationParameters(product: IProduct, options: CloudFormationRuleConstraintOptions): void;
    /**
     * Force users to assume a certain role when launching a product.
     * This sets the launch role using the role arn which is tied to the account this role exists in.
     * This is useful if you will be provisioning products from the account where this role exists.
     * If you intend to share the portfolio across accounts, use a local launch role.
     *
     * @param product A service catalog product.
     * @param launchRole The IAM role a user must assume when provisioning the product.
     * @param options options for the constraint.
     */
    setLaunchRole(product: IProduct, launchRole: iam.IRole, options?: CommonConstraintOptions): void;
    /**
     * Force users to assume a certain role when launching a product.
     * The role will be referenced by name in the local account instead of a static role arn.
     * A role with this name will automatically be created and assumable by Service Catalog in this account.
     * This is useful when sharing the portfolio with multiple accounts.
     *
     * @param product A service catalog product.
     * @param launchRoleName The name of the IAM role a user must assume when provisioning the product. A role with this name must exist in the account where the portolio is created and the accounts it is shared with.
     * @param options options for the constraint.
     */
    setLocalLaunchRoleName(product: IProduct, launchRoleName: string, options?: CommonConstraintOptions): iam.IRole;
    /**
     * Force users to assume a certain role when launching a product.
     * The role name will be referenced by in the local account and must be set explicitly.
     * This is useful when sharing the portfolio with multiple accounts.
     *
     * @param product A service catalog product.
     * @param launchRole The IAM role a user must assume when provisioning the product. A role with this name must exist in the account where the portolio is created and the accounts it is shared with. The role name must be set explicitly.
     * @param options options for the constraint.
     */
    setLocalLaunchRole(product: IProduct, launchRole: iam.IRole, options?: CommonConstraintOptions): void;
    /**
     * Configure deployment options using AWS Cloudformation StackSets
     *
     * @param product A service catalog product.
     * @param options Configuration options for the constraint.
     */
    deployWithStackSets(product: IProduct, options: StackSetsConstraintOptions): void;
}
declare abstract class PortfolioBase extends cdk.Resource implements IPortfolio {
    abstract readonly portfolioArn: string;
    abstract readonly portfolioId: string;
    private readonly associatedPrincipals;
    private readonly assetBuckets;
    private readonly sharedAccounts;
    giveAccessToRole(role: iam.IRole): void;
    giveAccessToUser(user: iam.IUser): void;
    giveAccessToGroup(group: iam.IGroup): void;
    addProduct(product: IProduct): void;
    shareWithAccount(accountId: string, options?: PortfolioShareOptions): void;
    associateTagOptions(tagOptions: TagOptions): void;
    constrainTagUpdates(product: IProduct, options?: TagUpdateConstraintOptions): void;
    notifyOnStackEvents(product: IProduct, topic: sns.ITopic, options?: CommonConstraintOptions): void;
    constrainCloudFormationParameters(product: IProduct, options: CloudFormationRuleConstraintOptions): void;
    setLaunchRole(product: IProduct, launchRole: iam.IRole, options?: CommonConstraintOptions): void;
    setLocalLaunchRoleName(product: IProduct, launchRoleName: string, options?: CommonConstraintOptions): iam.IRole;
    setLocalLaunchRole(product: IProduct, launchRole: iam.IRole, options?: CommonConstraintOptions): void;
    deployWithStackSets(product: IProduct, options: StackSetsConstraintOptions): void;
    /**
     * Associate a principal with the portfolio.
     * If the principal is already associated, it will skip.
     */
    private associatePrincipal;
    /**
     * Gives access to Asset Buckets to Shared Accounts.
     *
     */
    protected addBucketPermissionsToSharedAccounts(): void;
    /**
     * Create a unique id based off the L1 CfnPortfolio or the arn of an imported portfolio.
     */
    protected abstract generateUniqueHash(value: string): string;
}
/**
 * Properties for a Portfolio.
 */
export interface PortfolioProps {
    /**
     * The name of the portfolio.
     */
    readonly displayName: string;
    /**
     * The provider name.
     */
    readonly providerName: string;
    /**
     * The message language. Controls language for
     * status logging and errors.
     *
     * @default - English
     */
    readonly messageLanguage?: MessageLanguage;
    /**
     * Description for portfolio.
     *
     * @default - No description provided
     */
    readonly description?: string;
    /**
     * TagOptions associated directly to a portfolio.
     *
     * @default - No tagOptions provided
     */
    readonly tagOptions?: TagOptions;
}
/**
 * A Service Catalog portfolio.
 */
export declare class Portfolio extends PortfolioBase {
    /**
     * Creates a Portfolio construct that represents an external portfolio.
     *
     * @param scope The parent creating construct (usually `this`).
     * @param id The construct's name.
     * @param portfolioArn the Amazon Resource Name of the existing portfolio.
     */
    static fromPortfolioArn(scope: Construct, id: string, portfolioArn: string): IPortfolio;
    readonly portfolioArn: string;
    readonly portfolioId: string;
    private readonly portfolio;
    constructor(scope: Construct, id: string, props: PortfolioProps);
    protected generateUniqueHash(value: string): string;
    private validatePortfolioProps;
}
export {};
