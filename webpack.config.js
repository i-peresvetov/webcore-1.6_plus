const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: ["./src/js/index.js"],

  output: {
    filename: "./js/bundle.js",
    path: path.resolve(process.cwd(), 'dist'),
  },

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src/js"),
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },

      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },

      // {
      //   test: /\.(eot|ttf|woff|woff2)$/,
      //   use: [
      //     {
      //       loader: "file-loader?name=./fonts/[name].[ext]",
      //     },
      //   ],
      // },

      {
        test: /\.(eot|ttf|woff|woff2)$/,
        type: 'asset/resource'
      },

      {
        test: /\.(png|jpg|svg|gif)$/,            
        type: 'asset/resource'
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Webcore-1.6",
      template: "./src/index.html",
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      },
    }),

    new MiniCssExtractPlugin({
      filename: "style.css",
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/img",
          to: "img",
        },
      ],
    }),

    new CleanWebpackPlugin(),
  ],
};
