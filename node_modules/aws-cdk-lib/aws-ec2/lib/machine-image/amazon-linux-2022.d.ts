import { AmazonLinuxImageSsmParameterCommonOptions, AmazonLinuxImageSsmParameterBase } from './common';
/**
 * Amazon Linux 2022 kernel versions
 */
export declare class AmazonLinux2022Kernel {
    private readonly version;
    /**
     * The latest kernel version currently available in a published AMI.
     *
     * When a new kernel version is available for an al2022 AMI this will be
     * updated to contain the latest kernel version and will cause your instances
     * to be replaced. Do not store stateful information on the instance if you are
     * using this version.
     */
    static readonly CDK_LATEST: AmazonLinux2022Kernel;
    /**
     * The default kernel version for Amazon Linux 2022 is 5.15 and
     * the SSM parameter does not include it in the name
     * (i.e. /aws/service/ami-amazon-linux-latest/amzn2022-ami-kernel-default-x86_64)
     */
    static readonly DEFAULT: AmazonLinux2022Kernel;
    /**
     * Kernel version 5.15
     */
    static readonly KERNEL_5_15: AmazonLinux2022Kernel;
    constructor(version: string);
    /**
     * Generate a string representation of the kernel
     */
    toString(): string;
}
/**
 * Properties specific to al2022 images
 */
export interface AmazonLinux2022ImageSsmParameterProps extends AmazonLinuxImageSsmParameterCommonOptions {
    /**
     * What kernel version of Amazon Linux to use
     *
     * @default AmazonLinux2022Kernel.DEFAULT
     */
    readonly kernel?: AmazonLinux2022Kernel;
}
/**
 * A SSM Parameter that contains the AMI ID for Amazon Linux 2023
 */
export declare class AmazonLinux2022ImageSsmParameter extends AmazonLinuxImageSsmParameterBase {
    /**
     * Generates a SSM Parameter name for a specific amazon linux 2022 AMI
     *
     * Example values:
     *
     *     "/aws/service/ami-amazon-linux-latest/al2022-ami-kernel-5.15-x86_64",
     *     "/aws/service/ami-amazon-linux-latest/al2022-ami-kernel-default-x86_64",
     *     "/aws/service/ami-amazon-linux-latest/al2022-ami-minimal-kernel-5.15-arm64",
     *     "/aws/service/ami-amazon-linux-latest/al2022-ami-minimal-kernel-5.15-x86_64",
     *     "/aws/service/ami-amazon-linux-latest/al2022-ami-kernel-5.15-arm64",
     *     "/aws/service/ami-amazon-linux-latest/al2022-ami-minimal-kernel-default-arm64",
     *     "/aws/service/ami-amazon-linux-latest/al2022-ami-minimal-kernel-default-x86_64",
     *     "/aws/service/ami-amazon-linux-latest/al2022-ami-kernel-default-arm64",
     */
    static ssmParameterName(props: AmazonLinux2022ImageSsmParameterProps): string;
    constructor(props: AmazonLinux2022ImageSsmParameterProps);
}
