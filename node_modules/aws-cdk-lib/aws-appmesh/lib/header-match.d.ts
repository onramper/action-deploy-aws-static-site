import { Construct } from 'constructs';
import { CfnRoute } from './index';
/**
 * Configuration for `HeaderMatch`
 */
export interface HeaderMatchConfig {
    /**
     * Route CFN configuration for the route header match.
     */
    readonly headerMatch: CfnRoute.HttpRouteHeaderProperty;
}
/**
 * Used to generate header matching methods.
 */
export declare abstract class HeaderMatch {
    /**
     * The value of the header with the given name in the request must match the
     * specified value exactly.
     *
     * @param headerName the name of the header to match against
     * @param headerValue The exact value to test against
     */
    static valueIs(headerName: string, headerValue: string): HeaderMatch;
    /**
     * The value of the header with the given name in the request must not match
     * the specified value exactly.
     *
     * @param headerName the name of the header to match against
     * @param headerValue The exact value to test against
     */
    static valueIsNot(headerName: string, headerValue: string): HeaderMatch;
    /**
     * The value of the header with the given name in the request must start with
     * the specified characters.
     *
     * @param headerName the name of the header to match against
     * @param prefix The prefix to test against
     */
    static valueStartsWith(headerName: string, prefix: string): HeaderMatch;
    /**
     * The value of the header with the given name in the request must not start
     * with the specified characters.
     *
     * @param headerName the name of the header to match against
     * @param prefix The prefix to test against
     */
    static valueDoesNotStartWith(headerName: string, prefix: string): HeaderMatch;
    /**
     * The value of the header with the given name in the request must end with
     * the specified characters.
     *
     * @param headerName the name of the header to match against
     * @param suffix The suffix to test against
     */
    static valueEndsWith(headerName: string, suffix: string): HeaderMatch;
    /**
     * The value of the header with the given name in the request must not end
     * with the specified characters.
     *
     * @param headerName the name of the header to match against
     * @param suffix The suffix to test against
     */
    static valueDoesNotEndWith(headerName: string, suffix: string): HeaderMatch;
    /**
     * The value of the header with the given name in the request must include
     * the specified characters.
     *
     * @param headerName the name of the header to match against
     * @param regex The regex to test against
     */
    static valueMatchesRegex(headerName: string, regex: string): HeaderMatch;
    /**
     * The value of the header with the given name in the request must not
     * include the specified characters.
     *
     * @param headerName the name of the header to match against
     * @param regex The regex to test against
     */
    static valueDoesNotMatchRegex(headerName: string, regex: string): HeaderMatch;
    /**
     * The value of the header with the given name in the request must be in a
     * range of values.
     *
     * @param headerName the name of the header to match against
     * @param start Match on values starting at and including this value
     * @param end Match on values up to but not including this value
     */
    static valuesIsInRange(headerName: string, start: number, end: number): HeaderMatch;
    /**
     * The value of the header with the given name in the request must not be in
     * a range of values.
     *
     * @param headerName the name of the header to match against
     * @param start Match on values starting at and including this value
     * @param end Match on values up to but not including this value
     */
    static valuesIsNotInRange(headerName: string, start: number, end: number): HeaderMatch;
    /**
     * Returns the header match configuration.
     */
    abstract bind(scope: Construct): HeaderMatchConfig;
}
