import * as cdk from "@aws-cdk/core";
import { StaticPageStack } from "./static-page-stack";

const app = new cdk.App();
const { DOMAIN, FOLDER } = process.env;
if (DOMAIN === undefined) {
  throw new Error("domain has not been defined");
}
if (FOLDER === undefined) {
  throw new Error("publish_dir has not been defined");
}

new StaticPageStack(app, `StaticPage`, {
  stackName: `StaticPage-${DOMAIN}`.split(".").join("-"),
  folder: FOLDER,
  fullDomain: DOMAIN,
});
