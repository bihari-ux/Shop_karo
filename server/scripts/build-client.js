const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const serverDir = path.resolve(__dirname, "..");
const clientDir = path.resolve(serverDir, "..", "client");
const clientBuildDir = path.join(clientDir, "build");
const serverBuildDir = path.join(serverDir, "build");

function run(command, cwd, extraEnv = {}) {
  execSync(command, {
    cwd,
    stdio: "inherit",
    env: {
      ...process.env,
      ...extraEnv,
    },
  });
}

if (!fs.existsSync(clientDir)) {
  throw new Error(`Client directory not found at ${clientDir}`);
}

run("npm install", clientDir);
run("npm run build", clientDir, {
  REACT_APP_BACKEND_SERVER: process.env.REACT_APP_BACKEND_SERVER ?? "",
});

fs.rmSync(serverBuildDir, { recursive: true, force: true });
fs.mkdirSync(serverBuildDir, { recursive: true });
fs.cpSync(clientBuildDir, serverBuildDir, { recursive: true });

console.log("Client build copied to server/build");
