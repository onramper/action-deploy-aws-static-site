/**
 * Returns the fully-qualified name
 * (that is, including the NPM package name)
 * of a class that corresponds to this CloudFormation type,
 * or undefined if the given type was not found.
 *
 * For example, lookup("AWS::S3::Bucket")
 * returns "aws-cdk-lib/aws-s3.CfnBucket".
 */
export declare function lookup(cfnType: string): string | undefined;
