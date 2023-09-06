import { Construct } from 'constructs';
import { BackupPlanRule } from './rule';
import { BackupSelection, BackupSelectionOptions } from './selection';
import { IBackupVault } from './vault';
import { IResource, Resource } from '../../core';
/**
 * A backup plan
 */
export interface IBackupPlan extends IResource {
    /**
     * The identifier of the backup plan.
     *
     * @attribute
     */
    readonly backupPlanId: string;
}
/**
 * Properties for a BackupPlan
 */
export interface BackupPlanProps {
    /**
     * The display name of the backup plan.
     *
     * @default - A CDK generated name
     */
    readonly backupPlanName?: string;
    /**
     * The backup vault where backups are stored
     *
     * @default - use the vault defined at the rule level. If not defined a new
     * common vault for the plan will be created
     */
    readonly backupVault?: IBackupVault;
    /**
     * Rules for the backup plan. Use `addRule()` to add rules after
     * instantiation.
     *
     * @default - use `addRule()` to add rules
     */
    readonly backupPlanRules?: BackupPlanRule[];
    /**
     * Enable Windows VSS backup.
     *
     * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/windows-backups.html
     *
     * @default false
     */
    readonly windowsVss?: boolean;
}
/**
 * A backup plan
 */
export declare class BackupPlan extends Resource implements IBackupPlan {
    /**
     * Import an existing backup plan
     */
    static fromBackupPlanId(scope: Construct, id: string, backupPlanId: string): IBackupPlan;
    /**
     * Daily with 35 day retention
     */
    static daily35DayRetention(scope: Construct, id: string, backupVault?: IBackupVault): BackupPlan;
    /**
     * Daily and monthly with 1 year retention
     */
    static dailyMonthly1YearRetention(scope: Construct, id: string, backupVault?: IBackupVault): BackupPlan;
    /**
     * Daily, weekly and monthly with 5 year retention
     */
    static dailyWeeklyMonthly5YearRetention(scope: Construct, id: string, backupVault?: IBackupVault): BackupPlan;
    /**
     * Daily, weekly and monthly with 7 year retention
     */
    static dailyWeeklyMonthly7YearRetention(scope: Construct, id: string, backupVault?: IBackupVault): BackupPlan;
    readonly backupPlanId: string;
    /**
     * The ARN of the backup plan
     *
     * @attribute
     */
    readonly backupPlanArn: string;
    /**
     * Version Id
     *
     * @attribute
     */
    readonly versionId: string;
    private readonly rules;
    private _backupVault?;
    constructor(scope: Construct, id: string, props?: BackupPlanProps);
    private advancedBackupSettings;
    /**
     * Adds a rule to a plan
     *
     * @param rule the rule to add
     */
    addRule(rule: BackupPlanRule): void;
    private planCopyActions;
    /**
     * The backup vault where backups are stored if not defined at
     * the rule level
     */
    get backupVault(): IBackupVault;
    /**
     * Adds a selection to this plan
     */
    addSelection(id: string, options: BackupSelectionOptions): BackupSelection;
    private validatePlan;
}
