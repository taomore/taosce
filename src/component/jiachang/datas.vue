<template>
    <div class="page1">
       <div class="content">
           <div class="i-content">
               <p>趋势分析(2019-05-10)</p>
               <div style="border-bottom:1px dashed #e7ecf3">
                   <div class="riqi">
                        日期:
                        <RadioGroup type="button" >
                            <Radio label="jinri"  type="primary">今日</Radio>
                            <Radio label="zuori">昨日</Radio>
                            <Radio label="benyue">本月</Radio>
                            <Radio label="jinnian">今年</Radio>
                        </RadioGroup>
                    </div>
                    <Row class="rili">
                            <DatePicker type="daterange" placement="bottom-end" placeholder="开始日期 至 结束日期" style="width: 300px"></DatePicker>
                    </Row>
                <div style="clear:both;height:0;overflow:hedden"></div>
               </div>
                <ul class="liulan">
                    <li>浏览量(pv)<span>32</span></li>
                    <li>独立访客数(uv)<span>14</span></li>
                    <li>ip数<span>15</span></li>
                </ul>
                
                <div id="main" style="width: 100%;height:400px;border-bottom:1px dashed #e7ecf3;marginBottom:10px;zIndex:0"></div>
                <div class="tabl">
                    <Row style="fontWeight:800">
                        <Col span="6">时段</Col>
                        <Col span="6">浏览量(PV)</Col>
                        <Col span="6">独立访客数(UV)</Col>
                        <Col span="6">IP数</Col>
                    </Row>
                    <Row>
                        <Col span="6">00:00-00:59</Col>
                        <Col span="6">3</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                    </Row>
                    <Row>
                        <Col span="6">01:00-01:59</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                    </Row>
                    <Row>
                        <Col span="6">02:00-02:59</Col>
                        <Col span="6">4</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                    </Row>
                    <Row>
                        <Col span="6">03:00-03:59</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                    </Row>
                    <Row>
                        <Col span="6">04:00-04:59</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                    </Row>
                    <Row>
                        <Col span="6">05:00-05:59</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                    </Row>
                    <Row>
                        <Col span="6">06:00-06:59</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                    </Row>
                    <Row>
                        <Col span="6">07:00-07:59</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                    </Row>
                    <Row>
                        <Col span="6">08:00-08:59</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                    </Row>
                    <Row>
                        <Col span="6">09:00-09:59</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                    </Row>
                    <Row>
                        <Col span="6">10:00-10:59</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                    </Row>
                    <Row>
                        <Col span="6">11:00-11:59</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                    </Row>
                    <Row>
                        <Col span="6">12:00-12:59</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                    </Row>
                    <Row>
                        <Col span="6">13:00-13:59</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                    </Row>
                    <Row>
                        <Col span="6">14:00-14:59</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                    </Row>
                    <Row>
                        <Col span="6">15:00-15:59</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                    </Row>
                    <Row>
                        <Col span="6">16:00-16:59</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                    </Row>
                    <Row>
                        <Col span="6">17:00-17:59</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                    </Row>
                    <Row>
                        <Col span="6">18:00-18:59</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                    </Row>
                    <Row>
                        <Col span="6">19:00-19:59</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                    </Row>
                    <Row>
                        <Col span="6">20:00-20:59</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                    </Row>
                    <Row>
                        <Col span="6">21:00-21:59</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                    </Row>
                    <Row>
                        <Col span="6">22:00-22:59</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                    </Row>
                    <Row>
                        <Col span="6">23:00-23:59</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                        <Col span="6">0</Col>
                    </Row>
                </div>
                
           </div>

       </div>
    </div>
</template>     
<style scoped>
    .page1{
        background-color: #ebeff4;
        /* margin: 60px 0 0 240px; */
        /* padding: 0 25px 25px 25px; */
    }
    .daohang{
        display: flex;
        font-size: 14px;
        height: 50px;
    }
    .daohang li{
        margin-right: 8px;
        line-height: 50px;
    }
    .i-content{
        background-color: white;
        padding: 16px 24px;
        font-size: 14px;
        /* margin-bottom: 30px; */
    }
    .i-content p{
        font-size: 14px;
        color:#353535;
        font-weight: bold;
        margin-bottom: 15px;
    }
    .liulan{
        display: flex;
        margin-top: 30px;
    }
    .liulan li{
        min-width: 170px;
        font-size: 12px;
        display: flex;
        flex-direction: column;
    }
    .liulan li span{
        font-size: 22px;
        margin-top: 10px;
        margin-bottom: 15px;
    }
    .rili{
        float: left;
        margin-bottom: 20px;
    }
    .riqi{
        float: left;
        margin-right: 20px;
    }
    .tabl{
        font-size: 12px;
    }
    .ivu-col{
        margin-bottom: 20px;
    }
</style>
<script>
import echarts from 'echarts'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      data:new Data()
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('main'))
        // 绘制图表
        myChart.setOption({title: {
        text: ''
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['浏览量(pv)','独立访客数(uv)','ip数']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        data: ["00:00-00:59","01:00-01:59","02:00-02:59","03:00-03:59","04:00-04:59","05:00-05:59","06:00-06:59","07:00-07:59","08:00-08:59","09:00-09:59","10:00-10:59","11:00-11:59","12:00-12:59","13:00-13:59","14:00-14:59","15:00-15:59","16:00-16:59","17:00-17:59","18:00-18:59","19:00-19:59","20:00-20:59","21:00-21:59","22:00-22:59","23:00-23:59"]},
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'浏览量(pv)',
            smooth:true,
            type:'line',
            data:[5,1,0,0,0,0,0,0,2,3,2,0,0,0,0,0,0,0,0,0,0,3,2,0]
        },
        {
            name:'独立访客数(uv)',
            smooth:true,
            type:'line',
            data:[3,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]
        },
        {
            name:'ip数',
            smooth:true,
            type:'line',
            data:[2,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]
        }
    ]
}
        )}
        }
    }
</script>
