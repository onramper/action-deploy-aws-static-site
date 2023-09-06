import { Construct } from 'constructs';
import * as appscaling from '../../aws-applicationautoscaling';
import * as cloudwatch from '../../aws-cloudwatch';
/**
 * Use an ApplicationAutoScaling StepScalingAction as an Alarm Action
 */
export declare class ApplicationScalingAction implements cloudwatch.IAlarmAction {
    private readonly stepScalingAction;
    constructor(stepScalingAction: appscaling.StepScalingAction);
    /**
     * Returns an alarm action configuration to use an ApplicationScaling StepScalingAction
     * as an alarm action
     */
    bind(_scope: Construct, _alarm: cloudwatch.IAlarm): cloudwatch.AlarmActionConfig;
}
