<template>
    <Layout >
        <!-- <Breadcrumb :style="{margin: '90px 0 20px 0'}">
            <BreadcrumbItem>
            <Icon type="ios-keypad"></Icon>
            </BreadcrumbItem>
            <BreadcrumbItem>
            >>
            </BreadcrumbItem>
            <BreadcrumbItem>
            用户管理
            </BreadcrumbItem>
            <BreadcrumbItem>
            >>
            </BreadcrumbItem>
            <BreadcrumbItem>
            角色管理
            </BreadcrumbItem>
            <BreadcrumbItem>
            >>
            </BreadcrumbItem>
            <BreadcrumbItem style='color: #999;font-weight: 400;'>
            角色管理
            </BreadcrumbItem>
        </Breadcrumb> -->
        <Content :style="{minHeight:'500px',height:'100%', background: '#fff'}">
            <div class="tit">
                <div class="left">
                    <Button type="primary" style='background-color: #00aeff;border-color: #00aeff;font-weight:400;font-size:15px;width:80px;
                    height:32px'> + 添加</Button>
                </div>
                
            </div>

            <roleTable></roleTable>
            <rolePage></rolePage>

        </Content>
    </Layout>
</template>

<script>
import roleTable from './jeecms-userRole-table'
import rolePage from './jeecms-userRole-page'
export default {
    name:'userVip',
    components:{
       roleTable,rolePage
    },
    data(){
        return{
            cityList: [
                    {
                        value: '状态',
                        label: '状态'
                    },
                    {
                        value: '已审核',
                        label: '已审核'
                    },
                    {
                        value: '禁用',
                        label: '禁用'
                    },
                    {
                        value: '未审核',
                        label: '未审核'
                    }
                ],
                model3: '',
                // value:''
            }
        }
}

</script>

<style scoped>
span >>> .ivu-breadcrumb-item-separator{
   display: none;
}
.left span{
    padding:5px;
}
.tit{
    height: 32px;
    display: flex;
    padding: 16px 24px;
    justify-content: space-between;
    align-items: center;
    margin-top:24px;
}
.left{
    height:32px;
}
.right{
   height:32px;
}
.find{
    width:80px;
    height:32px;
    padding: 8px 13px;
    line-height:10px;
    margin-left:12px;
    border:none;
    border:1px solid black;
}
.find:hover{
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
}
</style>


