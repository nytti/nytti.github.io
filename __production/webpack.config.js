const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const VisualizerPlugin = require('webpack-visualizer-plugin')

module.exports = {
  entry: [
    path.resolve(__dirname, 'entry')
  ],
  output: {
    filename: 'static/bundle.js',
    path: path.resolve(__dirname, '../build'),
    publicPath: ''
  },
  target: 'web',
  devtool: 'source-map',
  stats: 'errors-only',
  plugins: [
    new VisualizerPlugin(),
    new CleanWebpackPlugin(['build'], { root: path.resolve(__dirname, '../') }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/template.ejs'),
      filename: 'index.html',
      inject: false,
      minify: { collapseWhitespace: true, minifyJS: true },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
    ]
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
}
