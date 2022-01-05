/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env) => {
  return {
    entry: './src/index.tsx',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: [/node_modules/, /src\/server/],
        },
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.gwm$/,
          use: 'raw-loader',
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {},
            },
          ],
        },
        {
          test: /\.ttf$/,
          use: ['file-loader'],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'bundle.css',
      }),
      new webpack.DefinePlugin({
        DEBUG: env === 'debug' ? true : false,
      }),
      // new BundleAnalyzerPlugin({
      //     analyzerPort: 8887
      // }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
      new HtmlWebpackPlugin({
        template: 'index.html',
      }),
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.js', 'scss', '.css'],
    },
    output: {
      filename: 'bundle.js',
      libraryTarget: 'var',
      library: 'gameDesigner',
    },
    externals: {
      babylonjs: 'BABYLON',
    },
    devtool: 'eval',
    context: __dirname,
    devServer: {
      static: ['.', './test', './assets', './public'],
      port: 3002,
      proxy: {
        '/api': 'http://localhost:3000',
      },
    },
  };
};
