const path = require('path')
module.exports = {
  devServer: {
    contentBase: __dirname,
  },
  entry: path.join(__dirname, 'index.js'),
  output: {
    filename: 'build.js',
    path: __dirname,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
}
