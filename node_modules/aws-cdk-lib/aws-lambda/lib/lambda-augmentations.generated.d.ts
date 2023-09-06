import * as cw from "../../aws-cloudwatch";
declare module "./function-base" {
    interface IFunction {
        /**
         * Return the given named metric for this Function
         */
        metric(metricName: string, props?: cw.MetricOptions): cw.Metric;
        /**
         * How often this Lambda is throttled
         *
         * Sum over 5 minutes
         */
        metricThrottles(props?: cw.MetricOptions): cw.Metric;
        /**
         * How often this Lambda is invoked
         *
         * Sum over 5 minutes
         */
        metricInvocations(props?: cw.MetricOptions): cw.Metric;
        /**
         * How many invocations of this Lambda fail
         *
         * Sum over 5 minutes
         */
        metricErrors(props?: cw.MetricOptions): cw.Metric;
        /**
         * How long execution of this Lambda takes
         *
         * Average over 5 minutes
         */
        metricDuration(props?: cw.MetricOptions): cw.Metric;
    }
}
declare module "./function-base" {
    interface FunctionBase {
        /**
         * Return the given named metric for this Function
         */
        metric(metricName: string, props?: cw.MetricOptions): cw.Metric;
        /**
         * How often this Lambda is throttled
         *
         * Sum over 5 minutes
         */
        metricThrottles(props?: cw.MetricOptions): cw.Metric;
        /**
         * How often this Lambda is invoked
         *
         * Sum over 5 minutes
         */
        metricInvocations(props?: cw.MetricOptions): cw.Metric;
        /**
         * How many invocations of this Lambda fail
         *
         * Sum over 5 minutes
         */
        metricErrors(props?: cw.MetricOptions): cw.Metric;
        /**
         * How long execution of this Lambda takes
         *
         * Average over 5 minutes
         */
        metricDuration(props?: cw.MetricOptions): cw.Metric;
    }
}
