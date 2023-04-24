// 给底层元素设置文档高度，解决浮动无法撑起元素得高度问题，导致无法全面覆盖背景颜色问题
var basis = document.getElementById("basis");
basis.style.height = (document.documentElement.scrollHeight || document.body.scrollHeight) + "px";

// 顶部导航栏及置顶按钮显示隐藏控制：根据滚动条高度来控制显示和隐藏
// 获取顶部导航栏对象-供下面箭头监听事件引用
const topNav = document.querySelector(".nav_bar");
function topNavShow() {
    // 获取置顶按钮对象
    const btnTop = document.getElementById("upTop");
    // 滚动监听事件
    window.addEventListener("scroll", function () {
        // 顶部导航显示判断
        if (window.scrollY <= window.innerHeight - 80) {
            topNav.classList.add("noshow");
        } else {
            topNav.classList.remove("noshow");
        }
        // 判断滚动距离大于视口高度时，才显示置顶按钮
        // console.log("滚动条距离：" + window.pageYOffset + "      " + "窗口高度：" + window.innerHeight);
        if (window.pageYOffset > window.innerHeight) {
            btnTop.classList.add("yc");
        } else {
            btnTop.classList.remove("yc");
        }
    });
}
// 启动顶部导航栏 + 置顶按钮显示隐藏、内容项上移的JS控制方法
topNavShow();
// ———————————————————————————————————————————————————————————————————

//置顶按钮上滚下滚控制显示样式的方法
function Uptop_wheel() {
    var btnTop = document.getElementById("s-top");
    // 添加滚轮上线滚动监听事件
    window.addEventListener("wheel", function (e) {
        if (e.wheelDelta > 0) {
            // console.log("上滚显示");
            btnTop.classList.remove("upTop_down");
        } else {
            // console.log("下滚隐藏");
            btnTop.classList.add("upTop_down");
        }
    });
}
//启动滚轮上下滚控制置顶按钮样式的监听事件；
Uptop_wheel();
// ————————————————————————————————————————————————————————————————————

function arrow() {
    // 此处注意-79的原因，因为给滚动条赋值相当于也是执行滚动事件，上面的滚动事件会对顶部导航栏做显示的范围控制，所以此处只需控制滚动距离即可
    const hg=window.innerHeight - 79;
    // 此处赋值之所以会失败，是因为全局函数会直接进调用栈执行，而滚动事件要在先去队里排队，导致滚动事件时后执行，反而把下面的样式又给覆盖了
    // toplist.classList.remove("noshow");
    //指定滚动条平滑滚动到指定位置
    window.scrollTo({
        top: hg,
        behavior: 'smooth'
      });
}

// 指定按钮触发事件置顶方法
function uptop() {
    const hg=window.innerHeight - 79;
    // window.scrollTo()方法，滚动条平滑滚动，top为滚动条到顶部的距离，smooth平滑滚动；会触发滚动监听事件；
    window.scrollTo({
        top: hg,
        behavior: 'smooth'
      });
      
}
