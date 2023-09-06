import { Construct } from 'constructs';
import * as eks from '../../../aws-eks';
import * as iam from '../../../aws-iam';
import * as sfn from '../../../aws-stepfunctions';
/**
 * Properties for calling a EKS endpoint with EksCall
 */
export interface EksCallProps extends sfn.TaskStateBaseProps {
    /**
     * The EKS cluster
     */
    readonly cluster: eks.ICluster;
    /**
     * HTTP method ("GET", "POST", "PUT", ...) part of HTTP request
     */
    readonly httpMethod: HttpMethods;
    /**
     * HTTP path of the Kubernetes REST API operation
     * For example: /api/v1/namespaces/default/pods
     */
    readonly httpPath: string;
    /**
     * Query Parameters part of HTTP request
     * @default - no query parameters
     */
    readonly queryParameters?: {
        [key: string]: string[];
    };
    /**
     * Request body part of HTTP request
     * @default - No request body
     */
    readonly requestBody?: sfn.TaskInput;
}
/**
 * Call a EKS endpoint as a Task
 *
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/connect-eks.html
 */
export declare class EksCall extends sfn.TaskStateBase {
    private readonly props;
    private static readonly SUPPORTED_INTEGRATION_PATTERNS;
    /** No policies are required due to eks:call is an Http service integration and does not call and EKS API directly
     * @see https://docs.aws.amazon.com/step-functions/latest/dg/connect-eks.html#connect-eks-permissions
     */
    protected readonly taskMetrics?: sfn.TaskMetricsConfig;
    protected readonly taskPolicies?: iam.PolicyStatement[];
    private readonly integrationPattern;
    private readonly clusterEndpoint;
    private readonly clusterCertificateAuthorityData;
    constructor(scope: Construct, id: string, props: EksCallProps);
    /**
     * Provides the EKS Call service integration task configuration
     * @internal
     */
    protected _renderTask(): any;
}
/**
 * Method type of a EKS call
 */
export declare enum HttpMethods {
    /**
     * Retrieve data from a server at the specified resource
     */
    GET = "GET",
    /**
     * Send data to the API endpoint to create or update a resource
     */
    POST = "POST",
    /**
     * Send data to the API endpoint to update or create a resource
     */
    PUT = "PUT",
    /**
     * Delete the resource at the specified endpoint
     */
    DELETE = "DELETE",
    /**
     * Apply partial modifications to the resource
     */
    PATCH = "PATCH",
    /**
     * Retrieve data from a server at the specified resource without the response body
     */
    HEAD = "HEAD"
}
