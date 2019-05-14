<template>
  <div class="operationBox" style="height:100%">
    <Layout style="width:100%">
      <Sider
        hide-trigger
        style="background:#FFF;border-right:1px solid #d4dde2;height:100%; padding:15px 0;flex: 1;"
      >
        <Tree :data="data1" @on-select-change="add"></Tree>
      </Sider>
      <Layout>
        <Header style="background:#FFF;padding:0 15px">
          <div class="operationSearch clearfix">
            <div class="fl">
              标题:
              <Input v-model="value1" placeholder style="width: 150px"/>
            </div>
            <div class="fl" style="margin-left:10px;">
              发布者:
              <Input v-model="value2" placeholder style="width: 150px"/>
            </div>
            <div class="fl" style="margin-left:10px;">
              <Button>Default</Button>
            </div>
          </div>
          <div class="operationSearch clearfix" style="display:flex;flex-direction: column">
            <div>
              <div class="fl">
                <Select v-model="model1" style="width:100px">
                  <Option
                    v-for="item in cityList"
                    :value="item.value"
                    :key="item.value"
                  >{{ item.label }}</Option>
                </Select>
              </div>
              <div class="fl" style="margin-left:10px;">
                <Select v-model="model1" style="width:100px">
                  <Option
                    v-for="item in cityList"
                    :value="item.value"
                    :key="item.value"
                  >{{ item.label }}</Option>
                </Select>
              </div>
              <div class="fl" style="margin-left:10px;">
                <CheckboxGroup v-model="fruit">
                  <Checkbox label="固定"></Checkbox>
                  <Checkbox label="推荐"></Checkbox>
                </CheckboxGroup>
              </div>
            </div>

            <RadioGroup v-model="animal">
              <Radio label="本站内容"></Radio>
              <Radio label="草稿"></Radio>
              <Radio label="待审"></Radio>
              <Radio label="已审"></Radio>
              <Radio label="终审"></Radio>
              <Radio label="已退回"></Radio>
            </RadioGroup>
          </div>
        </Header>
        <Content style="background:#FFF;padding:0 15px;">
          <router-view></router-view>
        </Content>
        <Footer style="background:#FFF;padding:0 15px">Footer</Footer>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data1: [
        {
          title: "parent 1",
          expand: true,
          disabled: true,
          children: [
            {
              title: "jecms1",
              expand: true,
              pathname: "jjjj"
            },
            {
              title: "jecms2",
              expand: true
            }
          ]
        }
      ],
      value1: "",
      fruit: [],
      animal: "",
      cityList: [],
      value2: "",
      model1: []
    };
  },
  created() {
    fetch("http://localhost:3000/usersee/api/get")
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      });
  },
  methods: {
    add(data, b) {
      console.log(data);
      console.log("------");
      console.log(b);
      this.$router.push( b.title);
    }
  }
};
</script>


<style scoped>
.operationBox {
  display: flex;
}
</style>
<style lang="scss">
.operationBox {
  .ivu-tree-children {
    li {
      margin: 0;
    }
  }
  .ivu-layout-header {
    height: auto;
  }
  .operationRight {
    margin-left: 20px;
  }
  .operationSearch {
    margin-left: 20px;
    border-bottom: 1px dashed #e7ecf3;
  }
  * {
    font-size: 16px;
  }
  .ivu-radio-wrapper {
    margin-right: 30px;
  }
  .ivu-radio-group {
    line-height: 40px;
  }
}
</style>

