<template>
  <div id="eight" style="height:600px;">
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Components</BreadcrumbItem>
      <BreadcrumbItem>Layout</BreadcrumbItem>
    </Breadcrumb>
    <Content
      :style="{padding: '24px', height: '100%', background: '#fff',display:'flex',flexDirection:'column'}"
    >
      <div style="display:flex; width:100%; ">
        <div style="border-right:solid 1px black; width:200px;height:100%; padding-right:20px;">
          <Tree :data="data1" style="margin-right:10px; width:100px;"></Tree>
        </div>
        <div style="width:85%;"  >
          <!-- 按钮 -->
        
        <!-- <Tb1/> -->
          <router-view />
          <!-- 列表 -->
          <!-- <Table border :columns="columns12" :data="data6" style="margin-left:20px; width:100%; ">
            <template slot-scope="{ row }" slot="name">
              <strong>{{ row.name }}</strong>
            </template>
            <template slot-scope="{ row, index }" slot="action">
              <Button
                type="primary"
                size="small"
                style="margin-right: 5px"
                @click="show(index)"
              >View</Button>
              <Button type="error" size="small" @click="remove(index)">Delete</Button>
            </template>
          </Table> -->
          <!-- <Button style=" margin-left:10px; margin-right:10px;margin-top:10px; border:1px solid gray; color:gray;" disabled="false" type="default" ghost>批量删除</Button> -->
          <!-- <Button style="border:1px solid gray; color:gray;margin-top:10px; " disabled="false" type="default" ghost>保存排列顺序</Button> -->
        </div>
      </div>
    </Content>
  </div>
</template>
<script>
import Tb1 from "./zt-con-bottom"

export default {
  
  name:'eight',
  components:{
    Tb1,


  },




  data() {
    return {
      data1: [
        {
          title: "parent 1",
          expand: true,
          children: [
            {
              title: "parent 1-1",
              expand: true
            },
            {
              title: "parent 1-2",
              expand: true
            }
          ]
        }
      ],




          columns12: [
                    {
                        title: 'Name',
                        slot: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    },
                    {
                        title: 'Action',
                        slot: 'action',
                        width: 150,
                        align: 'center'
                    }
                ],
                data6: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park'
                    }
                ],
            

    };
    
  },
   methods: {
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            }
        }
};
</script>

