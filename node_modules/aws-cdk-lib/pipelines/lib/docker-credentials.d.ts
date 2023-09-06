import * as ec2 from '../../aws-ec2';
import * as ecr from '../../aws-ecr';
import * as iam from '../../aws-iam';
import * as secretsmanager from '../../aws-secretsmanager';
/**
 * Represents credentials used to access a Docker registry.
 */
export declare abstract class DockerCredential {
    protected readonly usages?: DockerCredentialUsage[] | undefined;
    /**
     * Creates a DockerCredential for DockerHub.
     * Convenience method for `customRegistry('https://index.docker.io/v1/', opts)`.
     */
    static dockerHub(secret: secretsmanager.ISecret, opts?: ExternalDockerCredentialOptions): DockerCredential;
    /**
     * Creates a DockerCredential for a registry, based on its domain name (e.g., 'www.example.com').
     */
    static customRegistry(registryDomain: string, secret: secretsmanager.ISecret, opts?: ExternalDockerCredentialOptions): DockerCredential;
    /**
     * Creates a DockerCredential for one or more ECR repositories.
     *
     * NOTE - All ECR repositories in the same account and region share a domain name
     * (e.g., 0123456789012.dkr.ecr.eu-west-1.amazonaws.com), and can only have one associated
     * set of credentials (and DockerCredential). Attempting to associate one set of credentials
     * with one ECR repo and another with another ECR repo in the same account and region will
     * result in failures when using these credentials in the pipeline.
     */
    static ecr(repositories: ecr.IRepository[], opts?: EcrDockerCredentialOptions): DockerCredential;
    constructor(usages?: DockerCredentialUsage[] | undefined);
    /**
     * Determines if this credential is relevant to the input usage.
     * @internal
     */
    _applicableForUsage(usage: DockerCredentialUsage): boolean;
    /**
     * Grant read-only access to the registry credentials.
     * This grants read access to any secrets, and pull access to any repositories.
     */
    abstract grantRead(grantee: iam.IGrantable, usage: DockerCredentialUsage): void;
    /**
     * Creates and returns the credential configuration, to be used by `cdk-assets`
     * to support the `docker-credential-cdk-assets` tool for `docker login`.
     * @internal
     */
    abstract _renderCdkAssetsConfig(): DockerCredentialCredentialSource;
}
/** Options for defining credentials for a Docker Credential */
export interface ExternalDockerCredentialOptions {
    /**
     * The name of the JSON field of the secret which contains the user/login name.
     * @default 'username'
     */
    readonly secretUsernameField?: string;
    /**
     * The name of the JSON field of the secret which contains the secret/password.
     * @default 'secret'
     */
    readonly secretPasswordField?: string;
    /**
     * An IAM role to assume prior to accessing the secret.
     * @default - none. The current execution role will be used.
     */
    readonly assumeRole?: iam.IRole;
    /**
     * Defines which stages of the pipeline should be granted access to these credentials.
     * @default - all relevant stages (synth, self-update, asset publishing) are granted access.
     */
    readonly usages?: DockerCredentialUsage[];
}
/** Options for defining access for a Docker Credential composed of ECR repos */
export interface EcrDockerCredentialOptions {
    /**
     * An IAM role to assume prior to accessing the secret.
     * @default - none. The current execution role will be used.
     */
    readonly assumeRole?: iam.IRole;
    /**
     * Defines which stages of the pipeline should be granted access to these credentials.
     * @default - all relevant stages (synth, self-update, asset publishing) are granted access.
     */
    readonly usages?: DockerCredentialUsage[];
}
/** Defines which stages of a pipeline require the specified credentials */
export declare enum DockerCredentialUsage {
    /** Synth/Build */
    SYNTH = "SYNTH",
    /** Self-update */
    SELF_UPDATE = "SELF_UPDATE",
    /** Asset publishing */
    ASSET_PUBLISHING = "ASSET_PUBLISHING"
}
/** Format for the CDK assets config. See the cdk-assets `DockerDomainCredentialSource` */
interface DockerCredentialCredentialSource {
    readonly secretsManagerSecretId?: string;
    readonly secretsUsernameField?: string;
    readonly secretsPasswordField?: string;
    readonly ecrRepository?: boolean;
    readonly assumeRoleArn?: string;
}
/**
 * Creates a set of OS-specific buildspec installation commands for setting up the given
 * registries and associated credentials.
 *
 * @param registries - Registries to configure credentials for. It is an error to provide
 * multiple registries for the same domain.
 * @param osType - (optional) Defaults to Linux.
 * @returns An array of commands to configure cdk-assets to use these credentials.
 */
export declare function dockerCredentialsInstallCommands(usage: DockerCredentialUsage, registries?: DockerCredential[], osType?: ec2.OperatingSystemType | 'both'): string[];
export {};
