import { Construct } from 'constructs';
import { IKey } from '../../aws-kms';
import { ISecret, Secret } from '../../aws-secretsmanager';
/**
 * Construction properties for a DatabaseSecret.
 */
export interface DatabaseSecretProps {
    /**
     * The username.
     */
    readonly username: string;
    /**
     * The KMS key to use to encrypt the secret.
     *
     * @default default master key
     */
    readonly encryptionKey?: IKey;
    /**
     * The physical name of the secret
     *
     * @default Secretsmanager will generate a physical name for the secret
     */
    readonly secretName?: string;
    /**
     * The master secret which will be used to rotate this secret.
     *
     * @default - no master secret information will be included
     */
    readonly masterSecret?: ISecret;
    /**
     * Characters to not include in the generated password.
     *
     * @default "\"@/"
     */
    readonly excludeCharacters?: string;
}
/**
 *
 * A database secret.
 *
 * @resource AWS::SecretsManager::Secret
 */
export declare class DatabaseSecret extends Secret {
    /**
     * the excluded characters for this Secret
     * @internal
     */
    readonly _excludedCharacters: string;
    constructor(scope: Construct, id: string, props: DatabaseSecretProps);
}
