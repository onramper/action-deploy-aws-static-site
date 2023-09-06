export type SubstitutePlaceholders = (...fileNames: string[]) => Promise<void>;
/**
 * Helpers passed to hook functions
 */
export interface HookContext {
    /**
     * Callback function to replace placeholders on arbitrary files
     *
     * This makes token substitution available to non-`.template` files.
     */
    readonly substitutePlaceholdersIn: SubstitutePlaceholders;
    /**
     * Return a single placeholder
     */
    placeholder(name: string): string;
}
export type InvokeHook = (targetDirectory: string, context: HookContext) => Promise<void>;
export interface HookTarget {
    readonly targetDirectory: string;
    readonly templateName: string;
    readonly language: string;
}
/**
 * Invoke hooks for the given init template
 *
 * Sometimes templates need more complex logic than just replacing tokens. A 'hook' can be
 * used to do additional processing other than copying files.
 *
 * Hooks used to be defined externally to the CLI, by running arbitrarily
 * substituted shell scripts in the target directory.
 *
 * In practice, they're all TypeScript files and all the same, and the dynamism
 * that the original solution allowed wasn't used at all. Worse, since the CLI
 * is now bundled the hooks can't even reuse code from the CLI libraries at all
 * anymore, so all shared code would have to be copy/pasted.
 *
 * Bundle hooks as built-ins into the CLI, so they get bundled and can take advantage
 * of all shared code.
 */
export declare function invokeBuiltinHooks(target: HookTarget, context: HookContext): Promise<void>;
