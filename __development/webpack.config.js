const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const host = 'localhost'
const publicHost = false // e.g. 192.168.1.33
const port = 5001

module.exports = {
  entry: [
    // Bundle the client for webpack-dev-server
    // and connect to the provided endpoint
    `webpack-dev-server/client?http://${host}:${port}`,
    // Bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    // 'webpack/hot/only-dev-server',
    // The entry point of our app
    path.resolve(__dirname, 'entry')
  ],
  output: {
    publicPath: '/'
  },
  target: 'web',
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/template.ejs'),
      inject: false,
      env: 'development',
      minify: { collapseWhitespace: true, minifyJS: true },
    }),
    // Enable HMR globally
    new webpack.HotModuleReplacementPlugin(),
    // Prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),
    // Do not emit compiled assets that include errors
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(mp4|webm|png|jpg|eot|otf|ttf|woff(2)?)(\?.*)?$/,
        use: 'file-loader'
      },
      {
        test: /\.svg$/,
        use: 'svg-sprite-loader'
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      }
    ],
  },
  resolve: {
    alias: {
      actions: path.resolve(__dirname, '../src/actions/'),
      components: path.resolve(__dirname, '../src/components/'),
      atoms: path.resolve(__dirname, '../src/atoms/'),
      config: path.resolve(__dirname, '../config/'),
      constants: path.resolve(__dirname, '../src/constants'),
      selectors: path.resolve(__dirname, '../src/selectors/'),
      utils: path.resolve(__dirname, '../src/utils/'),
    },
  },
  devServer: {
    host: '0.0.0.0',
    port,
    public: `${publicHost || host}:${port}`,
    historyApiFallback: {
      disableDotRule: true
    },
    stats: 'minimal',
    // hotOnly: true,
    disableHostCheck: true,
    proxy: {
      '/api/': {
        target: 'https://indemandly.knock.to',
        // target: 'https://indemandly.com',
        // target: 'http://localhost:8001',
        changeOrigin: true,
        secure: true
      },
      '/socket.io/*': {
        target: 'https://indemandly.knock.to',
        // target: 'https://indemandly.com',
        changeOrigin: true,
        secure: true,
        ws: true,
      }
    }
  },
}
