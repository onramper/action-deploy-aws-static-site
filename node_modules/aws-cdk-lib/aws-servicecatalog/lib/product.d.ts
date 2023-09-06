import { Construct } from 'constructs';
import { CloudFormationTemplate } from './cloudformation-template';
import { MessageLanguage } from './common';
import { TagOptions } from './tag-options';
import { IBucket } from '../../aws-s3';
import { IResource, Resource } from '../../core';
/**
 * A Service Catalog product, currently only supports type CloudFormationProduct
 */
export interface IProduct extends IResource {
    /**
     * The ARN of the product.
     * @attribute
     */
    readonly productArn: string;
    /**
     * The id of the product
     * @attribute
     */
    readonly productId: string;
    /**
     * The asset buckets of a product created via product stack.
     * @attribute
     */
    readonly assetBuckets: IBucket[];
    /**
     * Associate Tag Options.
     * A TagOption is a key-value pair managed in AWS Service Catalog.
     * It is not an AWS tag, but serves as a template for creating an AWS tag based on the TagOption.
     */
    associateTagOptions(tagOptions: TagOptions): void;
}
declare abstract class ProductBase extends Resource implements IProduct {
    abstract readonly productArn: string;
    abstract readonly productId: string;
    abstract readonly assetBuckets: IBucket[];
    associateTagOptions(tagOptions: TagOptions): void;
}
/**
 * Properties of product version (also known as a provisioning artifact).
 */
export interface CloudFormationProductVersion {
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
     * The S3 template that points to the provisioning version template
     */
    readonly cloudFormationTemplate: CloudFormationTemplate;
    /**
     * The name of the product version.
     * @default - No product version name provided
     */
    readonly productVersionName?: string;
}
/**
 * Properties for a Cloudformation Product
 */
export interface CloudFormationProductProps {
    /**
     * The owner of the product.
     */
    readonly owner: string;
    /**
     * The name of the product.
     */
    readonly productName: string;
    /**
     * The configuration of the product version.
     */
    readonly productVersions: CloudFormationProductVersion[];
    /**
     * The language code.
     * Controls language for logging and errors.
     *
     * @default - English
     */
    readonly messageLanguage?: MessageLanguage;
    /**
     * The description of the product.
     * @default - No description provided
     */
    readonly description?: string;
    /**
     * The distributor of the product.
     * @default - No distributor provided
     */
    readonly distributor?: string;
    /**
     * Whether to give provisioning artifacts a new unique identifier when the product attributes or provisioning artifacts is updated
     * @default false
     */
    readonly replaceProductVersionIds?: boolean;
    /**
     * The support information about the product
     * @default - No support description provided
     */
    readonly supportDescription?: string;
    /**
     * The contact email for product support.
     * @default - No support email provided
     */
    readonly supportEmail?: string;
    /**
     * The contact URL for product support.
     * @default - No support URL provided
     */
    readonly supportUrl?: string;
    /**
     * TagOptions associated directly to a product.
     *
     * @default - No tagOptions provided
     */
    readonly tagOptions?: TagOptions;
}
/**
 * Abstract class for Service Catalog Product.
 */
export declare abstract class Product extends ProductBase {
    /**
     * Creates a Product construct that represents an external product.
     * @param scope The parent creating construct (usually `this`).
     * @param id The construct's name.
     * @param productArn Product Arn
     */
    static fromProductArn(scope: Construct, id: string, productArn: string): IProduct;
}
/**
 * A Service Catalog Cloudformation Product.
 */
export declare class CloudFormationProduct extends Product {
    readonly productArn: string;
    readonly productId: string;
    /**
     * The asset bucket of a product created via product stack.
     * @default - Empty - no assets are used in this product
     */
    readonly assetBuckets: IBucket[];
    constructor(scope: Construct, id: string, props: CloudFormationProductProps);
    private renderProvisioningArtifacts;
    private validateProductProps;
}
export {};
