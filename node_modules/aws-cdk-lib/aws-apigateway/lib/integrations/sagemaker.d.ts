import { AwsIntegration } from './aws';
import { IEndpoint } from '../../../aws-sagemaker';
import { IntegrationConfig, IntegrationOptions } from '../integration';
import { Method } from '../method';
/**
 * Options for SageMakerIntegration
 */
export interface SagemakerIntegrationOptions extends IntegrationOptions {
}
/**
 * Integrates an AWS Sagemaker Endpoint to an API Gateway method
 *
 * @example
 *
 *   declare const resource: apigateway.Resource;
 *   declare const endpoint: sagemaker.IEndpoint;
 *   resource.addMethod('POST', new apigateway.SagemakerIntegration(endpoint));
 *
 */
export declare class SagemakerIntegration extends AwsIntegration {
    private readonly endpoint;
    constructor(endpoint: IEndpoint, options?: SagemakerIntegrationOptions);
    bind(method: Method): IntegrationConfig;
}
