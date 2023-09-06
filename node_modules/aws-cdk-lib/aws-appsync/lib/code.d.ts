import { Construct } from 'constructs';
import * as s3_assets from '../../aws-s3-assets';
/**
 * Result of binding `Code` into a `Function`.
 */
export interface CodeConfig {
    /**
     * The location of the code in S3 (mutually exclusive with `inlineCode`.
     * @default - code is not an s3 location
     */
    readonly s3Location?: string;
    /**
     * Inline code (mutually exclusive with `s3Location`).
     * @default - code is not inline code
     */
    readonly inlineCode?: string;
}
/**
 * Represents source code for an AppSync Function or Resolver.
 */
export declare abstract class Code {
    /**
     * Loads the function code from a local disk path.
     *
     * @param path The path to the source code file.
     */
    static fromAsset(path: string, options?: s3_assets.AssetOptions): AssetCode;
    /**
     * Inline code for AppSync function
     * @returns `InlineCode` with inline code.
     * @param code The actual handler code (limited to 4KiB)
     */
    static fromInline(code: string): InlineCode;
    /**
     * Bind source code to an AppSync Function or resolver.
     */
    abstract bind(scope: Construct): CodeConfig;
}
/**
 * Represents a local file with source code used for an AppSync Function or Resolver.
 */
export declare class AssetCode extends Code {
    readonly path: string;
    private readonly options;
    private asset?;
    /**
     * @param path The path to the asset file.
     */
    constructor(path: string, options?: s3_assets.AssetOptions);
    bind(scope: Construct): CodeConfig;
}
/**
 * AppSync function code from an inline string.
 */
export declare class InlineCode extends Code {
    private code;
    constructor(code: string);
    bind(_scope: Construct): CodeConfig;
}
