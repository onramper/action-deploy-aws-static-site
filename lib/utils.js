"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDNSRecord = exports.getCertificate = exports.getDNSZone = exports.getDomain = exports.getSubdomain = void 0;
const cloudfront = __importStar(require("@aws-cdk/aws-cloudfront"));
const route53 = __importStar(require("@aws-cdk/aws-route53"));
const targets = __importStar(require("@aws-cdk/aws-route53-targets"));
const acm = __importStar(require("@aws-cdk/aws-certificatemanager"));
function getSubdomain(fullDomain) {
    const subdomainArray = fullDomain.split(".").slice(0, -2);
    if (subdomainArray.length === 0) {
        return null;
    }
    else {
        return subdomainArray.join(".");
    }
}
exports.getSubdomain = getSubdomain;
function getDomain(fullDomain) {
    return fullDomain.split(".").splice(-2, 2).join(".");
}
exports.getDomain = getDomain;
function getDNSZone(scope, domainName) {
    return route53.HostedZone.fromLookup(scope, "Route53Zone", {
        domainName,
    });
}
exports.getDNSZone = getDNSZone;
function getCertificate(scope, fullDomainName, zone) {
    const acmCert = new acm.DnsValidatedCertificate(scope, "SiteCert", {
        domainName: fullDomainName,
        hostedZone: zone,
    });
    return cloudfront.ViewerCertificate.fromAcmCertificate(acmCert, {
        aliases: [fullDomainName],
    });
}
exports.getCertificate = getCertificate;
function setDNSRecord(scope, subdomain, zone, distribution) {
    return new route53.ARecord(scope, "Alias", {
        zone,
        target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(distribution)),
        recordName: subdomain === null ? undefined : subdomain,
    });
}
exports.setDNSRecord = setDNSRecord;
