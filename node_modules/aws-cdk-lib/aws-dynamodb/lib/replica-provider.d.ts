import { Construct } from 'constructs';
import * as lambda from '../../aws-lambda';
import { Duration, NestedStack } from '../../core';
import * as cr from '../../custom-resources';
/**
 * Properties for a ReplicaProvider
 */
export interface ReplicaProviderProps {
    /**
     * The table name
     *
     */
    readonly tableName: string;
    /**
     * Regions where replica tables will be created
     *
     */
    readonly regions: string[];
    /**
     * The timeout for the replication operation.
     *
     * @default Duration.minutes(30)
     */
    readonly timeout?: Duration;
}
export declare class ReplicaProvider extends NestedStack {
    /**
     * Creates a stack-singleton resource provider nested stack.
     */
    static getOrCreate(scope: Construct, props: ReplicaProviderProps): ReplicaProvider;
    /**
     * The custom resource provider.
     */
    readonly provider: cr.Provider;
    /**
     * The onEvent handler
     */
    readonly onEventHandler: lambda.Function;
    /**
     * The isComplete handler
     */
    readonly isCompleteHandler: lambda.Function;
    private constructor();
}
