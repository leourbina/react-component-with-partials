const path = require('path');
const LIBRARY_NAME = 'react-component-with-partials';

module.exports = {
  entry: path.join(process.cwd(), 'src/index.js'),
  devtol: 'source-map',
  output: {
    path: path.join(process.cwd(), '/lib'),
    filename: `${LIBRARY_NAME}.js`,
    library: LIBRARY_NAME,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js'],
  },
};
