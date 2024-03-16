/*
 * @Author: chenhuang
 * @Date: 2024-03-15 09:37:05
 * @Description:
 */
const common = require("./config/webpack.common.config");
const dev = require("./config/webpack.dev.config");
const pro = require("./config/webpack.pro.config");
const { merge } = require("webpack-merge");
const sysConfig = process.env.NODE_ENV === "development" ? dev : pro;
module.exports = merge(common, sysConfig);
