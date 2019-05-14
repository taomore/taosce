<template>
  <Content :style="{paddingTop: '20px', minHeight: '280px', background: '#fff'}">
    <Button type="primary" @click="modal1 = true">+添加</Button>
    <Modal
        v-model="modal1"
        title="字典 - 添加"
        @on-ok="ok"
        @on-cancel="cancel">
        名称<Input v-model="fl" placeholder="Enter something..." style="width: 300px" /><br>
        值<Input v-model="mc" placeholder="Enter something..." style="width: 300px" /><br>
        分类<Input v-model="z" placeholder="Enter something..." style="width: 300px" />
    </Modal>
    <Modal
        v-model="modal2"
        title="字典 - 修改"
        @on-ok="ok2(add)"
        @on-cancel="cancel">
        名称<Input v-model="fl2" placeholder="Enter something..." style="width: 300px" /><br>
        值<Input v-model="mc2" placeholder="Enter something..." style="width: 300px" /><br>
        分类<Input v-model="z2" placeholder="Enter something..." style="width: 300px" />
    </Modal>
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
        <Table  stripe ref="selection" :columns="columns4"  :data="std" width="100%">
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
// import {mapGetters,mapState} from 'vuex';
export default {
   data () {
            return {
                fl:"",
                mc:"",
                z:"",
                fl2:"",
                mc2:"",
                z2:"",
                modal1: false,
                modal2: false,
                value:2,
                add:"",
                columns4: [
                        {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        type: 'index',
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
                        key: 'key',
                        align: 'center',
                        width: 250,
                    },
                    {
                        title: '分类',
                        key: 'any',
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

                                            this.modal2 = true
                                            this.add=this.std[params.index]._id
                                            // this.ok2(this.std[params.index]._id)
                                    //             let n1 = this.std[params.index]
                                    //             console.log(n1)
                                    //             this.$axios({
                                    //             method: 'post',
                                    //             url:'http://10.35.164.66:3000/dicr/api/update',
                                    //             data:n1
                                    //             }).then((res)=>{
                                    //                 console.log(res)
                                    //                 this.$store.dispatch('getdata')
                                    // });

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
                                            // this.remove(params.index)
                                          let remov = {_id:this.std[params.index]._id}
                                            // console.log(remov)
                                            this.$axios({
                                            method: 'post',
                                            url:'http://10.35.164.66:3000/dicr/api/del',
                                            data:remov
                                            }).then((res)=>{
                                                console.log(res)
                                                this.$store.dispatch('getdata')
                                });
                                        }
                                    }
                                }, '×')
                            ]);
                        }
                    }
                ],
                totallenth:"",
                std:[]

            }
        },
       
         created(){
         this.totallenth =this.std.length
        //  console.log(this.totallenth)
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
                // console.log(this.std[0]._id);
                // console.log(val);

            }
            }
        },
        methods: {
            handleSelectAll (status) {
                this.$refs.selection.selectAll(status);
            },
            ok () {
                let postData={name:this.fl,key:this.mc,any:this.z}
                this.$Message.info('Clicked ok');
                this.$axios({
                method: 'post',
                url:'http://10.35.164.66:3000/dicr/api/add',
                data:postData
                }).then((res)=>{
                    // console.log(res.data)
                    this.$store.dispatch('getdata')
       });
            },
            ok2 (num2) {
                let postDatas={_id:num2,name:this.fl2,key:this.mc2,any:this.z2}
                console.log(postDatas)
                this.$Message.info('Clicked ok');
                this.$axios({
                method: 'post',
                url:'http://10.35.164.66:3000/dicr/api/update',
                data:postDatas
                }).then((res)=>{
                    // console.log(res.data)
                    this.$store.dispatch('getdata')
    })
            },
            cancel () {
                this.$Message.info('Clicked cancel');
                // console.log('2')

            }
        
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

