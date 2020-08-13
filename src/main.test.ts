import * as process from "process";
import * as cp from "child_process";
import * as path from "path";

// shows how the runner will run a javascript action with env / stdout protocol
test("test runs", () => {
  process.env["INPUT_DOMAIN"] = "example.com";
  process.env["INPUT_PUBLISH_DIR"] = "./images";
  process.env["GITHUB_WORKSPACE"] = ".";
  const ip = path.join(__dirname, "..", "lib", "main.js");
  const options: cp.ExecSyncOptions = {
    env: process.env,
  };
  // No idea how to get past the DNS point
  expect(() => {
    cp.execSync(`node ${ip}`, options).toString();
  }).toThrow("Found zones: [] for dns:example.com");
});
