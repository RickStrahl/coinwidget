const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    plugins: [
        new UglifyJSPlugin()/*,
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
                $: 'jquery',
                jquery: 'jquery'
        })*/
    ],
    module: {
        rules: [/*
            {
                test: require.resolve('jquery'),
                use: [{
                        loader: 'expose-loader',
                        options: 'jQuery'
                    },{
                        loader: 'expose-loader',
                        options: '$'
                }]
            },*/
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: {
                    loader: 'url-loader'
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: {
                    loader: 'url-loader'
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components|semantic)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.handlebars$/,
                loader: 'handlebars-loader'
            }
        ]
    }
};
