const path = require('path');

module.exports = {
    name: 'portfolio',
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js','.jsx']
    },

    entry: {
        app: './Index'
    },
    module: {
        rules:[
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                options:{
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ['react-hot-loader/babel']
                }
            }
        ]
    },
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/'
    }
}