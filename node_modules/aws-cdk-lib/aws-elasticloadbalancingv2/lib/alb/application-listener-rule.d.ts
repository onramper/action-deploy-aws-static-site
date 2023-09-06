import { Construct } from 'constructs';
import { IApplicationListener } from './application-listener';
import { ListenerAction } from './application-listener-action';
import { IApplicationTargetGroup } from './application-target-group';
import { ListenerCondition } from './conditions';
/**
 * Basic properties for defining a rule on a listener
 */
export interface BaseApplicationListenerRuleProps {
    /**
     * Priority of the rule
     *
     * The rule with the lowest priority will be used for every request.
     *
     * Priorities must be unique.
     */
    readonly priority: number;
    /**
     * Target groups to forward requests to.
     *
     * Only one of `action`, `fixedResponse`, `redirectResponse` or `targetGroups` can be specified.
     *
     * Implies a `forward` action.
     *
     * @default - No target groups.
     */
    readonly targetGroups?: IApplicationTargetGroup[];
    /**
     * Action to perform when requests are received
     *
     * Only one of `action`, `fixedResponse`, `redirectResponse` or `targetGroups` can be specified.
     *
     * @default - No action
     */
    readonly action?: ListenerAction;
    /**
     * Rule applies if matches the conditions.
     *
     * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html
     *
     * @default - No conditions.
     */
    readonly conditions?: ListenerCondition[];
}
/**
 * Properties for defining a listener rule
 */
export interface ApplicationListenerRuleProps extends BaseApplicationListenerRuleProps {
    /**
     * The listener to attach the rule to
     */
    readonly listener: IApplicationListener;
}
/**
 * Define a new listener rule
 */
export declare class ApplicationListenerRule extends Construct {
    /**
     * The ARN of this rule
     */
    readonly listenerRuleArn: string;
    private readonly conditions;
    private readonly legacyConditions;
    private readonly listener;
    private action?;
    constructor(scope: Construct, id: string, props: ApplicationListenerRuleProps);
    /**
     * Add a non-standard condition to this rule
     */
    addCondition(condition: ListenerCondition): void;
    /**
     * Configure the action to perform for this rule
     */
    configureAction(action: ListenerAction): void;
    /**
     * Validate the rule
     */
    private validateListenerRule;
    /**
     * Render the conditions for this rule
     */
    private renderConditions;
}
