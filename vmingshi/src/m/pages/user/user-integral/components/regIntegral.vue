<template>
    <div>
        <van-overlay :show="show" @click="show = false">
            <div class="regbj"></div>
            <div class="Canvas">
                <canvas
                    ref="myCanvas"
                    :width="canvasWidth"
                    :height="canvasHeight"
                    class="canvas-can"
                ></canvas>
                <img
                    v-if="canImg"
                    :src="canImg"
                    class="canImg-image"
                    :style="{width:canvasWidth / 4+'px',height:canvasHeight / 4 +'px'}"
                >
            </div>
            <div class="intImage" @click.stop>
                <div
                    v-for="(item,i) in imgurl"
                    :key="i"
                    class="intImage-img"
                    @click="getimg(item,i)"
                >
                    <img
                        src="@/m/assets/integral/poster_icon_select.png"
                        class="intImage-img__right"
                        alt=""
                        v-if="active == i"
                    >
                    <ks-image
                        :src="item.url"
                        :class="['intImage-img--ks',i == active ? 'isactive':'']"
                    ></ks-image>
                </div>
            </div>
        </van-overlay>
    </div>
</template>

<script>
import CanvasTool from "@/utils/canvas.tool.js";
import { inviterQr } from "@/api/integral";
export default {
  data() {
    return {
      /**二维码地址 */
      qrcode: "",
      active: "0",
      nowimg: require("@/m/assets/integral/integralBj3.jpg"),
      show: false,
      /**画布宽度 */
      canvasWidth: window.innerWidth * 0.8 * 4,
      /**画布高度 */
      canvasHeight: window.innerWidth * 0.8 * 1.778 * 4,
      canImg: "",
      imgurl: [
        { url: require("@/m/assets/integral/integralBj3.jpg"), id: 1 },
        { url: require("@/m/assets/integral/integralBj2.jpg"), id: 2 },
        { url: require("@/m/assets/integral/integralBj1.jpg"), id: 3 }
      ]
    };
  },
  methods: {
    async getcode() {
      const data = await inviterQr();
      this.qrcode = data.qrcode;
    },
    getcanvas() {
      this.show = true
      this.$showLoading();
      let rnd = Math.ceil(Math.random() * 1e7);
      var c = this.$refs.myCanvas;
      var ctx = c.getContext("2d");
      let Obj = {
        ctx: ctx,
        width: this.canvasWidth,
        height: this.canvasHeight
      };
      CanvasTool.init(Obj);
      CanvasTool.drawImage(this.nowimg + `?${rnd}`, {
        width: this.canvasWidth,
        height: this.canvasHeight
      }).then(() => {
        CanvasTool.drawImage(this.$store.state.userInfo.headimg + `?${rnd}`, {
          x: this.canvasWidth * 0.39,
          y: this.canvasHeight * 0.216,
          width: this.canvasWidth * 0.187,
          height: this.canvasHeight * 0.09,
          radius: 40
        }).then(() => {
          CanvasTool.drawImage(this.qrcode + `?${rnd}`, {
            x: this.canvasWidth * 0.367,
            y: this.canvasHeight * 0.64,
            width: this.canvasWidth * 0.234,
            height: this.canvasWidth * 0.234
          })
            .then(() => {
              let fillStyle;
              fillStyle = this.active == 0 ? "#8a5a2c" : "#fff";
              CanvasTool.fillText(this.$store.state.userInfo.nickname, {
                fontSize: 14 * 4,
                padding: 30,
                y: this.canvasHeight * 0.36,
                fillStyle: fillStyle
              });
              CanvasTool.fillText("向你推荐了优质知识店铺", {
                fontSize: 14 * 4,
                padding: 30,
                y: this.canvasHeight * 0.41,
                fillStyle: fillStyle
              });
              CanvasTool.fillText("不可错过的精品课程", {
                fontSize: 20 * 4,
                padding: 30,
                y: this.canvasHeight * 0.51,
                fillStyle: fillStyle
              });
              CanvasTool.fillText("邀请你和我一起成长", {
                fontSize: 16 * 4,
                padding: 30,
                y: this.canvasHeight * 0.56,
                fillStyle: fillStyle
              });
              CanvasTool.fillText("长按二维码 分享给好友", {
                fontSize: 12 * 4,
                padding: 30,
                y: this.canvasHeight * 0.82,
                fillStyle: fillStyle
              });
              CanvasTool.fillText("KESION@科讯 提供技术支持", {
                fontSize: 12 * 4,
                padding: 30,
                y: this.canvasHeight * 0.965,
                fillStyle: "#fff"
              });
            })
            .then(() => {
              this.canImg = c.toDataURL("image/png");
              this.$hideLoading();
            });
        });
      });
    },
    getimg(item, i) {
      this.active = i;
      this.nowimg = item.url;
      this.getcanvas();
    }
  },
  async mounted() {
    await this.getcode();
  }
};
</script>

<style scoped>
.van-overlay {
  background-color: rgba(0, 0, 0, 0.7);
}
.Canvas {
  margin-top: 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.regbj {
  background-color: rgba(0, 0, 0, 0.3);
  filter: blur(160px);
  width: 100%;
  height: 100%;
  position: absolute;
}
.intImage {
  display: flex;
  justify-content: center;
  background-color: #fff;
  position: absolute;
  left: 0px;
  bottom: 0;
  width: 100%;
  padding: 5px 0;
}
.intImage-img {
  margin-right: 15px;
  position: relative;
}
.intImage-img--ks {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.isactive {
  opacity: 0.6;
  filter: brightness(0.5);
}
.intImage-img__right {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
}
.canvas-can{
    display: none;
}
</style>
