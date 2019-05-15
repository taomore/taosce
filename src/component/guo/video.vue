<template>
      <div class="biggest_bottom_right  speRight">
            <div class="box3">
                 <span><Icon type="md-add" />添加子栏目</span>
                 <img src="../assets/img/p02.png"/>
            </div>
            <div class="box4">
                 <div class="left2">
                     <p>上级栏目</p>
                     <Input v-model="value12" style="width:300px" placeholder="根栏目">
                     <Select v-model="select2" slot="append" style="width: 40px">
                     <Option value="com">根栏目</Option>
                     <Option value="org">下载</Option>
                     <Option value="io">视频</Option>
                     <Option value="io">视频</Option>
                     <Option value="io">视频</Option>
                     <Option value="io">视频</Option>
                     </Select>
                     </Input>
                 </div>
                 <div class="right2">
                     <p>栏目模型</p>
                     <Input v-model="value12" style="width:300px" placeholder="新闻" disabled>
                     <Select v-model="select2" slot="append" style="width: 40px">
                     <Option value="com">根栏目</Option>
                     <Option value="org">下载</Option>
                     <Option value="io">视频</Option>
                     <Option value="io">视频</Option>
                     <Option value="io">视频</Option>
                     <Option value="io">视频</Option>
                     </Select>
                     </Input>
                 </div>
            </div>
            <div class="box5">
                     <div class="box5_left">
                     <img src="../assets/img/p05.png">
                     <p>栏目名称</p>
                      <Input v-model="value"  placeholder="视频" style="width: 300px" />
                     </div>
                     <div class="box5_right">
                     <img src="../assets/img/p05.png">
                     <p>访问路径</p>
                      <Input v-model="value" placeholder="news" style="width: 300px" />
                     </div>
            </div>
            <div class="box5">
                     <div class="box5_left">
                     <img src="../assets/img/p05.png">
                     <p>meta标题</p>
                      <Input v-model="value"   style="width:600px" />
                     </div>
            </div>
            <div class="box5">
                     <div class="box5_left">
                     <p>meta关键字</p>
                      <Input v-model="value"   style="width:300px" />
                     </div>
            </div>
            <div class="box5">
                     <div class="box5_left">
                     <p>meta描述</p>
                       <Input class="box5Spe" v-model="value5" type="textarea" style="width:600px;" />
                     </div>
            </div>
            <div class="box5">
                     <div class="box5_left">
                     <p>栏目模板</p>
                       <Select v-model="model1" style="width:300px">
                       <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                     </div>
                     <div class="box5_right">
                     <p>栏目手机模板</p>
                       <Select v-model="model1" style="width:300px">
                      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                      </Select>
                     </div>
            </div>
            <div class="box6">
                     <p>选择模型模板</p>
                     <div class="button1">
                     <Button  type="primary" @click="modal1 = true">选择模型模板</Button>
                     <h4>留空则继承上级栏目设置,顶层为空则所有可用模型</h4>
                     </div>
                      <Modal
                      v-model="modal1"
                        title="Common Modal dialog box title"
                       @on-ok="ok"
                       @on-cancel="cancel">
                       <p>Content of dialog</p>
                      <p>Content of dialog</p>
                     <p>Content of dialog</p>
                     </Modal>
            </div>
            <div class="box7">
                     <li>栏目静态化</li>
                     <li><Checkbox v-model="single"></Checkbox>开启</li>
                     <li><Checkbox v-model="single"></Checkbox>使用目录访问</li>
                     <li><Checkbox v-model="single"></Checkbox>子栏目列表</li>
                     <li>每页记录数&nbsp;<input type="text" placeholder="10" style="width:50px;height:30px;border-radius:4px;border:1px solid #a6a6b0"/></li>
            </div>
            <div class="box7">
                     <li>内容静态化</li>
                     <li><Checkbox v-model="single"></Checkbox>开启</li>
            </div>
            <div class="box8">
                     <li>排列顺序</li>
                      <li><input type="text" placeholder="1" style="width：200px;border-radius:4px;height:30px;border:1px solid #a6a6b0"/></li>
                       <li>显示 <RadioGroup v-model="animal">
                                <Radio label="是" checked></Radio>
                                <Radio label="否"></Radio>
                                 </RadioGroup></li>
                        <li><Checkbox v-model="single"></Checkbox>是否打开新窗口</li>
            </div>
             <div class="box7">
                     <li>文档图片</li>
                     <li><Checkbox v-model="single"></Checkbox>开启文档标题图</li>
                     <li><Checkbox v-model="single"></Checkbox>开启文档内容图</li>
            </div>
            <div class="box9">
                     <p>评论</p>
                     <div class="box9_left">
                               <RadioGroup v-model="animal">
                                <Radio  class="distance" label="游客模式"></Radio>
                                <Radio class="distance" label="登录评论一次"></Radio>
                                 <Radio class="distance" label="登录评论多次"></Radio>
                                 <Radio class="distance" label="关闭评论"></Radio>
                                  </RadioGroup>
                     </div>
                     <div class="box9_right">
                            <li>顶踩&nbsp;&nbsp;&nbsp;<RadioGroup v-model="animal">
                                <Radio class="distance" label="游客模式"></Radio>
                                <Radio class="distance" label="登录评论一次"></Radio>
                                 </RadioGroup></li>
                     </div>
            </div>
            <div class="box9">
                     <p>浏览权限</p>
                     <div class="box9_left box9_left2">
                            <li><Checkbox v-model="single"></Checkbox>普通会员</li>
                            <li><Checkbox v-model="single"></Checkbox>高级组</li>
                            <li><Checkbox v-model="single"></Checkbox>vip</li>
                     </div>
                     <p>投稿权限</p>
                     <div class="box9_right box9_right2">
                          <li><Checkbox v-model="single"></Checkbox>普通会员</li>
                          <li><Checkbox v-model="single"></Checkbox>高级组</li>
                          <li><Checkbox v-model="single"></Checkbox>vip</li>
                     </div>
            </div>
            <div class="box5">
                     <div class="box5_left">
                     <p>外部链接</p>
                      <Input v-model="value"   style="width:600px" />
                     </div>
            </div>
            <div class="box10">
                   <p>标题图</p>
                   <span><Icon type="md-add" /></span>
            </div>
             <div class="box10">
                   <p>内容图</p>
                   <span><Icon type="md-add" /></span>
            </div>
            <div class="box9">
                     <p>分享</p>
                     <div class="box9_left">
                               <RadioGroup v-model="animal">
                                <Radio  class="distance" label="允许"></Radio>
                                <Radio class="distance" label="不允许"></Radio>
                                  </RadioGroup>
                     </div>
                     <div class="box9_right">
                            <li>评分&nbsp;&nbsp;&nbsp;<RadioGroup v-model="animal">
                                <Radio class="distance" label="允许"></Radio>
                                <Radio class="distance" label="不允许"></Radio>
                                 </RadioGroup></li>
                     </div>
            </div>
            <div class="box5 box5_special">
                     <div class="box5_left">
                     <p>审核后</p>
                       <Select v-model="model1" style="width:300px">
                       <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                     </div>
                     <div class="box5_right">
                     <p>工作流</p>
                       <Select v-model="model1" style="width:300px">
                      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                      </Select>
                     </div>
            </div>
            <button id="button3">修改</button>
            <button id="button4">重置</button>
           
      </div>
</template>
<script>
export default {
    data () {
            return {              
                value12: '',
                select2: 'com',
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                modal1: false
            } 
   },
   methods: {
            ok () {
                this.$Message.info('Clicked ok');
            },
            cancel () {
                this.$Message.info('Clicked cancel');
            }
        }
}
</script>
<style>
.speRight{
    padding-left:60px;
}
.box3{
    display:flex;
    justify-content: space-between;
}
.box3 span{
    display:inline-block;
    color:#fff;
    width:120px;
    height:35px;
    line-height: 35px;
    text-align: center;
    background:#58b2f8;
    font-size: 14px;
    border-radius: 6px;
    margin-top:15px;
}
.left2 p{
    font-size:14px;
    margin-right:20px;
}
.box4{
    display: flex;
    justify-content: space-between;
    border-bottom:1px dotted  #a6a6b0;
}
.box4 .left2{
    display:flex;
    align-items: center;
}
.right2 p{
    margin-right:20px;
    font-size:14px;
}
.box4 .right2{
    display:flex;
    align-items: center;
}
.ivu-select-selected-value{
    display:none!important;
}
.box5{
    display:flex;
    justify-content: space-between;
     border-bottom:1px dotted  #a6a6b0;
}
.box5_left{
    display:flex;
    align-items: center;
}
.box5_right{
    display:flex;
    align-items: center;
}

.box5_left img{
    width:8px;
    height:8px;
}
.box5_left p{
    font-size:14px;
    margin-right:20px;
}
.box5_right img{
    width:8px;
    height:8px;
}
.box5_right p{
    margin-right:20px;
    font-size:14px;
}
.box5 .box5Spe{
    margin:20px 0;
}
.box6{
    overflow: hidden;
     border-bottom:1px dotted  #a6a6b0;
}
.box6 p{
    font-size:14px;
    float:left;
}
.box6 .button1{
    float:left;
}
.ivu-btn{
    margin-top:20px;
    margin-bottom:0px!important;
}
.box6 h4{
    text-indent: 30px;  
    margin-bottom:15px;
}
.box7{
     border-bottom:1px dotted  #a6a6b0;
}
.box7 li{
    display:inline-block;
    margin-right:30px;
    margin-top:20px;
    margin-bottom:20px;
}
.box8{
     border-bottom:1px dotted  #a6a6b0;
}
.box8 li{
    display:inline-block;
    margin-right:50px;
    margin-top:20px;
    margin-bottom:20px;
}
.box9{
    display:flex;
    align-items: center;
     border-bottom:1px dotted  #a6a6b0;
}
.box9 p{
    font-size:14px;
    margin-right:20px;
}
.box9 .box9_left{
    width:35%;
    margin-right:170px;
}
.box9 .box9_right{
    width:35%;
}
.box9 .distance{
     margin-right:30px;
}
.box9 li{
      display:inline-block;
      margin-right:10px;
      margin-top:20px;
      margin-bottom:20px;
}
.box9 .box9_left2{
    width:35%;
    margin-right:30px;
}
.box9 .box9_right2{
    width:35%;
}
.box10{
    border-bottom:1px dotted  #a6a6b0;
}
.box10 p{
    float:left;
    font-size:14px;
    margin-right:20px;
}
.box10 span{
    display:inline-block;
    width:130px;
    height:130px;
    border:1px dotted #a6a6b0;
    font-size:40px;
    text-align:center;
    line-height: 130px;
    margin:15px 0;
}
.box5_special{
    border:none;
    margin-bottom:20px;
}
#button3{
    background:#0ec1dc;
    width:80px;
    height:30px;
    line-height: 30px;
    font-size:14px;
    color:#fff;
    text-align: center;
    border:1px solid #0ec1dc;
    margin-right:10px;
    margin-left:30px;
    margin-bottom:20px;
    border-radius: 6px;
}
#button4{
     background:#a2a6a7;
     width:80px;
     color:#fff;
    font-size:14px;
    text-align: center;
    height:30px;
     line-height: 30px;
    border-radius: 6px;
    border:1px solid #a2a6a7;
}
</style>
