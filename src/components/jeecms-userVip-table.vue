<template>
    <div style='padding-top:20px;'>
        <Table stripe ref="selection" :columns="columns7" :data="data1" style='border-top:1px dotted #e8eaec;'></Table>
    </div>
</template>
<script>
    export default {
        name:'vipTable',
        data () {
            return {
                columns7: [
                    {
                        type: 'selection',
                        width: 40,
                        // height:32,
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
                        width: 65,
                        align: 'center',
                        key: 'id'
                    },
                    {
                        title: '用户名',
                        width: 180,
                        align: 'center',
                        key: 'name'
                    },
                    {
                        title: '电子邮箱',
                        align: 'center',
                        maxWidth: 134,
                        minWidth:85,
                        key: 'email'
                    },
                    {
                        title: '会员组',
                        align: 'center',
                        maxWidth: 130,
                        minWidth:85,
                        key: 'vip'
                    },
                    {
                        title: '最后登录时间',
                        align: 'center',
                        maxWidth: 130,
                        minWidth:85,
                        key: 'lasttime'
                    },
                    {
                        title: '登录次数',
                        align: 'center',
                        maxWidth: 130,
                        minWidth:85,
                        key: 'time'
                    },
                    {
                        title: '状态',
                        align: 'center',
                        maxWidth: 130,
                        minWidth:85,
                        key: 'states'
                    },
                    {
                        title: '操作',
                        key: 'do',
                        maxWidth:130,
                        minWidth:90,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'success',
                                        size: 'small'
                                    },
                                    style:{
                                            padding:0
                                        },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '修改'),
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
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除')
                            ])
                        }
                    }
                ],
                data1: [
                    {
                        id:1700,
                        name: 'John Brown',
                        email: '183243@qq.com',
                        vip: '普通会员',
                        lasttime: '2016-10-03',
                        time:2,
                        states:'启用'
                    },
                    {
                        id:1700,
                        name: 'John Brown',
                        email: '183243@qq.com',
                        vip: '普通会员',
                        lasttime: '2016-10-03',
                        time:2,
                        states:'启用'
                    },
                    {
                        id:1700,
                        name: 'John Brown',
                        email: '183243@qq.com',
                        vip: '普通会员',
                        lasttime: '2016-10-03',
                        time:2,
                        states:'启用'
                    },
                    {
                        id:1700,
                        name: 'John Brown',
                        email: '183243@qq.com',
                        vip: '普通会员',
                        lasttime: '2016-10-03',
                        time:2,
                        states:'启用',
                    },
                    {
                        id:1700,
                        name: 'John Brown',
                        email: '183243@qq.com',
                        vip: '普通会员',
                        lasttime: '2016-10-03',
                        time:2,
                        states:'启用'
                    },
                    {
                        id:1700,
                        name: 'John Brown',
                        email: '183243@qq.com',
                        vip: '普通会员',
                        lasttime: '2016-10-03',
                        time:2,
                        states:'启用'
                    },
                    {
                        id:1700,
                        name: 'John Brown',
                        email: '183243@qq.com',
                        vip: '普通会员',
                        lasttime: '2016-10-03',
                        time:2,
                        states:'启用'
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
            //         content: `Name：${this.data6[index].name}<br>name:${this.data6[index].age}<br>Address：${this.data6[index].address}`
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
