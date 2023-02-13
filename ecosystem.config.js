module.exports = {
    apps: [{
        name: "infisical-pm2-problem",
        script: "./script/infisical_run.js",
        instances: 2,
        exec_mode: "cluster"
    }]
};
