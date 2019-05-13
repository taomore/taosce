<template>
    <div style='padding-top:20px;'>
        <Table stripe ref="selection" :columns="columns7" :data="data1" style='border-top:1px dotted #e8eaec;'>
            
        </Table>
    </div>
</template>
<script>
    export default {
        name:'accountTable',
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
                        title: '第三方平台',
                        align: 'center',
                        maxWidth: 160,
                        minWidth:86,
                        key: 'third'
                    },
                    {
                        title: '来自',
                        align: 'center',
                        maxWidth: 160,
                        minWidth:86,
                        key: 'from'
                    },
                    {
                        title: '真实姓名',
                        align: 'center',
                        maxWidth: 160,
                        minWidth:86,
                        key: 'truename'
                    },
                    {
                        title: '性别',
                        align: 'center',
                        maxWidth: 160,
                        minWidth:86,
                        key: 'sex'
                    },
                    {
                        title: '操作',
                        key: 'do',
                        maxWidth: 160,
                        minWidth:86,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    style:{
                                            padding:'0 8px',
                                            margin:'5px',
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
                        third: 'WEIXIN',
                        from: '—',
                        truename: 'langhei',
                        sex:'女',
                        do:""
                    },
                    {
                        id:2,
                        name: 'John Brown',
                        third: 'WEIXIN',
                        from: '—',
                        truename: 'langhei',
                        sex:'女',
                        do:""
                    },
                    {
                        id:3,
                        name: 'John Brown',
                        third: 'WEIXIN',
                        from: '—',
                        truename: 'langhei',
                        sex:'女',
                        do:""
                    },
                    {
                        id:4,
                        name: 'John Brown',
                        third: 'WEIXIN',
                        from: '—',
                        truename: 'langhei',
                        sex:'女',
                        do:""
                    },
                    {
                        id:5,
                        name: 'John Brown',
                        third: 'WEIXIN',
                        from: '—',
                        truename: 'langhei',
                        sex:'女',
                        do:""
                    },
                    {
                        id:6,
                        name: 'John Brown',
                        third: 'WEIXIN',
                        from: '—',
                        truename: 'langhei',
                        sex:'女',
                        do:""
                    },
                   {
                        id:7,
                        name: 'John Brown',
                        third: 'WEIXIN',
                        from: '—',
                        truename: 'langhei',
                        sex:'女',
                        do:""
                    }
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
    border-top:1px dotted #e8eaec;
}

.ivu-table td, .ivu-table th{
    height:41px;
}
</style>
