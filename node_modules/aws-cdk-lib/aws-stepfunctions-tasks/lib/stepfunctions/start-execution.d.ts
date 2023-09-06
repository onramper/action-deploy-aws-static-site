import { Construct } from 'constructs';
import * as iam from '../../../aws-iam';
import * as sfn from '../../../aws-stepfunctions';
/**
 * Properties for StartExecution
 */
export interface StepFunctionsStartExecutionProps extends sfn.TaskStateBaseProps {
    /**
     * The Step Functions state machine to start the execution on.
     */
    readonly stateMachine: sfn.IStateMachine;
    /**
     * The JSON input for the execution, same as that of StartExecution.
     *
     * @see https://docs.aws.amazon.com/step-functions/latest/apireference/API_StartExecution.html
     *
     * @default - The state input (JSON path '$')
     */
    readonly input?: sfn.TaskInput;
    /**
     * The name of the execution, same as that of StartExecution.
     *
     * @see https://docs.aws.amazon.com/step-functions/latest/apireference/API_StartExecution.html
     *
     * @default - None
     */
    readonly name?: string;
    /**
     * Pass the execution ID from the context object to the execution input.
     * This allows the Step Functions UI to link child executions from parent executions, making it easier to trace execution flow across state machines.
     *
     * If you set this property to `true`, the `input` property must be an object (provided by `sfn.TaskInput.fromObject`) or omitted entirely.
     *
     * @see https://docs.aws.amazon.com/step-functions/latest/dg/concepts-nested-workflows.html#nested-execution-startid
     *
     * @default - false
     */
    readonly associateWithParent?: boolean;
}
/**
 * A Step Functions Task to call StartExecution on another state machine.
 *
 * It supports three service integration patterns: REQUEST_RESPONSE, RUN_JOB, and WAIT_FOR_TASK_TOKEN.
 */
export declare class StepFunctionsStartExecution extends sfn.TaskStateBase {
    private readonly props;
    private static readonly SUPPORTED_INTEGRATION_PATTERNS;
    protected readonly taskMetrics?: sfn.TaskMetricsConfig;
    protected readonly taskPolicies?: iam.PolicyStatement[];
    private readonly integrationPattern;
    constructor(scope: Construct, id: string, props: StepFunctionsStartExecutionProps);
    /**
     * @internal
     */
    protected _renderTask(): any;
    /**
     * As StateMachineArn is extracted automatically from the state machine object included in the constructor,
     *
     * the scoped access policy should be generated accordingly.
     *
     * This means the action of StartExecution should be restricted on the given state machine, instead of being granted to all the resources (*).
     */
    private createScopedAccessPolicy;
}
