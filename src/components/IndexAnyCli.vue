<template>
  <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
    <Form :model="formItem" :label-width="80">
      <FormItem label="栏目">
        <Col span="12">
          <Select v-model="formItem.select">
            <Option value="beijing">New York</Option>
            <Option value="shanghai">London</Option>
            <Option value="shenzhen">Sydney</Option>
          </Select>
        </Col>
      </FormItem>
      <Divider  dashed/>
      <FormItem label="时间范围">
        <Row>
          <Col span="12">
            <DatePicker
              type="daterange"
              placement="right-start"
              placeholder="Select date"
              style="width: 200px"
            ></DatePicker>
          </Col>
        </Row>
      </FormItem>
      <Divider  dashed/>
      <FormItem label="每次生成数量">
        <Col span="12">
          <Input v-model="formItem.input" placeholder="Enter something..."></Input>
        </Col>
      </FormItem>
      <FormItem>
        <Button type="primary">生成索引</Button>
        <Button style="margin-left: 8px">取消</Button>
      </FormItem>
    </Form>
  </Content>
</template>

<script>
export default {
  data() {
    return {
      formItem: {
        input: "",
        select: "",
        radio: "male",
        checkbox: [],
        switch: true,
        date: "",
        time: "",
        slider: [20, 50],
        textarea: ""
      }
    };
  }
};
</script>

<style>
.ivu-form .ivu-form-item-label{
  padding: 10px 7px 9px 0!important;
  margin-right: 10px!important;

}
.ivu-form-item{
  margin-left: 70px;
}
.ivu-form-label-right{
  padding-top: 20px;
}
</style>
