/**
 * Process a custom resource request to restrict the default security group
 * ingress & egress rules.
 *
 * When someone turns off the property then this custom resource will be deleted in which
 * case we should add back the rules that were removed.
 */
export declare function handler(event: AWSLambda.CloudFormationCustomResourceEvent): Promise<void>;
