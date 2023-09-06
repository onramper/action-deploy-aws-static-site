/**
 * Utility class to represent DynamoDB key conditions.
 */
export declare abstract class BaseKeyCondition {
    and(cond: BaseKeyCondition): BaseKeyCondition;
    renderExpressionNames(): string;
    renderExpressionValues(): string;
    abstract renderCondition(): string;
    abstract keyNames(): string[];
    abstract args(): string[];
}
/**
 * Utility class to represent DynamoDB "begins_with" key conditions.
 */
export declare class BeginsWith extends BaseKeyCondition {
    private readonly keyName;
    private readonly arg;
    constructor(keyName: string, arg: string);
    renderCondition(): string;
    keyNames(): string[];
    args(): string[];
}
/**
 * Utility class to represent DynamoDB binary key conditions.
 */
export declare class BinaryCondition extends BaseKeyCondition {
    private readonly keyName;
    private readonly op;
    private readonly arg;
    constructor(keyName: string, op: string, arg: string);
    renderCondition(): string;
    keyNames(): string[];
    args(): string[];
}
/**
 * Utility class to represent DynamoDB "between" key conditions.
 */
export declare class Between extends BaseKeyCondition {
    private readonly keyName;
    private readonly arg1;
    private readonly arg2;
    constructor(keyName: string, arg1: string, arg2: string);
    renderCondition(): string;
    keyNames(): string[];
    args(): string[];
}
