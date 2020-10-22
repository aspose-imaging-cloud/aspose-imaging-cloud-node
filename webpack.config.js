const path = require('path');

module.exports = {
    entry: './lib/api.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'aspose-imaging-cloud.js',
        path: path.resolve(__dirname, 'dist-bundle'),
        library: 'AsposeImaging',
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    node: {
        fs: "empty",
        net: 'empty',
        tls: 'empty'
    },
    "devtool": 'source-map'
};
