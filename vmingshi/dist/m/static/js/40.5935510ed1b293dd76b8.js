webpackJsonp([40],{"9Nws":function(t,e){},psRX:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("0xDb"),r=i("vMJZ"),a={name:"ToGift",data:function(){return{received:-1,isgiftsender:-1,numb:null,info:{},memberinfo:{}}},methods:{receive:function(){var t=this;0==this.isgiftsender?Object(r.K)({id:this.$route.query.id,ordersn:this.$route.query.ordersn}).then(function(e){"success"===e.result&&t.$toast(e.msg).then(function(){var e=Object(s.g)({type:t.$route.query.type,id:t.$route.query.id},"id");t.$router.push(e)})}):1==this.isgiftsender&&this.$showShareBg("gift")}},activated:function(){var t=this;this.$showLoading(),document.title="领取赠礼",this.numb=null,this.isgiftsender=-1,this.received=-1,this.info={},this.memberinfo={};var e=this.$route.query;Object(r.n)(e).then(function(e){t.info=e.info,e.memberinfo.headimg+="?"+Math.ceil(1e8*Math.random()),t.memberinfo=e.memberinfo,t.isgiftsender=e.isgiftsender,t.$wxShare({title:"请你免费学"+t.info.title,desc:"您的好友送您的一份大礼",imgUrl:t.info.defaultpic}),t.received=e.islq,t.numb=e.numb,t.$hideLoading()})}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"to-gift"},[s("div",{staticClass:"togift-wrap"},[s("img",{staticClass:"top-img",attrs:{src:i("ysZL")}}),t._v(" "),s("div",{staticClass:"topgift-con"},[s("div",{staticClass:"item",staticStyle:{display:"block"}},[s("ks-create-bg",{staticClass:"togiftuser",attrs:{src:t.memberinfo.headimg,type:"user"}}),t._v(" "),s("p",{staticClass:"togiftusername"},[t._v("赠送人:"+t._s(t.memberinfo.giftname))])],1),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"head"},[t._v("名称:")]),t._v(" "),s("div",{staticClass:"body"},[t._v(t._s(t.info.title))])]),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"head"},[t._v("类型:")]),t._v(" "),s("div",{staticClass:"body"},[0==t.$route.query.type&&1==t.info.courseType?s("span",[t._v("点播课程")]):0==t.$route.query.type&&2==t.info.courseType?s("span",[t._v("语音直播")]):0==t.$route.query.type&&3==t.info.courseType?s("span",[t._v("音频课程")]):0==t.$route.query.type&&4==t.info.courseType?s("span",[t._v("图文课程")]):1==t.$route.query.type?s("span",[t._v("直播课程")]):7==t.$route.query.type?s("span",[t._v("专栏")]):10==t.$route.query.type?s("span",[t._v("社群")]):t._e()])]),t._v(" "),s("div",{staticClass:"item",staticStyle:{"border-bottom":"none"}},[s("div",{staticClass:"head"},[t._v("价格：")]),t._v(" "),s("div",{staticClass:"body"},[t._v("￥"+t._s(t.info.price))])])])]),t._v(" "),1==t.received?s("div",{attrs:{align:"center"}},[s("ks-button",{staticClass:"gift-btn",attrs:{type:"primary",disabled:!0}},[t._v("已领取赠礼")])],1):null!==t.numb?s("div",{attrs:{align:"center"}},[t.numb>0?s("ks-button",{staticClass:"gift-btn",attrs:{type:"primary"},on:{click:t.receive}},[t._v(t._s(1==t.isgiftsender?"分享给好友":"领取赠礼"))]):s("ks-button",{staticClass:"gift-btn",attrs:{type:"primary",disabled:!0}},[t._v("已被领取完")])],1):t._e(),t._v(" "),s("store-footer")],1)},staticRenderFns:[]};var o=i("C7Lr")(a,n,!1,function(t){i("9Nws")},"data-v-3aaee600",null);e.default=o.exports},ysZL:function(t,e,i){t.exports=i.p+"static/img/bg_gift.4b0c392.png"}});