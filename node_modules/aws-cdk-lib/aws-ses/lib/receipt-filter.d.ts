import { Construct } from 'constructs';
import { Resource } from '../../core';
/**
 * The policy for the receipt filter.
 */
export declare enum ReceiptFilterPolicy {
    /**
     * Allow the ip address or range.
     */
    ALLOW = "Allow",
    /**
     * Block the ip address or range.
     */
    BLOCK = "Block"
}
/**
 * Construction properties for a ReceiptFilter.
 */
export interface ReceiptFilterProps {
    /**
     * The name for the receipt filter.
     *
     * @default a CloudFormation generated name
     */
    readonly receiptFilterName?: string;
    /**
     * The ip address or range to filter.
     *
     * @default 0.0.0.0/0
     */
    readonly ip?: string;
    /**
     * The policy for the filter.
     *
     * @default Block
     */
    readonly policy?: ReceiptFilterPolicy;
}
/**
 * A receipt filter. When instantiated without props, it creates a
 * block all receipt filter.
 */
export declare class ReceiptFilter extends Resource {
    constructor(scope: Construct, id: string, props?: ReceiptFilterProps);
}
/**
 * Construction properties for am AllowListReceiptFilter.
 */
export interface AllowListReceiptFilterProps {
    /**
     * A list of ip addresses or ranges to allow list.
     */
    readonly ips: string[];
}
/**
 * An allow list receipt filter.
 */
export declare class AllowListReceiptFilter extends Construct {
    constructor(scope: Construct, id: string, props: AllowListReceiptFilterProps);
}
