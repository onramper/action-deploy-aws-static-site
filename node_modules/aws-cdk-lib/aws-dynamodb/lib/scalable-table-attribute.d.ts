import { UtilizationScalingProps } from './scalable-attribute-api';
import * as appscaling from '../../aws-applicationautoscaling';
/**
 * A scalable table attribute
 */
export declare class ScalableTableAttribute extends appscaling.BaseScalableAttribute {
    private scalingPolicyCreated;
    /**
     * Scale out or in based on time
     */
    scaleOnSchedule(id: string, action: appscaling.ScalingSchedule): void;
    /**
     * Scale out or in to keep utilization at a given level
     */
    scaleOnUtilization(props: UtilizationScalingProps): void;
    /** @internal */
    get _scalingPolicyCreated(): boolean;
}
/**
 * Properties for enabling DynamoDB capacity scaling
 */
export interface EnableScalingProps {
    /**
     * Minimum capacity to scale to
     */
    minCapacity: number;
    /**
     * Maximum capacity to scale to
     */
    maxCapacity: number;
}
