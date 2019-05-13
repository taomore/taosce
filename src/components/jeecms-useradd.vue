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
            会员添加
            </BreadcrumbItem>
        </Breadcrumb> -->
        <Content :style="{minHeight: '550px', background: '#fff'}">
            <Row style='margin:40px 40px 0 40px;'> 
                <Col span="12" >
                    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" style='margin:0 20px;'>
                        <FormItem label="用户名" prop="name">
                            <Input v-model="formValidate.name">
                            </Input>
                        </FormItem>
                    </Form>
                </Col>
                <Col span="12">
                    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" style='margin:0 20px;'>
                        <FormItem label="电子邮箱" prop="mail">
                            <Input v-model="formValidate.mail" >
                            </Input>
                        </FormItem>
                    </Form>
                </Col>
                
            </Row>

            <!-- <Row style='margin:0px 40px 0 40px;'> 
                <Col span="12" >
                    <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
                        <FormItem label="Password" prop="passwd">
                            <Input type="password" v-model="formCustom.passwd"></Input>
                        </FormItem>
                    </Form>
                </Col>
                <Col span="12">
                    <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
                        <FormItem label="Confirm" prop="passwdCheck">
                            <Input type="password" v-model="formCustom.passwdCheck"></Input>
                        </FormItem>
                    </Form>
                </Col>
            </Row> -->

            
        </Content>
    </Layout>
</template>

<script>
    export default {
        data () {
            return {
                formValidate: {
                    name: '',
                    mail: '',
                    city: '',
                    gender: '',
                    interest: [],
                    date: '',
                    time: '',
                    desc: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                        { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                    ],
                    city: [
                        { required: true, message: 'Please select the city', trigger: 'change' }
                    ],
                    gender: [
                        { required: true, message: 'Please select gender', trigger: 'change' }
                    ],
                    interest: [
                        { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
                        { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
                    ],
                    date: [
                        { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
                    ],
                    time: [
                        { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
                        { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
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




