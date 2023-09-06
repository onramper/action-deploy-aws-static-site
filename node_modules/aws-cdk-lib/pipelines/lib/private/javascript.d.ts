export declare function addAll<A>(into: Set<A>, from: Iterable<A>): void;
export declare function extract<A, B>(from: Map<A, B>, key: A): B | undefined;
export declare function flatMap<A, B>(xs: Iterable<A>, fn: (x: A) => Iterable<B>): IterableIterator<B>;
export declare function enumerate<A>(xs: Iterable<A>): IterableIterator<[number, A]>;
export declare function expectProp<A extends object, B extends keyof A>(obj: A, key: B): NonNullable<A[B]>;
export declare function flatten<A>(xs: Iterable<A[]>): IterableIterator<A>;
export declare function filterEmpty(xs: Array<string | undefined>): string[];
export declare function mapValues<A, B>(xs: Record<string, A>, fn: (x: A) => B): Record<string, B>;
export declare function mkdict<A>(xs: Array<readonly [string, A]>): Record<string, A>;
export declare function noEmptyObject<A>(xs: Record<string, A>): Record<string, A> | undefined;
export declare function noUndefined<A>(xs: Record<string, A>): Record<string, NonNullable<A>>;
export declare function maybeSuffix(x: string | undefined, suffix: string): string | undefined;
/**
 * Partition a collection by dividing it into two collections, one that matches the predicate and one that don't
 */
export declare function partition<T>(xs: T[], pred: (x: T) => boolean): [T[], T[]];
export declare function isDefined<A>(x: A): x is NonNullable<A>;
