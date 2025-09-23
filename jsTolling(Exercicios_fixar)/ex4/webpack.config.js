const path = require('path')

 module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        PATH: path.resolve(__dirname, './src/public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader', 
                options: { 
                    presets: ['@babel/preset-env']
                }
            }
       } ]
    },
    devtool:'source-map'                                                    
 }                           