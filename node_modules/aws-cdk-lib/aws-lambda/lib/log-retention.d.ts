import { Construct } from 'constructs';
import * as logs from '../../aws-logs';
/**
 * Retry options for all AWS API calls.
 */
export interface LogRetentionRetryOptions extends logs.LogRetentionRetryOptions {
}
