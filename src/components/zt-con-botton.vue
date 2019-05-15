<template>
    <div class="contents">
        <div class="sections">
          <Button 
            to="eight-child-1"
            type="primary"
            style="margin-left:20px; width:80px; font-size:14px; margin-bottom:10px; "
          >+ 添加
           </Button>
          
            <!-- 表格 -->
            <Table :columns="columns12" :data="data6" class="tab">
                <template slot-scope="{ row }" slot="num">
                    <strong>{{ row.num }}<InputNumber></InputNumber></strong>
                </template>
                <template slot-scope="{ row, index }" slot="action">
                    <Button type="success" size="small" style="margin-right: 5px" @click="show(index)"><Icon type="md-create" /></Button>
                    <Button type="warning" size="small" @click="remove(index)"><Icon type="md-close" /></Button>
                </template>
                
            </Table>
            <div class="lastRow">
                <!-- 保存排序 批量删除 -->
                <div class="fl">
                    <Button class="btnSave btn">保存排序</Button>
                    <Button class="btnDel btn">批量删除</Button>
                </div>
                <!-- 分页 -->
                <div class="fr right_page">
                    <div class="fl page">
                        <span class="word">每页显示</span>
                        <Input v-model="value" placeholder="" style="width: 58px;margin:0 5px" />
                        <span class="word">条，输入后按回车键</span>
                    </div>
                    <Page :total="3" show-total class="fr"/>
                </div>
            </div>
        </div>
       
    </div>
</template>
<script>


export default {
    name:"zt-com-bottom",
    data () {
        return {
            value:10,
            columns12: [
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
                    title: '专题名称',
                    key: 'name',
                    align: 'left',
                    
                },
                {
                    title: '排序列表',
                    slot: 'num'
                },
                {
                    title: '操作',
                    slot: 'action',
                    align: 'center',
                }
            ],
            data6: [
                {
                    id: 1,
                    name: ' 2016饲料英才网络招聘会',
                    // num: 1
                },
                {
                    id: 3,
                    name: '2015全国两会',
                    // num: 2
                },
                {
                    id: 2,
                    name: '互联网+与传统产业升级之道',
                    // num: 3
                }
            ]
        }
    },
    methods: {
        show (index) {
            this.$Modal.info({
                title: 'User Info',
                contents: `Id：${this.data6[index].id}<br>Name：${this.data6[index].name}<br>Num：${this.data6[index].num}`
            })
        },
        remove (index) {
            this.data6.splice(index, 1);
        }
    }
}
</script>
<style scoped>

.contents{
    min-height: 500px;
    background: #fff;
    height: 100%;
}
.sections{
    background: #fff;
    position: relative;
    width: 100%;
    border: 1px solid #e7ecf3;
    border-bottom: none;
    /* min-height: 100%; */
}
.add{
    padding: 16px 24px;
    border-bottom: 1px dashed #e7ecf3;
}
.addBtn{
    background-color: #00aeff;
    border-color: #00aeff;
}
.s_add{
    margin-left: 3px;
    font-size: 14px;
    vertical-align: middle;
}
.tab{
    border-left-width: 0;
    border-right-width: 0;
}
.tab>>>.ivu-table-header{
    color: #909399;
    font-weight: 500;
}
.tab>>>td{
    padding: 6px 0;
    font-size: 13px;
    color: #353535;
}
.lastRow{
    width: 100%;
    padding: 32px 24px;
    overflow: hidden;
}
.btn{
    color: #999;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #999;
    font-size: 14px;
}
.btnDel{
    margin-left: 6px;
}
.right_page{
    color: #8a8e98;
    font-size: 14px;
}
.page{
    margin-right: 35px;
}
.ivu-page >>>.ivu-page-item{
    background-color: #409eff !important;
}
.ivu-page >>>.ivu-page-item-active a, .ivu-page-item-active:hover a{
    color: #fff;
}
</style>
