//引入utils.js中的printlog函数
import { printlog } from "./utils.js";

let timeElement = document.querySelector("#time");
//将其转换成现在时间
timeElement.innerHTML = new Date().toLocaleString();

//事件监听
document.querySelector("#btn").addEventListener("click", function () {
  alert("按钮被点击了！");
});