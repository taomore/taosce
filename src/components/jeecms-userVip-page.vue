<template>
    <div style='margin-top:20px;overflow:hidden;margin-bottom:10px;'>
        <div class="btn1">
            <Button disabled style='margin:10px;border-color: #999;color: #999;background-color: #fff;'>批量审核</Button>
            <Button disabled style='border-color: #999;color: #999;background-color: #fff;'> 批量删除</Button>
        </div>
        <div style='float:right'>
            <div style='float:left;margin-right:20px;'>
            每页显示
                <Input  v-model="value" style="width: 50px;line-height:45px;" />
            条,输入后按回车键
                <span style='margin-left:20px;'>共1694条</span>
            </div>
            <Page :total="1694" style="float:right;line-height:45px;margin-right:40px;"/>
        </div>
    </div>
</template>
<script>
    export default {
       name:'vipPage' ,
        data () {
            return {
                value: '10'
            }
        },
        methods:{
            
        }
    }
</script>

<style scoped>
.btn1{
    float: left;
    display: inline-block;
}
.btn2{
    float: right;
}
.ivu-page-item:hover {
    border-color: #2d8cf0;
    background:  #2d8cf0;
    color: white;
}
li >>> .ivu-page-item {
    font-weight: 700;
}
</style>
