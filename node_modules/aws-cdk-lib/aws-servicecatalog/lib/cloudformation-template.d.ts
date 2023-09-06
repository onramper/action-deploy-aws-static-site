import { Construct } from 'constructs';
import { ProductStack } from './product-stack';
import { IBucket } from '../../aws-s3';
import * as s3_assets from '../../aws-s3-assets';
/**
 * Represents the Product Provisioning Artifact Template.
 */
export declare abstract class CloudFormationTemplate {
    /**
     * Template from URL
     * @param url The url that points to the provisioning artifacts template
     */
    static fromUrl(url: string): CloudFormationTemplate;
    /**
     * Loads the provisioning artifacts template from a local disk path.
     *
     * @param path A file containing the provisioning artifacts
     */
    static fromAsset(path: string, options?: s3_assets.AssetOptions): CloudFormationTemplate;
    /**
     * Creates a product with the resources defined in the given product stack.
     */
    static fromProductStack(productStack: ProductStack): CloudFormationTemplate;
    /**
     * Called when the product is initialized to allow this object to bind
     * to the stack, add resources and have fun.
     *
     * @param scope The binding scope. Don't be smart about trying to down-cast or
     * assume it's initialized. You may just use it as a construct scope.
     */
    abstract bind(scope: Construct): CloudFormationTemplateConfig;
}
/**
 * Result of binding `Template` into a `Product`.
 */
export interface CloudFormationTemplateConfig {
    /**
     * The http url of the template in S3.
     */
    readonly httpUrl: string;
    /**
     * The S3 bucket containing product stack assets.
     * @default - None - no assets are used in this product
     */
    readonly assetBucket?: IBucket;
}
