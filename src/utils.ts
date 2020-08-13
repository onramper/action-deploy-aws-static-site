import * as cdk from "@aws-cdk/core";
import * as cloudfront from "@aws-cdk/aws-cloudfront";
import * as route53 from "@aws-cdk/aws-route53";
import * as targets from "@aws-cdk/aws-route53-targets";
import * as acm from "@aws-cdk/aws-certificatemanager";

export function getSubdomain(fullDomain: string): string | null {
  const subdomainArray = fullDomain.split(".").slice(0, -2);
  if (subdomainArray.length === 0) {
    return null;
  } else {
    return subdomainArray.join(".");
  }
}

export function getDomain(fullDomain: string): string {
  return fullDomain.split(".").splice(-2, 2).join(".");
}

export function getDNSZone(
  scope: cdk.Stack,
  domainName: string
): route53.IHostedZone {
  return route53.HostedZone.fromLookup(scope, "Route53Zone", {
    domainName,
  });
}

export function getCertificate(
  scope: cdk.Stack,
  fullDomainName: string,
  zone: route53.IHostedZone
): cloudfront.ViewerCertificate {
  const acmCert = new acm.DnsValidatedCertificate(scope, "SiteCert", {
    domainName: fullDomainName,
    hostedZone: zone,
  });
  return cloudfront.ViewerCertificate.fromAcmCertificate(acmCert, {
    aliases: [fullDomainName],
  });
}

export function setDNSRecord(
  scope: cdk.Stack,
  subdomain: string | null,
  zone: route53.IHostedZone,
  distribution: cloudfront.CloudFrontWebDistribution
): route53.ARecord {
  return new route53.ARecord(scope, "Alias", {
    zone,
    target: route53.RecordTarget.fromAlias(
      new targets.CloudFrontTarget(distribution)
    ),
    recordName: subdomain === null ? undefined : subdomain,
  });
}
