/**
 * Package installation
 */
export declare abstract class PackageInstallation {
    static detect(module: string): PackageInstallation | undefined;
    abstract readonly isLocal: boolean;
    abstract readonly version: string;
}
