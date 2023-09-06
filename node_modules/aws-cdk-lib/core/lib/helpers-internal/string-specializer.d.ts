import { Stack } from '../stack';
export declare class StringSpecializer {
    private readonly stack;
    private readonly qualifier;
    /**
     * Validate that the given string does not contain tokens
     */
    static validateNoTokens(s: string, what: string): void;
    constructor(stack: Stack, qualifier: string);
    /**
     * Function to replace placeholders in the input string as much as possible
     *
     * We replace:
     * - ${Qualifier}: always
     * - ${AWS::AccountId}, ${AWS::Region}: only if we have the actual values available
     * - ${AWS::Partition}: never, since we never have the actual partition value.
     */
    specialize(s: string): string;
    /**
     * Specialize the given string, make sure it doesn't contain tokens
     */
    specializeNoTokens(s: string, what: string): string;
    /**
     * Specialize only the qualifier
     */
    qualifierOnly(s: string): string;
}
/**
 * Return the given value if resolved or fall back to a default
 */
export declare function resolvedOr<A>(x: string, def: A): string | A;
/**
 * Replaces CloudFormation Tokens (i.e. 'Aws.PARTITION') with corresponding
 * Asset Tokens (i.e. '${AWS::Partition}').
 */
export declare function translateCfnTokenToAssetToken(arn: string): string;
/**
 * Replaces Asset Tokens (i.e. '${AWS::Partition}') with corresponding
 * CloudFormation Tokens (i.e. 'Aws.PARTITION').
 */
export declare function translateAssetTokenToCfnToken(arn: string): string;
