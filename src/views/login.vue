<template>
  <div class="hello">
    <canvas id="canvas"></canvas>
    <div class="LoginBox">
      <img src="../assets/login-logo.png" alt>
      <div class="LoginInputbox">
        <Input v-model="name" placeholder="test" style="width: 300px" class="Loginname"/>
        <Icon type="md-person"/>
      </div>
      <div class="LoginInputbox">
        <Input v-model="pass" placeholder="test" style="width: 300px" class="Loginpass"/>
        <Icon type="ios-key"/>
      </div>
      <router-link to="/index" tag="Button" type="warning" style="width: 300px">登录</router-link>
    </div>
    <div class="loginFoot">
      <p>ICP备案号：赣ICP备13005266号</p>
      <p>Powered by JeeCms Copyright © 2007-2017 www.jeecms.com, All Rights Reserved</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  props: {
    msg: String
  },
  data() {
    return {
      canvas: null,
      ctx: null,
      w: 0,
      h: 0,
      circles: [],
      name: "",
      pass: ""
    };
  },
  computed: {},
  watch: {},
  destroyed() {},
  methods: {
    newobject(x, y) {
      var object = new Object();

      object.x = x;

      object.y = y;

      object.r = Math.random() * 3;

      object._mx = Math.random();

      object._my = Math.random();

      this.circles.push(object);
    },

    drawCircle(obj) {
      this.ctx.beginPath();

      this.ctx.arc(obj.x, obj.y, obj.r, 0, 360);

      this.ctx.closePath();

      this.ctx.fillStyle = "rgba(204, 204, 204, 0.3)";

      this.ctx.fill();
    },

    drawLine(obj1, obj) {
      let dx = obj1.x - obj.x;

      let dy = obj1.y - obj.y;

      let d = Math.sqrt(dx * dx + dy * dy);

      if (d < 60) {
        this.ctx.beginPath();

        this.ctx.lineWidth = 0.5;

        this.ctx.moveTo(obj1.x, obj1.y); //start

        this.ctx.lineTo(obj.x, obj.y); //end

        this.ctx.closePath();

        this.ctx.strokeStyle = "rgba(204, 204, 204, 0.3)";

        this.ctx.stroke();
      }
    },

    move(obj) {
      obj._mx = obj.x < this.w && obj.x > 0 ? obj._mx : -obj._mx;

      obj._my = obj.y < this.h && obj.y > 0 ? obj._my : -obj._my;

      obj.x += obj._mx / 2;

      obj.y += obj._my / 2;
    },

    draw() {
      this.ctx.clearRect(0, 0, this.w, this.h);

      for (let i = 0; i < this.circles.length; i++) {
        this.move.call(this.circles[i], this.circles[i]);

        this.drawCircle.call(this.circles[i], this.circles[i]);

        for (let j = i + 1; j < this.circles.length; j++) {
          this.drawLine.call(this.circles[i], this.circles[i], this.circles[j]);
        }
      }

      requestAnimationFrame(this.draw);
    },

    init(num) {
      for (var i = 0; i < num; i++) {
        this.newobject(Math.random() * this.w, Math.random() * this.h);
      }

      this.draw();
    }
  },
  created: function() {},
  components: {},
  mounted() {
    window.requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame;

    this.canvas = document.getElementById("canvas");

    this.ctx = canvas.getContext("2d");

    this.w = canvas.width = canvas.offsetWidth;

    this.h = canvas.height = canvas.offsetHeight;

    this.init(180);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (max-height: 500px) {
  .loginFoot {
    display: none;
  }
}
#canvas {
  height: 100%;
  width: 100%;
  margin: 0 auto;
}
.ivu-btn-default {
  background: rgb(241, 181, 51);
  border-color: rgb(241, 181, 51);
  margin-top: 20px;

}
.ivu-input-default {
  position: relative;
  right: 15px;
}
.loginFoot {
  text-align: center;
  position: absolute;
  bottom: 30px;
  left: 33%;
}
.ivu-icon-ios-key,
.ivu-icon-md-person {
  font-size: 22px;
  position: relative;
  right: 30px;
}
.LoginInputbox {
  position: relative;
}
.Loginname,
.Loginpass {
  margin: 20px auto;
  position: relative;
  left: 9.5px;
}
.hello {
  height: 100%;
  width: 100%;
  background: rgb(61, 120, 245);
}
.LoginBox {
  /* background: rgba(170, 189, 248, 0.1); */
  height: 310px;
  width: 1000px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -155px;
  margin-left: -500px;
  text-align: center;
}
</style>
