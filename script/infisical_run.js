const spawn = require("child_process").spawn;

const infisical = spawn("infisical", ["run", "--", "node", "./.build/app.js"]);

infisical.stdout.on("data", (data) => console.log(`${data}`));
infisical.stderr.on("data", (data) => console.error(`${data}`));
