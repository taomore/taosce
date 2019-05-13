<template>
    <div style='margin-top:30px;overflow:hidden;margin-bottom:10px;'>
        <div class="btn1">
            <Button disabled style='border-color: #999;color: #999;background-color: #fff;margin-left:30px;'> 批量删除</Button>
        </div>
    </div>
</template>
<script>
    export default {
       name:'rolePage' ,
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
