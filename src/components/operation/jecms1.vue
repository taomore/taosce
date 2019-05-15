<template>
  <div style="width:100%;">
    <Table stripe :columns="columns1" :data="nowData" size="small"></Table>
    <div style="float:right">
      <div style="float:left;margin-right:20px;">
        每页显示
        <Input v-model.number="pageSize" style="width: 50px;line-height:45px;" type="number"/>条,输入后按回车键
      </div>
      <Page
        :total="dataCount"
        show-total
        :page-size="pageSize"
        @on-change="changepage"
        @on-page-size-change="_nowPageSize"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns1: [
        {
          type: "selection",
          width:"80",
          align: 'center'
        },
        {type: 'index',
          title: "id",
          key: "id",
          width:"80"
        },
        {
          title: "标题",
          key: "age",
          width:"280"

        },
        {
          title: "发布者",
          key: "address"
        },
        {
          title: "发布时间",
          key: "date"
        },
        {
          title: "状态",
          key: "name"
        }
      ],
      data1: [
        {
          name: "审核通过",
          age: 18,
          address: "admin",
          date: "2016-10-03",
          id: 1
        },
        {
          name: "审核通过",
          age: 24,
          address: "admin",
          date: "2016-10-01"
        },
        {
          name: "审核通过",
          age: 30,
          address: "admin",
          date: "2016-10-02"
        },
        {
          name: "审核通过",
          age: 26,
          address: "admin",
          date: "2016-10-04"
        }
      ],
      nowData: [],
      pageSize: 2, //每页显示多少条
      dataCount: 0, //总条数
      pageCurrent: 1, //当前页
      value: 4
    };
  },
  created() {
    this.getdate();
  },
  methods: {
    getdate() {
      //分页显示所有数据总数
      this.dataCount = this.data1.length;
      //循环展示页面刚加载时需要的数据条数
      this.nowData = [];

      for (let i = 0; i < this.pageSize; i++) {
        this.nowData.push(this.data1[i]);
      }
    },
    changepage(index) {
      //需要显示开始数据的index,(因为数据是从0开始的，页码是从1开始的，需要-1)
      let _start = (index - 1) * this.pageSize;
      //需要显示结束数据的index
      let _end = index * this.pageSize;
      //截取需要显示的数据
      this.nowData = this.data1.slice(_start, _end);
      //储存当前页
      this.pageCurrent = index;
    },
    _nowPageSize(index) {
      //实时获取当前需要显示的条数
      this.pageSize = index;
    }
  },
  watch: {
    pageSize: function() {
        if(this.pageSize<=1){
            this.pageSize=1
        }
      this.getdate();
    }
  }
};
</script>

<style scoped>
.btn1 {
  float: left;
  display: inline-block;
}
.btn2 {
  float: right;
}
.ivu-page-item:hover {
  border-color: #2d8cf0;
  background: #2d8cf0;
  color: white;
}
li >>> .ivu-page-item {
  font-weight: 700;
}
</style>

