const path = require('path');

const SRC_DIR = path.join(__dirname, 'client', 'src');
const OUT_DIR = path.join(__dirname, 'public');

module.exports = {
  entry: ['@babel/polyfill', path.join(SRC_DIR, 'index.js')],
  output: {
    path: OUT_DIR,
    filename: 'app.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test:/\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        use: "file-loader",
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
