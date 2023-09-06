import { Construct } from 'constructs';
import * as iam from '../../aws-iam';
import * as kinesis from '../../aws-kinesis';
/**
 * Represents the endpoints available for targetting within a realtime log config resource
 */
export declare abstract class Endpoint {
    /**
      * Configure a Kinesis Stream Endpoint for Realtime Log Config
      *
      * @default - a role will be created and used across your endpoints
      */
    static fromKinesisStream(stream: kinesis.IStream, role?: iam.IRole): Endpoint;
    private constructor();
    /**
     * @internal
     */
    private singletonKinesisRole;
    /**
     * @internal
     */
    abstract _renderEndpoint(scope: Construct): any;
}
