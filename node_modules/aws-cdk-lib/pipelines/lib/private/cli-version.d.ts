/**
 * Return the preferred CLI version for the current CDK Library version
 *
 * This is necessary to prevent cxapi version incompatibility between the two
 * CDK major versions. Since changes currently go into v1 before they go into
 * v2, a cxapi change can be released in v1 while the v2 CLI doesn't support it
 * yet.
 *
 * In those cases, simply installing the "latest" CLI (2) is not good enough
 * because it won't be able to read the Cloud Assembly of the v1 app.
 *
 * Find this version by finding the containing `package.json` and reading
 * `preferredCdkCliVersion` from it.
 */
export declare function preferredCliVersion(): string | undefined;
export declare function findUp(name: string, directory: string): string | undefined;
