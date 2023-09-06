import { Construct } from 'constructs';
import * as acm from '../../aws-certificatemanager';
import { Metric, MetricOptions } from '../../aws-cloudwatch';
import * as ec2 from '../../aws-ec2';
import * as iam from '../../aws-iam';
import * as kms from '../../aws-kms';
import * as logs from '../../aws-logs';
import * as route53 from '../../aws-route53';
import * as cdk from '../../core';
/**
 * Elasticsearch version
 */
export declare class ElasticsearchVersion {
    readonly version: string;
    /**
     * AWS Elasticsearch 1.5
     */
    static readonly V1_5: ElasticsearchVersion;
    /**
     * AWS Elasticsearch 2.3
     */
    static readonly V2_3: ElasticsearchVersion;
    /**
     * AWS Elasticsearch 5.1
     */
    static readonly V5_1: ElasticsearchVersion;
    /**
     * AWS Elasticsearch 5.3
     */
    static readonly V5_3: ElasticsearchVersion;
    /**
     * AWS Elasticsearch 5.5
     */
    static readonly V5_5: ElasticsearchVersion;
    /**
     * AWS Elasticsearch 5.6
     */
    static readonly V5_6: ElasticsearchVersion;
    /**
     * AWS Elasticsearch 6.0
     */
    static readonly V6_0: ElasticsearchVersion;
    /**
     * AWS Elasticsearch 6.2
     */
    static readonly V6_2: ElasticsearchVersion;
    /**
     * AWS Elasticsearch 6.3
     */
    static readonly V6_3: ElasticsearchVersion;
    /**
     * AWS Elasticsearch 6.4
     */
    static readonly V6_4: ElasticsearchVersion;
    /**
     * AWS Elasticsearch 6.5
     */
    static readonly V6_5: ElasticsearchVersion;
    /**
     * AWS Elasticsearch 6.7
     */
    static readonly V6_7: ElasticsearchVersion;
    /**
     * AWS Elasticsearch 6.8
     */
    static readonly V6_8: ElasticsearchVersion;
    /**
     * AWS Elasticsearch 7.1
     */
    static readonly V7_1: ElasticsearchVersion;
    /**
     * AWS Elasticsearch 7.4
     */
    static readonly V7_4: ElasticsearchVersion;
    /**
     * AWS Elasticsearch 7.7
     */
    static readonly V7_7: ElasticsearchVersion;
    /**
     * AWS Elasticsearch 7.8
     */
    static readonly V7_8: ElasticsearchVersion;
    /**
     * AWS Elasticsearch 7.9
     */
    static readonly V7_9: ElasticsearchVersion;
    /**
     * AWS Elasticsearch 7.10
     */
    static readonly V7_10: ElasticsearchVersion;
    /**
     * Custom Elasticsearch version
     * @param version custom version number
     */
    static of(version: string): ElasticsearchVersion;
    /**
     *
     * @param version Elasticsearch version number
     */
    private constructor();
}
/**
 * Configures the capacity of the cluster such as the instance type and the
 * number of instances.
 *
 * @deprecated use opensearchservice module instead
 */
export interface CapacityConfig {
    /**
     * The number of instances to use for the master node.
     *
     * @default - no dedicated master nodes
     * @deprecated use opensearchservice module instead
     */
    readonly masterNodes?: number;
    /**
     * The hardware configuration of the computer that hosts the dedicated master
     * node, such as `m3.medium.elasticsearch`. For valid values, see [Supported
     * Instance Types]
     * (https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/aes-supported-instance-types.html)
     * in the Amazon Elasticsearch Service Developer Guide.
     *
     * @default - r5.large.elasticsearch
     * @deprecated use opensearchservice module instead
     */
    readonly masterNodeInstanceType?: string;
    /**
     * The number of data nodes (instances) to use in the Amazon ES domain.
     *
     * @default - 1
     * @deprecated use opensearchservice module instead
     */
    readonly dataNodes?: number;
    /**
     * The instance type for your data nodes, such as
     * `m3.medium.elasticsearch`. For valid values, see [Supported Instance
     * Types](https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/aes-supported-instance-types.html)
     * in the Amazon Elasticsearch Service Developer Guide.
     *
     * @default - r5.large.elasticsearch
     * @deprecated use opensearchservice module instead
     */
    readonly dataNodeInstanceType?: string;
    /**
     * The number of UltraWarm nodes (instances) to use in the Amazon ES domain.
     *
     * @default - no UltraWarm nodes
     * @deprecated use opensearchservice module instead
     */
    readonly warmNodes?: number;
    /**
     * The instance type for your UltraWarm node, such as `ultrawarm1.medium.elasticsearch`.
     * For valid values, see [UltraWarm Storage Limits]
     * (https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/aes-limits.html#limits-ultrawarm)
     * in the Amazon Elasticsearch Service Developer Guide.
     *
     * @default - ultrawarm1.medium.elasticsearch
     * @deprecated use opensearchservice module instead
     */
    readonly warmInstanceType?: string;
}
/**
 * Specifies zone awareness configuration options.
 *
 * @deprecated use opensearchservice module instead
 */
export interface ZoneAwarenessConfig {
    /**
     * Indicates whether to enable zone awareness for the Amazon ES domain.
     * When you enable zone awareness, Amazon ES allocates the nodes and replica
     * index shards that belong to a cluster across two Availability Zones (AZs)
     * in the same region to prevent data loss and minimize downtime in the event
     * of node or data center failure. Don't enable zone awareness if your cluster
     * has no replica index shards or is a single-node cluster. For more information,
     * see [Configuring a Multi-AZ Domain]
     * (https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-managedomains-multiaz)
     * in the Amazon Elasticsearch Service Developer Guide.
     *
     * @default - false
     * @deprecated use opensearchservice module instead
     */
    readonly enabled?: boolean;
    /**
     * If you enabled multiple Availability Zones (AZs), the number of AZs that you
     * want the domain to use. Valid values are 2 and 3.
     *
     * @default - 2 if zone awareness is enabled.
     * @deprecated use opensearchservice module instead
     */
    readonly availabilityZoneCount?: number;
}
/**
 * The configurations of Amazon Elastic Block Store (Amazon EBS) volumes that
 * are attached to data nodes in the Amazon ES domain. For more information, see
 * [Configuring EBS-based Storage]
 * (https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs)
 * in the Amazon Elasticsearch Service Developer Guide.
 *
 * @deprecated use opensearchservice module instead
 */
export interface EbsOptions {
    /**
     * Specifies whether Amazon EBS volumes are attached to data nodes in the
     * Amazon ES domain.
     *
     * @default - true
     * @deprecated use opensearchservice module instead
     */
    readonly enabled?: boolean;
    /**
     * The number of I/O operations per second (IOPS) that the volume
     * supports. This property applies only to the Provisioned IOPS (SSD) EBS
     * volume type.
     *
     * @default - iops are not set.
     * @deprecated use opensearchservice module instead
     */
    readonly iops?: number;
    /**
     * The size (in GiB) of the EBS volume for each data node. The minimum and
     * maximum size of an EBS volume depends on the EBS volume type and the
     * instance type to which it is attached.  For more information, see
     * [Configuring EBS-based Storage]
     * (https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs)
     * in the Amazon Elasticsearch Service Developer Guide.
     *
     * @default 10
     * @deprecated use opensearchservice module instead
     */
    readonly volumeSize?: number;
    /**
     * The EBS volume type to use with the Amazon ES domain, such as standard, gp2, io1.
     * For more information, see[Configuring EBS-based Storage]
     * (https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs)
     * in the Amazon Elasticsearch Service Developer Guide.
     *
     * @default gp2
     * @deprecated use opensearchservice module instead
     */
    readonly volumeType?: ec2.EbsDeviceVolumeType;
}
/**
 * Configures log settings for the domain.
 *
 * @deprecated use opensearchservice module instead
 */
export interface LoggingOptions {
    /**
     * Specify if slow search logging should be set up.
     * Requires Elasticsearch version 5.1 or later.
     *
     * @default - false
     * @deprecated use opensearchservice module instead
     */
    readonly slowSearchLogEnabled?: boolean;
    /**
     * Log slow searches to this log group.
     *
     * @default - a new log group is created if slow search logging is enabled
     * @deprecated use opensearchservice module instead
     */
    readonly slowSearchLogGroup?: logs.ILogGroup;
    /**
     * Specify if slow index logging should be set up.
     * Requires Elasticsearch version 5.1 or later.
     *
     * @default - false
     * @deprecated use opensearchservice module instead
     */
    readonly slowIndexLogEnabled?: boolean;
    /**
     * Log slow indices to this log group.
     *
     * @default - a new log group is created if slow index logging is enabled
     * @deprecated use opensearchservice module instead
     */
    readonly slowIndexLogGroup?: logs.ILogGroup;
    /**
     * Specify if Elasticsearch application logging should be set up.
     * Requires Elasticsearch version 5.1 or later.
     *
     * @default - false
     * @deprecated use opensearchservice module instead
     */
    readonly appLogEnabled?: boolean;
    /**
     * Log Elasticsearch application logs to this log group.
     *
     * @default - a new log group is created if app logging is enabled
     * @deprecated use opensearchservice module instead
     */
    readonly appLogGroup?: logs.ILogGroup;
    /**
     * Specify if Elasticsearch audit logging should be set up.
     * Requires Elasticsearch version 6.7 or later and fine grained access control to be enabled.
     *
     * @default - false
     * @deprecated use opensearchservice module instead
     */
    readonly auditLogEnabled?: boolean;
    /**
     * Log Elasticsearch audit logs to this log group.
     *
     * @default - a new log group is created if audit logging is enabled
     * @deprecated use opensearchservice module instead
     */
    readonly auditLogGroup?: logs.ILogGroup;
}
/**
 * Whether the domain should encrypt data at rest, and if so, the AWS Key
 * Management Service (KMS) key to use. Can only be used to create a new domain,
 * not update an existing one. Requires Elasticsearch version 5.1 or later.
 *
 * @deprecated use opensearchservice module instead
 */
export interface EncryptionAtRestOptions {
    /**
     * Specify true to enable encryption at rest.
     *
     * @default - encryption at rest is disabled.
     * @deprecated use opensearchservice module instead
     */
    readonly enabled?: boolean;
    /**
     * Supply if using KMS key for encryption at rest.
     *
     * @default - uses default aws/es KMS key.
     * @deprecated use opensearchservice module instead
     */
    readonly kmsKey?: kms.IKey;
}
/**
 * Configures Amazon ES to use Amazon Cognito authentication for Kibana.
 * @see https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html
 * @deprecated use opensearchservice module instead
 */
export interface CognitoOptions {
    /**
     * The Amazon Cognito identity pool ID that you want Amazon ES to use for Kibana authentication.
     *
     * @deprecated use opensearchservice module instead
     */
    readonly identityPoolId: string;
    /**
     * A role that allows Amazon ES to configure your user pool and identity pool. It must have the `AmazonESCognitoAccess` policy attached to it.
     *
     * @see https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html#es-cognito-auth-prereq
     * @deprecated use opensearchservice module instead
     */
    readonly role: iam.IRole;
    /**
     * The Amazon Cognito user pool ID that you want Amazon ES to use for Kibana authentication.
     *
     * @deprecated use opensearchservice module instead
     */
    readonly userPoolId: string;
}
/**
 * The minimum TLS version required for traffic to the domain.
 *
 * @deprecated use opensearchservice module instead
 */
export declare enum TLSSecurityPolicy {
    /** Cipher suite TLS 1.0 */
    TLS_1_0 = "Policy-Min-TLS-1-0-2019-07",
    /** Cipher suite TLS 1.2 */
    TLS_1_2 = "Policy-Min-TLS-1-2-2019-07"
}
/**
 * Specifies options for fine-grained access control.
 *
 * @deprecated use opensearchservice module instead
 */
export interface AdvancedSecurityOptions {
    /**
     * ARN for the master user. Only specify this or masterUserName, but not both.
     *
     * @default - fine-grained access control is disabled
     * @deprecated use opensearchservice module instead
     */
    readonly masterUserArn?: string;
    /**
     * Username for the master user. Only specify this or masterUserArn, but not both.
     *
     * @default - fine-grained access control is disabled
     * @deprecated use opensearchservice module instead
     */
    readonly masterUserName?: string;
    /**
     * Password for the master user.
     *
     * You can use `SecretValue.unsafePlainText` to specify a password in plain text or
     * use `secretsmanager.Secret.fromSecretAttributes` to reference a secret in
     * Secrets Manager.
     *
     * @default - A Secrets Manager generated password
     * @deprecated use opensearchservice module instead
     */
    readonly masterUserPassword?: cdk.SecretValue;
}
/**
 * Configures a custom domain endpoint for the ES domain
 *
 * @deprecated use opensearchservice module instead
 */
export interface CustomEndpointOptions {
    /**
     * The custom domain name to assign
     *
     * @deprecated use opensearchservice module instead
     */
    readonly domainName: string;
    /**
     * The certificate to use
     * @default - create a new one
     * @deprecated use opensearchservice module instead
     */
    readonly certificate?: acm.ICertificate;
    /**
     * The hosted zone in Route53 to create the CNAME record in
     * @default - do not create a CNAME
     * @deprecated use opensearchservice module instead
     */
    readonly hostedZone?: route53.IHostedZone;
}
/**
 * Properties for an AWS Elasticsearch Domain.
 *
 * @deprecated use opensearchservice module instead
 */
export interface DomainProps {
    /**
     * Domain Access policies.
     *
     * @default - No access policies.
     * @deprecated use opensearchservice module instead
     */
    readonly accessPolicies?: iam.PolicyStatement[];
    /**
     * Additional options to specify for the Amazon ES domain.
     *
     * @see https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options
     * @default - no advanced options are specified
     * @deprecated use opensearchservice module instead
     */
    readonly advancedOptions?: {
        [key: string]: (string);
    };
    /**
     * Configures Amazon ES to use Amazon Cognito authentication for Kibana.
     *
     * @default - Cognito not used for authentication to Kibana.
     * @deprecated use opensearchservice module instead
     */
    readonly cognitoKibanaAuth?: CognitoOptions;
    /**
     * Enforces a particular physical domain name.
     *
     * @default - A name will be auto-generated.
     * @deprecated use opensearchservice module instead
     */
    readonly domainName?: string;
    /**
     * The configurations of Amazon Elastic Block Store (Amazon EBS) volumes that
     * are attached to data nodes in the Amazon ES domain. For more information, see
     * [Configuring EBS-based Storage]
     * (https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs)
     * in the Amazon Elasticsearch Service Developer Guide.
     *
     * @default - 10 GiB General Purpose (SSD) volumes per node.
     * @deprecated use opensearchservice module instead
     */
    readonly ebs?: EbsOptions;
    /**
     * The cluster capacity configuration for the Amazon ES domain.
     *
     * @default - 1 r5.large.elasticsearch data node; no dedicated master nodes.
     * @deprecated use opensearchservice module instead
     */
    readonly capacity?: CapacityConfig;
    /**
     * The cluster zone awareness configuration for the Amazon ES domain.
     *
     * @default - no zone awareness (1 AZ)
     * @deprecated use opensearchservice module instead
     */
    readonly zoneAwareness?: ZoneAwarenessConfig;
    /**
     * The Elasticsearch version that your domain will leverage.
     *
     * @deprecated use opensearchservice module instead
     */
    readonly version: ElasticsearchVersion;
    /**
     * Encryption at rest options for the cluster.
     *
     * @default - No encryption at rest
     * @deprecated use opensearchservice module instead
     */
    readonly encryptionAtRest?: EncryptionAtRestOptions;
    /**
     * Configuration log publishing configuration options.
     *
     * @default - No logs are published
     * @deprecated use opensearchservice module instead
     */
    readonly logging?: LoggingOptions;
    /**
     * Specify true to enable node to node encryption.
     * Requires Elasticsearch version 6.0 or later.
     *
     * @default - Node to node encryption is not enabled.
     * @deprecated use opensearchservice module instead
     */
    readonly nodeToNodeEncryption?: boolean;
    /**
     * The hour in UTC during which the service takes an automated daily snapshot
     * of the indices in the Amazon ES domain. Only applies for Elasticsearch
     * versions below 5.3.
     *
     * @default - Hourly automated snapshots not used
     * @deprecated use opensearchservice module instead
     */
    readonly automatedSnapshotStartHour?: number;
    /**
     * Place the domain inside this VPC.
     *
     * @see https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html
     * @default - Domain is not placed in a VPC.
     * @deprecated use opensearchservice module instead
     */
    readonly vpc?: ec2.IVpc;
    /**
     * The list of security groups that are associated with the VPC endpoints
     * for the domain.
     *
     * Only used if `vpc` is specified.
     *
     * @see https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html
     * @default - One new security group is created.
     * @deprecated use opensearchservice module instead
     */
    readonly securityGroups?: ec2.ISecurityGroup[];
    /**
     * The specific vpc subnets the domain will be placed in. You must provide one subnet for each Availability Zone
     * that your domain uses. For example, you must specify three subnet IDs for a three Availability Zone
     * domain.
     *
     * Only used if `vpc` is specified.
     *
     * @see https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html
     * @default - All private subnets.
     * @deprecated use opensearchservice module instead
     */
    readonly vpcSubnets?: ec2.SubnetSelection[];
    /**
     * True to require that all traffic to the domain arrive over HTTPS.
     *
     * @default - false
     * @deprecated use opensearchservice module instead
     */
    readonly enforceHttps?: boolean;
    /**
     * The minimum TLS version required for traffic to the domain.
     *
     * @default - TLSSecurityPolicy.TLS_1_0
     * @deprecated use opensearchservice module instead
     */
    readonly tlsSecurityPolicy?: TLSSecurityPolicy;
    /**
     * Specifies options for fine-grained access control.
     * Requires Elasticsearch version 6.7 or later. Enabling fine-grained access control
     * also requires encryption of data at rest and node-to-node encryption, along with
     * enforced HTTPS.
     *
     * @default - fine-grained access control is disabled
     * @deprecated use opensearchservice module instead
     */
    readonly fineGrainedAccessControl?: AdvancedSecurityOptions;
    /**
     * Configures the domain so that unsigned basic auth is enabled. If no master user is provided a default master user
     * with username `admin` and a dynamically generated password stored in KMS is created. The password can be retrieved
     * by getting `masterUserPassword` from the domain instance.
     *
     * Setting this to true will also add an access policy that allows unsigned
     * access, enable node to node encryption, encryption at rest. If conflicting
     * settings are encountered (like disabling encryption at rest) enabling this
     * setting will cause a failure.
     *
     * @default - false
     * @deprecated use opensearchservice module instead
     */
    readonly useUnsignedBasicAuth?: boolean;
    /**
     * To upgrade an Amazon ES domain to a new version of Elasticsearch rather than replacing the entire
     * domain resource, use the EnableVersionUpgrade update policy.
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html#cfn-attributes-updatepolicy-upgradeelasticsearchdomain
     * @default - false
     * @deprecated use opensearchservice module instead
     */
    readonly enableVersionUpgrade?: boolean;
    /**
     * Policy to apply when the domain is removed from the stack
     *
     * @default RemovalPolicy.RETAIN
     * @deprecated use opensearchservice module instead
     */
    readonly removalPolicy?: cdk.RemovalPolicy;
    /**
     * To configure a custom domain configure these options
     *
     * If you specify a Route53 hosted zone it will create a CNAME record and use DNS validation for the certificate
     * @default - no custom domain endpoint will be configured
     * @deprecated use opensearchservice module instead
     */
    readonly customEndpoint?: CustomEndpointOptions;
}
/**
 * An interface that represents an Elasticsearch domain - either created with the CDK, or an existing one.
 *
 * @deprecated use opensearchservice module instead
 */
export interface IDomain extends cdk.IResource {
    /**
     * Arn of the Elasticsearch domain.
     *
     * @attribute
     * @deprecated use opensearchservice module instead
     */
    readonly domainArn: string;
    /**
     * Domain name of the Elasticsearch domain.
     *
     * @attribute
     * @deprecated use opensearchservice module instead
     */
    readonly domainName: string;
    /**
     * Endpoint of the Elasticsearch domain.
     *
     * @attribute
     * @deprecated use opensearchservice module instead
     */
    readonly domainEndpoint: string;
    /**
     * Grant read permissions for this domain and its contents to an IAM
     * principal (Role/Group/User).
     *
     * @param identity The principal
     * @deprecated use opensearchservice module instead
     */
    grantRead(identity: iam.IGrantable): iam.Grant;
    /**
     * Grant write permissions for this domain and its contents to an IAM
     * principal (Role/Group/User).
     *
     * @param identity The principal
     * @deprecated use opensearchservice module instead
     */
    grantWrite(identity: iam.IGrantable): iam.Grant;
    /**
     * Grant read/write permissions for this domain and its contents to an IAM
     * principal (Role/Group/User).
     *
     * @param identity The principal
     * @deprecated use opensearchservice module instead
     */
    grantReadWrite(identity: iam.IGrantable): iam.Grant;
    /**
     * Grant read permissions for an index in this domain to an IAM
     * principal (Role/Group/User).
     *
     * @param index The index to grant permissions for
     * @param identity The principal
     * @deprecated use opensearchservice module instead
     */
    grantIndexRead(index: string, identity: iam.IGrantable): iam.Grant;
    /**
     * Grant write permissions for an index in this domain to an IAM
     * principal (Role/Group/User).
     *
     * @param index The index to grant permissions for
     * @param identity The principal
     * @deprecated use opensearchservice module instead
     */
    grantIndexWrite(index: string, identity: iam.IGrantable): iam.Grant;
    /**
     * Grant read/write permissions for an index in this domain to an IAM
     * principal (Role/Group/User).
     *
     * @param index The index to grant permissions for
     * @param identity The principal
     * @deprecated use opensearchservice module instead
     */
    grantIndexReadWrite(index: string, identity: iam.IGrantable): iam.Grant;
    /**
     * Grant read permissions for a specific path in this domain to an IAM
     * principal (Role/Group/User).
     *
     * @param path The path to grant permissions for
     * @param identity The principal
     * @deprecated use opensearchservice module instead
     */
    grantPathRead(path: string, identity: iam.IGrantable): iam.Grant;
    /**
     * Grant write permissions for a specific path in this domain to an IAM
     * principal (Role/Group/User).
     *
     * @param path The path to grant permissions for
     * @param identity The principal
     * @deprecated use opensearchservice module instead
     */
    grantPathWrite(path: string, identity: iam.IGrantable): iam.Grant;
    /**
     * Grant read/write permissions for a specific path in this domain to an IAM
     * principal (Role/Group/User).
     *
     * @param path The path to grant permissions for
     * @param identity The principal
     * @deprecated use opensearchservice module instead
     */
    grantPathReadWrite(path: string, identity: iam.IGrantable): iam.Grant;
    /**
     * Return the given named metric for this Domain.
     *
     * @deprecated use opensearchservice module instead
     */
    metric(metricName: string, props?: MetricOptions): Metric;
    /**
     * Metric for the time the cluster status is red.
     *
     * @default maximum over 5 minutes
     * @deprecated use opensearchservice module instead
     */
    metricClusterStatusRed(props?: MetricOptions): Metric;
    /**
     * Metric for the time the cluster status is yellow.
     *
     * @default maximum over 5 minutes
     * @deprecated use opensearchservice module instead
     */
    metricClusterStatusYellow(props?: MetricOptions): Metric;
    /**
     * Metric for the storage space of nodes in the cluster.
     *
     * @default minimum over 5 minutes
     * @deprecated use opensearchservice module instead
     */
    metricFreeStorageSpace(props?: MetricOptions): Metric;
    /**
     * Metric for the cluster blocking index writes.
     *
     * @default maximum over 1 minute
     * @deprecated use opensearchservice module instead
     */
    metricClusterIndexWritesBlocked(props?: MetricOptions): Metric;
    /**
     * Metric for the number of nodes.
     *
     * @default minimum over 1 hour
     * @deprecated use opensearchservice module instead
     */
    metricNodes(props?: MetricOptions): Metric;
    /**
     * Metric for automated snapshot failures.
     *
     * @default maximum over 5 minutes
     * @deprecated use opensearchservice module instead
     */
    metricAutomatedSnapshotFailure(props?: MetricOptions): Metric;
    /**
     * Metric for CPU utilization.
     *
     * @default maximum over 5 minutes
     * @deprecated use opensearchservice module instead
     */
    metricCPUUtilization(props?: MetricOptions): Metric;
    /**
     * Metric for JVM memory pressure.
     *
     * @default maximum over 5 minutes
     * @deprecated use opensearchservice module instead
     */
    metricJVMMemoryPressure(props?: MetricOptions): Metric;
    /**
     * Metric for master CPU utilization.
     *
     * @default maximum over 5 minutes
     * @deprecated use opensearchservice module instead
     */
    metricMasterCPUUtilization(props?: MetricOptions): Metric;
    /**
     * Metric for master JVM memory pressure.
     *
     * @default maximum over 5 minutes
     * @deprecated use opensearchservice module instead
     */
    metricMasterJVMMemoryPressure(props?: MetricOptions): Metric;
    /**
     * Metric for KMS key errors.
     *
     * @default maximum over 5 minutes
     * @deprecated use opensearchservice module instead
     */
    metricKMSKeyError(props?: MetricOptions): Metric;
    /**
     * Metric for KMS key being inaccessible.
     *
     * @default maximum over 5 minutes
     * @deprecated use opensearchservice module instead
     */
    metricKMSKeyInaccessible(props?: MetricOptions): Metric;
    /**
     * Metric for number of searchable documents.
     *
     * @default maximum over 5 minutes
     * @deprecated use opensearchservice module instead
     */
    metricSearchableDocuments(props?: MetricOptions): Metric;
    /**
     * Metric for search latency.
     *
     * @default p99 over 5 minutes
     * @deprecated use opensearchservice module instead
     */
    metricSearchLatency(props?: MetricOptions): Metric;
    /**
     * Metric for indexing latency.
     *
     * @default p99 over 5 minutes
     * @deprecated use opensearchservice module instead
     */
    metricIndexingLatency(props?: MetricOptions): Metric;
}
/**
 * A new or imported domain.
 */
declare abstract class DomainBase extends cdk.Resource implements IDomain {
    abstract readonly domainArn: string;
    abstract readonly domainName: string;
    abstract readonly domainEndpoint: string;
    /**
     * Grant read permissions for this domain and its contents to an IAM
     * principal (Role/Group/User).
     *
     * @param identity The principal
     * @deprecated use opensearchservice module instead
     */
    grantRead(identity: iam.IGrantable): iam.Grant;
    /**
     * Grant write permissions for this domain and its contents to an IAM
     * principal (Role/Group/User).
     *
     * @param identity The principal
     * @deprecated use opensearchservice module instead
     */
    grantWrite(identity: iam.IGrantable): iam.Grant;
    /**
     * Grant read/write permissions for this domain and its contents to an IAM
     * principal (Role/Group/User).
     *
     * @param identity The principal
     * @deprecated use opensearchservice module instead
     */
    grantReadWrite(identity: iam.IGrantable): iam.Grant;
    /**
     * Grant read permissions for an index in this domain to an IAM
     * principal (Role/Group/User).
     *
     * @param index The index to grant permissions for
     * @param identity The principal
     * @deprecated use opensearchservice module instead
     */
    grantIndexRead(index: string, identity: iam.IGrantable): iam.Grant;
    /**
     * Grant write permissions for an index in this domain to an IAM
     * principal (Role/Group/User).
     *
     * @param index The index to grant permissions for
     * @param identity The principal
     * @deprecated use opensearchservice module instead
     */
    grantIndexWrite(index: string, identity: iam.IGrantable): iam.Grant;
    /**
     * Grant read/write permissions for an index in this domain to an IAM
     * principal (Role/Group/User).
     *
     * @param index The index to grant permissions for
     * @param identity The principal
     * @deprecated use opensearchservice module instead
     */
    grantIndexReadWrite(index: string, identity: iam.IGrantable): iam.Grant;
    /**
     * Grant read permissions for a specific path in this domain to an IAM
     * principal (Role/Group/User).
     *
     * @param path The path to grant permissions for
     * @param identity The principal
     * @deprecated use opensearchservice module instead
     */
    grantPathRead(path: string, identity: iam.IGrantable): iam.Grant;
    /**
     * Grant write permissions for a specific path in this domain to an IAM
     * principal (Role/Group/User).
     *
     * @param path The path to grant permissions for
     * @param identity The principal
     * @deprecated use opensearchservice module instead
     */
    grantPathWrite(path: string, identity: iam.IGrantable): iam.Grant;
    /**
     * Grant read/write permissions for a specific path in this domain to an IAM
     * principal (Role/Group/User).
     *
     * @param path The path to grant permissions for
     * @param identity The principal
     * @deprecated use opensearchservice module instead
     */
    grantPathReadWrite(path: string, identity: iam.IGrantable): iam.Grant;
    /**
     * Return the given named metric for this Domain.
     *
     * @deprecated use opensearchservice module instead
     */
    metric(metricName: string, props?: MetricOptions): Metric;
    /**
     * Metric for the time the cluster status is red.
     *
     * @default maximum over 5 minutes
     * @deprecated use opensearchservice module instead
     */
    metricClusterStatusRed(props?: MetricOptions): Metric;
    /**
     * Metric for the time the cluster status is yellow.
     *
     * @default maximum over 5 minutes
     * @deprecated use opensearchservice module instead
     */
    metricClusterStatusYellow(props?: MetricOptions): Metric;
    /**
     * Metric for the storage space of nodes in the cluster.
     *
     * @default minimum over 5 minutes
     * @deprecated use opensearchservice module instead
     */
    metricFreeStorageSpace(props?: MetricOptions): Metric;
    /**
     * Metric for the cluster blocking index writes.
     *
     * @default maximum over 1 minute
     * @deprecated use opensearchservice module instead
     */
    metricClusterIndexWritesBlocked(props?: MetricOptions): Metric;
    /**
     * Metric for the number of nodes.
     *
     * @default minimum over 1 hour
     * @deprecated use opensearchservice module instead
     */
    metricNodes(props?: MetricOptions): Metric;
    /**
     * Metric for automated snapshot failures.
     *
     * @default maximum over 5 minutes
     * @deprecated use opensearchservice module instead
     */
    metricAutomatedSnapshotFailure(props?: MetricOptions): Metric;
    /**
     * Metric for CPU utilization.
     *
     * @default maximum over 5 minutes
     * @deprecated use opensearchservice module instead
     */
    metricCPUUtilization(props?: MetricOptions): Metric;
    /**
     * Metric for JVM memory pressure.
     *
     * @default maximum over 5 minutes
     * @deprecated use opensearchservice module instead
     */
    metricJVMMemoryPressure(props?: MetricOptions): Metric;
    /**
     * Metric for master CPU utilization.
     *
     * @default maximum over 5 minutes
     * @deprecated use opensearchservice module instead
     */
    metricMasterCPUUtilization(props?: MetricOptions): Metric;
    /**
     * Metric for master JVM memory pressure.
     *
     * @default maximum over 5 minutes
     * @deprecated use opensearchservice module instead
     */
    metricMasterJVMMemoryPressure(props?: MetricOptions): Metric;
    /**
     * Metric for KMS key errors.
     *
     * @default maximum over 5 minutes
     * @deprecated use opensearchservice module instead
     */
    metricKMSKeyError(props?: MetricOptions): Metric;
    /**
     * Metric for KMS key being inaccessible.
     *
     * @default maximum over 5 minutes
     * @deprecated use opensearchservice module instead
     */
    metricKMSKeyInaccessible(props?: MetricOptions): Metric;
    /**
     * Metric for number of searchable documents.
     *
     * @default maximum over 5 minutes
     * @deprecated use opensearchservice module instead
     */
    metricSearchableDocuments(props?: MetricOptions): Metric;
    /**
     * Metric for search latency.
     *
     * @default p99 over 5 minutes
     * @deprecated use opensearchservice module instead
     */
    metricSearchLatency(props?: MetricOptions): Metric;
    /**
     * Metric for indexing latency.
     *
     * @default p99 over 5 minutes
     * @deprecated use opensearchservice module instead
     */
    metricIndexingLatency(props?: MetricOptions): Metric;
    private grant;
}
/**
 * Reference to an Elasticsearch domain.
 *
 * @deprecated use opensearchservice module instead
 */
export interface DomainAttributes {
    /**
     * The ARN of the Elasticsearch domain.
     *
     * @deprecated use opensearchservice module instead
     */
    readonly domainArn: string;
    /**
     * The domain endpoint of the Elasticsearch domain.
     *
     * @deprecated use opensearchservice module instead
     */
    readonly domainEndpoint: string;
}
/**
 * Provides an Elasticsearch domain.
 *
 * @deprecated use opensearchservice module instead
 */
export declare class Domain extends DomainBase implements IDomain, ec2.IConnectable {
    /**
     * Creates a Domain construct that represents an external domain via domain endpoint.
     *
     * @param scope The parent creating construct (usually `this`).
     * @param id The construct's name.
     * @param domainEndpoint The domain's endpoint.
     * @deprecated use opensearchservice module instead
     */
    static fromDomainEndpoint(scope: Construct, id: string, domainEndpoint: string): IDomain;
    /**
     * Creates a Domain construct that represents an external domain.
     *
     * @param scope The parent creating construct (usually `this`).
     * @param id The construct's name.
     * @param attrs A `DomainAttributes` object.
     * @deprecated use opensearchservice module instead
     */
    static fromDomainAttributes(scope: Construct, id: string, attrs: DomainAttributes): IDomain;
    /**
     * @deprecated use opensearchservice module instead
     */
    readonly domainArn: string;
    /**
     * @deprecated use opensearchservice module instead
     */
    readonly domainName: string;
    /**
     * @deprecated use opensearchservice module instead
     */
    readonly domainEndpoint: string;
    /**
     * Log group that slow searches are logged to.
     *
     * @attribute
     * @deprecated use opensearchservice module instead
     */
    readonly slowSearchLogGroup?: logs.ILogGroup;
    /**
     * Log group that slow indices are logged to.
     *
     * @attribute
     * @deprecated use opensearchservice module instead
     */
    readonly slowIndexLogGroup?: logs.ILogGroup;
    /**
     * Log group that application logs are logged to.
     *
     * @attribute
     * @deprecated use opensearchservice module instead
     */
    readonly appLogGroup?: logs.ILogGroup;
    /**
     * Log group that audit logs are logged to.
     *
     * @attribute
     * @deprecated use opensearchservice module instead
     */
    readonly auditLogGroup?: logs.ILogGroup;
    /**
     * Master user password if fine grained access control is configured.
     *
     * @deprecated use opensearchservice module instead
     */
    readonly masterUserPassword?: cdk.SecretValue;
    private readonly domain;
    private accessPolicy?;
    private encryptionAtRestOptions?;
    private readonly _connections;
    constructor(scope: Construct, id: string, props: DomainProps);
    /**
     * Manages network connections to the domain. This will throw an error in case the domain
     * is not placed inside a VPC.
     *
     * @deprecated use opensearchservice module instead
     */
    get connections(): ec2.Connections;
    /**
     * Add policy statements to the domain access policy
     *
     * @deprecated use opensearchservice module instead
     */
    addAccessPolicies(...accessPolicyStatements: iam.PolicyStatement[]): void;
}
export {};
