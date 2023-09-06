import { Construct } from 'constructs';
import * as lambda from '../../aws-lambda';
/**
 * An AWS Lambda layer that includes the AWS CLI.
 */
export declare class AwsCliLayer extends lambda.LayerVersion {
    constructor(scope: Construct, id: string);
}
