webpackJsonp([11],{"+HR9":function(t,a){},"34l2":function(t,a,i){t.exports=i.p+"static/img/integralBj1.d262770.jpg"},QdVH:function(t,a,i){t.exports=i.p+"static/img/integralBj2.7b8c35f.jpg"},davj:function(t,a){},ibuy:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=i("lC5x"),n=i.n(e),s=i("J0Oq"),r=i.n(s),c=i("p+v9"),o=i("iEin"),g={data:function(){return{qrcode:"",active:"0",nowimg:i("xUKz"),show:!1,canvasWidth:.8*window.innerWidth*4,canvasHeight:.8*window.innerWidth*1.778*4,canImg:"",imgurl:[{url:i("xUKz"),id:1},{url:i("QdVH"),id:2},{url:i("34l2"),id:3}]}},methods:{getcode:function(){var t=this;return r()(n.a.mark(function a(){var i;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(c.a)();case 2:i=a.sent,t.qrcode=i.qrcode;case 4:case"end":return a.stop()}},a,t)}))()},getcanvas:function(){var t=this;this.show=!0,this.$showLoading();var a=Math.ceil(1e7*Math.random()),i=this.$refs.myCanvas,e={ctx:i.getContext("2d"),width:this.canvasWidth,height:this.canvasHeight};o.a.init(e),o.a.drawImage(this.nowimg+"?"+a,{width:this.canvasWidth,height:this.canvasHeight}).then(function(){o.a.drawImage(t.$store.state.userInfo.headimg+"?"+a,{x:.39*t.canvasWidth,y:.216*t.canvasHeight,width:.187*t.canvasWidth,height:.09*t.canvasHeight,radius:40}).then(function(){o.a.drawImage(t.qrcode+"?"+a,{x:.367*t.canvasWidth,y:.64*t.canvasHeight,width:.234*t.canvasWidth,height:.234*t.canvasWidth}).then(function(){var a;a=0==t.active?"#8a5a2c":"#fff",o.a.fillText(t.$store.state.userInfo.nickname,{fontSize:56,padding:30,y:.36*t.canvasHeight,fillStyle:a}),o.a.fillText("向你推荐了优质知识店铺",{fontSize:56,padding:30,y:.41*t.canvasHeight,fillStyle:a}),o.a.fillText("不可错过的精品课程",{fontSize:80,padding:30,y:.51*t.canvasHeight,fillStyle:a}),o.a.fillText("邀请你和我一起成长",{fontSize:64,padding:30,y:.56*t.canvasHeight,fillStyle:a}),o.a.fillText("长按二维码 分享给好友",{fontSize:48,padding:30,y:.82*t.canvasHeight,fillStyle:a}),o.a.fillText("KESION@科讯 提供技术支持",{fontSize:48,padding:30,y:.965*t.canvasHeight,fillStyle:"#fff"})}).then(function(){t.canImg=i.toDataURL("image/png"),t.$hideLoading()})})})},getimg:function(t,a){this.active=a,this.nowimg=t.url,this.getcanvas()}},mounted:function(){var t=this;return r()(n.a.mark(function a(){return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.getcode();case 2:case"end":return a.stop()}},a,t)}))()}},l={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("van-overlay",{attrs:{show:t.show},on:{click:function(a){t.show=!1}}},[e("div",{staticClass:"regbj"}),t._v(" "),e("div",{staticClass:"Canvas"},[e("canvas",{ref:"myCanvas",staticClass:"canvas-can",attrs:{width:t.canvasWidth,height:t.canvasHeight}}),t._v(" "),t.canImg?e("img",{staticClass:"canImg-image",style:{width:t.canvasWidth/4+"px",height:t.canvasHeight/4+"px"},attrs:{src:t.canImg}}):t._e()]),t._v(" "),e("div",{staticClass:"intImage",on:{click:function(t){t.stopPropagation()}}},t._l(t.imgurl,function(a,n){return e("div",{key:n,staticClass:"intImage-img",on:{click:function(i){return t.getimg(a,n)}}},[t.active==n?e("img",{staticClass:"intImage-img__right",attrs:{src:i("u9nF"),alt:""}}):t._e(),t._v(" "),e("ks-image",{class:["intImage-img--ks",n==t.active?"isactive":""],attrs:{src:a.url}})],1)}),0)])],1)},staticRenderFns:[]};var u={components:{regIntegral:i("C7Lr")(g,l,!1,function(t){i("davj")},"data-v-1aaf1916",null).exports},data:function(){return{list:[],score:""}},methods:{getlist:function(){var t=this;return r()(n.a.mark(function a(){var i;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(c.b)();case 2:i=a.sent,t.list=i.config_data,t.score=i.score;case 5:case"end":return a.stop()}},a,t)}))()},goOperation:function(t){var a=void 0;switch(this.$store.ready(function(t){a=t.userInfo.userid}),t){case"0":this.$refs.integral.getcanvas();break;case"4":this.$router.push("/course?categoryid=0&coursetype=1&userid="+a);break;case"3":this.$router.push("/course?categoryid=0&coursetype=3&userid="+a);break;case"2":this.$router.push("/course?categoryid=0&coursetype=1&userid="+a);break;case"1":this.$router.push("/course?categoryid=0&coursetype=4&userid="+a);break;case"5":this.$router.push("/course?categoryid=0&coursetype=3&userid="+a)}},gotodel:function(){this.$router.push("/user/integraldel")}},activated:function(){this.$store.ready(function(t){}),document.title="我的积分",this.getlist()}},d={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[e("div",{staticClass:"intlhead"},[e("div",{staticClass:"intlhead-num"},[e("img",{staticClass:"intlhead-num__img",attrs:{src:i("tme5"),alt:""}}),t._v(" "),e("span",[t._v(t._s(t.score))])]),t._v(" "),e("div",{staticClass:"intlhead-del"},[e("span",{on:{click:t.gotodel}},[t._v("积分明细"),e("img",{attrs:{src:i("tgOa"),alt:""}})])])]),t._v(" "),e("div",{staticClass:"inttitle"},[t._v("\n        做任务赚积分\n    ")]),t._v(" "),e("div",{staticClass:"intcontent"},t._l(t.list,function(a,i){return e("div",{key:i,staticClass:"intcontent-list"},[e("div",{staticClass:"intcontent-list__left"},[e("div",{staticClass:"intcontent-list__left--img"},[e("img",{attrs:{src:a.img,alt:""}})]),t._v(" "),e("div",{staticClass:"intcontent-list__left--msg"},[e("p",{staticClass:"intcontent-list__left--title"},[t._v(t._s(a.name))]),t._v(" "),e("p",{staticClass:"intcontent-list__left--num"},[t._v("+"+t._s(a.reward)+"积分")])])]),t._v(" "),e("div",{staticClass:"intcontent-list__right",on:{click:function(i){return t.goOperation(a.type)}}},[4==a.type?e("span",[t._v("去观看")]):5==a.type?e("span",[t._v("去收听")]):e("span",[t._v("去分享")])])])}),0),t._v(" "),e("reg-integral",{ref:"integral"})],1)},staticRenderFns:[]};var h=i("C7Lr")(u,d,!1,function(t){i("+HR9")},"data-v-e468a2ac",null);a.default=h.exports},tgOa:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABR0lEQVRYR+2WPUvEQBCGL42tltfanq2trZyVjcXJiQQRFBQbhUPExkLkDq7xAxSuOMQP/AX673wGUoQBYWd2MChZeFkyZPM+vLuZpOg0PIqG/TstwJ9KoMd52UJXkecmNQEx/0Ar6AJdR0GkAohfHWLE9TgCwgKgIU4pTHMhrAAa4oTCbQ6EB0BDHFF48EJ4ATTEAYUnD0QOgIbYpzCzQuQCaIiSwtwCEQGgIXYovKRCRAFoiG0K7ykQkQDiJ236En2h/m8DTDA8Q59oI8Vc7olK4I5nST94Rrup5lEA8urtIWnL0p5NIzeBN9wG6BzdmJyrm70AC6yXz/MmOkb3HnPvFixW5uvMh+jRa+4B6Fbma8yu1qthLVuwXJmvMpfI1HJ/SikVoP43NORhrzmx19emAsiaJST7LocvbFgAwky9CbQA/zOBb3ehKiFVo7uXAAAAAElFTkSuQmCC"},tme5:function(t,a){t.exports="data:image/png;base64,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"},u9nF:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAACPUlEQVRIibXWzUtUYRTH8c+9o0OEE4wJtXBh5AvZsjRSk0ooMILatMoK+huC/Avqj6gIWhTRrnKIaJOiErgwMMwX2ugqUIyBynBsce+Uyp3xZcYf3M1zzvP7cu99nnNOsPBy0DYKcA5X0I1mZOPYMuYwijcYxno5s5oysRB3MBhDknQkfrpxL4Y/wFMUSpkm6RjG8bgMLEnN8Z7x2GNHwPP4hI5dgLaqI/bo3Q54Ce/QUAGsqAa8x+VSwDa8QroKsKLSsWfbVmAKz5CpIqyoutg7tRF4W2X/bDt1iE68UHTPtr2MO1WQqhGkapNC9xGEopO0m6NfFlbfNeBwz60kaDN6Q/RXE3bgaIt0Q5N0fWNSWn+IrmrC1gtrlsdf+P39W1Lq2RAt1Yb9XJwqld4a+l+I9xsG2VK1FBxsOiXTfrFaMETdYllU8TcpXd8oe/o6QSgIAj+mPlQMw3KI2aTI6tKC/OwoyLT3OXSyr1IYzNRgDD1J0ZXJIVDX2iPT3kcQqs02/oMtjT/3a/HLTmEwFuJtuYyVySH5r8Mgc+JCJTAYCvFR1KlLQz/n5GdGoBLYHIZrRDPIQzwqC50csl5Y82dpYS8wMaMQxENUSjQWnN6L0w40gTNYK97DNQwgvw+wPG7GjE0dfxo3sFpF2GrsOV1c2FppcrimOm+aj71yGxeTSltO1KEnKoBNxB65rYFStXQanbiL+V2A5uM9nTZ8xo0qN3kX8EQ0Rffgqqh3Hrd51J8XjfqvMaLExF3UXzljwahlIToGAAAAAElFTkSuQmCC"},xUKz:function(t,a,i){t.exports=i.p+"static/img/integralBj3.5cb26ef.jpg"}});