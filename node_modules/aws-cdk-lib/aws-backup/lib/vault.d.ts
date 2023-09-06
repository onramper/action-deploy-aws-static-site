import { Construct } from 'constructs';
import * as iam from '../../aws-iam';
import * as kms from '../../aws-kms';
import * as sns from '../../aws-sns';
import { Duration, IResource, RemovalPolicy, Resource } from '../../core';
/**
 * A backup vault
 */
export interface IBackupVault extends IResource {
    /**
     * The name of a logical container where backups are stored.
     *
     * @attribute
     */
    readonly backupVaultName: string;
    /**
     * The ARN of the backup vault.
     *
     * @attribute
     */
    readonly backupVaultArn: string;
    /**
     * Grant the actions defined in actions to the given grantee
     * on this backup vault.
     */
    grant(grantee: iam.IGrantable, ...actions: string[]): iam.Grant;
}
/**
 * Properties for a BackupVault
 */
export interface BackupVaultProps {
    /**
     * The name of a logical container where backups are stored. Backup vaults
     * are identified by names that are unique to the account used to create
     * them and the AWS Region where they are created.
     *
     * @default - A CDK generated name
     */
    readonly backupVaultName?: string;
    /**
     * A resource-based policy that is used to manage access permissions on the
     * backup vault.
     *
     * @default - access is not restricted
     */
    readonly accessPolicy?: iam.PolicyDocument;
    /**
     * The server-side encryption key to use to protect your backups.
     *
     * @default - an Amazon managed KMS key
     */
    readonly encryptionKey?: kms.IKey;
    /**
     * A SNS topic to send vault events to.
     *
     * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/sns-notifications.html
     *
     * @default - no notifications
     */
    readonly notificationTopic?: sns.ITopic;
    /**
     * The vault events to send.
     *
     * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/sns-notifications.html
     *
     * @default - all vault events if `notificationTopic` is defined
     */
    readonly notificationEvents?: BackupVaultEvents[];
    /**
     * The removal policy to apply to the vault. Note that removing a vault
     * that contains recovery points will fail.
     *
     * @default RemovalPolicy.RETAIN
     */
    readonly removalPolicy?: RemovalPolicy;
    /**
     * Whether to add statements to the vault access policy that prevents anyone
     * from deleting a recovery point.
     *
     * @default false
     */
    readonly blockRecoveryPointDeletion?: boolean;
    /**
     * Configuration for AWS Backup Vault Lock
     *
     * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/vault-lock.html
     *
     * @default - AWS Backup Vault Lock is disabled
     */
    readonly lockConfiguration?: LockConfiguration;
}
/**
 * Backup vault events. Some events are no longer supported and will not return
 * statuses or notifications.
 *
 * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_PutBackupVaultNotifications.html#API_PutBackupVaultNotifications_RequestBody
 */
export declare enum BackupVaultEvents {
    /** BACKUP_JOB_STARTED */
    BACKUP_JOB_STARTED = "BACKUP_JOB_STARTED",
    /** BACKUP_JOB_COMPLETED */
    BACKUP_JOB_COMPLETED = "BACKUP_JOB_COMPLETED",
    /** BACKUP_JOB_SUCCESSFUL */
    BACKUP_JOB_SUCCESSFUL = "BACKUP_JOB_SUCCESSFUL",
    /** BACKUP_JOB_FAILED */
    BACKUP_JOB_FAILED = "BACKUP_JOB_FAILED",
    /** BACKUP_JOB_EXPIRED */
    BACKUP_JOB_EXPIRED = "BACKUP_JOB_EXPIRED",
    /** RESTORE_JOB_STARTED */
    RESTORE_JOB_STARTED = "RESTORE_JOB_STARTED",
    /** RESTORE_JOB_COMPLETED */
    RESTORE_JOB_COMPLETED = "RESTORE_JOB_COMPLETED",
    /** RESTORE_JOB_SUCCESSFUL */
    RESTORE_JOB_SUCCESSFUL = "RESTORE_JOB_SUCCESSFUL",
    /** RESTORE_JOB_FAILED */
    RESTORE_JOB_FAILED = "RESTORE_JOB_FAILED",
    /** COPY_JOB_STARTED */
    COPY_JOB_STARTED = "COPY_JOB_STARTED",
    /** COPY_JOB_SUCCESSFUL */
    COPY_JOB_SUCCESSFUL = "COPY_JOB_SUCCESSFUL",
    /** COPY_JOB_FAILED */
    COPY_JOB_FAILED = "COPY_JOB_FAILED",
    /** RECOVERY_POINT_MODIFIED */
    RECOVERY_POINT_MODIFIED = "RECOVERY_POINT_MODIFIED",
    /** BACKUP_PLAN_CREATED */
    BACKUP_PLAN_CREATED = "BACKUP_PLAN_CREATED",
    /** BACKUP_PLAN_MODIFIED */
    BACKUP_PLAN_MODIFIED = "BACKUP_PLAN_MODIFIED",
    /** S3_BACKUP_OBJECT_FAILED */
    S3_BACKUP_OBJECT_FAILED = "S3_BACKUP_OBJECT_FAILED",
    /** BACKUP_PLAN_MODIFIED */
    S3_RESTORE_OBJECT_FAILED = "S3_RESTORE_OBJECT_FAILED"
}
/**
 * Configuration for AWS Backup Vault Lock
 *
 * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/vault-lock.html
 */
export interface LockConfiguration {
    /**
     * The minimum retention period that the vault retains its recovery points.
     *
     * If this parameter is specified, any backup or copy job to the vault must
     * have a lifecycle policy with a retention period equal to or longer than
     * the minimum retention period. If the job's retention period is shorter than
     * that minimum retention period, then the vault fails that backup or copy job,
     * and you should either modify your lifecycle settings or use a different
     * vault. Recovery points already saved in the vault prior to Vault Lock are
     * not affected.
     */
    readonly minRetention: Duration;
    /**
     * The maximum retention period that the vault retains its recovery points.
     *
     * If this parameter is specified, any backup or copy job to the vault must
     * have a lifecycle policy with a retention period equal to or shorter than
     * the maximum retention period. If the job's retention period is longer than
     * that maximum retention period, then the vault fails the backup or copy job,
     * and you should either modify your lifecycle settings or use a different
     * vault. Recovery points already saved in the vault prior to Vault Lock are
     * not affected.
     *
     * @default - Vault Lock does not enforce a maximum retention period
     */
    readonly maxRetention?: Duration;
    /**
     * The duration before the lock date.
     *
     * AWS Backup enforces a 72-hour cooling-off period before Vault Lock takes
     * effect and becomes immutable.
     *
     * Before the lock date, you can delete Vault Lock from the vault or change
     * the Vault Lock configuration. On and after the lock date, the Vault Lock
     * becomes immutable and cannot be changed or deleted.
     *
     * @default - Vault Lock can be deleted or changed at any time
     */
    readonly changeableFor?: Duration;
}
declare abstract class BackupVaultBase extends Resource implements IBackupVault {
    abstract readonly backupVaultName: string;
    abstract readonly backupVaultArn: string;
    /**
     * Grant the actions defined in actions to the given grantee
     * on this Backup Vault resource.
     *
     * @param grantee Principal to grant right to
     * @param actions The actions to grant
     */
    grant(grantee: iam.IGrantable, ...actions: string[]): iam.Grant;
}
/**
 * A backup vault
 */
export declare class BackupVault extends BackupVaultBase {
    /**
     * Import an existing backup vault by name
     */
    static fromBackupVaultName(scope: Construct, id: string, backupVaultName: string): IBackupVault;
    /**
     * Import an existing backup vault by arn
     */
    static fromBackupVaultArn(scope: Construct, id: string, backupVaultArn: string): IBackupVault;
    readonly backupVaultName: string;
    readonly backupVaultArn: string;
    private readonly accessPolicy;
    constructor(scope: Construct, id: string, props?: BackupVaultProps);
    /**
     * Adds a statement to the vault access policy
     */
    addToAccessPolicy(statement: iam.PolicyStatement): void;
    /**
     * Adds a statement to the vault access policy that prevents anyone
     * from deleting a recovery point.
     */
    blockRecoveryPointDeletion(): void;
    private uniqueVaultName;
}
export {};
