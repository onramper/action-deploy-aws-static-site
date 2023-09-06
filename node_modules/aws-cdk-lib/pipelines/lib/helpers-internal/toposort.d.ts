import { GraphNode } from './graph';
export declare function printDependencyMap<A>(dependencies: Map<GraphNode<A>, Set<GraphNode<A>>>): void;
export declare function topoSort<A>(nodes: Set<GraphNode<A>>, dependencies: Map<GraphNode<A>, Set<GraphNode<A>>>, fail?: boolean): GraphNode<A>[][];
