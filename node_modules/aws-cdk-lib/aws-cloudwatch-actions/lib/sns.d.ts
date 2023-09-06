import { Construct } from 'constructs';
import * as cloudwatch from '../../aws-cloudwatch';
import * as sns from '../../aws-sns';
/**
 * Use an SNS topic as an alarm action
 */
export declare class SnsAction implements cloudwatch.IAlarmAction {
    private readonly topic;
    constructor(topic: sns.ITopic);
    /**
     * Returns an alarm action configuration to use an SNS topic as an alarm action
     */
    bind(_scope: Construct, _alarm: cloudwatch.IAlarm): cloudwatch.AlarmActionConfig;
}
