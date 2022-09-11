import path from "path";
import webpack from "webpack";

const buildLoaders = (): webpack.RuleSetRule[] => {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [typescriptLoader];
};

export default buildLoaders;
