module.exports = {
    mode: 'development',
    entry: "./Typescript/Example/rotate.ts",
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'rotate.mjs',
        path: __dirname + '/Assets/Example/Resources',
        environment: { module: true },
        libraryTarget: 'module'
    },
    externalsType: "module",
    externals: {
        csharp: 'var csharp',
        puerts: 'var puerts',
    },
    experiments: {
        outputModule: true
    }
}