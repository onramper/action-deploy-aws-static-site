export declare enum VariableInputType {
    /**
     * Freeform text input box
     */
    INPUT = "input",
    /**
     * A dropdown of pre-defined values, or values filled in from a metric search query
     */
    RADIO = "radio",
    /**
     * A set of pre-defined radio buttons, which can also be defined from a metric search query
     */
    SELECT = "select"
}
export declare enum VariableType {
    /**
     * A property variable changes the values of all instances of a property in the list of widgets in the dashboard.
     */
    PROPERTY = "property",
    /**
     * A pattern variable is one that changes a regex pattern across the dashboard JSON
     */
    PATTERN = "pattern"
}
/**
 * A single dashboard variable
 */
export interface IVariable {
    /**
     * Return the variable JSON for use in the dashboard
     */
    toJson(): any;
}
export interface VariableValue {
    /**
     * Optional label for the selected item
     *
     * @default - the variable's value
     */
    readonly label?: string;
    /**
     * Value of the selected item
     */
    readonly value: string;
}
/**
 * Search components for use with {@link Values.fromSearchComponents}
 */
export interface SearchComponents {
    /**
     * The namespace to be used in the search expression
     */
    readonly namespace: string;
    /**
     * The list of dimensions to be used in the search expression
     */
    readonly dimensions: string[];
    /**
     * The metric name to be used in the search expression
     */
    readonly metricName: string;
    /**
     * The dimension name, that the search expression retrieves, whose values will be used to populate the values to choose from
     */
    readonly populateFrom: string;
}
/**
 * A class for providing values for use with {@link VariableInputType.SELECT} and {@link VariableInputType.RADIO} dashboard variables
 */
export declare abstract class Values {
    /**
     * Create values from the components of search expression
     */
    static fromSearchComponents(components: SearchComponents): Values;
    /**
     * Create values from a search expression
     *
     * @param expression search expression that specifies a namespace, dimension name(s) and a metric name. For example `{AWS/EC2,InstanceId} MetricName=\"CPUUtilization\"`
     * @param populateFrom dimension the dimension name, that the search expression retrieves, whose values will be used to populate the values to choose from. For example `InstanceId`
     */
    static fromSearch(expression: string, populateFrom: string): Values;
    /**
     * Create values from an array of possible variable values
     */
    static fromValues(...values: VariableValue[]): Values;
    abstract toJson(): any;
}
/**
 * Default value for use in {@link DashboardVariableOptions}
 */
export declare class DefaultValue {
    readonly val: any;
    /**
     * A special value for use with search expressions to have the default value be the first value returned from search
     */
    static readonly FIRST: DefaultValue;
    /**
     * Create a default value
     * @param value the value to be used as default
     */
    static value(value: any): DefaultValue;
    private constructor();
}
/**
 * Options for {@link DashboardVariable}
 */
export interface DashboardVariableOptions {
    /**
     * Type of the variable
     */
    readonly type: VariableType;
    /**
     * The way the variable value is selected
     */
    readonly inputType: VariableInputType;
    /**
     * Pattern or property value to replace
     */
    readonly value: string;
    /**
     * Unique id
     */
    readonly id: string;
    /**
     * Optional label in the toolbar
     *
     * @default - the variable's value
     */
    readonly label?: string;
    /**
     * Optional values (required for {@link VariableInputType.RADIO} and {@link VariableInputType.SELECT} dashboard variables).
     *
     * @default - no values
     */
    readonly values?: Values;
    /**
     * Optional default value
     *
     * @default - no default value is set
     */
    readonly defaultValue?: DefaultValue;
    /**
     * Whether the variable is visible
     *
     * @default - true
     */
    readonly visible?: boolean;
}
/**
 * Dashboard Variable
 */
export declare class DashboardVariable implements IVariable {
    private readonly options;
    constructor(options: DashboardVariableOptions);
    toJson(): any;
}
