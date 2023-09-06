import { Construct } from 'constructs';
import * as autoscaling from '../../aws-autoscaling';
import * as cloudwatch from '../../aws-cloudwatch';
/**
 * Use an AutoScaling StepScalingAction as an Alarm Action
 */
export declare class AutoScalingAction implements cloudwatch.IAlarmAction {
    private readonly stepScalingAction;
    constructor(stepScalingAction: autoscaling.StepScalingAction);
    /**
     * Returns an alarm action configuration to use an AutoScaling StepScalingAction
     * as an alarm action
     */
    bind(_scope: Construct, _alarm: cloudwatch.IAlarm): cloudwatch.AlarmActionConfig;
}
