<template>
  <div id="nine">
   
    <Content
      :style="{padding: '24px', minHeight: '280px', background: '#fff',display:'flex',flexDirection:'column'}"
    >
      <div style="width:100%; border-bottom:1px dashed #c0c0c0; margin-bottom:20px;">
        <Button type="info" style="font-size:14px; margin-bottom:20px; width:100px;">发送站内信</Button>
      </div>
      <!-- 发送时间 -->
      <div style="width:100%; border-bottom:1px dashed #c0c0c0; padding-bottom:20px;">
        <Col span="12" style="font-size:14px; font-weight:550; width:900px; ">
          发送时间:
          <DatePicker
            type="daterange"
            :options="options2"
            placement="bottom-end"
            placeholder="Select date"
            style="width: 400px;margin-left:100px;"
          ></DatePicker>
        </Col>
      </div>
      <!-- 标题、信息来源、消息状态 -->
      <div
        style="width:100%; font-size:14px; font-weight:550; border-bottom:1px dashed #c0c0c0; padding-top:10px; padding-bottom:20px;"
      >
        标题：
        <Input placeholder="default size" style="width:200px; margin-right:10px;"/>消息来源：
        <Select v-model="model1" style="width:200px;margin-right:10px;">
          <Option
            v-for="item in cityList"
            :value="item.value"
            :key="item.value"
            style="margin-right:10px;"
          >{{ item.label }}</Option>
        </Select>消息状态：
        <Select v-model="model2" style="width:200px">
          <Option v-for="item in cityList2" :value="item.value" :key="item.value">{{ item.list }}</Option>
        </Select>
        <Button style="margin-left:20px;" type="primary" @click="handleSpinCustom">搜索</Button>
      </div>
      <pagechange></pagechange>
      <!-- 列表 -->
      <!-- <div style="padding-top:10px;">
        <Table border ref="selection" :columns="columns4" :data="data1"></Table>
        <div style="display:flex;">
          <Button style="margin-right:40px; margin-top:20px;" @click="handleSelectAll(true)">设置全选</Button>
          <Button style="margin-top:20px;" @click="handleSelectAll(false)">取消全选</Button>
        
          <div
            style="margin-left:20%; display:flex;  width:550px;height:50px; align-items:center; "
          >
          <div style="display:flex; align-items:center;">
            <span style="margin-top:20px; padding-left:40px; ">每页显示：</span>
            <Input v-model="inputnum"  style="width: 50px; margin-top:20px;"  />
            <span style="margin-top:20px; margin-left:5px;"> 条,输入后按回车</span>  
            </div>
            <Page
              :page-size="1"
              style="padding-top:20px; margin-left:5%;"
              :total="1"
              show-elevator
            />
          </div>
        </div>
      </div> -->
    </Content>
  </div>
</template>



  


<script>
import pagechange from "./yhgl-znx-nine-page"
export default {
name:"nine",
components:{
  pagechange,
  },




  data() {
    return {
      data: {},

      options1: {
        shortcuts: [
          {
            text: "Today",
            value() {
              return new Date();
            },
            onClick: picker => {
              this.$Message.info("Click today");
            }
          },
          {
            text: "Yesterday",
            value() {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              return date;
            },
            onClick: picker => {
              this.$Message.info("Click yesterday");
            }
          },
          {
            text: "One week",
            value() {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              return date;
            },
            onClick: picker => {
              this.$Message.info("Click a week ago");
            }
          }
        ]
      },
      options2: {
        shortcuts: [
          {
            text: "1 week",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              return [start, end];
            }
          },
          {
            text: "1 month",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              return [start, end];
            }
          },
          {
            text: "3 months",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              return [start, end];
            }
          }
        ]
      },
      cityList: [
        {
          value: "New York",
          label: "收件箱"
        },
        {
          value: "London",
          label: "发件箱"
        },
        {
          value: "Sydney",
          label: "垃圾箱"
        }
      ],
      model1: "",
      //   第二个选择框
      cityList2: [
        {
          value: "read",
          list: "已读"
        },
        {
          value: "noread",
          list: "未读"
        }
      ],
      model2: "",
      //   列表
      columns4: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "ID",
          key: "name"
        },
        {
          title: "年龄",
          key: "age"
        },
        {
          title: "地址",
          key: "address"
        }
      ],
      data1: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        }
      ]
    };
  },
  methods: {
    handleSelectAll(status) {
      this.$refs.selection.selectAll(status);
    },
    handleSpinShow() {
      this.$Spin.show();
      setTimeout(() => {
        this.$Spin.hide();
      }, 500);
    },
    handleSpinCustom() {
      this.$Spin.show({
        render: h => {
          return h("div", [
            h("Icon", {
              class: "demo-spin-icon-load",
              props: {
                type: "ios-loading",
                size: 18
              }
            }),
            h("div", "Loading")
          ]);
        }
      });
      setTimeout(() => {
        this.$Spin.hide();
      }, 500);
    }
  }
};
</script>
<style>
.demo-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}
</style>

