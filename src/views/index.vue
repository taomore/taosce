<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <Row>
            <Col span="8">
              <img src="../assets/header-logo.png">
              <Icon type="md-list"/>
            </Col>
            <Col span="8" offset="8">
              <Icon type="md-contact"/>test
              <Icon type="md-brush"/>
              <Icon type="md-globe"/>
              <Icon type="md-information-circle"/>
              <Dropdown  trigger="click">
                <a href="javascript:void(0)">
                  jeecms子站
                  <Icon type="ios-arrow-down"></Icon>
                </a>
                <DropdownMenu slot="list">
                  <DropdownItem>jeecms演示站</DropdownItem>
                  <DropdownItem>jeecms子站</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Col>
          </Row>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
            <MenuItem name="1-1" to="/index/gztcentercom">
              <Icon type="ios-navigate"></Icon>工作台
            </MenuItem>
            <MenuItem name="2-1" to="/index/gztcentercom">
              <Icon type="ios-navigate"></Icon>栏目
            </MenuItem>
            <Submenu name="1">
              <template slot="title" trigger="click">
                <Icon type="ios-navigate"></Icon>辅助
              </template>
              <MenuItem name="1-1" to="/index/IndexAnyCli">全文检索</MenuItem>
              <MenuItem name="1-2" to="/index/IndexAnyZd">字典</MenuItem>
              <MenuItem name="1-3">内容回收站</MenuItem>
              <MenuItem name="1-3">定时任务</MenuItem>
              <MenuItem name="1-3">附件管理</MenuItem>
              <MenuItem name="1-3">二维码生成</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>用户管理
              </template>
              <MenuItem name="2-1">Option 1</MenuItem>
              <MenuItem name="2-2"  to="/index/yhglznxnine">站内信管理</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>数据中心
              </template>
              <MenuItem name="3-1" to="/index/datas">流量统计</MenuItem>
              <MenuItem name="3-2"  to="/index/yhglznxnine">流量分析</MenuItem>
            </Submenu>
             <Submenu name="4">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>运营
              </template>
              <MenuItem name="4-1" to="/index/operation">内容复用</MenuItem>
              <MenuItem name="4-2" >工作流</MenuItem>
            </Submenu>
            <Submenu name="5">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>内容
              </template>
              <MenuItem name="5-1">内容管理</MenuItem>
              <MenuItem name="5-2"  to="/index/yhglznxnine">专题管理</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>
          <router-view></router-view>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ivu-layout-sider {
  min-width: 220px !important;
}
.ivu-layout-sider,
.ivu-menu-submenu,
.ivu-menu-item {
  color: #ffffff;
  background: rgb(65, 144, 247) !important;
}
.ivu-breadcrumb {
  margin-bottom: 11px !important;
  margin-top: 18px !important;
}
.ivu-icon-md-list {
  font-size: 26px;
  margin-left: 45px;
}
.ivu-dropdown-rel a{
  width: 100%;
}
.ivu-icon-md-contact,
.ivu-icon-md-brush,
.ivu-icon-md-globe,
.ivu-icon-md-information-circle {
  font-size: 22px;
  margin-left: 20px;
}
.ivu-layout-header {
  height: 60px;
}
.ivu-dropdown {
  margin-left: 29px;
  width:94px;
}
.ivu-icon-ios-arrow-down{
margin-left: 0px!important;
}
.ivu-icon-md-contact {
  font-size: 40px;
  margin-left: 63px;
  margin-right: 5px;
}
.ivu-dropdown a {
  vertical-align: bottom;
  color: black;
}
.ivu-layout-header,
.ivu-menu-horizontal,
.layout-logo {
  background: #ffffff !important;
}
.ivu-layout-header {
  padding-right: 0 !important;
}
.layout {
  border: none !important;
}
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>
<style>
.ivu-menu-vertical .ivu-menu-item:hover,
.ivu-menu-vertical .ivu-menu-submenu-title:hover {
  color: #ffffff !important;
  background: rgb(91, 89, 230) !important;
}
.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
  color: #ffffff !important;
}
</style>

