import { Construct } from 'constructs';
import * as core from '../../core';
/**
 * Construction properties of `CfnInclude`.
 */
export interface CfnIncludeProps {
    /**
     * Path to the template file.
     *
     * Both JSON and YAML template formats are supported.
     */
    readonly templateFile: string;
    /**
     * Whether the resources should have the same logical IDs in the resulting CDK template
     * as they did in the original CloudFormation template file.
     * If you're vending a Construct using an existing CloudFormation template,
     * make sure to pass this as `false`.
     *
     * **Note**: regardless of whether this option is true or false,
     * the `CfnInclude.getResource` and related methods always uses the original logical ID of the resource/element,
     * as specified in the template file.
     *
     * @default true
     */
    readonly preserveLogicalIds?: boolean;
    /**
     * Specifies the template files that define nested stacks that should be included.
     *
     * If your template specifies a stack that isn't included here, it won't be created as a NestedStack
     * resource, and it won't be accessible from the `CfnInclude.getNestedStack` method
     * (but will still be accessible from the `CfnInclude.getResource` method).
     *
     * If you include a stack here with an ID that isn't in the template,
     * or is in the template but is not a nested stack,
     * template creation will fail and an error will be thrown.
     *
     * @default - no nested stacks will be included
     */
    readonly loadNestedStacks?: {
        [stackName: string]: CfnIncludeProps;
    };
    /**
     * Specifies parameters to be replaced by the values in this mapping.
     * Any parameters in the template that aren't specified here will be left unmodified.
     * If you include a parameter here with an ID that isn't in the template,
     * template creation will fail and an error will be thrown.
     *
     * If you are importing a parameter from a live stack, we cannot know the value of that
     * parameter. You will need to supply a value for your parameters, else the default
     * value will be used.
     *
     * @default - parameters will retain their original definitions
     */
    readonly parameters?: {
        [parameterName: string]: any;
    };
    /**
     * Specifies whether to allow cyclical references, effectively disregarding safeguards meant to avoid undeployable
     * templates. This should only be set to true in the case of templates utilizing cloud transforms (e.g. SAM) that
     * after processing the transform will no longer contain any circular references.
     *
     * @default - will throw an error on detecting any cyclical references
     */
    readonly allowCyclicalReferences?: boolean;
}
/**
 * The type returned from `CfnInclude.getNestedStack`.
 * Contains both the NestedStack object and
 * CfnInclude representations of the child stack.
 */
export interface IncludedNestedStack {
    /**
     * The NestedStack object which represents the scope of the template.
     */
    readonly stack: core.NestedStack;
    /**
     * The CfnInclude that represents the template, which can
     * be used to access Resources and other template elements.
     */
    readonly includedTemplate: CfnInclude;
}
/**
 * Construct to import an existing CloudFormation template file into a CDK application.
 * All resources defined in the template file can be retrieved by calling the `getResource` method.
 * Any modifications made on the returned resource objects will be reflected in the resulting CDK template.
 */
export declare class CfnInclude extends core.CfnElement {
    private readonly conditions;
    private readonly conditionsScope;
    private readonly resources;
    private readonly parameters;
    private readonly parametersToReplace;
    private readonly mappingsScope;
    private readonly mappings;
    private readonly rules;
    private readonly rulesScope;
    private readonly hooks;
    private readonly hooksScope;
    private readonly outputs;
    private readonly nestedStacks;
    private readonly nestedStacksToInclude;
    private readonly template;
    private readonly preserveLogicalIds;
    private readonly allowCyclicalReferences;
    private logicalIdToPlaceholderMap;
    constructor(scope: Construct, id: string, props: CfnIncludeProps);
    /**
     * Returns the low-level CfnResource from the template with the given logical ID.
     * Any modifications performed on that resource will be reflected in the resulting CDK template.
     *
     * The returned object will be of the proper underlying class;
     * you can always cast it to the correct type in your code:
     *
     *     // assume the template contains an AWS::S3::Bucket with logical ID 'Bucket'
     *     const cfnBucket = cfnTemplate.getResource('Bucket') as s3.CfnBucket;
     *     // cfnBucket is of type s3.CfnBucket
     *
     * If the template does not contain a resource with the given logical ID,
     * an exception will be thrown.
     *
     * @param logicalId the logical ID of the resource in the CloudFormation template file
     */
    getResource(logicalId: string): core.CfnResource;
    /**
     * Returns the CfnCondition object from the 'Conditions'
     * section of the CloudFormation template with the given name.
     * Any modifications performed on that object will be reflected in the resulting CDK template.
     *
     * If a Condition with the given name is not present in the template,
     * throws an exception.
     *
     * @param conditionName the name of the Condition in the CloudFormation template file
     */
    getCondition(conditionName: string): core.CfnCondition;
    /**
     * Returns the CfnParameter object from the 'Parameters'
     * section of the included template.
     * Any modifications performed on that object will be reflected in the resulting CDK template.
     *
     * If a Parameter with the given name is not present in the template,
     * throws an exception.
     *
     * @param parameterName the name of the parameter to retrieve
     */
    getParameter(parameterName: string): core.CfnParameter;
    /**
     * Returns the CfnMapping object from the 'Mappings' section of the included template.
     * Any modifications performed on that object will be reflected in the resulting CDK template.
     *
     * If a Mapping with the given name is not present in the template,
     * an exception will be thrown.
     *
     * @param mappingName the name of the Mapping in the template to retrieve
     */
    getMapping(mappingName: string): core.CfnMapping;
    /**
     * Returns the CfnOutput object from the 'Outputs'
     * section of the included template.
     * Any modifications performed on that object will be reflected in the resulting CDK template.
     *
     * If an Output with the given name is not present in the template,
     * throws an exception.
     *
     * @param logicalId the name of the output to retrieve
     */
    getOutput(logicalId: string): core.CfnOutput;
    /**
     * Returns the CfnRule object from the 'Rules'
     * section of the CloudFormation template with the given name.
     * Any modifications performed on that object will be reflected in the resulting CDK template.
     *
     * If a Rule with the given name is not present in the template,
     * an exception will be thrown.
     *
     * @param ruleName the name of the Rule in the CloudFormation template
     */
    getRule(ruleName: string): core.CfnRule;
    /**
     * Returns the CfnHook object from the 'Hooks'
     * section of the included CloudFormation template with the given logical ID.
     * Any modifications performed on the returned object will be reflected in the resulting CDK template.
     *
     * If a Hook with the given logical ID is not present in the template,
     * an exception will be thrown.
     *
     * @param hookLogicalId the logical ID of the Hook in the included CloudFormation template's 'Hooks' section
     */
    getHook(hookLogicalId: string): core.CfnHook;
    /**
     * Returns a loaded NestedStack with name logicalId.
     * For a nested stack to be returned by this method,
     * it must be specified either in the `CfnIncludeProps.loadNestedStacks` property,
     * or through the `loadNestedStack` method.
     *
     * @param logicalId the ID of the stack to retrieve, as it appears in the template
     */
    getNestedStack(logicalId: string): IncludedNestedStack;
    /**
     * Includes a template for a child stack inside of this parent template.
     * A child with this logical ID must exist in the template,
     * and be of type AWS::CloudFormation::Stack.
     * This is equivalent to specifying the value in the `CfnIncludeProps.loadNestedStacks`
     * property on object construction.
     *
     * @param logicalId the ID of the stack to retrieve, as it appears in the template
     * @param nestedStackProps the properties of the included child Stack
     * @returns the same `IncludedNestedStack` object that `getNestedStack` returns for this logical ID
     */
    loadNestedStack(logicalId: string, nestedStackProps: CfnIncludeProps): IncludedNestedStack;
    /** @internal */
    _toCloudFormation(): object;
    private createMapping;
    private createParameter;
    private createRule;
    private createHook;
    private createOutput;
    private getOrCreateCondition;
    private getPlaceholderID;
    private getOrCreateResource;
    private createNestedStack;
    private parametersForNestedStack;
    private timeoutForNestedStack;
    private overrideLogicalIdIfNeeded;
}
