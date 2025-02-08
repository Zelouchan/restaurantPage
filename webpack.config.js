const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/, // Match .css files
        use: ['style-loader', 'css-loader'], // Apply style-loader and css-loader
      },
      // Optional: For SCSS/Sass files, use the following rule
      {
        test: /\.scss$/, // Match .scss files
        use: ['style-loader', 'css-loader', 'sass-loader'], // Apply loaders for SCSS
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};
