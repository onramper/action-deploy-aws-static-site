import { Construct } from 'constructs';
import { ReceiptRule, ReceiptRuleOptions } from './receipt-rule';
import { IResource, Resource } from '../../core';
/**
 * A receipt rule set.
 */
export interface IReceiptRuleSet extends IResource {
    /**
     * The receipt rule set name.
     * @attribute
     */
    readonly receiptRuleSetName: string;
    /**
     * Adds a new receipt rule in this rule set. The new rule is added after
     * the last added rule unless `after` is specified.
     */
    addRule(id: string, options?: ReceiptRuleOptions): ReceiptRule;
}
/**
 * Construction properties for a ReceiptRuleSet.
 */
export interface ReceiptRuleSetProps {
    /**
     * The name for the receipt rule set.
     *
     * @default - A CloudFormation generated name.
     */
    readonly receiptRuleSetName?: string;
    /**
     * The list of rules to add to this rule set. Rules are added in the same
     * order as they appear in the list.
     *
     * @default - No rules are added to the rule set.
     */
    readonly rules?: ReceiptRuleOptions[];
    /**
     * Whether to add a first rule to stop processing messages
     * that have at least one spam indicator.
     *
     * @default false
     */
    readonly dropSpam?: boolean;
}
/**
 * A new or imported receipt rule set.
 */
declare abstract class ReceiptRuleSetBase extends Resource implements IReceiptRuleSet {
    abstract readonly receiptRuleSetName: string;
    private lastAddedRule?;
    /**
     * Adds a new receipt rule in this rule set. The new rule is added after
     * the last added rule unless `after` is specified.
     */
    addRule(id: string, options?: ReceiptRuleOptions): ReceiptRule;
    /**
     * Adds a drop spam rule
     */
    protected addDropSpamRule(): void;
}
/**
 * A new receipt rule set.
 */
export declare class ReceiptRuleSet extends ReceiptRuleSetBase {
    /**
     * Import an exported receipt rule set.
     */
    static fromReceiptRuleSetName(scope: Construct, id: string, receiptRuleSetName: string): IReceiptRuleSet;
    readonly receiptRuleSetName: string;
    constructor(scope: Construct, id: string, props?: ReceiptRuleSetProps);
}
export {};
