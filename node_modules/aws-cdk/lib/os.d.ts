/**
 * OS helpers
 *
 * Shell function which both prints to stdout and collects the output into a
 * string.
 */
export declare function shell(command: string[]): Promise<string>;
