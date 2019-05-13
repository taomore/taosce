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
            管理员(全站)
            </BreadcrumbItem>
            <BreadcrumbItem>
            >>
            </BreadcrumbItem>
            <BreadcrumbItem style='color: #999;font-weight: 400;'>
            管理员(全站)列表
            </BreadcrumbItem>
        </Breadcrumb> -->
        <Content :style="{minHeight: '500px',height:'100%', background: '#fff'}">
            <div class="tit" style='margin-bottom:10px;'>
                <div class="left">
                    <Button type="primary" style='background-color: #00aeff;border-color: #00aeff;font-weight:400;font-size:15px;width:80px;
                    float:left;height:32px'> + 添加</Button>
                    <div style='height:32px;float:left;line-height:32px;margin-left:15px'>
                        用户名：
                        <Input v-model="value2" placeholder="" style='width:160px;height:32px' />
                    </div>
                    <div style='height:32px;float:left;line-height:32px;margin-left:15px'>
                        真实姓名：
                        <Input v-model="value2" placeholder="" style='width:160px;height:32px' />
                    </div>
                    <div style='height:32px;float:left;line-height:32px;margin-left:15px'>
                        电子邮箱：
                        <Input v-model="value2" placeholder="" style='width:160px;height:32px' />
                    </div>
                    <Checkbox style='float:left;line-height:3;margin-left:5px;' v-model="single">禁用</Checkbox>
                </div>
            </div>

            <div class="bot" style='padding:15px;border-top: 1px dashed #e7ecf3; '>
                   <Select placeholder='所有会员组' v-model="model3" style="width:130px; margin:0 10px 0 20px;">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select> 
                    <Select placeholder='所有部门' v-model="model4" style="width:130px;">
                        <Option v-for="all in allList" :value="all.value" :key="all.value">{{ all.label  }}</Option>
                    </Select> 
                    <Select placeholder='所有角色' v-model="model5" style="width:130px; margin:0 10px;">
                        <Option v-for="role in roleList" :value="role.value" :key="role.value">{{ role.label }}</Option>
                    </Select> 
                    <Button class="find" style=''>查询</Button>
                </div>
                

            <alladmtable></alladmtable>
            <alladmPage></alladmPage>

        </Content>
    </Layout>
</template>

<script>
import alladmtable from './jeecms-userAlladm-table'
import alladmPage from './jeecms-userAlladm-page'
export default {
    name:'userAlladm',
    components:{
        alladmtable,alladmPage
    },
    data(){
        return{
            single: false,
            cityList: [
                    {
                        value: '所有会员组',
                        label: '所有会员组'
                    },
                    {
                        value: '普通会员',
                        label: '普通会员'
                    },
                    {
                        value: '高级组',
                        label: '高级组'
                    },
                    {
                        value: 'VIP',
                        label: 'VIP'
                    }
                ],
                allList: [
                    {
                        value: '所有部门',
                        label: '所有部门'
                    },
                    {
                        value: '一级部门',
                        label: '一级部门'
                    },
                    {
                        value: 'cd',
                        label: 'cd'
                    }
                ],
                roleList: [
                    {
                        value: '所有角色',
                        label: '所有角色'
                    },
                    {
                        value: '演示',
                        label: '演示'
                    }
                ],
                model3: '',
                model4: '',
                model5: '',
                value:''
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


