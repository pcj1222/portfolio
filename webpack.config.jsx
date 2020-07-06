const path = require('path');

module.exports = {
    name: 'portfolio',
    mode: 'production',
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
            },
            {
                test: /\.(jpg|jpeg|gif|png|svg|ico)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                      limit: 10000,
                      fallback: 'file-loader',
                      name: 'images/[name].[ext]',
                    },
                }],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        fallback: 'file-loader',
                        name: 'fonts/[name].[ext]',
                    },
                }],
            },
        ]
    },
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/'
    }
}