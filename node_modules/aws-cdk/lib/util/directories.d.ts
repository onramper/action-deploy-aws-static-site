/**
 * Return a location that will be used as the CDK home directory.
 * Currently the only thing that is placed here is the cache.
 *
 * First try to use the users home directory (i.e. /home/someuser/),
 * but if that directory does not exist for some reason create a tmp directory.
 *
 * Typically it wouldn't make sense to create a one time use tmp directory for
 * the purpose of creating a cache, but since this only applies to users that do
 * not have a home directory (some CI systems?) this should be fine.
 */
export declare function cdkHomeDir(): string;
export declare function cdkCacheDir(): string;
/**
 * From the current file, find the directory that contains the CLI's package.json
 *
 * Can't use `__dirname` in production code, as the CLI will get bundled as it's
 * released and `__dirname` will refer to a different location in the `.ts` form
 * as it will in the final executing form.
 */
export declare function rootDir(): string;
export declare function rootDir(fail: true): string;
export declare function rootDir(fail: false): string | undefined;
