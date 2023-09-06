import { Construct } from 'constructs';
import { CfnRoute } from './appmesh.generated';
/**
 * Configuration for `QueryParameterMatch`
 */
export interface QueryParameterMatchConfig {
    /**
     * Route CFN configuration for route query parameter match.
     */
    readonly queryParameterMatch: CfnRoute.QueryParameterProperty;
}
/**
 * Used to generate query parameter matching methods.
 */
export declare abstract class QueryParameterMatch {
    /**
     * The value of the query parameter with the given name in the request must match the
     * specified value exactly.
     *
     * @param queryParameterName the name of the query parameter to match against
     * @param queryParameterValue The exact value to test against
     */
    static valueIs(queryParameterName: string, queryParameterValue: string): QueryParameterMatch;
    /**
     * Returns the query parameter match configuration.
     */
    abstract bind(scope: Construct): QueryParameterMatchConfig;
}
