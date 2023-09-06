import { Construct } from 'constructs';
import { IReceiptRuleAction } from './receipt-rule-action';
import { IReceiptRuleSet } from './receipt-rule-set';
import { IResource, Resource } from '../../core';
/**
 * A receipt rule.
 */
export interface IReceiptRule extends IResource {
    /**
     * The name of the receipt rule.
     * @attribute
     */
    readonly receiptRuleName: string;
}
/**
 * The type of TLS policy for a receipt rule.
 */
export declare enum TlsPolicy {
    /**
     * Do not check for TLS.
     */
    OPTIONAL = "Optional",
    /**
     * Bounce emails that are not received over TLS.
     */
    REQUIRE = "Require"
}
/**
 * Options to add a receipt rule to a receipt rule set.
 */
export interface ReceiptRuleOptions {
    /**
     * An ordered list of actions to perform on messages that match at least
     * one of the recipient email addresses or domains specified in the
     * receipt rule.
     *
     * @default - No actions.
     */
    readonly actions?: IReceiptRuleAction[];
    /**
     * An existing rule after which the new rule will be placed.
     *
     * @default - The new rule is inserted at the beginning of the rule list.
     */
    readonly after?: IReceiptRule;
    /**
     * Whether the rule is active.
     *
     * @default true
     */
    readonly enabled?: boolean;
    /**
     * The name for the rule
     *
     * @default - A CloudFormation generated name.
     */
    readonly receiptRuleName?: string;
    /**
     * The recipient domains and email addresses that the receipt rule applies to.
     *
     * @default - Match all recipients under all verified domains.
     */
    readonly recipients?: string[];
    /**
     * Whether to scan for spam and viruses.
     *
     * @default false
     */
    readonly scanEnabled?: boolean;
    /**
     * Whether Amazon SES should require that incoming email is delivered over a
     * connection encrypted with Transport Layer Security (TLS).
     *
     * @default - Optional which will not check for TLS.
     */
    readonly tlsPolicy?: TlsPolicy;
}
/**
 * Construction properties for a ReceiptRule.
 */
export interface ReceiptRuleProps extends ReceiptRuleOptions {
    /**
     * The name of the rule set that the receipt rule will be added to.
     */
    readonly ruleSet: IReceiptRuleSet;
}
/**
 * A new receipt rule.
 */
export declare class ReceiptRule extends Resource implements IReceiptRule {
    static fromReceiptRuleName(scope: Construct, id: string, receiptRuleName: string): IReceiptRule;
    readonly receiptRuleName: string;
    private readonly actions;
    constructor(scope: Construct, id: string, props: ReceiptRuleProps);
    /**
     * Adds an action to this receipt rule.
     */
    addAction(action: IReceiptRuleAction): void;
    private renderActions;
}
export interface DropSpamReceiptRuleProps extends ReceiptRuleProps {
}
/**
 * A rule added at the top of the rule set to drop spam/virus.
 *
 * @see https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-lambda-example-functions.html
 */
export declare class DropSpamReceiptRule extends Construct {
    readonly rule: ReceiptRule;
    constructor(scope: Construct, id: string, props: DropSpamReceiptRuleProps);
}
