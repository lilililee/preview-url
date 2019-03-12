const path = require('path')
const argv = require('minimist')(process.argv.slice(2))
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const webpack = require('webpack')
const rootPath = path.resolve(__dirname)

const isDevelopment = argv.mode === 'development'
const isProduction = argv.mode === 'production'

const basePlugins = [
  new MiniCssExtractPlugin({
    filename: './src/[name].[hash].css',
    chunkFilename: '[id].css'
  }),
  new HtmlWebPackPlugin({
    template: path.resolve(rootPath, 'public/index.html'),
    filename: 'index.html',
    favicon: path.resolve(rootPath, 'public/favicon.ico')
  })
]
const developmentPlugins = [new webpack.HotModuleReplacementPlugin()]
const productionPlugins = [new CleanWebpackPlugin(), new OptimizeCSSAssetsPlugin({})]

module.exports = {
  entry: {
    main: path.resolve(rootPath, 'src/index.js')
  },
  output: {
    publicPath: isDevelopment? '/': './',
    path: path.resolve(rootPath, 'dist'),
    filename: 'src/[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(css|less|scss)$/,
        use: [
          // 在开发环境使用 MiniCssExtractPlugin.loader 没有热更新
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader?modules&localIdentName=[local]__[hash:base64:5]',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@': rootPath
      // '@scss': path.resolve(rootPath, 'assets/style'),
      // '@assets': path.resolve(rootPath, 'assets'),
      // '@components': path.resolve(rootPath, 'src/components'),
      // '@common': path.resolve(rootPath, 'src/common')
    }
  },
  devServer: {
    contentBase: path.resolve(rootPath, 'dist'), //本地服务器所加载的页面所在的目录
    historyApiFallback: true, //不跳转
    host: '127.0.0.1',
    port: 7000,
    hot: true,
    inline: true, //实时刷新
    hot: true, //Enable webpack's Hot Module Replacement feature
    compress: true, //Enable gzip compression for everything served
    overlay: true, //Shows a full-screen overlay in the browser
    stats: 'errors-only', //To show only errors in your bundle
    open: false, //When open is enabled, the dev server will open the browser.
    disableHostCheck: true
    // proxy: {
    //     "/api": {
    //         target: "http://127.0.0.1:7001",
    //         changeOrigin: true
    //     }
    // }//重定向
  },
  plugins: [...basePlugins, ...(isDevelopment ? developmentPlugins : productionPlugins)]
}
