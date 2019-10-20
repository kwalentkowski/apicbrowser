const path = require('path');
const nodeExternals = require('webpack-node-externals');
module.exports = {

    entry: {
        server: [path.resolve(__dirname, 'server') + '/index.ts'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    mode: "production",
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    target: 'node',
    node: {
        fs: 'empty'
    },
    externals: [nodeExternals()],
};
