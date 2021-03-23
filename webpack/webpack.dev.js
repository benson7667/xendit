const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    hot: true,
    inline: true,
    open: true,
    historyApiFallback: true,
    port: 3000,
  },
})