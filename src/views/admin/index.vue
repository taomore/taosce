<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">
            <img src="../../../public/img/header-logo.png" alt>
          </div>
          <div>
            <Icon type="md-list" class="headerbtn"/>
            <div class="fr usericn">
              <ul>
                <li>
                  <Icon type="ios-contact-outline"/>
                  <span>test</span>
                </li>
                <li>
                  <Icon type="ios-brush"/>
                </li>
                <li>
                  <Icon type="logo-chrome"/>
                </li>
                <li>
                  <Icon type="md-power"/>
                </li>
                <li>
                  <Dropdown class="jeehys">
                    <a href="javascript:void(0)">
                      jeecms演示站
                      <Icon type="ios-arrow-down"></Icon>
                    </a>
                    <DropdownMenu slot="list">
                      <DropdownItem>驴打滚</DropdownItem>
                      <DropdownItem>炸酱面</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </li>
              </ul>
            </div>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#188ae2'}" class="leftmenu">
          <Menu
            active-name="1-2"
            theme="light"
            width="auto"
            :open-names="['1']"
            style="background:#188ae2;color:#fff"
          >
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>Item 1
              </template>
              <MenuItem name="1-1" to="/operation">Option 1</MenuItem>
              <MenuItem name="1-2">Option 2</MenuItem>
              <MenuItem name="1-3">Option 3</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '0 24px', minHeight: '280px', background: '#fff'}">
            <router-view></router-view>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #2d8cf0;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  background: #ffffff;
  border-radius: 3px;
  float: left;
  /* position: relative;
    top: 15px;
    left: 20px; */
  img {
    margin-left: 26px;
  }
}

.layout-footer-center {
  text-align: center;
}
.ivu-layout-header,
.ivu-menu-dark {
  background: #ffffff;
}
.ivu-layout-header {
  padding: 0 24px;
  line-height: 60px;
  height: 61px;
  border-bottom: 1px solid #e0e4e9;
  box-shadow: 10px 1px 15px rgba(0, 0, 0, 0.17);
  z-index: 99;
}
.headerbtn {
  margin-left: 76px;
  font-size: 24px;
}

/*usericn*/
.usericn {
  li {
    float: left;
    padding-left: 35px;
  }
  .jeehys {
    a {
      color: inherit;
    }
    li {
      padding: inherit 0;
    }
    .ivu-select-dropdown {
      width: 110%;
      .ivu-dropdown-menu {
        width: 110%;
        .ivu-dropdown-item {
          font-size: 16px !important;
        }
      }
      .ivu-dropdown-item:hover {
        background-color: #ecf5ff;
        color: #66b1ff;
      }
    }
  }
}

/*leftmenu*/

// .ivu-menu-vertical .ivu-menu-submenu-title:hover {
//     color: #fff!important;
//     background: rgb(19, 110, 181);
// }
// .ivu-menu-vertical .ivu-menu-submenu-title:hover {
//     color: #fff!important;
//     background: rgb(19, 110, 181);
// }
.ivu-menu-vertical .ivu-menu-item:hover,
.ivu-menu-vertical .ivu-menu-submenu-title:hover {
  color: #fff !important;
  background: rgb(19, 110, 181);
}
</style>
<style lang="scss">
.leftmenu {
  .ivu-menu-submenu-title:hover {
    color: #fff !important;
    background: rgb(19, 110, 181) !important;
  }
}
</style>
