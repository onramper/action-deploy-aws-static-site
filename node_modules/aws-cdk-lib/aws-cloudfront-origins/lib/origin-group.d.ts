import { Construct } from 'constructs';
import * as cloudfront from '../../aws-cloudfront';
/** Construction properties for `OriginGroup`. */
export interface OriginGroupProps {
    /**
     * The primary origin that should serve requests for this group.
     */
    readonly primaryOrigin: cloudfront.IOrigin;
    /**
     * The fallback origin that should serve requests when the primary fails.
     */
    readonly fallbackOrigin: cloudfront.IOrigin;
    /**
     * The list of HTTP status codes that,
     * when returned from the primary origin,
     * would cause querying the fallback origin.
     *
     * @default - 500, 502, 503 and 504
     */
    readonly fallbackStatusCodes?: number[];
}
/**
 * An Origin that represents a group.
 * Consists of a primary Origin,
 * and a fallback Origin called when the primary returns one of the provided HTTP status codes.
 */
export declare class OriginGroup implements cloudfront.IOrigin {
    private readonly props;
    constructor(props: OriginGroupProps);
    bind(scope: Construct, options: cloudfront.OriginBindOptions): cloudfront.OriginBindConfig;
}
