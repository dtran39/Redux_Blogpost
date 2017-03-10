import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
// What the above code block does is : create an index.html file and inject itself
// into the index_bundle.js file

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'dist'),
};
const LAUNCH_COMMAND = process.env.npm_lifecycle_event;
const isProduction = LAUNCH_COMMAND === 'production';
const productionPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV : JSON.stringify('production'),
  }
});
const base = {
  entry: [
    PATHS.app
  ],
  output: {
    path: PATHS.build,
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  },
};

const developmentConfig = {
  devtool: "cheap-module-source-map",
  plugins: [HtmlWebpackPluginConfig]
};
const productionConfig = {
  devtool: "cheap-module-source-map",
  plugins: [HtmlWebpackPluginConfig, productionPlugin]
};
export default Object.assign({},  base,
  isProduction ? productionConfig : developmentConfig
);
