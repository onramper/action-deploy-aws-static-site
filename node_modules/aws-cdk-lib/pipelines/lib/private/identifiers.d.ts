import { StackDeployment } from '../blueprint/stack-deployment';
import { GraphNode } from '../helpers-internal/graph';
export declare function hash<A>(obj: A): string;
export declare function actionName<A>(node: GraphNode<A>, parent: GraphNode<A>): string;
export declare function stackVariableNamespace(stack: StackDeployment): string;
/**
 * Makes sure the given identifier length does not exceed N characters
 *
 * Replaces characters in the middle (to leave the start and end identifiable) and replaces
 * them with a hash to prevent collissions.
 */
export declare function limitIdentifierLength(s: string, n: number): string;
