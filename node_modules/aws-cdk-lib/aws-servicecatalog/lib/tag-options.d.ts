import { Construct } from 'constructs';
import { CfnTagOption } from './servicecatalog.generated';
import * as cdk from '../../core';
/**
 * Properties for TagOptions.
 */
export interface TagOptionsProps {
    /**
     * The values that are allowed to be set for specific tags.
     * The keys of the map represent the tag keys,
     * and the values of the map are a list of allowed values for that particular tag key.
     */
    readonly allowedValuesForTags: {
        [tagKey: string]: string[];
    };
}
/**
 * Defines a set of TagOptions, which are a list of key-value pairs managed in AWS Service Catalog.
 * It is not an AWS tag, but serves as a template for creating an AWS tag based on the TagOption.
 * See https://docs.aws.amazon.com/servicecatalog/latest/adminguide/tagoptions.html
 *
 * @resource AWS::ServiceCatalog::TagOption
 */
export declare class TagOptions extends cdk.Resource {
    /**
     * List of underlying CfnTagOption resources.
     *
     * @internal
     */
    _cfnTagOptions: CfnTagOption[];
    constructor(scope: Construct, id: string, props: TagOptionsProps);
    private createUnderlyingTagOptions;
}
