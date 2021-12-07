import * as core from "@actions/core";
import { execSync } from "child_process";
import * as path from "path";

function removeLastDir(dirPath: string): string {
  return dirPath.split("/").slice(0, -1).join("/");
}

function execCDK(args: string, env: { [name: string]: string }): void {
  execSync(
    `(cd ${removeLastDir(__dirname)} && PATH="${removeLastDir(
      process.execPath
    )}:$PATH" node node_modules/aws-cdk/bin/cdk.js ${args})`,
    {
      env,
    }
  );
}

async function run(): Promise<void> {
  try {
    const AWS_ACCESS_KEY_ID: string = core.getInput("AWS_ACCESS_KEY_ID");
    const AWS_SECRET_ACCESS_KEY: string = core.getInput(
      "AWS_SECRET_ACCESS_KEY"
    );
    const CDK_DEFAULT_REGION: string = core.getInput("CDK_DEFAULT_REGION");
    const domain: string = core.getInput("domain");
    if (domain.split(".").length < 2) {
      throw new Error(
        "Invalid domain, examples of correct domains are 'example.com' or 'subdomain.example.org'"
      );
    }
    const raw_publish_dir: string = core.getInput("publish_dir");
    const publish_dir = path.isAbsolute(raw_publish_dir)
      ? raw_publish_dir
      : path.join(`${process.env.GITHUB_WORKSPACE}`, raw_publish_dir);
    core.debug(`Publishing directory '${publish_dir}' to '${domain}'`); // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true

    const awsCredentials = {
      AWS_ACCESS_KEY_ID,
      AWS_SECRET_ACCESS_KEY,
      CDK_DEFAULT_REGION,
    };
    execCDK("bootstrap", {
      ...awsCredentials,
      CDK_DEPLOY_REGION: "us-east-1",
      DOMAIN: domain,
      FOLDER: publish_dir,
    });
    execCDK("deploy --require-approval never", {
      ...awsCredentials,
      DOMAIN: domain,
      FOLDER: publish_dir,
    });
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
