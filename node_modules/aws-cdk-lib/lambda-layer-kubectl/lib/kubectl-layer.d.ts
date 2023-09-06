import { Construct } from 'constructs';
import * as lambda from '../../aws-lambda';
/**
 * An AWS Lambda layer that includes `kubectl` and `helm`.
 */
export declare class KubectlLayer extends lambda.LayerVersion {
    constructor(scope: Construct, id: string);
}
