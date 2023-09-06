/**
 * After this point, S3 website domains look like `s3-website.REGION.s3.amazonaws.com`
 *
 * Before this point, S3 website domains look like `s3-website-REGION.s3.amazonaws.com`.
 */
export declare const RULE_S3_WEBSITE_REGIONAL_SUBDOMAIN: unique symbol;
/**
 * After this point, all regions in the 'aws' partition are opt-in.
 */
export declare const RULE_CLASSIC_PARTITION_BECOMES_OPT_IN: unique symbol;
/**
 * List of AWS region, ordered by launch date (oldest to newest)
 *
 * The significance of this is that standards and conventions change over time.
 * Generally, as rules are changed they only apply to new regions, and old
 * regions are left as-is.
 *
 * We mix the list of regions with a list of rules that were introduced over
 * time (rules are symbols).
 *
 * Therefore, if we want to know if a rule applies to a certain region, we
 * only need to check its position in the list and compare it to when a
 * rule was introduced.
 */
export declare const AWS_REGIONS_AND_RULES: readonly (string | symbol)[];
/**
 * The names of all (known) AWS regions
 *
 * Not in the list ==> no built-in data for that region.
 */
export declare const AWS_REGIONS: readonly string[];
/**
 * Possibly non-exhaustive list of all service names, used to locate service principals.
 *
 * Not in the list ==> default service principal mappings.
 */
export declare const AWS_SERVICES: readonly string[];
/**
 * Whether or not a region predates a given rule (or region).
 *
 * Unknown region => we have to assume no.
 */
export declare function before(region: string, ruleOrRegion: string | symbol): boolean;
/**
 * Return all regions before a given rule was introduced (or region)
 */
export declare function regionsBefore(ruleOrRegion: string | symbol): string[];
export interface Region {
    readonly partition: string;
    readonly domainSuffix: string;
}
export declare function partitionInformation(region: string): Region;
