import * as cxapi from '@aws-cdk/cx-api';
import { Configuration } from '../../settings';
import { SdkProvider } from '../aws-auth';
import { ILock } from '../util/rwlock';
export interface ExecProgramResult {
    readonly assembly: cxapi.CloudAssembly;
    readonly lock: ILock;
}
/** Invokes the cloud executable and returns JSON output */
export declare function execProgram(aws: SdkProvider, config: Configuration): Promise<ExecProgramResult>;
/**
 * Creates an assembly with error handling
 */
export declare function createAssembly(appDir: string): cxapi.CloudAssembly;
/**
 * If we don't have region/account defined in context, we fall back to the default SDK behavior
 * where region is retrieved from ~/.aws/config and account is based on default credentials provider
 * chain and then STS is queried.
 *
 * This is done opportunistically: for example, if we can't access STS for some reason or the region
 * is not configured, the context value will be 'null' and there could failures down the line. In
 * some cases, synthesis does not require region/account information at all, so that might be perfectly
 * fine in certain scenarios.
 *
 * @param context The context key/value bash.
 */
export declare function prepareDefaultEnvironment(aws: SdkProvider): Promise<{
    [key: string]: string;
}>;
/**
 * Settings related to synthesis are read from context.
 * The merging of various configuration sources like cli args or cdk.json has already happened.
 * We now need to set the final values to the context.
 */
export declare function prepareContext(config: Configuration, env: {
    [key: string]: string | undefined;
}): Promise<{
    [key: string]: any;
}>;
