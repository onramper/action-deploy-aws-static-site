import { Construct } from 'constructs';
import { IAppsyncFunction } from './appsync-function';
import { CachingConfig } from './caching-config';
import { Code } from './code';
import { BaseDataSource } from './data-source';
import { IGraphqlApi } from './graphqlapi-base';
import { MappingTemplate } from './mapping-template';
import { FunctionRuntime } from './runtime';
/**
 * Basic properties for an AppSync resolver
 */
export interface BaseResolverProps {
    /**
     * name of the GraphQL type this resolver is attached to
     */
    readonly typeName: string;
    /**
     * name of the GraphQL field in the given type this resolver is attached to
     */
    readonly fieldName: string;
    /**
     * configuration of the pipeline resolver
     *
     * @default - no pipeline resolver configuration
     * An empty array | undefined sets resolver to be of kind, unit
     */
    readonly pipelineConfig?: IAppsyncFunction[];
    /**
     * The request mapping template for this resolver
     *
     * @default - No mapping template
     */
    readonly requestMappingTemplate?: MappingTemplate;
    /**
     * The response mapping template for this resolver
     *
     * @default - No mapping template
     */
    readonly responseMappingTemplate?: MappingTemplate;
    /**
     * The caching configuration for this resolver
     *
     * @default - No caching configuration
     */
    readonly cachingConfig?: CachingConfig;
    /**
     * The maximum number of elements per batch, when using batch invoke
     *
     * @default - No max batch size
     */
    readonly maxBatchSize?: number;
    /**
     * The functions runtime
     *
     * @default - no function runtime, VTL mapping templates used
     */
    readonly runtime?: FunctionRuntime;
    /**
     * The function code
     *
     * @default - no code is used
     */
    readonly code?: Code;
}
/**
 * Additional property for an AppSync resolver for data source reference
 */
export interface ExtendedResolverProps extends BaseResolverProps {
    /**
     * The data source this resolver is using
     *
     * @default - No datasource
     */
    readonly dataSource?: BaseDataSource;
}
/**
 * Additional property for an AppSync resolver for GraphQL API reference
 */
export interface ResolverProps extends ExtendedResolverProps {
    /**
     * The API this resolver is attached to
     */
    readonly api: IGraphqlApi;
}
/**
 * An AppSync resolver
 */
export declare class Resolver extends Construct {
    /**
     * the ARN of the resolver
     */
    readonly arn: string;
    private resolver;
    constructor(scope: Construct, id: string, props: ResolverProps);
    private createCachingConfig;
}
