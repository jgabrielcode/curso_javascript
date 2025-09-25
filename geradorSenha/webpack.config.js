const path = require('path')

module.exports = {
    entry: './src/index.js',        
    mode: 'development',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules:[{
            exclude: /node_modules/,
            test:/\.js$/,
            use:{
                loader: 'babel-loader',
            }
        }]
    },
    devtool: 'source-map'
}