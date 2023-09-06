import { Construct } from 'constructs';
import * as iam from '../../../aws-iam';
import * as sfn from '../../../aws-stepfunctions';
/**
 * Properties for getting a Query Results
 */
export interface AthenaGetQueryResultsProps extends sfn.TaskStateBaseProps {
    /**
     * Query that will be retrieved
     *
     * Example value: `adfsaf-23trf23-f23rt23`
     */
    readonly queryExecutionId: string;
    /**
     * Pagination token
     *
     * @default - No next token
     */
    readonly nextToken?: string;
    /**
     * Max number of results
     *
     * @default 1000
     */
    readonly maxResults?: number;
}
/**
 * Get an Athena Query Results as a Task
 *
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/connect-athena.html
 */
export declare class AthenaGetQueryResults extends sfn.TaskStateBase {
    private readonly props;
    private static readonly SUPPORTED_INTEGRATION_PATTERNS;
    protected readonly taskMetrics?: sfn.TaskMetricsConfig;
    protected readonly taskPolicies?: iam.PolicyStatement[];
    private readonly integrationPattern;
    constructor(scope: Construct, id: string, props: AthenaGetQueryResultsProps);
    /**
     * Provides the Athena get query results service integration task configuration
     * @internal
     */
    protected _renderTask(): any;
}
