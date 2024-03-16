/*
 * @Author: chenhuang
 * @Date: 2024-03-15 13:40:51
 * @Description:
 */
import city from "~/asset/image/city.jpg";
import "~/css/app.css";
import "~/css/app.scss";
import "~/asset/font/iconfont.css";

// 文字
const titleCreater = document.createElement("h1");
titleCreater.innerHTML = "cli cli ok!";
document.body.appendChild(titleCreater);

// scss
const contentCreater = document.createElement("div");
contentCreater.innerText = "where your dream?";
contentCreater.className = "app_dream app_dream_by_sass";
document.body.appendChild(contentCreater);

// font
const fontCreater = document.createElement("i");
fontCreater.className = "iconfont icon-xing";
document.body.appendChild(fontCreater);

// image
const imgCreater = document.createElement("img");
imgCreater.src = city;
imgCreater.style = {
  width: "200px",
  height: "200px",
};
document.body.appendChild(imgCreater);
