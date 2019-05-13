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
            账户绑定
            </BreadcrumbItem>
            <BreadcrumbItem>
            >>
            </BreadcrumbItem>
            <BreadcrumbItem style='color: #999;font-weight: 400;'>
            列表
            </BreadcrumbItem>
        </Breadcrumb> -->
        <Content :style="{minHeight: '280px', background: '#fff'}">
            <div class="tit">
                <!-- <div class="left">
                    <Button type="primary" style='background-color: #00aeff;border-color: #00aeff;font-weight:400;font-size:15px;width:80px;
                    height:32px'> + 添加</Button>
                </div> -->
                <div class="right" style='display:flex;'>
                    <Select placeholder='所有' v-model="model3" style="width:130px">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                    <div style='height:32px;display:flex;line-height:32px;margin-left:15px'>
                        用户名：
                        <Input v-model="value2" placeholder="default size" style='width:160px;height:32px' />
                    </div>
                    <Button class="find" style=''>查询</Button>
                </div>
            </div>

            <accountTable></accountTable>
            <accountPage></accountPage>

        </Content>
    </Layout>
</template>

<script>
import accountTable from './jeecms-userAccount-table'
import accountPage from './jeecms-userAccount-page'
export default {
    name:'userVip',
    components:{
        accountTable,accountPage
    },
    data(){
        return{
            cityList: [
                    {
                        value: '所有',
                        label: '所有'
                    },
                    {
                        value: 'qq',
                        label: 'qq'
                    },
                    {
                        value: '微信',
                        label: '微信'
                    },
                    {
                        value: '腾讯微博',
                        label: '腾讯微博'
                    },
                     {
                        value: '新浪微博',
                        label: '新浪微博'
                    }
                ],
                model3: '',
                value:'',
                value2:''
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


