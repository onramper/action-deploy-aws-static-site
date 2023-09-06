import { Template } from "aws-cdk-lib/assertions";
import * as cdk from "aws-cdk-lib";
import { StaticPageStack } from "./static-page-stack";

test("Empty Stack", () => {
  const app = new cdk.App();
  const stack = new StaticPageStack(app, "MyTestStack", {
    fullDomain: "sub.example.com",
    folder: "./images",
    stackName: "MyTestStack",
  });
  // Prepare the stack for assertions.
  const template = Template.fromStack(stack);
  template.hasResource("AWS::S3::Bucket", {});
});
