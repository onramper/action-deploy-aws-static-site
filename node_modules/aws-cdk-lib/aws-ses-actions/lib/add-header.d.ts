import * as ses from '../../aws-ses';
/**
 * Construction properties for a add header action.
 */
export interface AddHeaderProps {
    /**
     * The name of the header to add. Must be between 1 and 50 characters,
     * inclusive, and consist of alphanumeric (a-z, A-Z, 0-9) characters
     * and dashes only.
     */
    readonly name: string;
    /**
     * The value of the header to add. Must be less than 2048 characters,
     * and must not contain newline characters ("\r" or "\n").
     */
    readonly value: string;
}
/**
 * Adds a header to the received email
 */
export declare class AddHeader implements ses.IReceiptRuleAction {
    private readonly name;
    private readonly value;
    constructor(props: AddHeaderProps);
    bind(_rule: ses.IReceiptRule): ses.ReceiptRuleActionConfig;
}
