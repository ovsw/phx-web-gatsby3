#!/usr/bin/env node

const { spawn } = require("child_process");

const args = process.argv.slice(2);
const nodeMajor = Number.parseInt(process.versions.node.split(".")[0], 10);
const needsLegacyOpenSslProvider = Number.isFinite(nodeMajor) && nodeMajor >= 17;

const child = spawn(
  process.execPath,
  [
    ...(needsLegacyOpenSslProvider ? ["--openssl-legacy-provider"] : []),
    require.resolve("gatsby/cli"),
    ...args,
  ],
  {
    stdio: "inherit",
    env: process.env,
  }
);

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 1);
});

