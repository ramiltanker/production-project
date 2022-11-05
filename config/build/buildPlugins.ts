import path from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const buildPlugins = ({ paths, isDev, apiUrl, project }: BuildOptions): webpack.WebpackPluginInstance[] => {
  const plugins = [
    new HTMLWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contentHash].css',
      chunkFilename: 'css/[name].[contentHash].css'
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project)
    })
    // isDev && new ReactRefreshWebpackPlugin(),
  ];

  if (isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin(), new BundleAnalyzerPlugin({ openAnalyzer: false }));
  }

  return plugins;
};

export default buildPlugins;
