import * as cxschema from '@aws-cdk/cloud-assembly-schema';
import { SdkProvider } from '../api';
import { ContextProviderPlugin } from '../api/plugin/context-provider-plugin';
import { Context } from '../settings';
export type ContextProviderFactory = ((sdk: SdkProvider) => ContextProviderPlugin);
export type ProviderMap = {
    [name: string]: ContextProviderFactory;
};
/**
 * Iterate over the list of missing context values and invoke the appropriate providers from the map to retrieve them
 */
export declare function provideContextValues(missingValues: cxschema.MissingContext[], context: Context, sdk: SdkProvider): Promise<void>;
/**
 * Register a context provider
 *
 * A context provider cannot reuse the SDKs authentication mechanisms.
 */
export declare function registerContextProvider(name: string, provider: ContextProviderPlugin): void;
/**
 * Register a plugin context provider
 *
 * A plugin provider cannot reuse the SDKs authentication mechanisms.
 */
export declare function registerPluginContextProvider(name: string, provider: ContextProviderPlugin): void;
/**
 * Register a context provider factory
 *
 * A context provider factory takes an SdkProvider and returns the context provider plugin.
 */
export declare function registerContextProviderFactory(name: string, provider: ContextProviderFactory): void;
