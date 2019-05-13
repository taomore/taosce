<template>
  <div style="font-size:14px;" id="changepage"  >
    <img
      to="zt-con-bottom"
      src="../../public/img/back.png"
      style="position:relative; left:95%;"
      alt
    >
    <div
      style="display:flex;height:50px;align-items:center;margin-left:20px; border-bottom:1px dashed gray; padding-bottom:10px; "
    >
      <span>上级部门：</span>
      <Col span="6" style="padding-right:10px">
        <Select v-model="model11" filterable>
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </Col>
      <span style="margin-left:20px;">部门名称：</span>
      <Input v-model="value1" size="large" style="width:300px;" placeholder="large size"/>
    </div>
    <div
      style=" margin-left:20px;margin-top:20px; display:flex; align-items:center; border-bottom:1px dashed gray; padding-bottom:20px; "
    >
      <span>排序：</span>
      <Input size="large" style="width:200px; margin-left:20px;" placeholder="large size"/>
      <span style="margin:0 20px 0 60px;">留言审核权限：</span>
      <Checkbox v-model="single">普通</Checkbox>
      <Checkbox v-model="single">投诉</Checkbox>
    </div>
    <div
      style="   display:flex; margin-left:20px; justify-content:space-around;  height:200px; margin-top:40px;  padding-bottom:20px;"
    >
      <div style=" display:flex;wdith:200px; justify-content:space-around; margin-right:200px; ">
        <span>栏目权限：</span>

        <Tree style="width:100px;" :data="data3" show-checkbox multiple></Tree>
      </div>
      <div style=" display:flex;wdith:200px; justify-content:space-around; margin-left:40px; ">
        <span>栏目权限控制：</span>
        <Tree :data="data4" show-checkbox multiple></Tree>
      </div>
    </div>
    <div style="display:flex; justify-content:center; margin-top:20px;  ">
      <Button style="font-size:14px;" type="warning">保存并继续添加</Button>
      <Button type="primary" style=" font-size:14px; margin-right:20px; margin-left:20px;">提交</Button>
      <Button style=" font-size:14px; background:gray; color:white;">重置</Button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cityList: [
        {
          value: "Paris",
          label: "一级部门"
        },
        {
          value: "Canberra",
          label: "二级部门"
        }
      ],
      model11: "",
      model12: [],
      // 树状图
      data4: [
        {
          title: "parent 1",
          expand: true,
          selected: true,
          children: [
            {
              title: "parent 1-1",
              expand: true,
              children: [
                {
                  title: "leaf 1-1-1",
                  disabled: true
                },
                {
                  title: "leaf 1-1-2"
                }
              ]
            },
            {
              title: "parent 1-2",
              expand: true,
              children: [
                {
                  title: "leaf 1-2-1",
                  checked: true
                },
                {
                  title: "leaf 1-2-1"
                }
              ]
            }
          ]
        }
      ],
      data3: [
        {
          title: "parent 1",
          expand: true,
          selected: true,
          children: [
            {
              title: "parent 1-1",
              expand: true,
              children: [
                {
                  title: "leaf 1-1-1",
                  disabled: true
                },
                {
                  title: "leaf 1-1-2"
                }
              ]
            },
            {
              title: "parent 1-2",
              expand: true,
              children: [
                {
                  title: "leaf 1-2-1",
                  checked: true
                },
                {
                  title: "leaf 1-2-1"
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>
