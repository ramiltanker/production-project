import webpack from "webpack";
import path from "path";
import buildLoaders from "./buildLoaders";
import buildPlugins from "./buildPlugins";
import buildResolves from "./buildResolves";
import { BuildOptions } from "./types/config";

const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const { paths, mode } = options;

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolves(),
  };
};

export default buildWebpackConfig;
