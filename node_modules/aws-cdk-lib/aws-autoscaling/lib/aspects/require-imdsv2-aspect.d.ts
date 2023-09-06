import { IConstruct } from 'constructs';
import * as cdk from '../../../core';
/**
 * Aspect that makes IMDSv2 required on instances deployed by AutoScalingGroups.
 */
export declare class AutoScalingGroupRequireImdsv2Aspect implements cdk.IAspect {
    constructor();
    visit(node: IConstruct): void;
    /**
     * Adds a warning annotation to a node.
     *
     * @param node The scope to add the warning to.
     * @param message The warning message.
     */
    protected warn(node: IConstruct, message: string): void;
}
