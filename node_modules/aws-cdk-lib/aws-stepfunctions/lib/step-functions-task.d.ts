import './states/task';
import * as cloudwatch from '../../aws-cloudwatch';
import * as iam from '../../aws-iam';
import { Duration } from '../../core';
/**
 * Three ways to call an integrated service: Request Response, Run a Job and Wait for a Callback with Task Token.
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html
 *
 * Here, they are named as FIRE_AND_FORGET, SYNC and WAIT_FOR_TASK_TOKEN respectfully.
 *
 * @default FIRE_AND_FORGET
 */
export declare enum ServiceIntegrationPattern {
    /**
     * Call a service and progress to the next state immediately after the API call completes
     */
    FIRE_AND_FORGET = "FIRE_AND_FORGET",
    /**
     * Call a service and wait for a job to complete.
     */
    SYNC = "SYNC",
    /**
     * Call a service with a task token and wait until that token is returned by SendTaskSuccess/SendTaskFailure with payload.
     */
    WAIT_FOR_TASK_TOKEN = "WAIT_FOR_TASK_TOKEN"
}
