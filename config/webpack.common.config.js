/*
 * @Author: chenhuang
 * @Date: 2024-03-15 10:43:00
 * @Description: 公共配置
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { DefinePlugin } = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./../src/main.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./../dist"),
  },
  devServer: {
    static: path.resolve(__dirname, "./../public"),
    open: true,
    hot: true,
    port: 3000,
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./../src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        include: [path.resolve(__dirname, "./../src/vue")],
      },
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, "./../src")],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
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
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },

      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[hash:4].[ext]",
              outputPath: "image",
              limit: false,
              fallback: "file-loader",
            },
          },
        ],
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        type: "asset/resource",
        generator: {
          filename: "font/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "cli",
      filename: "index.html",
      template: path.resolve(__dirname, "../public/index.html"),
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[hash:4].css",
    }),
    new VueLoaderPlugin(),
    new DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: true,
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true,
    }),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, "./../public"),
    //       to: path.resolve(__dirname, "./../dist"),
    //       globOptions: {
    //         ignore: ["**/*.html"],
    //       },
    //     },
    //   ],
    // }),
  ],
};
