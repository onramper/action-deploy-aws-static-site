import * as cw from "../../aws-cloudwatch";
declare module "./vpn" {
    interface IVpnConnection {
        /**
         * Return the given named metric for this VPNConnection
         */
        metric(metricName: string, props?: cw.MetricOptions): cw.Metric;
        /**
         * The state of the tunnel. 0 indicates DOWN and 1 indicates UP.
         *
         * Average over 5 minutes
         */
        metricTunnelState(props?: cw.MetricOptions): cw.Metric;
        /**
         * The bytes received through the VPN tunnel.
         *
         * Sum over 5 minutes
         */
        metricTunnelDataIn(props?: cw.MetricOptions): cw.Metric;
        /**
         * The bytes sent through the VPN tunnel.
         *
         * Sum over 5 minutes
         */
        metricTunnelDataOut(props?: cw.MetricOptions): cw.Metric;
    }
}
declare module "./vpn" {
    interface VpnConnectionBase {
        /**
         * Return the given named metric for this VPNConnection
         */
        metric(metricName: string, props?: cw.MetricOptions): cw.Metric;
        /**
         * The state of the tunnel. 0 indicates DOWN and 1 indicates UP.
         *
         * Average over 5 minutes
         */
        metricTunnelState(props?: cw.MetricOptions): cw.Metric;
        /**
         * The bytes received through the VPN tunnel.
         *
         * Sum over 5 minutes
         */
        metricTunnelDataIn(props?: cw.MetricOptions): cw.Metric;
        /**
         * The bytes sent through the VPN tunnel.
         *
         * Sum over 5 minutes
         */
        metricTunnelDataOut(props?: cw.MetricOptions): cw.Metric;
    }
}
