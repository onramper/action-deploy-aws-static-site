import * as AWSLambda from 'aws-lambda';
/**
 * Serialized form of the physical resource id for use in the operation parameters
 */
export declare const PHYSICAL_RESOURCE_ID_REFERENCE = "PHYSICAL:RESOURCEID:";
/**
 * Flattens a nested object
 *
 * @param object the object to be flattened
 * @returns a flat object with path as keys
 */
export declare function flatten(object: object): {
    [key: string]: any;
};
/**
 * Decodes encoded special values (physicalResourceId)
 */
export declare function decodeSpecialValues(object: object, physicalResourceId: string): any;
/**
 * Filters the keys of an object.
 */
export declare function filterKeys(object: object, pred: (key: string) => boolean): {};
type Event = AWSLambda.CloudFormationCustomResourceEvent;
export declare function respond(event: Event, responseStatus: string, reason: string, physicalResourceId: string, data: any): Promise<unknown>;
export declare function decodeCall(call: string | undefined): any;
export declare function startsWithOneOf(searchStrings: string[]): (string: string) => boolean;
export {};
