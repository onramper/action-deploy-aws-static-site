/**
 * Factory class for DynamoDB key conditions.
 */
export declare class KeyCondition {
    private readonly cond;
    /**
     * Condition k = arg, true if the key attribute k is equal to the Query argument
     */
    static eq(keyName: string, arg: string): KeyCondition;
    /**
     * Condition k < arg, true if the key attribute k is less than the Query argument
     */
    static lt(keyName: string, arg: string): KeyCondition;
    /**
     * Condition k <= arg, true if the key attribute k is less than or equal to the Query argument
     */
    static le(keyName: string, arg: string): KeyCondition;
    /**
     * Condition k > arg, true if the key attribute k is greater than the the Query argument
     */
    static gt(keyName: string, arg: string): KeyCondition;
    /**
     * Condition k >= arg, true if the key attribute k is greater or equal to the Query argument
     */
    static ge(keyName: string, arg: string): KeyCondition;
    /**
     * Condition (k, arg). True if the key attribute k begins with the Query argument.
     */
    static beginsWith(keyName: string, arg: string): KeyCondition;
    /**
     * Condition k BETWEEN arg1 AND arg2, true if k >= arg1 and k <= arg2.
     */
    static between(keyName: string, arg1: string, arg2: string): KeyCondition;
    private constructor();
    /**
     * Conjunction between two conditions.
     */
    and(keyCond: KeyCondition): KeyCondition;
    /**
     * Renders the key condition to a VTL string.
     */
    renderTemplate(): string;
}
/**
 * Utility class representing the assigment of a value to an attribute.
 */
export declare class Assign {
    private readonly attr;
    private readonly arg;
    constructor(attr: string, arg: string);
    /**
     * Renders the assignment as a VTL string.
     */
    renderAsAssignment(): string;
    /**
     * Renders the assignment as a map element.
     */
    putInMap(map: string): string;
}
/**
 * Utility class to allow assigning a value or an auto-generated id
 * to a partition key.
 */
export declare class PartitionKeyStep {
    private readonly key;
    constructor(key: string);
    /**
     * Assign an auto-generated value to the partition key.
     */
    is(val: string): PartitionKey;
    /**
     * Assign an auto-generated value to the partition key.
     */
    auto(): PartitionKey;
}
/**
 * Utility class to allow assigning a value or an auto-generated id
 * to a sort key.
 */
export declare class SortKeyStep {
    private readonly pkey;
    private readonly skey;
    constructor(pkey: Assign, skey: string);
    /**
     * Assign an auto-generated value to the sort key.
     */
    is(val: string): PrimaryKey;
    /**
     * Assign an auto-generated value to the sort key.
     */
    auto(): PrimaryKey;
}
/**
 * Specifies the assignment to the primary key. It either
 * contains the full primary key or only the partition key.
 */
export declare class PrimaryKey {
    protected readonly pkey: Assign;
    private readonly skey?;
    /**
     * Allows assigning a value to the partition key.
     */
    static partition(key: string): PartitionKeyStep;
    constructor(pkey: Assign, skey?: Assign | undefined);
    /**
     * Renders the key assignment to a VTL string.
     */
    renderTemplate(): string;
}
/**
 * Specifies the assignment to the partition key. It can be
 * enhanced with the assignment of the sort key.
 */
export declare class PartitionKey extends PrimaryKey {
    constructor(pkey: Assign);
    /**
     * Allows assigning a value to the sort key.
     */
    sort(key: string): SortKeyStep;
}
/**
 * Specifies the attribute value assignments.
 */
export declare class AttributeValues {
    private readonly container;
    private readonly assignments;
    constructor(container: string, assignments?: Assign[]);
    /**
     * Allows assigning a value to the specified attribute.
     */
    attribute(attr: string): AttributeValuesStep;
    /**
     * Renders the variables required for `renderTemplate`.
     */
    renderVariables(): string;
    /**
     * Renders the attribute value assingments to a VTL string.
     */
    renderTemplate(): string;
}
/**
 * Utility class to allow assigning a value to an attribute.
 */
export declare class AttributeValuesStep {
    private readonly attr;
    private readonly container;
    private readonly assignments;
    constructor(attr: string, container: string, assignments: Assign[]);
    /**
     * Assign the value to the current attribute.
     */
    is(val: string): AttributeValues;
}
/**
 * Factory class for attribute value assignments.
 */
export declare class Values {
    /**
     * Treats the specified object as a map of assignments, where the property
     * names represent attribute names. It’s opinionated about how it represents
     * some of the nested objects: e.g., it will use lists (“L”) rather than sets
     * (“SS”, “NS”, “BS”). By default it projects the argument container ("$ctx.args").
     */
    static projecting(arg?: string): AttributeValues;
    /**
     * Allows assigning a value to the specified attribute.
     */
    static attribute(attr: string): AttributeValuesStep;
}
