const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');
const path = require('path');

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3000,
  },
  output: {
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [
          path.join(__dirname, '../node_modules/components'),
          path.join(__dirname, 'node_modules/components'),
          path.join(__dirname, 'src'),
        ],
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: [
          path.join(__dirname, '../node_modules/components'),
          path.join(__dirname, 'node_modules/components'),
          path.join(__dirname, 'src'),
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'main',
      remotes: {
        module1: 'module1@[module1Url]/remoteEntry.js',
        module2: 'module2@[module2Url]/remoteEntry.js',
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
        'styled-components': { singleton: true },
      },
    }),
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
