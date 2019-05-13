<template>
    <div style='padding-top:20px;'>
        <Table stripe ref="selection" :columns="columns4" :data="data1" style='border-top:1px dotted #e8eaec;'></Table>
    </div>
</template>
<script>
    export default {
        name:'roleTable',
        data () {
            return {
              
                columns4: [
                    {
                        type: 'selection',
                        width: 40,
                        height:32,
                        align: 'right',
                        fontWhite:'700',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: 'ID',
                        maxWidth: 60,
                        minWidth:86,
                        align: 'center',
                        key: 'id'
                    },
                    {
                        title: '角色名',
                        maxWidth:327,
                        minWidth:86,
                        align: 'center',
                        key: 'rolename:'
                    },
                    {
                        title: '排列顺序',
                        align: 'center',
                        maxWidth:327,
                        minWidth:86,
                        key: 'sort'
                    },
                    {
                        title: '操作',
                        key: 'do',
                        maxWidth:325,
                        minWidth:100,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'success',
                                        size: 'small'
                                    },
                                    style:{
                                            padding:0,
                                            margin:'5px'
                                        },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '修改'),
                                h('Button', {
                                    props: {
                                        type: 'success',
                                        size: 'small'
                                    },
                                    style:{
                                            padding:0,
                                        },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    style:{
                                            padding:0,
                                            margin:'5px'
                                        },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '用户')
                            ])
                        }
                    }
                ],
                data1: [
                    {
                        id:4,
                        rolename: '演示',
                        sort:'10',
                        do:""
                    },
                    {
                        id:4,
                        rolename: '演示',
                        sort:'10',
                        do:""
                    },
                    {
                        id:4,
                        rolename: '演示',
                        sort:'10',
                        do:""
                    }
                ]
            }
        },
        methods: {
            handleSelectAll (status) {
                this.$refs.selection.selectAll(status);
            },
            // show (index) {
            //     this.$Modal.info({
            //         title: 'User Info',
            //         content: `Id：${this.data1[index].id}<br>Name:${this.data1[index].name}<br>Sort：${this.data1[index].sort}`
            //     })
            // },
            remove (index) {
                this.data1.splice(index, 1);
            }
        }
    }
</script>

<style scoped>
table {
   width: 100%;
   padding:0;
}
div.ivu-table-wrapper {
      border: none;
    }
.ivu-table >>> .ivu-table-header {
    border-top:1px dotted #e8eaec;
}
/* .ivu-table:before{content:'';width:100%;height:0px;position:absolute;left:0;bottom:0;z-index:1}
.ivu-table:after{content:'';width:0px;height:100%;position:absolute;top:0;right:0;z-index:3} */
/* .ivu-table-tbody >>>.ivu-table-border td{
    border:0!important;
}
.ivu-table-tbody >>>.ivu-table td{
    border:0!important;
}
.ivu-table-tbody >>> .ivu-table-border td{
    border:0!important;
} */
.ivu-table td, .ivu-table th{
    height:41px;
}
</style>
