const path = require('path')

modules.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname,'./public'),
        filname: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node-modules/,
            use:{
                loader: 'babel-loader'
            }

        }]
    
    }
    

}
