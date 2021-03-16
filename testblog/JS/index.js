let banner = document.querySelector('.banner')
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let content = document.querySelectorAll('.banner-content');
let index = 0;
let mid = document.querySelectorAll('.banner-mid>li')
let img = document.querySelector('.banner-content>img')
//点击下一个
function forNext(){
    content[index].style.opacity = 0;
    index++;
    if (index === content.length){
        index = 0;
    }
    content[index].style.opacity = 1;
    changeMid();
}
next.onclick = forNext;//不要加（）括号表示立即调用(执行)这个函数里面的代码。不加括号传参，相当于传入函整体。

//点检上一个
prev.onclick = function (){
    content[index].style.opacity = 0;
    index--;
    if (index === -1){
        index = content.length-1;
    }
    content[index].style.opacity = 1;
    changeMid();
}

//中间按钮颜色改变
function changeMid(){
    for (let i=0;i<mid.length;i++){
        mid[i].style.backgroundColor = '#fff';
    }
    mid[index].style.backgroundColor = '#007aff';
}

//定时器
let timer = setInterval(forNext,2000);
//要执行的代码和以毫秒表示的时间。其中，第一个参数可以是一个字符串（和eval()中使用的字符串一样），也可以是一个函数。
//鼠标移入停止
banner.onmouseover = function (){
    clearInterval(timer);
}
//鼠标移出继续
banner.onmouseout = function (){
    timer = setInterval(forNext,2000);
}

//为每个中间按钮添加点击事件
//为mid里li编号
for (let i=0;i<mid.length;i++){
    mid[i].num = i;
}
for (let i=0;i<mid.length;i++){
    mid[i].onclick = function (){
        content[index].style.opacity = 0;
        index = this.num;
        content[index].style.opacity = 1;
        changeMid();
    }
}

//调整轮播图高度
window.onresize = function (){
    // console.log(img.height,banner.style.height);
    banner.style.height = img.height+'px';//记得加“px“
}


//点击微信分享
let btn_wx = document.querySelector('.muted.weixin');
let share_wx = document.querySelector('.share_wx');
let closebtn = document.querySelector('.share_wx .close');
//toggle 切换元素的可见状态
btn_wx.addEventListener('click',() => {
        share_wx.classList.toggle('act');
    }
);
// console.log(closebtn,btn_wx);
closebtn.addEventListener('click',() => {
        share_wx.classList.toggle('act');
    }
);



//小尺寸菜单按钮
let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav');
let navliItems = document.querySelectorAll('.nav>li');
// console.log(navliItems);

burger.addEventListener("click",function () {
    burger.classList.toggle("active");
    nav.classList.toggle("open");
    //循环遍历li来设置侧移动画
    navliItems.forEach(function (item,index) {
        //有animation属性就去掉 没有就添加
        if (item.style.animation) {
            item.style.animation = "";
        } else {
            item.style.animation = '0.3s ease-in slideIn forwards '+(index*0.1+0.4)+'s';//因为设置了展开菜单过渡时间为0.4s
        }
    })
})

























