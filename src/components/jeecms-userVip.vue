<template>
    <Layout>
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
            会员管理
            </BreadcrumbItem>
            <BreadcrumbItem>
            >>
            </BreadcrumbItem>
            <BreadcrumbItem style='color: #999;font-weight: 400;'>
            会员列表
            </BreadcrumbItem>
        </Breadcrumb> -->
        <Content :style="{height:'100%', background: '#fff'}">
            <div class="tit">
                <div class="left">
                    <!-- <router-link to="/useradd"> -->
                        <Button to ='/useradd' type="primary" style='background-color: #00aeff;border-color: #00aeff;font-weight:400;font-size:15px;width:80px;
                        height:32px'> 
                        + 添加
                        </Button>
                    <!-- <router-link> -->
                </div>
                <div class="right" style='display:flex;'>
                    <Select placeholder="状态" v-model="model3" style="width:130px">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                    <div style='height:32px;display:flex;line-height:32px;margin-left:15px'>
                        用户名：
                        <Input v-model="value2" placeholder="default size" style='width:160px;height:32px' />
                    </div>
                    <div style='height:32px;display:flex;line-height:32px;margin-left:15px'>
                        电子邮箱：
                        <Input v-model="value3" placeholder="default size" style='width:160px;height:32px' />
                    </div>
                    <Button class="find" style=''>查询</Button>
                </div>
            </div>

            <vipTable></vipTable>
            <vipPage></vipPage>

        </Content>
    </Layout>
</template>

<script>
import vipTable from './jeecms-userVip-table'
import vipPage from './jeecms-userVip-page'
export default {
    name:'userVip',
    components:{
        vipTable,vipPage
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
                value:'',
                value2:'',
                value3:''
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


