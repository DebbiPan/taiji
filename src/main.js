let html = document.querySelector('#demo');
// let html = document.querySelector("#demo .content"); //通过css选择器找到demo元素，qs
let style = document.querySelector("#style");
// let n = 0;
// demo.innerHTML = n;
// let step = () => {
//     console.log('一秒钟之后响应n+1')
//     setTimeout(() =>{
//         n = n + 1;
//         demo.innerHTML = n;
//         if(n<=10){
//             step();
//         }else{}
//         step();
//     },1000)
// }
// step(); 
//通过setTime模拟了setInterval,但是setTimeout控制结束

//setInterval每三秒钟执行一次


// let string = '你好，我是一名前端新人';
// let n = 0;
// demo.innerHTML = string[n];

// let step = () => {
//     setTimeout(() =>{
//         if( n +1 >= string.length){
//             return;
//         }
//         n = n + 1; //导致超出出现undefined，解决方案在if里面加上n+1
//         demo.innerHTML = string[n];
//         step();
//     },1000);
// }
// step();

let string = `
/*你好，我叫嘟嘟
 * 接下来我要展示一下我的前端功底
 * 首先我要准备一个div
 */
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/*接下来我把div变成一个八卦图
 * 注意看好了
 * 首先，把div变成一个圆
 */
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*八卦是阴阳形成
 *一黑一白
 */
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*接下来让我们加两个风火轮吧*/
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
    border-radius:50%;
}

#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
    border-radius:50%;
}
`;//用来保存展示的结果
let string2 = ""; //用来缓存要显示的结果
let n = 0 ;  
// string = string.replace(/\n/g,'</br>') //只会把第一个回车转换为换行,这是加上正则表达式 / /g,此时所有回车都会转换为换行

let step = () => {
    setTimeout(() =>{
        if(string[n] ==="\n"){
            string2 += "<br>"
        } else if(string[n] === " "){
            string2 += "&nbsp"; //将空格在页面中显示出来
        }else{
            string2 +=string[n];
        }
        //如果是回车，就不照搬；如果不是回车就照搬
        html.innerHTML = string2;
        style.innerHTML = string.substring(0,n);
        // demo.innerHTML = string.substring(0,n);
        window.scrollTo(0,99999)
        html.scrollTo(0,99999)//讓手機也能下滑
        // demo.scrollTo(0, html.offsetHeight)
        if( n < string.length - 1){
             //如果n不是最后一个，就继续
            n+=1 
            step();
        } //判断是不是到达临界点
    },10);
}
step();


