/**
 * An entry in the construct metadata table.
 */
export interface MetadataEntry {
    /**
     * The metadata entry type.
     */
    readonly type: string;
    /**
     * The data.
     */
    readonly data: any;
    /**
     * Stack trace. Can be omitted by setting the context key
     * `ConstructMetadata.DISABLE_STACK_TRACE_IN_METADATA` to 1.
     *
     * @default - no trace information
     */
    readonly trace?: string[];
}
/**
 * Metadata keys used by constructs.
 */
export declare class ConstructMetadata {
    /**
     * If set in the construct's context, omits stack traces from metadata entries.
     */
    static readonly DISABLE_STACK_TRACE_IN_METADATA = "disable-stack-trace";
    /**
     * Context type for info level messages.
     */
    static readonly INFO_METADATA_KEY = "info";
    /**
     * Context type for warning level messages.
     */
    static readonly WARNING_METADATA_KEY = "warning";
    /**
     * Context type for error level messages.
     */
    static readonly ERROR_METADATA_KEY = "error";
    private constructor();
}
