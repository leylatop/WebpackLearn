# 此文件用于记下疑惑，供日后再进行研究



## webpack 4 编译公共文件的方法

- webpack 3中的形式：

  ​

```javascript
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
```



- webpack 4 中的形式：

  ​

```javascript
new webpack.optimize.SplitChunksPlugin({
  cacheGroups: {
      default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
      },
      common: {
          chunks: 'initial',
          name: 'common',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0
      },
      vendor: { // 抽离第三插件
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          name: 'vendor',
          priority: -10
      }
  }
}),
new webpack.optimize.RuntimeChunkPlugin({
    name: "manifest",
}),
```

- 或者是

```javascript
optimization: {
    splitChunks: {
        chunks: 'initial',      // 只对入口文件处理
        cacheGroups: {
            vendor: { // split `node_modules`目录下被打包的代码到 `vendor.js && .css` 没找到可打包文件的话，则没有。css需要依赖 `ExtractTextPlugin`
                test: /node_modules\//,
                name: 'vendor',
                chunks: 'all',
                priority: 10,
                enforce: true
            },
            common: { // split `common`和`components`目录下被打包的代码到`commons.js && .css`
                // test: /common\//,
                name: 'common',
                priority: 10,
                enforce: true,
            }
        }
    },
    runtimeChunk: {
        name: 'manifest'
    }
},
```

- 在网上搜大概就是这样搞，但是没有正常编译出js代码，所以这里暂时先用webpack 3的来写了
  - 主要表现在：
    - 1、common.js被编译成了common-0.js
    - 2、如果编译除了mainfest就不会编译出来vendor.js



## webpack 4 支持开发环境和生产环境

- webpack 4 新增了开发环境和生产环境的概念，在package.json中添加如下的代码， 其中build为生产环境，dev为开发环境：

```json
"scripts": {
    "build": "webpack --mode production",
    "dev": "webpack --mode development"
    },
```

