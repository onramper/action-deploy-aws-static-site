import { AmazonLinuxImageSsmParameterBase, AmazonLinuxImageSsmParameterCommonOptions, AmazonLinuxStorage, AmazonLinuxVirt } from './common';
/**
 * Amazon Linux 2 kernel versions
 */
export declare class AmazonLinux2Kernel {
    private readonly version;
    /**
     * The latest kernel version currently available in a published AMI.
     *
     * When a new kernel version is available for an amzn2 AMI this will be
     * updated to contain the latest kernel version and will cause your instances
     * to be replaced. Do not store stateful information on the instance if you are
     * using this version.
     */
    static readonly CDK_LATEST: AmazonLinux2Kernel;
    /**
     * The default kernel version for Amazon Linux 2 is 4.14 and
     * Linux 4.14.311-233.529.amzn2.x86_64
     * the SSM parameter does not include it in the name
     * (i.e. /aws/service/ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2)
     */
    static readonly DEFAULT: AmazonLinux2Kernel;
    /**
     * Kernel version 5.10
     */
    static readonly KERNEL_5_10: AmazonLinux2Kernel;
    constructor(version: string);
    /**
     * Generate a string representation of the kernel
     */
    toString(): string | undefined;
}
/**
 * Properties specific to amzn2 images
 */
export interface AmazonLinux2ImageSsmParameterProps extends AmazonLinuxImageSsmParameterCommonOptions {
    /**
     * What storage backed image to use
     *
     * @default GeneralPurpose
     */
    readonly storage?: AmazonLinuxStorage;
    /**
     * What kernel version of Amazon Linux to use
     *
     * @default -
     */
    readonly kernel?: AmazonLinux2Kernel;
    /**
     * Virtualization type
     *
     * @default HVM
     */
    readonly virtualization?: AmazonLinuxVirt;
}
/**
 * A SSM Parameter that contains the AMI ID for Amazon Linux 2
 */
export declare class AmazonLinux2ImageSsmParameter extends AmazonLinuxImageSsmParameterBase {
    /**
     * Generates a SSM Parameter name for a specific amazon linux 2 AMI
     *
     * Example values:
     *
     *     "/aws/service/ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-ebs",
     *     "/aws/service/ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2",
     *     "/aws/service/ami-amazon-linux-latest/amzn2-ami-kernel-5.10-hvm-x86_64-ebs",
     *     "/aws/service/ami-amazon-linux-latest/amzn2-ami-hvm-arm64-gp2",
     *     "/aws/service/ami-amazon-linux-latest/amzn2-ami-minimal-hvm-arm64-ebs",
     *     "/aws/service/ami-amazon-linux-latest/amzn2-ami-kernel-5.10-hvm-arm64-gp2",
     *     "/aws/service/ami-amazon-linux-latest/amzn2-ami-kernel-5.10-hvm-x86_64-gp2",
     *     "/aws/service/ami-amazon-linux-latest/amzn2-ami-minimal-hvm-x86_64-ebs"
     */
    static ssmParameterName(props: AmazonLinux2ImageSsmParameterProps): string;
    constructor(props: AmazonLinux2ImageSsmParameterProps);
}
