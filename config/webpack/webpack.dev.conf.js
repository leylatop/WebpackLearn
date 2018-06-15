const webpack = require('webpack');//引入webpack
const opn = require('opn');//打开浏览器
const merge = require('webpack-merge');//webpack配置文件合并
const path = require("path");
const baseWebpackConfig = require("./webpack.base.conf");//基础配置
const webpackFile = require("./webpack.file.conf");//一些路径配置

let config = merge(baseWebpackConfig, {
    output: {
        path: path.resolve(webpackFile.devDirectory),
        filename: 'js/[name].js',
        chunkFilename: "js/[name]-[id].js",
        publicPath: ''
    },
    /*webpack 4 第一种写法*/
    // optimization: {
    //     splitChunks: {
    //         chunks: 'initial',      // 只对入口文件处理
    //         cacheGroups: {
    //             vendor: { // split `node_modules`目录下被打包的代码到 `vendor.js && .css` 没找到可打包文件的话，则没有。css需要依赖 `ExtractTextPlugin`
    //                 test: /node_modules\//,
    //                 name: 'vendor',
    //                 chunks: 'all',
    //                 priority: 10,
    //                 enforce: true
    //             },
    //             common: { // split `common`和`components`目录下被打包的代码到`commons.js && .css`
    //                 // test: /common\//,
    //                 name: 'common',
    //                 priority: 10,
    //                 enforce: true,
    //             }
    //         }
    //     },
    //     runtimeChunk: {
    //         name: 'manifest'
    //     }
    // },
    plugins: [
        /*设置开发环境*/
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
            }
        }),
        /*设置热更新*/
        new webpack.HotModuleReplacementPlugin(),
        /* common 业务公共代码，vendor引入第三方 */
        new webpack.optimize.CommonsChunkPlugin({
            name: ["common", "vendor"],
        }),
        /* 防止 vendor hash 变化 */
        // extract webpack runtime and module manifest to its own file in order to
        // prevent vendor hash from being updated whenever app bundle is updated
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        }),


        /*webpack 4 第二种写法*/
        // new webpack.optimize.SplitChunksPlugin({
        //     cacheGroups: {
        //         default: {
        //             minChunks: 2,
        //             priority: -20,
        //             reuseExistingChunk: true,
        //         },
        //         common: {
        //             chunks: 'initial',
        //             name: 'common',
        //             minChunks: 2,
        //             maxInitialRequests: 5,
        //             minSize: 0
        //         },
        //         vendor: { // 抽离第三插件
        //             test: /[\\/]node_modules[\\/]/,
        //             chunks: 'initial',
        //             name: 'vendor',
        //             priority: -10
        //         }
        //     }
        // }),
        // new webpack.optimize.RuntimeChunkPlugin({
        //     name: "manifest",
        // }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    'cache-loader',
                    'babel-loader',
                ],
                include: [
                    path.resolve(__dirname, "../../app"),
                    path.resolve(__dirname, "../../entryBuild")
                ],
                exclude: [
                    path.resolve(__dirname, "../../node_modules")
                ],
            },
            {
                test: /\.(css|pcss)$/,
                loader: 'style-loader?sourceMap!css-loader?sourceMap!postcss-loader?sourceMap',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|ttf|eot|woff|woff2|svg|swf)$/,
                loader: 'file-loader?name=[name].[ext]&outputPath=' + webpackFile.resource + '/'
            }
        ]
    },
    /*设置api转发*/
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        hot: true,
        inline: true,
        contentBase: path.resolve(webpackFile.devDirectory),
        historyApiFallback: true,
        disableHostCheck: true,
        proxy: [
            {
                context: ['/api/**', '/u/**'],
                target: 'http://192.168.12.100:8080/',
                secure: false
            }
        ],
        /*打开浏览器 并打开本项目网址*/
        after() {
            opn('http://localhost:' + this.port);
        }
    }
});
module.exports = config;