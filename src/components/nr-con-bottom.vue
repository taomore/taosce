<template>
    <div class="content">
        <div class="fl tree">
            <div class="reflash">
                <Icon type="md-sync" />
                <span>刷新</span>
            </div>
            <Tree :data="data1"></Tree>
        </div>
        <div class="fl middle">
            <!-- 添加内容 -->
            <div class="add">
                <Breadcrumb class="fl menu_add">
                    <span>当前栏目:</span>
                    <BreadcrumbItem to="/">根目录
                    </BreadcrumbItem>
                </Breadcrumb>
                <Button type="primary" class="addBtn">
                    <Icon type="md-add" size="16"/>
                    <span class="s_add">添加内容</span>
                </Button>
            </div>
            <div class="row">
                <!-- 固定 推荐 共享 -->
                <RadioGroup  type="button">
                    <Radio label="large">固定</Radio>
                    <Radio label="default">推荐</Radio>
                    <Radio label="small">共享</Radio>
                </RadioGroup>
                <Select v-model="model1" style="width:120px">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                <Select v-model="model2" style="width:120px">
                    <Option v-for="item in cityList2" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                <Select v-model="model3" style="width:120px">
                    <Option v-for="item in cityList3" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                <div class="fr">
                    <div class="seach_btn">
                        <label for="title">标题:</label>
                        <Input id="title" style="width: 120px;margin-left:3px;"  />
                    </div>
                    <div class="seach_btn">
                        <label for="author">发布者:</label>
                        <Input id="author" style="width: 120px;margin-left:3px;" />
                    </div>
                    <Button class="seach_btn">查询</Button>
                </div>
            </div>
            <!-- 表格 -->
            <Table stripe :columns="columns" :data="table" class="tab">
                <template slot-scope="{ row }" slot="num">
                    <strong><InputNumber v-model= row.num></InputNumber></strong>
                </template>
                <template slot-scope="{ row, index }" slot="action">
                    <Button type="success" size="small" style="margin-right: 5px" @click="show(index)"><Icon type="md-create" /></Button>
                    <Button type="warning" size="small" @click="remove(index)"><Icon type="md-close" /></Button>
                </template>
            </Table>
            <!-- 分页 -->
            <div class="row_page">
            <div class="fr right_page">
                <div class="fl page">
                    <span class="word">每页显示</span>
                    <Input v-model="page" placeholder="" style="width: 58px;margin:0 5px" />
                    <span class="word">条，输入后按回车键</span>
                </div>
                <Page :total="134" show-total class="fr"/>
            </div>
            </div>
            <div class="end_fixed">
                <Button class="btn">删除</Button>
                <Button class="btn">保存置顶</Button>
                <Button class="btn">推荐</Button>
                <Button class="btn">取消推荐</Button>
                <Button class="btn">移动</Button>
                <Button class="btn">复制</Button>
                <Button class="btn">审核</Button>
                <Button class="btn">退回</Button>
                <Button class="btn">提交</Button>
                <Button class="btn">生成静态页</Button>
                <Button class="btn">推送</Button>
                <Button class="btn">推送至专题</Button>
                <Button class="btn">归档</Button>
                <Button class="btn">出档</Button>
                <Button class="btn">群发微信</Button>
            </div>
        </div>
    </div>
</template>
<script>


export default {
    name:"nr-com-bottom",
    components:{
        
    },
    data(){
        return{
            page:10,
            model1: '所有类型',
            model2: '所有状态',
            model3: '固定降，发布降',
            cityList: [
                    {
                        value: '所有类型',
                        label: '所有类型'
                    },
                    {
                        value: '普通',
                        label: '普通'
                    },
                    {
                        value: '图文',
                        label: '图文'
                    },
                    {
                        value: '焦点',
                        label: '焦点'
                    },
                    {
                        value: '头条',
                        label: '头条'
                    }
                ],
            cityList2: [
                {
                    value: '本站内容',
                    label: '本站内容'
                },
                {
                    value: '草稿',
                    label: '草稿'
                },
                {
                    value: '审核中',
                    label: '审核中'
                },
                {
                    value: '审核通过',
                    label: '审核通过'
                },
                {
                    value: '退回',
                    label: '退回'
                },
                {
                    value: '归档',
                    label: '归档'
                }
            ],
            cityList3: [
                {
                    value: 'ID降序',
                    label: 'ID降序'
                },
                {
                    value: 'ID升序',
                    label: 'ID升序'
                },
                {
                    value: '发布时间降',
                    label: '发布时间降'
                },
                {
                    value: '发布时间升',
                    label: '发布时间升'
                },
                {
                    value: '固定降，发布降',
                    label: '固定降，发布降'
                },
                {
                    value: '固定降，发布升',
                    label: '固定降，发布升'
                },
                {
                    value: '日点击降',
                    label: '日点击降'
                },
                {
                    value: '周点击降',
                    label: '周点击降'
                },
                {
                    value: '月点击降',
                    label: '月点击降'
                },
                {
                    value: '总点击降',
                    label: '总点击降'
                },
                {
                    value: '日评论降',
                    label: '日评论降'
                },
                {
                    value: '周评论降',
                    label: '周评论降'
                },
                {
                    value: '月评论降',
                    label: '月评论降'
                },
                {
                    value: '总评论降',
                    label: '总评论降'
                }
            ],
            data1: [
                    {
                        title: '根目录',
                        expand: true,
                        render: (h, { root, node, data }) => {
                            return h('span', {
                                style: {
                                    display: 'inline-block',
                                    
                                    
                                }
                            }, [
                                h('span', [
                                    h('span', data.title)
                                ])
                            ]);
                        },
                        children: [
                            {
                                title: '新闻',
                                expand: true
                            },
                            {
                                title: '下载',
                                expand: true,
                                children: [
                                    {
                                        title: '系统软件',
                                        expand: true
                                    },
                                    {
                                        title: '精品推荐',
                                        expand: true
                                    },
                                    {
                                        title: '媒体助手',
                                        expand: true
                                    },
                                    {
                                        title: '游戏娱乐',
                                        expand: true
                                    }
                                ]
                            },
                            {
                                title: '视频',
                                expand: true
                            },
                            {
                                title: '图库',
                                expand: true
                            },
                            {
                                title: '招聘',
                                expand: true
                            },
                            {
                                title: '文库',
                                expand: true
                            }
                        ]
                    }
                ],
            columns: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'right'
                },
                {
                    title: 'id',
                    key: 'id'
                },
                {
                    title: '标题',
                    key: 'tit',
                    align: 'left',
                    
                },
                {
                    title: '置顶',
                    slot: 'num',
                    align: 'center',
                },
                {
                    title: '类型',
                    key: 'type'
                },
                {
                    title: '发布者',
                    key: 'author'
                },
                {
                    title: '点击',
                    key: 'hits'
                },
                {
                    title: '发布时间',
                    key: 'time'
                },
                {
                    title: '状态',
                    key: 'status'
                },
                {
                    title: '操作',
                    slot: 'action',
                    align: 'center'
                }
            ],
            table: [
                {
                    id: 132,
                    tit: ' 黄金接连下跌难道又等大妈来托盘',
                    num:10,
                    type:'焦点',
                    author:'admin',
                    hits:16589,
                    time:'2016-10-11 13:55:46',
                    status:'审核通过'
                },
                {
                    id: 131,
                    tit: '楼市调控应跳出周期性怪圈',
                    num:10,
                    type:'普通',
                    author:'admin',
                    hits:16589,
                    time:'2016-10-11 13:55:46',
                    status:'审核通过'
                },
               {
                    id: 131,
                    tit: ' 楼市调控应跳出周期性怪圈',
                    num:10,
                    type:'普通',
                    author:'admin',
                    hits:16589,
                    time:'2016-10-11 13:55:46',
                    status:'审核通过'
                },
                {
                    id: 130,
                    tit: ' 党中央推进民族工作创新发展纪实',
                    num:9,
                    type:'图文',
                    author:'admin',
                    hits:16589,
                    time:'2016-10-11 13:55:46',
                    status:'审核通过'
                },
                {
                    id: 112,
                    tit: ' c',
                    num:9,
                    type:'图文',
                    author:'admin',
                    hits:16589,
                    time:'2016-10-11 13:55:46',
                    status:'审核通过'
                },
                {
                    id: 39,
                    tit: '四川理塘县发生4.9级地震 震源深度19千米',
                    num:9,
                    type:'图文',
                    author:'admin',
                    hits:16589,
                    time:'2016-10-11 13:55:46',
                    status:'审核通过'
                },
                {
                    id: 37,
                    tit: '苹果研发神秘新设备：体积类似Apple TV 支持NFC蓝牙',
                    num:9,
                    type:'图文',
                    author:'admin',
                    hits:16589,
                    time:'2016-10-11 13:55:46',
                    status:'审核通过'
                },
                {
                    id: 33,
                    tit: '亚马逊股价首破800美元大关 市值稳居全球上市公司第四',
                    num:9,
                    type:'图文',
                    author:'admin',
                    hits:16589,
                    time:'2016-10-11 13:55:46',
                    status:'审核通过'
                },
                {
                    id: 32,
                    tit: '台北故宫将拆除成龙所捐12兽首复制品 成龙回应',
                    num:9,
                    type:'图文',
                    author:'admin',
                    hits:16589,
                    time:'2016-10-11 13:55:46',
                    status:'审核通过'
                },
                {
                    id: 27,
                    tit: '“一带一路”：习近平打开的“筑梦空间”',
                    num:9,
                    type:'图文',
                    author:'admin',
                    hits:1483,
                    time:'2016-10-11 13:55:46',
                    status:'审核通过'
                },
                {
                    id: 14,
                    tit: '习近平宁夏考察第一天：长征永远在路上',
                    num:9,
                    type:'图文',
                    author:'admin',
                    hits:2522,
                    time:'2016-10-11 13:55:46',
                    status:'审核通过'
                },
            ]
        }
       
    },
    methods: {
        show (index) {
            this.$Modal.info({
                title: 'User Info',
                content: `Id：${this.data6[index].id}<br>Name：${this.data6[index].name}<br>Num：${this.data6[index].num}`
            })
        },
        remove (index) {
            this.table.splice(index, 1);
        }
    }
}
</script>
<style scoped>
.content{
    position: relative;
    min-height: 542px;
    background: #fff;
    font-size: 14px;
}
.right_page{
    color: #8a8e98;
    font-size: 14px;
}
.page{
    margin-right: 35px;
}
.ivu-page >>>.ivu-page-item-active{
    background-color: #409eff !important;
}
.ivu-page >>>.ivu-page-item-active a, .ivu-page-item-active:hover a{
    color: #fff;
}
.btn{
    color: #999;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #999;
    font-size: 14px;
    margin-left: 2px;
}
.tree{
    position: absolute;
    min-height: 100%;
    width: 200px;
    background: #fff;
    border-right: 1px solid #d4dde2;
}
.middle{
    padding-left: 200px;
    width: 100%;
    background: #fff;
}
.ivu-tree{
    width: 199px;
    height: 100%;
    position: absolute;
    background: #fff;
}
.reflash{
    height: 50px;
    line-height: 50px;
    padding: 0 24px;
    font-size: 14px;
    color: #8a8e98;
    cursor: pointer;
}
.add{
    padding: 16px 24px;
    border-bottom: 1px dashed #e7ecf3;
}
.row{
    padding: 16px 24px;
    border-bottom: 1px dashed #e7ecf3;
}
.row_page{
    width: 100%;
    overflow: hidden;
    padding: 32px 24px;
    padding-bottom: 100px;
}
.end_fixed{
    padding: 10px 24px 5px;
    position: fixed;
    bottom: 0;
    background: #fff;
    z-index: 55;
}
.tree>>>.ivu-tree-children span{
    height: 32px;
    color: #606266;
    font-size: 16px;
    cursor: pointer;
}
.tree>>>.ivu-tree-children li{
    /* height: 32px; */
    margin: 0;
}
.tree>>>.ivu-tree ul{
    padding-left: 24px;
}

.menu_add{
    line-height: 32px;
}
.ivu-select{
    margin-left: 10px;
}
.seach_btn{
    display: inline-block;
    margin-left: 12px;
    border-color: #999;
}
label{
    font-size: 14px;
    color: #5a5e66;
}
</style>
