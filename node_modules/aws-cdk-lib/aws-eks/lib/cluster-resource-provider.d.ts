import { Construct } from 'constructs';
import * as ec2 from '../../aws-ec2';
import * as lambda from '../../aws-lambda';
import { NestedStack } from '../../core';
import * as cr from '../../custom-resources';
export interface ClusterResourceProviderProps {
    /**
     * The VPC to provision the functions in.
     */
    readonly vpc?: ec2.IVpc;
    /**
     * The subnets to place the functions in.
     */
    readonly subnets?: ec2.ISubnet[];
    /**
     * Environment to add to the handler.
     */
    readonly environment?: {
        [key: string]: string;
    };
    /**
     * An AWS Lambda layer that includes the NPM dependency `proxy-agent`.
     *
     * If not defined, a default layer will be used.
     */
    readonly onEventLayer?: lambda.ILayerVersion;
    /**
     * The security group to associate with the functions.
     *
     * @default - No security group.
     */
    readonly securityGroup?: ec2.ISecurityGroup;
}
/**
 * A custom resource provider that handles cluster operations. It serves
 * multiple custom resources such as the cluster resource and the fargate
 * resource.
 *
 * @internal
 */
export declare class ClusterResourceProvider extends NestedStack {
    static getOrCreate(scope: Construct, props: ClusterResourceProviderProps): ClusterResourceProvider;
    /**
     * The custom resource provider to use for custom resources.
     */
    readonly provider: cr.Provider;
    private constructor();
    /**
     * The custom resource service token for this provider.
     */
    get serviceToken(): string;
}
