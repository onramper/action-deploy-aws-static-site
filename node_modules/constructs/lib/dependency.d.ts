import { IConstruct } from './construct';
/**
 * Trait marker for classes that can be depended upon
 *
 * The presence of this interface indicates that an object has
 * an `IDependable` implementation.
 *
 * This interface can be used to take an (ordering) dependency on a set of
 * constructs. An ordering dependency implies that the resources represented by
 * those constructs are deployed before the resources depending ON them are
 * deployed.
 */
export interface IDependable {
}
/**
 * A set of constructs to be used as a dependable
 *
 * This class can be used when a set of constructs which are disjoint in the
 * construct tree needs to be combined to be used as a single dependable.
 *
 * @experimental
 */
export declare class DependencyGroup implements IDependable {
    private readonly _deps;
    constructor(...deps: IDependable[]);
    /**
     * Add a construct to the dependency roots
     */
    add(...scopes: IDependable[]): void;
}
/**
 * Trait for IDependable
 *
 * Traits are interfaces that are privately implemented by objects. Instead of
 * showing up in the public interface of a class, they need to be queried
 * explicitly. This is used to implement certain framework features that are
 * not intended to be used by Construct consumers, and so should be hidden
 * from accidental use.
 *
 * @example
 *
 * // Usage
 * const roots = Dependable.of(construct).dependencyRoots;
 *
 * // Definition
 * Dependable.implement(construct, {
 *       dependencyRoots: [construct],
 * });
 *
 * @experimental
 */
export declare abstract class Dependable {
    /**
     * Turn any object into an IDependable.
     */
    static implement(instance: IDependable, trait: Dependable): void;
    /**
     * Return the matching Dependable for the given class instance.
     */
    static of(instance: IDependable): Dependable;
    /**
     * Return the matching Dependable for the given class instance.
     * @deprecated use `of`
     */
    static get(instance: IDependable): Dependable;
    /**
     * The set of constructs that form the root of this dependable
     *
     * All resources under all returned constructs are included in the ordering
     * dependency.
     */
    abstract readonly dependencyRoots: IConstruct[];
}
