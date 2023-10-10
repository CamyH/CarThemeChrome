const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
   mode: "production",
   entry: {
      background: path.resolve(__dirname, "..", "src", "background.ts"),
      wallpapers: path.resolve(__dirname, '..', 'src', 'wallpapers.ts'),
   },
   output: {
      path: path.join(__dirname, "../dist"),
      filename: "[name].js",
   },
   resolve: {
      extensions: [".ts", ".js"],
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            loader: "ts-loader",
            exclude: /node_modules/,
         },
         {
            test: /\.(png|jpe?g|gif)$/i,
            loader: 'file-loader'
          }  
      ],
   },
   plugins: [
      new CopyPlugin({
         patterns: [{from: ".", to: ".", context: "public"}]
      }),
   ],
};