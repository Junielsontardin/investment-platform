const webpack = require('webpack');
const ReactRefreshWebpackPluguin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Junielson Dev'),
    }),
    new ReactRefreshWebpackPluguin(),
  ],
};
