import { LogLevel } from './types';
interface PackageManagerProps {
    readonly lockFile: string;
    readonly installCommand: string[];
    readonly runCommand: string[];
    readonly argsSeparator?: string;
}
export declare enum LockFile {
    NPM = "package-lock.json",
    YARN = "yarn.lock",
    PNPM = "pnpm-lock.yaml"
}
/**
 * A node package manager
 */
export declare class PackageManager {
    /**
     * Use a lock file path to determine the package manager to use. Optionally, specify a log level to
     * control its verbosity.
     * @param lockFilePath Path of the lock file
     * @param logLevel optional log level @default LogLevel.INFO
     * @returns the right PackageManager for that lock file
     */
    static fromLockFile(lockFilePath: string, logLevel?: LogLevel): PackageManager;
    readonly lockFile: string;
    readonly installCommand: string[];
    readonly runCommand: string[];
    readonly argsSeparator?: string;
    constructor(props: PackageManagerProps);
    runBinCommand(bin: string): string;
}
export {};
