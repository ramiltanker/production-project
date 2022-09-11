import webpack from "webpack";

const buildResolves = (): webpack.ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js"],
  };
};

export default buildResolves;
