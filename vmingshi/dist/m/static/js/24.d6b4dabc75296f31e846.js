webpackJsonp([24],{"3yEb":function(t,a){},"4Cib":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("lC5x"),s=e.n(i),n=e("J0Oq"),c=e.n(n),r=e("vMJZ"),o={components:{cavansPopups:e("w8io").a},data:function(){return{info:{},tabActive:"0",tabList:[{name:"考试证书",val:"0"}],list:[],page:1,pageCount:1}},methods:{getList:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return c()(s.a.mark(function e(){var i;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.page=a,e.next=3,Object(r.r)({p:a,maxperpage:10});case 3:i=e.sent,t.list=1==a?i.list:t.list.concat(i.list),t.pageCount=i.page.total_pages;case 6:case"end":return e.stop()}},e,t)}))()},onPageChange:function(t){this.getList(t)},getcanvas:function(t,a){var e=this;this.info=t,this.$nextTick(function(){e.$refs.canvas.getcanvas()})}},activated:function(){this.getList()}},l={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[t.list&&t.list.length?e("ks-page-scroll-container",{attrs:{page:t.page,"page-count":t.pageCount},on:{"page-change":t.onPageChange}},[e("ks-tabs",{model:{value:t.tabActive,callback:function(a){t.tabActive=a},expression:"tabActive"}},t._l(t.tabList,function(t,a){return e("ks-tab-pane",{key:a,attrs:{label:t.name,name:t.val}})}),1),t._v(" "),e("div",{staticClass:"cerlist"},t._l(t.list,function(a,i){return e("div",{key:i,staticClass:"cerlist-every"},[e("div",{ref:"scream",refInFor:!0,staticClass:"cerlist-every--bg",style:{background:"url("+a.cover+") center center / 100% 100% no-repeat"},on:{click:function(e){return t.getcanvas(a,i)}}},[e("p",{class:["cerlist-every--bg__title","/Public/app/images/certificate_bg2.png"==a.cover?"bgactive":""]},[t._v(t._s(a.title))]),t._v(" "),e("div",{staticClass:"cerlist-every--bg__msg"},[e("ks-image",{staticClass:"cerlist-every--bg__image",attrs:{src:t.$store.state.userInfo.headimg,alt:""}}),t._v(" "),e("p",{class:["cerlist-every--bg__name","/Public/app/images/certificate_bg2.png"==a.cover?"bgactive":""]},[t._v(t._s(t.$store.state.userInfo.nickname))]),t._v(" "),e("p",{class:["cerlist-every--bg__grade","/Public/app/images/certificate_bg2.png"==a.cover?"bgactive":""]},[t._v(" 在"+t._s(a.info_title)+"获得了"+t._s(a.sumscore)+"分")]),t._v(" "),e("p",{class:["cerlist-every--bg__com","/Public/app/images/certificate_bg2.png"==a.cover?"bgactive":""]},[e("span",[t._v(t._s(a.json.comment))])])],1),t._v(" "),e("div",{staticClass:"certcon-tem__focus"},[e("div",{staticClass:"certcon-tem__focus--image"},[e("ks-image",{staticClass:"certcon-tem__focus--img",attrs:{src:a.qrcode,alt:""}})],1),t._v(" "),e("div",{staticClass:"certcon-tem__focus--info"},[e("div",{class:["certcon-tem__focus--name","/Public/app/images/certificate_bg2.png"==a.cover?"bgactive":""]},[t._v(t._s(a.share_title))]),t._v(" "),e("div",{class:["certcon-tem__focus--desc","/Public/app/images/certificate_bg2.png"==a.cover?"bgactive":""]},[t._v("识别二维码")])])])]),t._v(" "),e("p",{staticClass:"cerlist-every__time"},[t._v(t._s(a.adddate))])])}),0)],1):e("ks-empty",{attrs:{msg:"暂时没有任何成就"}}),t._v(" "),e("cavansPopups",{ref:"canvas",attrs:{info:t.info}})],1)},staticRenderFns:[]};var v=e("C7Lr")(o,l,!1,function(t){e("3yEb")},"data-v-2e6437ae",null);a.default=v.exports},lz9x:function(t,a){},w8io:function(t,a,e){"use strict";var i=e("iEin"),s={props:{info:Object},data:function(){return{flag:!1,canvasWidth:.88*window.innerWidth*4,canvasHeight:.88*window.innerWidth/.66*4,canImg:""}},methods:{getcanvas:function(){var t=this;this.$showLoading();var a=Math.ceil(1e7*Math.random()),e=this.$refs.myCanvas,s={ctx:e.getContext("2d"),width:this.canvasWidth,height:this.canvasHeight};i.a.init(s),i.a.drawImage(this.info.cover+"?"+a,{width:this.canvasWidth,height:this.canvasHeight,containerWidth:.8*this.canvasWidth}).then(function(){i.a.drawImage(t.$store.state.userInfo.headimg+"?"+a,{x:.406*t.canvasWidth,y:.262*t.canvasHeight,width:.187*t.canvasWidth,height:.11*t.canvasHeight,radius:40}).then(function(){i.a.drawImage(t.info.qrcode+"?"+a,{x:.164*t.canvasWidth,y:.76*t.canvasHeight,width:.22*t.canvasWidth,height:.22*t.canvasWidth}).then(function(){var a;a="/Public/app/images/certificate_bg2.png"==t.info.cover?"white":"black",i.a.fillText(t.info.title,{fontSize:72,padding:30,y:.235*t.canvasHeight,fillStyle:a}),i.a.fillText(t.$store.state.userInfo.nickname,{fontSize:64,padding:30,y:.425*t.canvasHeight,fillStyle:a}),i.a.fillText("在"+t.info.info_title+"获得了"+t.info.sumscore+"分",{fontSize:64,padding:30,y:.471*t.canvasHeight,fillStyle:a}),i.a.fillText(t.info.json.comment,{fontSize:64,padding:30,y:.606*t.canvasHeight,fillStyle:a}),i.a.fillText(t.info.share_title,{padding:30,x:.44*t.canvasWidth,y:.8*t.canvasHeight,fillStyle:a,fontSize:56}),i.a.fillText("长按保存二维码",{padding:30,x:.44*t.canvasWidth,y:.88*t.canvasHeight,fillStyle:"#bdbdb0",fontSize:56})}).then(function(){t.canImg=e.toDataURL("image/png"),t.flag=!0,t.$hideLoading()})})})}}},n={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("van-overlay",{attrs:{show:t.flag},on:{click:function(a){t.flag=!1}}},[e("div",{staticClass:"Canvas"},[e("canvas",{ref:"myCanvas",staticClass:"canvas-can",attrs:{width:t.canvasWidth,height:t.canvasHeight}})]),t._v(" "),e("div",{staticClass:"canImg"},[t.canImg?e("img",{staticClass:"canImg-image",style:{width:t.canvasWidth/4+"px",height:t.canvasHeight/4+"px"},attrs:{src:t.canImg}}):t._e(),t._v(" "),e("p",{staticClass:"operation"},[t._v("长按保存图片，发微信好友或微信群")])])])],1)},staticRenderFns:[]};var c=e("C7Lr")(s,n,!1,function(t){e("lz9x")},"data-v-4d8b5407",null);a.a=c.exports}});