import { IConstruct } from 'constructs';
import { BundlingOptions } from './types';
import { Architecture, AssetCode, Runtime } from '../../aws-lambda';
import * as cdk from '../../core';
/**
 * Bundling properties
 */
export interface BundlingProps extends BundlingOptions {
    /**
     * Path to lock file
     */
    readonly depsLockFilePath: string;
    /**
     * Entry file
     */
    readonly entry: string;
    /**
     * The runtime of the lambda function
     */
    readonly runtime: Runtime;
    /**
     * The system architecture of the lambda function
     */
    readonly architecture: Architecture;
    /**
     * Path to project root
     */
    readonly projectRoot: string;
    /**
     * Run compilation using `tsc` before bundling
     */
    readonly preCompilation?: boolean;
    /**
     * Which option to use to copy the source files to the docker container and output files back
     * @default - BundlingFileAccess.BIND_MOUNT
     */
    readonly bundlingFileAccess?: cdk.BundlingFileAccess;
}
/**
 * Bundling with esbuild
 */
export declare class Bundling implements cdk.BundlingOptions {
    private readonly props;
    /**
     * esbuild bundled Lambda asset code
     */
    static bundle(scope: IConstruct, options: BundlingProps): AssetCode;
    static clearEsbuildInstallationCache(): void;
    static clearTscInstallationCache(): void;
    private static esbuildInstallation?;
    private static tscInstallation?;
    readonly image: cdk.DockerImage;
    readonly entrypoint?: string[];
    readonly command: string[];
    readonly volumes?: cdk.DockerVolume[];
    readonly volumesFrom?: string[];
    readonly environment?: {
        [key: string]: string;
    };
    readonly workingDirectory: string;
    readonly user?: string;
    readonly securityOpt?: string;
    readonly network?: string;
    readonly local?: cdk.ILocalBundling;
    readonly bundlingFileAccess?: cdk.BundlingFileAccess;
    private readonly projectRoot;
    private readonly relativeEntryPath;
    private readonly relativeTsconfigPath?;
    private readonly relativeDepsLockFilePath;
    private readonly externals;
    private readonly packageManager;
    constructor(scope: IConstruct, props: BundlingProps);
    private createBundlingCommand;
    private getLocalBundlingProvider;
}
