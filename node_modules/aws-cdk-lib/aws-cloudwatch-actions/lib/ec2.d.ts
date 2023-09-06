import { Construct } from 'constructs';
import * as cloudwatch from '../../aws-cloudwatch';
/**
 * Types of EC2 actions available
 */
export declare enum Ec2InstanceAction {
    /**
     * Stop the instance
     */
    STOP = "stop",
    /**
     * Terminatethe instance
     */
    TERMINATE = "terminate",
    /**
     * Recover the instance
     */
    RECOVER = "recover",
    /**
     * Reboot the instance
     */
    REBOOT = "reboot"
}
/**
 * Use an EC2 action as an Alarm action
 */
export declare class Ec2Action implements cloudwatch.IAlarmAction {
    private ec2Action;
    constructor(instanceAction: Ec2InstanceAction);
    /**
     * Returns an alarm action configuration to use an EC2 action as an alarm action
     */
    bind(_scope: Construct, _alarm: cloudwatch.IAlarm): cloudwatch.AlarmActionConfig;
}
