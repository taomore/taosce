<template>
       <div class="biggest">
           <div class="biggest_bottom">
                <div class="biggest_bottom_left">
                     <div class="change">
                         <p><Icon type="md-repeat" />刷新</p>
                         <p class="pSpan01">复制栏目</p>
                     </div>
                     <li><router-link to="/index/total/root" tag="div"><Icon class="icon03" id="btn01" type="ios-remove"/>&nbsp;&nbsp;根目录</router-link></li>
                         <div id="box1">
                     <li><router-link to="/index/total/root" tag="div"><img src="../assets/img/p03.png"/>&nbsp;&nbsp;新闻</router-link></li>
                     <li><router-link to="/index/total/root" tag="div"><Icon class="icon02" id="btn02" type="ios-add" />&nbsp;&nbsp;下载</router-link></li>
                          <div id="box2">
                     <li><router-link to="/index/total/root" tag="div"><img src="../assets/img/p03.png"/>&nbsp;&nbsp;系统软件</router-link></li>
                     <li><router-link to="/index/total/root" tag="div"><img src="../assets/img/p03.png"/>&nbsp;&nbsp;精品推荐</router-link></li>
                     <li><router-link to="/index/total/root" tag="div"><img src="../assets/img/p03.png"/>&nbsp;&nbsp;媒体助手</router-link></li>
                     <li><router-link to="/index/total/root" tag="div"><img src="../assets/img/p03.png"/>&nbsp;&nbsp;游戏娱乐</router-link></li>        
                          </div>
                     <li><router-link to="/index/total/root" tag="div"><img src="../assets/img/p03.png"/>&nbsp;&nbsp;视频</router-link></li>
                     <li><router-link to="/index/total/root" tag="div"><img src="../assets/img/p03.png"/>&nbsp;&nbsp;图库</router-link></li>
                     <li><router-link to="/index/total/root" tag="div"><img src="../assets/img/p03.png"/>&nbsp;&nbsp;招聘</router-link></li>
                     <li><router-link to="/index/total/root" tag="div"><img src="../assets/img/p03.png"/>&nbsp;&nbsp;文库</router-link></li>
                     <li><router-link to="/index/total/root" tag="div"><img src="../assets/img/p03.png"/>&nbsp;&nbsp;留言板</router-link></li>
                     <li><router-link to="/index/total/root" tag="div"><img src="../assets/img/p03.png"/>&nbsp;&nbsp;网络调查</router-link></li>
                     <li class="liDom"><img src="../assets/img/p03.png"/>&nbsp;&nbsp;智能表单</li>
                         </div>
                </div>
                <div class="biggest_bottom_right">
                    <router-view></router-view>
                </div>
           </div>
       </div>
</template>
<script>
export default {
   name:"total" ,
//    mounted(){
//        $("#btn01").click(function(){
//              $("#box1").slideToggle("slow");
//         })
//         $("#btn02").click(function(){
//              $("#box2").slideToggle("slow");
//         })
//    } 
}
</script>
<style>
body,p,dl,dd,ul,ol,li,div,h1,h2,h3,h4,h5,h6,form,input,table,tr,td{
	margin:0;
	padding:0;}
a{
    text-decoration:none;}
body{
	font-family: "微软雅黑",Arial;
}
ul,ol,li{
	list-style:none;
}
img{
	border: 0;
}
.biggest{
    /* margin-top:60px;
    margin-left:220px; */
    /* padding:0px 30px; */
    background:#e6e6ed;
}
.biggest p{
  padding:20px 0;
  font-size:18px;
  color:#6c6666;
}
p .icon01{
   color:#383fc8;
   font-weight:800;
}
.biggest p span{
    font-size:14px;
}
.biggest p img{
    padding:0 10px;
}
.biggest_bottom{
    background:#fff;
    display:flex;
}
.biggest_bottom_left{
    width:200px;
    background:#fff;
    border-right:1px solid #a6a6b0;
}
.biggest_bottom_left  .change{
    display:flex;
    justify-content: space-around;
}
.change p{
   font-size:14px;
}
.icon03{
    font-size:14px;
    border:1px solid #dbdbe2;
    margin-left:20px;
}
.icon02{
    border:1px solid #dbdbe2;
     margin-left:40px;
}
.biggest_bottom_left li{
    font-size:16px;
    line-height:30px;
}
.biggest_bottom_left li img{
    padding-left:40px;
}
.pSpan01{
    color:blue;
}
.biggest_bottom_left li:hover{
    background:#e6e6ed;
}
#box2 li{
    padding-left:20px;
}
#box1 .liDom{
    margin-bottom:50px;
}
</style>
