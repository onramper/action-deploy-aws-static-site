import { Construct } from 'constructs';
import { CallApiGatewayEndpointBaseProps } from './base-types';
import * as iam from '../../../aws-iam';
import * as sfn from '../../../aws-stepfunctions';
/**
 * Base CallApiGatewayEndpoint Task
 * @internal
 */
export declare abstract class CallApiGatewayEndpointBase extends sfn.TaskStateBase {
    private static readonly SUPPORTED_INTEGRATION_PATTERNS;
    private readonly baseProps;
    private readonly integrationPattern;
    protected abstract readonly apiEndpoint: string;
    protected abstract readonly arnForExecuteApi: string;
    protected abstract readonly stageName?: string;
    constructor(scope: Construct, id: string, props: CallApiGatewayEndpointBaseProps);
    /**
     * @internal
     */
    protected _renderTask(): {
        Resource: string;
        Parameters: {
            [key: string]: any;
        } | undefined;
    };
    protected createPolicyStatements(): iam.PolicyStatement[];
}
