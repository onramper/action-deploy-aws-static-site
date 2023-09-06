import { Construct } from 'constructs';
import * as dynamodb from '../../aws-dynamodb';
import * as ec2 from '../../aws-ec2';
import * as efs from '../../aws-efs';
import * as rds from '../../aws-rds';
/**
 * An operation that is applied to a key-value pair
 */
export declare enum TagOperation {
    /**
     * StringEquals
     */
    STRING_EQUALS = "STRINGEQUALS",
    /**
     * Dummy member
     */
    DUMMY = "dummy"
}
/**
 * A tag condition
 */
export interface TagCondition {
    /**
     * The key in a key-value pair.
     *
     * For example, in `"ec2:ResourceTag/Department": "accounting"`,
     * `ec2:ResourceTag/Department` is the key.
     */
    readonly key: string;
    /**
     * An operation that is applied to a key-value pair used to filter
     * resources in a selection.
     *
     * @default STRING_EQUALS
     */
    readonly operation?: TagOperation;
    /**
     * The value in a key-value pair.
     *
     * For example, in `"ec2:ResourceTag/Department": "accounting"`,
     * `accounting` is the value.
     */
    readonly value: string;
}
/**
 * A resource to backup
 */
export declare class BackupResource {
    /**
     * Adds all supported resources in a construct
     *
     * @param construct The construct containing resources to backup
     */
    static fromConstruct(construct: Construct): BackupResource;
    /**
     * A DynamoDB table
     */
    static fromDynamoDbTable(table: dynamodb.ITable): BackupResource;
    /**
     * An EC2 instance
     */
    static fromEc2Instance(instance: ec2.IInstance): BackupResource;
    /**
     * An EFS file system
     */
    static fromEfsFileSystem(fileSystem: efs.IFileSystem): BackupResource;
    /**
     * A RDS database instance
     */
    static fromRdsDatabaseInstance(instance: rds.IDatabaseInstance): BackupResource;
    /**
     * A RDS database cluter
     */
    static fromRdsDatabaseCluster(cluster: rds.IDatabaseCluster): BackupResource;
    /**
     * An Aurora database instance
     */
    static fromRdsServerlessCluster(cluster: rds.IServerlessCluster): BackupResource;
    /**
     * A list of ARNs or match patterns such as
     * `arn:aws:ec2:us-east-1:123456789012:volume/*`
     */
    static fromArn(arn: string): BackupResource;
    /**
     * A tag condition
     */
    static fromTag(key: string, value: string, operation?: TagOperation): BackupResource;
    /**
     * A resource
     */
    readonly resource?: string;
    /**
     * A condition on a tag
     */
    readonly tagCondition?: TagCondition;
    /**
     * A construct
     */
    readonly construct?: Construct;
    constructor(resource?: string, tagCondition?: TagCondition, construct?: Construct);
}
