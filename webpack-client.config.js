const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: [path.resolve(__dirname, 'client') + '/index.tsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  mode: "production",
  devtool: "source-map",
  resolve: {
      extensions: [".ts", ".tsx",".js"]
  },

  module: {
      rules: [
          {
              test: /\.ts(x?)$/,
              exclude: /node_modules/,
              use: [
                  {
                      loader: "ts-loader"
                  }
              ]
          },
          {
              enforce: "pre",
              test: /\.js$/,
              loader: "source-map-loader"
          }
      ]
  },
  // externals: {
  //     "react": "React",
  //     "react-dom": "ReactDOM",
  //     "prop-types": "PropTypes"
  // },
  // node: {
  //   fs: 'empty'
  // },
  target: 'web',
  devServer: {
    contentBase: "./public",
    compress: true,
    port: 3000,
    publicPath: "/",
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['app'],
      filename: 'index.html',
      template: 'public/index.html'
    })
  ]
};