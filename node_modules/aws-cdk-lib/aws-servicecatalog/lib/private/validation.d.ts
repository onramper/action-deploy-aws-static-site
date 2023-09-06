import * as iam from '../../../aws-iam';
/**
 * Class to validate that inputs match requirements.
 */
export declare class InputValidator {
    /**
     * Validates length is between allowed min and max lengths.
     */
    static validateLength(resourceName: string, inputName: string, minLength: number, maxLength: number, inputString?: string): void;
    /**
     * Validates string matches the allowed regex pattern.
     */
    static validateRegex(resourceName: string, inputName: string, regexp: RegExp, inputString?: string): void;
    /**
     * Validates string matches the valid URL regex pattern.
     */
    static validateUrl(resourceName: string, inputName: string, inputString?: string): void;
    /**
    * Validates string matches the valid email regex pattern.
    */
    static validateEmail(resourceName: string, inputName: string, inputString?: string): void;
    /**
    * Validates that a role being used as a local launch role has the role name set
    */
    static validateRoleNameSetForLocalLaunchRole(role: iam.IRole): void;
    private static truncateString;
}
