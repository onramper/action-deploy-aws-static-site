/**
 * Wrap a string in `Fn.sub`, but return the same `Fn.sub` value for the same string
 *
 * If we don't do this, every new `Fn.sub()` creates a new `IResolvable` instance
 * which will stringify to a unique string value, and we can't dedupe the stringified
 * values anymore.
 *
 * Potentially we could/should do deduplication in the token system itself, but
 * we would have to be consistent about it and do it for all tokens, which has
 * an unpredictable memory impact and I'm scared of making such a sweeping
 * change. Hence, a local solution to a local problem.
 */
export declare class CachedFnSub {
    private cache;
    fnSub(x: string): string;
}
