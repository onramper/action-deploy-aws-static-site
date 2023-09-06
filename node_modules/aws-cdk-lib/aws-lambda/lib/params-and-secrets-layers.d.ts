import { Construct } from 'constructs';
import { IFunction } from './function-base';
import { Duration } from '../../core';
/**
 * Config returned from `ParamsAndSecretsVersion._bind`
 */
interface ParamsAndSecretsBindConfig {
    /**
     * ARN of the Parameters and Secrets layer version
     */
    readonly arn: string;
    /**
     * Environment variables for the Parameters and Secrets layer configuration
     */
    readonly environmentVars: {
        [key: string]: string;
    };
}
/**
 * Parameters and Secrets Extension versions
 */
export declare enum ParamsAndSecretsVersions {
    /**
     * Version 1.0.103
     *
     * Note: This is the latest version
     */
    V1_0_103 = "1.0.103"
}
/**
 * Logging levels for the Parametes and Secrets Extension
 */
export declare enum ParamsAndSecretsLogLevel {
    /**
     * Debug
     */
    DEBUG = "debug",
    /**
     * Info
     */
    INFO = "info",
    /**
     * Warn
     */
    WARN = "warn",
    /**
     * Error
     */
    ERROR = "error",
    /**
     * No logging
     */
    NONE = "none"
}
/**
 * Parameters and Secrets Extension configuration options
 */
export interface ParamsAndSecretsOptions {
    /**
     * Whether the Parameters and Secrets Extension will cache parameters and
     * secrets.
     *
     * @default true
     */
    readonly cacheEnabled?: boolean;
    /**
     * The maximum number of secrets and parameters to cache. Must be a value
     * from 0 to 1000. A value of 0 means there is no caching.
     *
     * Note: This variable is ignored if parameterStoreTtl and secretsManagerTtl
     * are 0.
     *
     * @default 1000
     */
    readonly cacheSize?: number;
    /**
     * The port for the local HTTP server. Valid port numbers are 1 - 65535.
     *
     * @default 2773
     */
    readonly httpPort?: number;
    /**
     * The level of logging provided by the Parameters and Secrets Extension.
     *
     * Note: Set to debug to see the cache configuration.
     *
     * @default - Logging level will be `info`
     */
    readonly logLevel?: ParamsAndSecretsLogLevel;
    /**
     * The maximum number of connection for HTTP clients that the Parameters and
     * Secrets Extension uses to make requests to Parameter Store or Secrets
     * Manager. There is no maximum limit. Minimum is 1.
     *
     * Note: Every running copy of this Lambda function may open the number of
     * connections specified by this property. Thus, the total number of connections
     * may exceed this number.
     *
     * @default 3
     */
    readonly maxConnections?: number;
    /**
     * The timeout for requests to Secrets Manager. A value of 0 means that there is
     * no timeout.
     *
     * @default 0
     */
    readonly secretsManagerTimeout?: Duration;
    /**
     * The time-to-live of a secret in the cache. A value of 0 means there is no caching.
     * The maximum time-to-live is 300 seconds.
     *
     * Note: This variable is ignored if cacheSize is 0.
     *
     * @default 300 seconds
     */
    readonly secretsManagerTtl?: Duration;
    /**
     * The timeout for requests to Parameter Store. A value of 0 means that there is no
     * timeout.
     *
     * @default 0
     */
    readonly parameterStoreTimeout?: Duration;
    /**
     * The time-to-live of a parameter in the cache. A value of 0 means there is no caching.
     * The maximum time-to-live is 300 seconds.
     *
     * Note: This variable is ignored if cacheSize is 0.
     *
     * @default 300 seconds
     */
    readonly parameterStoreTtl?: Duration;
}
/**
 * Parameters and Secrets Extension layer version
 */
export declare abstract class ParamsAndSecretsLayerVersion {
    private readonly options;
    /**
     * Use the Parameters and Secrets Extension associated with the provided ARN. Make sure the ARN is associated
     * with the same region and architecture as your function.
     *
     * @see https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieving-secrets_lambda.html#retrieving-secrets_lambda_ARNs
     */
    static fromVersionArn(arn: string, options?: ParamsAndSecretsOptions): ParamsAndSecretsLayerVersion;
    /**
     * Use a specific version of the Parameters and Secrets Extension to generate a layer version.
     */
    static fromVersion(version: ParamsAndSecretsVersions, options?: ParamsAndSecretsOptions): ParamsAndSecretsLayerVersion;
    private constructor();
    /**
     * Returns the ARN of the Parameters and Secrets Extension
     *
     * @internal
     */
    abstract _bind(scope: Construct, fn: IFunction): ParamsAndSecretsBindConfig;
    /**
     * Configure environment variables for Parameters and Secrets Extension based on configuration options
     */
    private get environmentVariablesFromOptions();
    /**
     * Retrieve the correct Parameters and Secrets Extension Lambda ARN from RegionInfo,
     * or create a mapping to look it up at stack deployment time.
     *
     * This function is run on CDK synthesis.
     */
    private getVersionArn;
}
export {};
