export declare function withCorkedLogging<A>(block: () => Promise<A>): Promise<A>;
export declare enum LogLevel {
    /** Not verbose at all */
    DEFAULT = 0,
    /** Pretty verbose */
    DEBUG = 1,
    /** Extremely verbose */
    TRACE = 2
}
export declare let logLevel: LogLevel;
export declare let CI: boolean;
export declare function setLogLevel(newLogLevel: LogLevel): void;
export declare function setCI(newCI: boolean): void;
export declare function increaseVerbosity(): void;
export declare const trace: (fmt: string, ...args: unknown[]) => false | void;
export declare const debug: (fmt: string, ...args: unknown[]) => false | void;
export declare const error: (fmt: string, ...args: unknown[]) => void;
export declare const warning: (fmt: string, ...args: unknown[]) => void;
export declare const success: (fmt: string, ...args: unknown[]) => void;
export declare const highlight: (fmt: string, ...args: unknown[]) => void;
export declare const print: (fmt: string, ...args: unknown[]) => void;
export declare const data: (fmt: string, ...args: unknown[]) => void;
export type LoggerFunction = (fmt: string, ...args: unknown[]) => void;
/**
 * Create a logger output that features a constant prefix string.
 *
 * @param prefixString the prefix string to be appended before any log entry.
 * @param fn   the logger function to be used (typically one of the other functions in this module)
 *
 * @returns a new LoggerFunction.
 */
export declare function prefix(prefixString: string, fn: LoggerFunction): LoggerFunction;
