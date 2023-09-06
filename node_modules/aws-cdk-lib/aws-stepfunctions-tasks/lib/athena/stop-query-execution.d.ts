import { Construct } from 'constructs';
import * as iam from '../../../aws-iam';
import * as sfn from '../../../aws-stepfunctions';
/**
 * Properties for stoping a Query Execution
 */
export interface AthenaStopQueryExecutionProps extends sfn.TaskStateBaseProps {
    /**
     * Query that will be stopped
     */
    readonly queryExecutionId: string;
}
/**
 * Stop an Athena Query Execution as a Task
 *
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/connect-athena.html
 */
export declare class AthenaStopQueryExecution extends sfn.TaskStateBase {
    private readonly props;
    private static readonly SUPPORTED_INTEGRATION_PATTERNS;
    protected readonly taskMetrics?: sfn.TaskMetricsConfig;
    protected readonly taskPolicies?: iam.PolicyStatement[];
    private readonly integrationPattern;
    constructor(scope: Construct, id: string, props: AthenaStopQueryExecutionProps);
    /**
     * Provides the Athena stop query execution service integration task configuration
     */
    /**
     * @internal
     */
    protected _renderTask(): any;
}
