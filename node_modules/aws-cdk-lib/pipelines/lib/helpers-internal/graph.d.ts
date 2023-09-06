export interface GraphNodeProps<A> {
    readonly data?: A;
}
export declare class GraphNode<A> {
    readonly id: string;
    static of<A>(id: string, data: A): GraphNode<A>;
    readonly dependencies: GraphNode<A>[];
    readonly data?: A;
    private _parentGraph?;
    constructor(id: string, props?: GraphNodeProps<A>);
    /**
     * A graph-wide unique identifier for this node. Rendered by joining the IDs
     * of all ancestors with hyphens.
     */
    get uniqueId(): string;
    /**
     * The union of all dependencies of this node and the dependencies of all
     * parent graphs.
     */
    get allDeps(): GraphNode<A>[];
    dependOn(...dependencies: Array<GraphNode<A> | undefined>): void;
    ancestorPath(upTo: GraphNode<A>): GraphNode<A>[];
    rootPath(): GraphNode<A>[];
    get root(): GraphNode<A>;
    get rootGraph(): Graph<A>;
    get parentGraph(): Graph<A> | undefined;
    /**
     * @internal
     */
    _setParentGraph(parentGraph: Graph<A>): void;
    toString(): string;
}
/**
 * A dependency set that is constructed over time
 *
 * It doesn't matter in what order sources and targets for the dependency
 * relationship(s) get added. This class can serve as a synchronization
 * point if the order in which graph nodes get added to the graph is not
 * well-defined.
 *
 * You can think of a DependencyBuilder as a vertex that doesn't actually exist in the tree:
 *
 *     ┌────┐               ┌────┐
 *     │ P1 │◀─┐         ┌──│ S1 │
 *     └────┘  │   .─.   │  └────┘
 *             ├──( B )◀─┤
 *     ┌────┐  │   `─'   │  ┌────┐
 *     │ P2 │◀─┘         └──│ S2 │
 *     └────┘               └────┘
 *
 * Ultimately leads to: { S1 -> P1, S1 -> P2, S2 -> P1, S2 -> P2 }.
 */
export declare class DependencyBuilder<A> {
    private readonly _producers;
    private readonly _consumers;
    /**
     * Add a producer: make all nodes added by 'dependBy' depend on these
     */
    dependOn(...targets: GraphNode<A>[]): this;
    /**
     * Add a consumer: make these nodes depend on all nodes added by 'dependOn'.
     */
    dependBy(...sources: GraphNode<A>[]): this;
    /**
     * Whether there are any consumers (nodes added by 'dependBy') but no producers (nodes added by 'dependOn')
     */
    get hasUnsatisfiedConsumers(): boolean;
    get consumers(): ReadonlyArray<GraphNode<A>>;
    consumersAsString(): string;
}
/**
 * A set of dependency builders identified by a given key.
 */
export declare class DependencyBuilders<K, A = any> {
    private readonly builders;
    for(key: K): DependencyBuilder<A>;
    /**
     * @deprecated Use 'for'
     */
    get(key: K): DependencyBuilder<A>;
    unsatisfiedBuilders(): [K, DependencyBuilder<A>][];
}
export interface GraphProps<A> extends GraphNodeProps<A> {
    /**
     * Initial nodes in the workflow
     */
    readonly nodes?: GraphNode<A>[];
}
export declare class Graph<A> extends GraphNode<A> {
    static of<A, B>(id: string, data: A, nodes?: GraphNode<B>[]): Graph<A | B>;
    private readonly children;
    constructor(name: string, props?: GraphProps<A>);
    get nodes(): Set<GraphNode<A>>;
    tryGetChild(name: string): GraphNode<A> | undefined;
    contains(node: GraphNode<A>): boolean;
    add(...nodes: Array<GraphNode<A>>): void;
    absorb(other: Graph<A>): void;
    /**
     * Return topologically sorted tranches of nodes at this graph level
     */
    sortedChildren(fail?: boolean): GraphNode<A>[][];
    /**
     * Return a topologically sorted list of non-Graph nodes in the entire subgraph
     */
    sortedLeaves(): GraphNode<A>[][];
    render(): string;
    renderDot(): string;
    consoleLog(_indent?: number): void;
    /**
     * Return the union of all dependencies of the descendants of this graph
     */
    private deepDependencies;
    /**
     * Return all non-Graph nodes
     */
    allLeaves(): GraphNodeCollection<A>;
}
/**
 * A collection of graph nodes
 */
export declare class GraphNodeCollection<A> {
    readonly nodes: GraphNode<A>[];
    constructor(nodes: Iterable<GraphNode<A>>);
    /**
     * Add one or more dependencies to all nodes in the collection
     */
    dependOn(...dependencies: Array<GraphNode<A> | undefined>): void;
    /**
     * Return the topographically first node in the collection
     */
    first(): GraphNode<A>;
    /**
    * Returns the graph node that's shared between these nodes
    */
    commonAncestor(): GraphNode<A>;
    toString(): string;
}
export declare function isGraph<A>(x: GraphNode<A>): x is Graph<A>;
