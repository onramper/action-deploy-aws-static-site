import * as AWS from 'aws-sdk';
/**
 * Hack-fix
 *
 * There are a number of issues in the upstream version of SharedIniFileCredentials
 * that need fixing:
 *
 * 1. The upstream aws-sdk does not support the 'credential_source' option. Meaning credentials
 *    for assume-role cannot be fetched using EC2/ESC metadata.
 *
 * 2. The upstream aws-sdk does not support SSO profiles as the source of RoleProfiles,
 *    because it will always use the `SharedIniFileCredentials` provider to load
 *    source credentials, but in order to support SSO profiles you must use a
 *    separate class (`SsoCredentials).
 */
export declare class PatchedSharedIniFileCredentials extends AWS.SharedIniFileCredentials {
    private profile;
    private filename;
    private disableAssumeRole;
    private options;
    private roleArn;
    private httpOptions?;
    private tokenCodeFn?;
    loadRoleProfile(creds: Record<string, Record<string, string>>, roleProfile: Record<string, string>, callback: (err?: Error, data?: any) => void): void;
    private sourceProfileCredentials;
    private credentialSourceCredentials;
}
