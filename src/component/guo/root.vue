<template>
     <div class="biggest_bottom_right">
           <p class="p1"><span>当前栏目:</span>
                         <span>根目录</span>
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
                        key: '显示',
                
                    },
                    {
                        title: 'Action',
                        slot: 'action',
                        width: 80,
                        align: 'center'
                    }
                ],
                data1: [
                    {
                        id: '75',
                        栏目名称: "新闻",
                        栏目路径: 'news',
                        排列顺序: '',
                        显示: "是",
            
                    },
                    {
                        id: '75',
                        栏目名称: "下载",
                        栏目路径: 'download',
                        排列顺序: '',
                        显示: "是",
                    
                    },
                    {
                        id: '75',
                        栏目名称: "视频",
                        栏目路径: 'video',
                        排列顺序: '',
                        显示: "是",
                    
                    },
                    {
                        id: '75',
                        栏目名称: "图库",
                        栏目路径: 'pic',
                        排列顺序: '',
                        显示: "是",
                    
                    },
                    {
                        id: '75',
                        栏目名称: "招聘",
                        栏目路径: 'job',
                        排列顺序: '',
                        显示: "是",
                    
                    },
                    {
                        id: '75',
                        栏目名称: "新闻",
                        栏目路径: 'news',
                        排列顺序: '',
                        显示: "是",
                    
                    },
                    {
                        id: '75',
                        栏目名称: "新闻",
                        栏目路径: 'news',
                        排列顺序: '',
                        显示: "是",
                    
                    },
                    {
                        id: '75',
                        栏目名称: "网络调查",
                        栏目路径: 'survey',
                        排列顺序: '',
                        显示: "是",
                    
                    },
                    {
                        id: '75',
                        栏目名称: "新闻",
                        栏目路径: 'news',
                        排列顺序: '',
                        显示: "是",
                    
                    }
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
.ivu-btn:hover{
    background:#d9efef!important;
}
.box2{
    margin-bottom:40px;
}
.icon3{
    font-size:16px;
    font-weight: 800!important;
}
.button3{
    width:25px;
    float:left;   
}
.button4{
    width:25px;
    float:right;
}
.ivu-table-cell{
    padding-left:0px!important;
}
</style>
