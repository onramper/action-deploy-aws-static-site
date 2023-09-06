import * as cdk from '../../../core';
/**
 * Throws an error if a duration is defined and not an integer number of seconds within a range.
 */
export declare function validateSecondsInRangeOrUndefined(name: string, min: number, max: number, duration?: cdk.Duration): void;
