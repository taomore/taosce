<template>
    <div>
        <Table stripe ref="selection" :columns="columns7" :data="data1" style='border-top:1px dotted #e8eaec;'>
            
        </Table>
    </div>
</template>
<script>
    export default {
        name:'alladmTable',
        data () {
            return {
                columns7: [
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
                        width: 65,
                        align: 'center',
                        key: 'id'
                    },
                    {
                        title: '用户名',
                        maxWidth: 164,
                        minWidth:86,
                        align: 'center',
                        key: 'name'
                    },
                    {
                        title: '站点',
                        align: 'center',
                        maxWidth: 124,
                        minWidth:86,
                        key: 'site'
                    },
                    {
                        title: '部门',
                        align: 'center',
                        maxWidth: 120,
                        minWidth:86,
                        key: 'section'
                    },
                    {
                        title: '等级',
                        align: 'center',
                        maxWidth: 120,
                        minWidth:86,
                        key: 'rank'
                    },
                    {
                        title: '最后登录时间',
                        align: 'center',
                        maxWidth: 120,
                        minWidth:86,
                        key: 'lasttime'
                    },
                    {
                        title: '禁用',
                        align: 'center',
                        maxWidth: 120,
                        minWidth:86,
                        key: 'no'
                    },
                    {
                        title: '登录次数',
                        align: 'center',
                        maxWidth: 120,
                        minWidth:86,
                        key: 'time'
                    },
                    {
                        title: '操作',
                        key: 'do',
                        maxWidth: 120,
                        minWidth:86,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                 h('Button', {
                                    props: {
                                        type: 'success',
                                        size: 'small'
                                    },
                                    style:{
                                            padding:'0 6px',
                                            margin:'3px',
                                            fontSize:'20px',
                                            fontWhite:700,
                                        }
                                }, '√'),

                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    style:{
                                            padding:'0 6px',
                                            margin:'3px',
                                            fontSize:'20px',
                                            fontWhite:700,
                                        },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '×')
                            ])
                        }
                    }
                ],
                data1: [
                    {
                        id:1,
                        name: 'John Brown',
                        site: 'jeecms演示站',
                        section: '',
                        rank: '8',
                        lasttime:'2019-3-6',
                        no:'否',
                        time:28
                    },
                    {
                        id:2,
                        name: 'John Brown',
                        site: 'jeecms演示站',
                        section: '',
                        rank: '8',
                        lasttime:'2019-3-6',
                        no:'否',
                        time:18
                    },
                    {
                        id:3,
                        name: 'John Brown',
                        site: 'jeecms演示站',
                        section: '一级部门',
                        rank: '8',
                        lasttime:'2019-3-6',
                        no:'否',
                        time:12
                    },
                ]
            }
        },
        methods: {
            handleSelectAll (status) {
                this.$refs.selection.selectAll(status);
            },
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                   content: `Id：${this.data1[index].id}<br>Name：${this.data1[index].name}<br>Third：${this.data1[index].third}
                   <br>From：${this.data1[index].from}<br>Truename：${this.data1[index].truename}<br>Sex：${this.data1[index].sex}`
                })
            },
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
   border-bottom: 1px dashed #e7ecf3;
}

.ivu-table td, .ivu-table th{
    height:41px;
}
</style>
