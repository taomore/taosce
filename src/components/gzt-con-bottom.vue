<template>
    <div class="content">
        <!-- 内容发布数  评论数  留言数  会员注册数 -->
        <Row :gutter="16">
            <Col :sm="24" :md="12" :xl="6" class="row" v-for="(item,index) in list" :key="index">
                <div class="box">
                    <div :class="['fl','left',{'green':index==0,'yellow':index==1,'sky':index==2,'purple':index==3}]">
                        <Icon :type=item.type class="icon" />
                        <p class="tit">{{item.tit}}</p>
                    </div>
                    <div class="fr right">
                        <p class="p1">
                            今日
                            <span class="count-num">{{item.num1}}</span>
                            &nbsp;
                            <span class="up-num">{{item.num2}}</span>
                        </p>
                        <p class="p2">累计：
                            <span class="all-count">{{item.num3}}</span>
                        </p>
                    </div>
                </div>
            </Col>
        </Row>
        <!-- chart 图表 -->
        <Row :gutter="16">
            <Col :sm="24" :md="12" class="row">
            <div class="h358">
                    <div class="part-header">
                        <span>趋势分析</span>
                        <a href="javascript:;"><Icon type="ios-more" class="more" /></a>
                    </div>
                    <div class="part-body">
                        <div id="chart1" class="chart" ref="chart1"></div>
                    </div>
            </div>
            </Col>
            <Col :sm="24" :md="12" class="row">
                <div class="h358">
                    <div class="part-header">
                        <span>来源分析</span>
                        <a href="javascript:;"><Icon type="ios-more" class="more" /></a>
                    </div>
                    <div class="part-body">
                        <div id="chart2" class="chart" ref="chart2"></div>
                    </div>
                </div>
            </Col>
        </Row>
        <!-- table 表格 -->
        <Row :gutter="16">
            <Col :sm="24" :md="12" class="row">
                <div class="h440">
                    <div class="part-header">
                        <span>搜索词 Top 10</span>
                        <a href="javascript:;"><Icon type="ios-more" class="more" /></a>
                    </div>
                    <div class="part-body">
                        <table>
                            <tr><th v-for="(item,index) in table1" 
                            :key="index"
                            :class="index==0?'text-fl':'text-fr'"
                            >{{item}}</th></tr>
                        </table>
                    </div>
                </div>
            </Col>
            <Col :sm="24" :md="12" class="row">
                <div class="h440">
                    <div class="part-header">
                        <span>来访域名 Top 10</span>
                        <a href="javascript:;"><Icon type="ios-more" class="more" /></a>
                    </div>
                    <div class="part-body">
                        <table>
                            <tr>
                                <th v-for="(item,index) in table2" 
                                :key="index"
                                :class="index==0?'text-fl':'text-fr'"
                                >{{item}}</th>
                            </tr>
                            <tr  v-for="(item,index) in data2" 
                                :key="index">
                                <td class="text-fl">{{item.dns}}</td>
                                <td class="text-fr">{{item.pv}}</td>
                                <td class="text-fr">{{item.duty}}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </Col>
        </Row>
        <!-- 版权 -->
        <div class="info">
            <span class="s_info">当前系统版本:&nbsp;&nbsp;jeecms v9.3.2</span>
            <span>上次登录时间:&nbsp;&nbsp;2019-05-10 13:46:30</span>
            <span> 已用内存:&nbsp;&nbsp;1456.55MB </span>
            <span>剩余内存:&nbsp;&nbsp;2074.44MB</span>
            <span>最大内存:&nbsp;&nbsp;3531MB</span>
        </div>
    </div>
</template>
<script>
var echarts = require('echarts')

export default {
    name:"gzt-con-bottom",
    data(){
        return{
            list:[
              {
                type:"md-list-box",
                tit:"内容发布数",
                num1:0,
                num2:"(0)",
                num3:135
                
              },
              {
                type:"ios-text",
                tit:"评论数",
                num1:3,
                num2:"(3)",
                num3:1560
              },
              {
                type:"md-clipboard",
                tit:"留言数",
                num1:0,
                num2:"(0)",
                num3:499
              },
              {
                type:"md-person-add",
                tit:"会员注册数",
                num1:0,
                num3:1693
              }
            ],
            table1: ['搜索词','浏览量(PV)','占比',],
            table2: ['来访域名','浏览量(PV)','占比',],        
            data2: [
                {
                    dns: 'http://demo.jeecms.com',
                    pv: 2389,
                    duty: '68.4%'
                },
                {
                    dns: 'http://www.jeecms.com	',
                    pv: 816,
                    duty: '23.4%'
                },
                {
                    dns: '../../..',
                    pv: 258,
                    duty: '7.4%'
                },
                {
                    dns: 'http://demo2.jeecms.com',
                    pv: 16,
                    duty: '0.5%'
                },
                {
                    dns: 'https://www.oschina.net',
                    pv: 6,
                    duty: '0.2%'
                },
                {
                    dns: 'Http://testasp.vulnweb.com',
                    pv: 3,
                    duty: '0.1%'
                },
                {
                    dns: 'http://localhost:8080',
                    pv: 2,
                    duty: '0.1%'
                },
                {
                    dns: 'http://down.cnzz.cn',
                    pv: 1,
                    duty: '0.0%'
                },
                {
                    dns: 'http://127.0.0.1:8020',
                    pv: 1,
                    duty: '0.0%'
                },
                {
                    dns: 'http://hitlKTJu0B8SN.bxss.me',
                    pv: 1,
                    duty: '0.0%'
                }
            ]
        }
    },
    mounted(){
        // this.chart();
        // this.init();
        setTimeout( ()=> {
            this.chart();
        }, 200)
    },
    methods:{
        // init(){
        //     setTimeout(() => {
        //         window.addEventListener('resize', () => {
        //             chart1.resize();
        //             chart2.resize();
        //         }, 20)
        //     })
        // },
        chart(){
            var chart1 = echarts.init(document.getElementById('chart1'));
            chart1.setOption({
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data:['pv统计','ip统计','独立访客统计']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    axisLabel:{
                        interval:3
                    },
                    data: ['00:00-00:59','01:00-01:59','02:00-02:59','03:00-03:59','04:00-04:59','05:00-05:59','06:00-06:59',
                    '07:00-07:59','08:00-08:59','09:00-09:59','10:00-10:59','11:00-11:59','12:00-12:59','13:00-13:59','14:00-14:59',
                    '16:00-16:59','17:00-17:59','18:00-18:59','19:00-19:59','20:00-20:59','21:00-21:59','22:00-22:59','23:00-23:59']
                },
                yAxis: {
                    type: 'value',
                    splitNumber:8
                },
                series: [
                    {
                        name:'pv统计',
                        type:'line',
                        stack: '总量',
                        smooth: true,
                        data:[10,2,4,1,5,2,2,33,22,10,21,14,11,15,12,22,14,14,11]
                    },
                    {
                        name:'ip统计',
                        type:'line',
                        stack: '总量',
                        smooth: true,
                        data:[1,2,2,1,5,2,3,13,15,4,1,1,2,4,5,2,14,11,16]
                    },
                    {
                        name:'独立访客统计',
                        type:'line',
                        stack: '总量',
                        smooth: true,
                        data:[4,1,1,2,4,5,2,14,11,4,1,1,2,4,5,2,14,11,2,14]
                    }
                ]
            })
            var chart2 = echarts.init(document.getElementById('chart2'));
            chart2.setOption({
                color: ['#56dea0', '#ffbe60', '#fa99cb', '#46d7e8', '#86c0e9', '#56dea0'],
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'right',
                    data:['外部链接','直接访问','direct access','external link','搜索引擎','engine']
                },
                series: [
                    {
                        name:'来源分析',
                        type:'pie',
                        selectedMode: 'single',
                        // radius: [0, '30%'],
                        radius : '90%',
                        center: ['55%','55%'],
                        label: {
                            normal: {
                                position: 'inner'
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        }
                    },
                    {
                        name:'来源分析',
                        type:'pie',
                        radius: ['40%', '55%'],
                        data:[
                            {value:36627, name:'外部链接'},
                            {value:4821, name:'直接访问'},
                            {value:2169, name:'direct access'},
                            {value:1635, name:'external link'},
                            {value:828, name:'搜索引擎'},
                            {value:71, name:'engine'}
                        ]
                    }
                ]
            })
            window.addEventListener('resize', () => {
                chart1.resize();
                chart2.resize();
            }) 
        }
    }
       
}
</script>
<style scoped>
.content{
    position: relative;
    min-height: 419px;
}
/* 内容发布数  评论数  留言数 会员注册数*/
.ivu-row{
    margin-left: -12px !important;
    margin-right: -12px !important;
}
.row{
    padding-left: 12px !important;
    padding-right: 12px !important;
    margin-bottom: 24px;
}
.box{
    background: #fff;
    height: 112px;
}
.left{
    text-align: center;
    padding-top: 22px;
    width: 35%;
    height: 100%;
}
.green{
    background: #17d57e;
}
.yellow{
    background: #fec92b;
}
.sky{
    background: #2da3fb;
}
.purple{
    background: #c172d8;
}
.right{
    width: 65%;
    padding: 24px;
}
.icon{
    font-size: 40px;
    color: #fff;
    text-align: center;
}
.tit{
    color: #fff;
    font-size: 14px;
    text-align: center;
    margin-top: 10px;
}
.p1{
    color: #5a5e66;
    font-size: 14px;
}
.count-num{
    font-size: 18px;
    position: relative;
    top: 2px;
    margin-right: 4px;
    color: #353535;
}
.up-num{
    font-size: 14px;
    color: #ff724c;
}
.p2{
    font-size: 14px;
    color: #999;
    margin-top: 24px;
}
/* chart 图表 */
.h358{
    height: 358px;
    background: #fff;
}
.part-header{
    height: 50px;
    font-size: 16px;
    line-height: 50px;
    padding: 0 16px 0 24px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
a{
    color: #999;
}
.more{
    font-size: 24px;
    font-weight: 900;
}
.part-body{
    background: #fff;
    height: 308px;
    padding: 0 24px;
}
.chart{
    width: 100%;
    height: 100%;
}
/* table 表格 */
.h440{
    height: 440px;
    background: #fff;
    padding-bottom: 35px;
}
.more{
    font-size: 24px;
    font-weight: 900;
}
table{
    width: 100%;
}
th{
    color: #878d99;
    font-size: 12px;
    padding-bottom: 10px;
}
td{
    border-bottom: 1px dotted #e6ebf3;
    height: 32px;
    line-height: 32px;
    color: #5a5e66;
    font-size: 12px;
}
.text-fl{
    text-align: left;
}
.text-fr{
    text-align: right;
}
table tr:last-child td{
    border-bottom: none;
}
/* 版权 */
.info{
    font-size: 12px;
    color: #999;
    text-align: center;
    margin-top: 12px;
    margin-bottom: 12px;
}
.s_info{
    margin-right: 14px;
}
</style>
