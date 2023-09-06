import { Construct } from 'constructs';
import { CloudFormationProductVersion } from './product';
import { ProductStack } from './product-stack';
/**
 * Properties for a ProductStackHistory.
 */
export interface ProductStackHistoryProps {
    /**
     * The ProductStack whose history will be retained as a snapshot
     */
    readonly productStack: ProductStack;
    /**
     * The current version name of the ProductStack.
     */
    readonly currentVersionName: string;
    /**
     * If this is set to true, the ProductStack will not be overwritten if a snapshot is found for the currentVersionName.
     */
    readonly currentVersionLocked: boolean;
    /**
     * The description of the product version
     * @default - No description provided
     */
    readonly description?: string;
    /**
     * Whether the specified product template will be validated by CloudFormation.
     * If turned off, an invalid template configuration can be stored.
     * @default true
     */
    readonly validateTemplate?: boolean;
    /**
     * The directory where template snapshots will be stored
     * @default 'product-stack-snapshots'
     */
    readonly directory?: string;
}
/**
 * A Construct that contains a Service Catalog product stack with its previous deployments maintained.
 */
export declare class ProductStackHistory extends Construct {
    private readonly props;
    constructor(scope: Construct, id: string, props: ProductStackHistoryProps);
    /**
     * Retains product stack template as a snapshot when deployed and
     * retrieves a CloudFormationProductVersion for the current product version.
     */
    currentVersion(): CloudFormationProductVersion;
    /**
     * Retrieves a CloudFormationProductVersion from a previously deployed productVersionName.
     */
    versionFromSnapshot(productVersionName: string): CloudFormationProductVersion;
    /**
     * Writes current template generated from Product Stack to a snapshot directory.
     *
     * @internal
     */
    _writeTemplateToSnapshot(cfn: string): void;
}
