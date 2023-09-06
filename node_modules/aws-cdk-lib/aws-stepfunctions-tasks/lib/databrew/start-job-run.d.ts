import { Construct } from 'constructs';
import * as iam from '../../../aws-iam';
import * as sfn from '../../../aws-stepfunctions';
/**
 * Properties for starting a job run with StartJobRun
 */
export interface GlueDataBrewStartJobRunProps extends sfn.TaskStateBaseProps {
    /**
     * Glue DataBrew Job to run
     */
    readonly name: string;
}
/**
 * Start a Job run as a Task
 *
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/connect-databrew.html
 */
export declare class GlueDataBrewStartJobRun extends sfn.TaskStateBase {
    private readonly props;
    private static readonly SUPPORTED_INTEGRATION_PATTERNS;
    protected readonly taskMetrics?: sfn.TaskMetricsConfig;
    protected readonly taskPolicies?: iam.PolicyStatement[];
    private readonly integrationPattern;
    /**
     */
    constructor(scope: Construct, id: string, props: GlueDataBrewStartJobRunProps);
    /**
     * Provides the Glue DataBrew Start Job Run task configuration
     * @internal
     */
    protected _renderTask(): any;
}
