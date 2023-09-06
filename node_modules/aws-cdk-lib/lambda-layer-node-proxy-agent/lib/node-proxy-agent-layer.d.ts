import { Construct } from 'constructs';
import * as lambda from '../../aws-lambda';
/**
 * An AWS Lambda layer that includes the NPM dependency `proxy-agent`.
 */
export declare class NodeProxyAgentLayer extends lambda.LayerVersion {
    constructor(scope: Construct, id: string);
}
