import { expect as expectCDK, haveResource } from "@aws-cdk/assert";
import * as cdk from "@aws-cdk/core";
import { StaticPageStack } from "./static-page-stack";

/* New test to test 404 re-routing is working */
test("404 Error - Re-Routing Logic and properies of the bucket", () => {
  const app = new cdk.App();
  const stack = new StaticPageStack(app, "MyTestStack", {
    fullDomain: "sub.example.com",
    folder: "./images",
    stackName: "MyTestStack",
  });
  expectCDK(stack).to(
    haveResource("AWS::S3::Bucket", {
      WebsiteConfiguration: {
        ErrorDocument: "error.html",
        IndexDocument: "index.html",
        RoutingRules: [
          {
            RedirectRule: {
              ReplaceKeyWith: "/index.html",
            },
            RoutingRuleCondition: {
              HttpErrorCodeReturnedEquals: "404",
            },
          },
        ],
      },
    })
  );
});
