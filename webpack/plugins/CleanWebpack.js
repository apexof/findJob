const CleanWebpack = require("clean-webpack-plugin");

const options = {
    cleanOnceBeforeBuildPatterns:
        ["*.*", "!static"]
};

module.exports = new CleanWebpack(options);
