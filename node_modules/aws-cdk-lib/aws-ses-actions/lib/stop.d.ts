import * as ses from '../../aws-ses';
import * as sns from '../../aws-sns';
/**
 * Construction properties for a stop action.
 */
export interface StopProps {
    /**
     * The SNS topic to notify when the stop action is taken.
     */
    readonly topic?: sns.ITopic;
}
/**
 * Terminates the evaluation of the receipt rule set and optionally publishes a
 * notification to Amazon SNS.
 */
export declare class Stop implements ses.IReceiptRuleAction {
    private readonly props;
    constructor(props?: StopProps);
    bind(_rule: ses.IReceiptRule): ses.ReceiptRuleActionConfig;
}
