import { Construct } from 'constructs';
import * as iam from '../../../aws-iam';
import * as logs from '../../../aws-logs';
import * as s3 from '../../../aws-s3';
import * as sfn from '../../../aws-stepfunctions';
/**
 * The props for a EMR Containers StartJobRun Task.
 */
export interface EmrContainersStartJobRunProps extends sfn.TaskStateBaseProps {
    /**
     * The ID of the virtual cluster where the job will be run
     */
    readonly virtualCluster: VirtualClusterInput;
    /**
     * The name of the job run.
     *
     * @default - No job run name
     */
    readonly jobName?: string;
    /**
     * The execution role for the job run.
     *
     * If `virtualClusterId` is from a JSON input path, an execution role must be provided.
     * If an execution role is provided, follow the documentation to update the role trust policy.
     * @see https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/setting-up-trust-policy.html
     *
     * @default - Automatically generated only when the provided `virtualClusterId` is not an encoded JSON path
     */
    readonly executionRole?: iam.IRole;
    /**
     * The Amazon EMR release version to use for the job run.
     */
    readonly releaseLabel: ReleaseLabel;
    /**
     * The configurations for the application running in the job run.
     *
     * Maximum of 100 items
     *
     * @see https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_Configuration.html
     *
     * @default - No application config
     */
    readonly applicationConfig?: ApplicationConfiguration[];
    /**
     * The job driver for the job run.
     *
     * @see https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_JobDriver.html
     */
    readonly jobDriver: JobDriver;
    /**
     * Configuration for monitoring the job run
     *
     * @see https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_MonitoringConfiguration.html
     *
     * @default - logging enabled and resources automatically generated if `monitoring.logging` is set to `true`
     */
    readonly monitoring?: Monitoring;
    /**
     * The tags assigned to job runs.
     *
     * @default - None
     */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
 * Starts a job run.
 *
 * A job is a unit of work that you submit to Amazon EMR on EKS for execution.
 * The work performed by the job can be defined by a Spark jar, PySpark script, or SparkSQL query.
 * A job run is an execution of the job on the virtual cluster.
 *
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/connect-emr-eks.html
 */
export declare class EmrContainersStartJobRun extends sfn.TaskStateBase implements iam.IGrantable {
    private readonly props;
    private static readonly SUPPORTED_INTEGRATION_PATTERNS;
    protected readonly taskMetrics?: sfn.TaskMetricsConfig;
    protected readonly taskPolicies?: iam.PolicyStatement[];
    readonly grantPrincipal: iam.IPrincipal;
    private role;
    private readonly logGroup?;
    private readonly logBucket?;
    private readonly integrationPattern;
    constructor(scope: Construct, id: string, props: EmrContainersStartJobRunProps);
    /**
     * @internal
     */
    protected _renderTask(): any;
    /**
     * Render the EMR Containers ConfigurationProperty as JSON
     */
    private applicationConfigPropertyToJson;
    private validateAppConfigPropertiesLength;
    private validatePropertiesNestedAppConfigBothNotUndefined;
    private validateAppConfig;
    private isArrayOfStrings;
    private validateEntryPointArguments;
    private validateEntryPointArgumentsLength;
    private validateSparkSubmitParametersLength;
    private validateEntryPoint;
    private validateSparkSubmitJobDriver;
    private assignLogGroup;
    private assignLogBucket;
    private createJobExecutionRole;
    private grantMonitoringPolicies;
    /**
     * If an execution role is not provided by user, the automatically generated job execution role must create a trust relationship
     * between itself and the identity of the EMR managed service account in order to run jobs on the Kubernetes namespace.
     *
     * This cannot occur if the user provided virtualClusterId is within an encoded JSON path.
     *
     * The trust relationship can be created by updating the trust policy of the job execution role.
     *
     * @param role the automatically generated job execution role
     */
    private updateRoleTrustPolicy;
    private createPolicyStatements;
}
/**
 * The information about job driver for Spark submit.
 */
export interface SparkSubmitJobDriver {
    /**
     * The entry point of job application.
     *
     * Length Constraints: Minimum length of 1. Maximum length of 256.
     */
    readonly entryPoint: sfn.TaskInput;
    /**
     * The arguments for a job application in a task input object containing an array of strings
     *
     * Length Constraints: Minimum length of 1. Maximum length of 10280.
     * @type sfn.TaskInput which expects payload as an array of strings
     *
     * @default - No arguments defined
     */
    readonly entryPointArguments?: sfn.TaskInput;
    /**
     * The Spark submit parameters that are used for job runs.
     *
     * Length Constraints: Minimum length of 1. Maximum length of 102400.
     *
     * @default - No spark submit parameters
     */
    readonly sparkSubmitParameters?: string;
}
/**
 * Specify the driver that the EMR Containers job runs on.
 * The job driver is used to provide an input for the job that will be run.
 */
export interface JobDriver {
    /**
     * The job driver parameters specified for spark submit.
     *
     * @see https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_SparkSubmitJobDriver.html
     *
     */
    readonly sparkSubmitJobDriver: SparkSubmitJobDriver;
}
/**
 * The classification within a EMR Containers application configuration.
 * Class can be extended to add other classifications.
 * For example, new Classification('xxx-yyy');
 */
export declare class Classification {
    readonly classificationStatement: string;
    /**
     * Sets the maximizeResourceAllocation property to true or false.
     * When true, Amazon EMR automatically configures spark-defaults properties based on cluster hardware configuration.
     *
     * For more info:
     * @see https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-spark-configure.html#emr-spark-maximizeresourceallocation
     */
    static readonly SPARK: Classification;
    /**
     * Sets values in the spark-defaults.conf file.
     *
     * For more info:
     * @see https://spark.apache.org/docs/latest/configuration.html
     */
    static readonly SPARK_DEFAULTS: Classification;
    /**
     * Sets values in the spark-env.sh file.
     *
     * For more info:
     * @see https://spark.apache.org/docs/latest/configuration.html#environment-variables
     */
    static readonly SPARK_ENV: Classification;
    /**
     * Sets values in the hive-site.xml for Spark.
     */
    static readonly SPARK_HIVE_SITE: Classification;
    /**
     * Sets values in the log4j.properties file.
     *
     * For more settings and info:
     * @see https://github.com/apache/spark/blob/master/conf/log4j.properties.template
     */
    static readonly SPARK_LOG4J: Classification;
    /**
     * Sets values in the metrics.properties file.
     *
     * For more settings and info:
     * @see https://github.com/apache/spark/blob/master/conf/metrics.properties.template
     */
    static readonly SPARK_METRICS: Classification;
    /**
     * Creates a new Classification
     *
     * @param classificationStatement A literal string in case a new EMR classification is released, if not already defined.
     */
    constructor(classificationStatement: string);
}
/**
 * A configuration specification to be used when provisioning virtual clusters,
 * which can include configurations for applications and software bundled with Amazon EMR on EKS.
 *
 * A configuration consists of a classification, properties, and optional nested configurations.
 * A classification refers to an application-specific configuration file.
 * Properties are the settings you want to change in that file.
 * @see https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-configure-apps.html
 */
export interface ApplicationConfiguration {
    /**
     * The classification within a configuration.
     *
     * Length Constraints: Minimum length of 1. Maximum length of 1024.
     */
    readonly classification: Classification;
    /**
     * A list of additional configurations to apply within a configuration object.
     *
     * Array Members: Maximum number of 100 items.
     *
     * @default - No other configurations
     */
    readonly nestedConfig?: ApplicationConfiguration[];
    /**
     * A set of properties specified within a configuration classification.
     *
     * Map Entries: Maximum number of 100 items.
     *
     * @default - No properties
     */
    readonly properties?: {
        [key: string]: string;
    };
}
/**
 * Configuration setting for monitoring.
 */
export interface Monitoring {
    /**
     * Enable logging for this job.
     *
     * If set to true, will automatically create a Cloudwatch Log Group and S3 bucket.
     * This will be set to `true` implicitly if values are provided for `logGroup` or `logBucket`.
     *
     * @default true - true if values are provided for `logGroup` or `logBucket`, false otherwise
     */
    readonly logging?: boolean;
    /**
     * A log group for CloudWatch monitoring.
     *
     * You can configure your jobs to send log information to CloudWatch Logs.
     *
     * @default - if `logging` is manually set to `true` and a `logGroup` is not provided, a `logGroup` will be automatically generated`.
     */
    readonly logGroup?: logs.ILogGroup;
    /**
     * A log stream name prefix for Cloudwatch monitoring.
     *
     * @default - Log streams created in this log group have no default prefix
     */
    readonly logStreamNamePrefix?: string;
    /**
     * Amazon S3 Bucket for monitoring log publishing.
     *
     * You can configure your jobs to send log information to Amazon S3.
     *
     * @default - if `logging` is manually set to `true` and a `logBucket` is not provided, a `logBucket` will be automatically generated`.
     */
    readonly logBucket?: s3.IBucket;
    /**
     * Monitoring configurations for the persistent application UI.
     *
     * @default true
     */
    readonly persistentAppUI?: boolean;
}
/**
 * The Amazon EMR release version to use for the job run.
 *
 * Can be extended to include new EMR releases
 *
 * For example, `new ReleaseLabel('emr-x.xx.x-latest');`
 */
export declare class ReleaseLabel {
    readonly label: string;
    /**
     * EMR Release version 5.32.0
     */
    static readonly EMR_5_32_0: ReleaseLabel;
    /**
     * EMR Release version 5.33.0
     */
    static readonly EMR_5_33_0: ReleaseLabel;
    /**
     * EMR Release version 6.2.0
     */
    static readonly EMR_6_2_0: ReleaseLabel;
    /**
     * EMR Release version 6.3.0
     */
    static readonly EMR_6_3_0: ReleaseLabel;
    /**
     * Initializes the label string.
     *
     * @param label A literal string that contains the release-version ex. 'emr-x.x.x-latest'
     */
    constructor(label: string);
}
/**
 * Class that returns a virtual cluster's id depending on input type
 */
export declare class VirtualClusterInput {
    readonly id: string;
    /**
     * Input for a virtualClusterId from a Task Input
     */
    static fromTaskInput(taskInput: sfn.TaskInput): VirtualClusterInput;
    /**
     * Input for virtualClusterId from a literal string
     */
    static fromVirtualClusterId(virtualClusterId: string): VirtualClusterInput;
    /**
     * Initializes the virtual cluster ID.
     *
     * @param id The VirtualCluster Id
     */
    private constructor();
}
