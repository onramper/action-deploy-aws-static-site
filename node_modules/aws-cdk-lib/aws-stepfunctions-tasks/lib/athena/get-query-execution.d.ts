import { Construct } from 'constructs';
import * as iam from '../../../aws-iam';
import * as sfn from '../../../aws-stepfunctions';
/**
 * Properties for getting a Query Execution
 */
export interface AthenaGetQueryExecutionProps extends sfn.TaskStateBaseProps {
    /**
     * Query that will be retrieved
     *
     * Example value: `adfsaf-23trf23-f23rt23`
     */
    readonly queryExecutionId: string;
}
/**
 * Get an Athena Query Execution as a Task
 *
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/connect-athena.html
 */
export declare class AthenaGetQueryExecution extends sfn.TaskStateBase {
    private readonly props;
    private static readonly SUPPORTED_INTEGRATION_PATTERNS;
    protected readonly taskMetrics?: sfn.TaskMetricsConfig;
    protected readonly taskPolicies?: iam.PolicyStatement[];
    private readonly integrationPattern;
    constructor(scope: Construct, id: string, props: AthenaGetQueryExecutionProps);
    /**
     * Provides the Athena get query execution service integration task configuration
     * @internal
     */
    protected _renderTask(): any;
}
