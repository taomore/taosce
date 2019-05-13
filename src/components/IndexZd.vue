<template>
  <Content :style="{paddingTop: '20px', minHeight: '280px', background: '#fff'}">
    <Button type="primary" >+添加</Button>
    <Dropdown trigger="click"  style="margin-left: 20px">
      <Button type="primary" class="elemet" style="width: 100px">
            所有
            <Icon type="ios-arrow-down"></Icon>
        </Button>
      </a>
      <DropdownMenu slot="list" >
        <DropdownItem>所有</DropdownItem>
        <DropdownItem>sacle</DropdownItem>
        <DropdownItem >natrue</DropdownItem>
        <DropdownItem>industry</DropdownItem>
      </DropdownMenu>
    </Dropdown>
     <Divider  dashed/>
     
    <div width="100%"  >
        <Table  stripe ref="selection" :columns="columns4" :data="data1" width="100%">
        </Table>
    </div>
    <div style="margin:30px 20px 30px">
       <div style='margin-top:20px;overflow:hidden;margin-bottom:10px;'>
      <Button disabled style="vertical-align:center">批量删除</Button>
        <div style='float:right;'>
            <div style='float:left;margin-right:20px;'>
            每页显示
                <Input  v-model.number="value" style="width: 50px;line-height:45px;" />
            条,输入后按回车键 
                <span style='margin-left:20px;'>共100条</span>
            </div>
            <Page :total="totallenth" :page-size="value" style="float:right;line-height:45px;margin-right:40px;"/>
        </div>
    </div>
    </div>
  </Content>
</template>

<script>
import { create } from 'domain';
import {mapGetters,mapState} from 'vuex';
export default {
   data () {
            return {
              value:2,
                columns4: [
                        {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: 'Id',
                        key: 'id',
                        width: 50,
                    },
                    {
                        title: '名称',
                        key: 'name',
                        align: 'center',
                        width: 250,
                    },
                    {
                        title: '值',
                        key: 'age',
                        align: 'center',
                        width: 250,
                    },
                    {
                        title: '分类',
                        key: 'address',
                        align: 'center',
                        width: 100,
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 280,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px',
                                        background:'green'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '√'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '×')
                            ]);
                        }
                    }
                ],
                data1: [
                    {
                        id: '1',                       
                        name: 'John Brown',
                        age: 18,
                        address: 'scale',
                        date: '2016-10-03',

                    },
                    {
                        id: '2',                       
                        name: 'Jim Green',
                        age: 24,
                        address: 'scale',
                        date: '2016-10-01'
                    },
                    {
                        id: '3', 
                        name: 'Joe Black',
                        age: 30,
                        address: 'scale',
                        date: '2016-10-02'
                    },
                    {
                        id: '4', 
                        name: 'Jon Snow',
                        age: 26,
                        address: 'scale',
                        date: '2016-10-04'
                    }
                ],
                totallenth:"",
                std:""

            }
        },
        computed:{
        ...mapState(['data']),
        ...mapGetters(['data']),
          },
         created(){
         this.totallenth =this.data1.length

        },
        beforeCreate(){ 
            this.$store.dispatch('getdata')
        },
         computed:{
        a(){
          return this.$store.state.data;
         }
        },
        watch:{
            a:{
            handler:function(val){
                this.std=val
                console.log(this.std[0].id);
                console.log(val);

            }
            }
        },
        methods: {
            handleSelectAll (status) {
                this.$refs.selection.selectAll(status);
            },
        //     ceshi(){
        //     this.$store.dispatch('getdata')
            
        //     // console.log(this.$store.state.data)

        //     // alert("1")
        // }
        },
        
        

}
</script>

<style csoped>
.ivu-divider-dashed{
  margin-bottom: 0px!important;
  
}
.elemet{
  background-color: #fff!important;
  color: #2d8cf0!important;
  padding: 0!important;
  display: flex!important;
  justify-content: space-between!important;
}
.elemet span{
 height: 30px;
 width: 100px;
 line-height: 30px;
 
}
.ivu-icon-ios-arrow-down{
  margin-left: 35px;
}
.ivu-btn-primary{
  margin-left: 26PX;
}
</style>

<style>
div.ivu-table-wrapper {
      border: none;
    }
.ivu-table-header table,.ivu-table-header thead tr th{
background: #fff!important;
    }
</style>

