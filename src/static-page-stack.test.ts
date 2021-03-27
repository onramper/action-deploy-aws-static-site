import { expect as expectCDK, haveResource, haveResourceLike } from "@aws-cdk/assert";
import * as cdk from "@aws-cdk/core";
import { StaticPageStack } from "./static-page-stack";

const app = new cdk.App();
const stack = new StaticPageStack(app, "MyTestStack", {
  fullDomain: "sub.example.com",
  folder: "./images",
  stackName: "MyTestStack",
});

test("Empty Stack", () => {
  expectCDK(stack).to(haveResource("AWS::S3::Bucket"));
});

test("404 Redirect", () => {
  expectCDK(stack).to(haveResourceLike("AWS::CloudFront::Distribution", {
    DistributionConfig: {
      CustomErrorResponses: [
        {
          ErrorCode: 404,
          ResponseCode: 200,
          ResponsePagePath: "/index.html"
        }
      ],
    }
  }))
});