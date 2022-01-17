const Plugin = require("terser-webpack-plugin");
const config = {
    entry: "./10a_index.js",
    output: {
        path: `${__dirname}/out`,
        filename: "out.js",
    },
    optimization: {
        minimize: true,
        minimizer: [new Plugin()],
    },
};

module.exports = config;