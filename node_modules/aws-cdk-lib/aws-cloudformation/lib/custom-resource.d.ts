import { Construct } from 'constructs';
import * as lambda from '../../aws-lambda';
import * as sns from '../../aws-sns';
import * as core from '../../core';
/**
 * Collection of arbitrary properties
 *
 * @deprecated this type has been deprecated in favor of using a key-value type directly
 */
export type Properties = {
    [key: string]: any;
};
