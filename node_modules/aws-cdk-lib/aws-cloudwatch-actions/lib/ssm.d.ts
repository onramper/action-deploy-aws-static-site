import { Construct } from 'constructs';
import * as cloudwatch from '../../aws-cloudwatch';
/**
 * Types of OpsItem severity available
 */
export declare enum OpsItemSeverity {
    /**
     * Set the severity to critical
     */
    CRITICAL = "1",
    /**
     * Set the severity to high
     */
    HIGH = "2",
    /**
     * Set the severity to medium
     */
    MEDIUM = "3",
    /**
     * Set the severity to low
     */
    LOW = "4"
}
/**
 * Types of OpsItem category available
 */
export declare enum OpsItemCategory {
    /**
     * Set the category to availability
     */
    AVAILABILITY = "Availability",
    /**
     * Set the category to cost
     */
    COST = "Cost",
    /**
     * Set the category to performance
     */
    PERFORMANCE = "Performance",
    /**
     * Set the category to recovery
     */
    RECOVERY = "Recovery",
    /**
     * Set the category to security
     */
    SECURITY = "Security"
}
/**
 * Use an SSM OpsItem action as an Alarm action
 */
export declare class SsmAction implements cloudwatch.IAlarmAction {
    private severity;
    private category?;
    constructor(severity: OpsItemSeverity, category?: OpsItemCategory);
    /**
     * Returns an alarm action configuration to use an SSM OpsItem action as an alarm action
     */
    bind(_scope: Construct, _alarm: cloudwatch.IAlarm): cloudwatch.AlarmActionConfig;
}
/**
 * Use an SSM Incident Response Plan as an Alarm action
 */
export declare class SsmIncidentAction implements cloudwatch.IAlarmAction {
    private readonly responsePlanName;
    constructor(responsePlanName: string);
    /**
     * Returns an alarm action configuration to use an SSM Incident as an alarm action
     * based on an Incident Manager Response Plan
     */
    bind(_scope: Construct, _alarm: cloudwatch.IAlarm): cloudwatch.AlarmActionConfig;
}
