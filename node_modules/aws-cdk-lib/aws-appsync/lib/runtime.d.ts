/**
 * Config for binding runtime to a function or resolver
 */
export interface RuntimeConfig {
    /**
     * The name of the runtime
     */
    readonly name: string;
    /**
     * The version string of the runtime
     */
    readonly runtimeVersion: string;
}
/**
 * Appsync supported runtimes. Only JavaScript as of now
 */
export declare enum FunctionRuntimeFamily {
    /**
     * AppSync JavaScript runtime
     */
    JS = "APPSYNC_JS"
}
/**
 * Utility class for specifying specific appsync runtime versions
 */
export declare class FunctionRuntime {
    /**
     * APPSYNC_JS v1.0.0 runtime
     */
    static readonly JS_1_0_0: FunctionRuntime;
    /**
     * The name of the runtime
     */
    readonly name: string;
    /**
     * The runtime version
     */
    readonly version: string;
    constructor(family: FunctionRuntimeFamily, version: string);
    /**
     * Convert to Cfn runtime configuration property format
     */
    toProperties(): RuntimeConfig;
}
