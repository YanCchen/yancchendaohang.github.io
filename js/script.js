// 整页滚动 核心
const container = document.querySelector(".container");
const lis = document.querySelectorAll(".controls li");
const viewHeight = document.body.clientHeight;
var index = 0;
// 滚轮
document.addEventListener("mousewheel", function (e) {
  if (e.wheelDelta === 120) {
    index--;
    if (index < 0) {
      index = 0;
    }
  }
  if (e.wheelDelta === -120) {
    index++;
    if (index > lis.length - 1) {
      index = lis.length - 1;
    }
  }
  container.style.top = -index * viewHeight + "px";
  for (var j = 0; j < lis.length; j++) {
    lis[j].className = "";
  }
  lis[index].className = "active";
});

// 右下点
for (var i = 0; i < lis.length; i++) {
  lis[i].tag = i;
  lis[i].onclick = function () {
    for (var j = 0; j < lis.length; j++) {
      lis[j].className = "";
    }
    lis[this.tag].className = "active";
    index = this.tag;
    container.style.top = -this.tag * viewHeight + "px";
  };
}
// /整页滚动 核心
