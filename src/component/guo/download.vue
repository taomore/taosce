<template>
      <div class="biggest_bottom_right">
           <p class="p1"><span>当前栏目:</span>
                         <span>根目录/下载</span>
                         <span><Icon type="md-add" />栏目添加</span>
           </p>
           <div class="box2">
               <Table  ref="selection" :columns="columns4" :data="data1">
                    <template slot-scope="{ row }" slot="name">
                   <strong>{{ row.name }}<input type="number" style="width:60px;height:30px;border-radius:6px;border:1px solid #cfd5d7"/></strong>
                  </template>
                 <template  slot="action">
                <Button class="button3" type="success" size="small" @click="show(index)"><Icon class="icon3" type="md-create" /></Button>
                <Button class="button4" type="warning" size="small" @click="remove(index)"><Icon class="icon3" type="md-close" /></Button>
                 </template>
               </Table>
               <Button @click="handleSelectAll(true)">保存顺序</Button>
               <Button @click="handleSelectAll(false)">批量删除</Button>
           </div>
     </div>
</template>
<script>
export default {
         data () {
            return {
                columns4: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: 'id',
                        key: 'id'
                    },
                    {
                        title: '栏目名称',
                        key: '栏目名称'
                    },
                    {
                        title: '栏目路径',
                        key: '栏目路径'
                    },
                    {
                        title: '排列顺序',
                        slot: 'name'
                    },
                    {
                        title: '显示',
                        key: '显示'
                    },
                    {
                         title: 'Action',
                        slot: 'action',
                        width: 150,
                        align: 'center'
                    }
                ],
                data1: [
                    {
                        id: '75',
                        栏目名称: "系统软件",
                        栏目路径: 'xtrj',
                        排列顺序: '',
                        显示: "是",
                        操作:""
                    },
                    {
                        id: '75',
                        栏目名称: "精品推荐",
                        栏目路径: 'jptj',
                        排列顺序: '',
                        显示: "是",
                        操作:""
                    },
                    {
                        id: '75',
                        栏目名称: "媒体助手",
                        栏目路径: 'wtzs',
                        排列顺序: '',
                        显示: "是",
                        操作:""
                    },
                    {
                        id: '75',
                        栏目名称: "游戏娱乐",
                        栏目路径: 'ysyl',
                        排列顺序: '',
                        显示: "是",
                        操作:""
                    },
                    
                ]
            }
        },
        methods: {
            handleSelectAll (status) {
                this.$refs.selection.selectAll(status);
            }
        }
    }
</script>
<style>
.biggest_bottom_right{
    width:100%;
}
.p1 span:first-child{
    font-size:14px;
    margin-left:30px;
}
.p1 span:nth-child(2){
    font-size:14px;
    color:#4e47da;
    margin-right:30px;
}
.p1 span:nth-child(3){
    display:inline-block;
    width:100px;
    height:30px;
    background:#4bcdf2;
    text-align: center;
    line-height: 30px;
    color:#fff;
    border-radius:4px;
}
.p1{
    width:100%;
    border-bottom:1px dotted #cfd5d7;
}
.ivu-btn{
    margin-top:30px;
    margin-left:30px;
    margin-bottom:40px!important;
}
.ivu-btn:hover{
    background:#d9efef!important;
}
.box2{
    margin-bottom:40px;
}
</style>
