webpackJsonp([84],{Ou5T:function(t,a){},qC4w:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("JJ8z"),s=e("Foau"),d={name:"DataView",data:function(){return{loaded:!1,detail:{}}},methods:{download:function(){Object(s.a)({id:this.$route.params.id}).then(function(t){"success"===t.result&&(location.href=t.file_path)})},buyData:function(){this.$showPay({payid:this.$route.params.id,price:this.detail.price,msg:"购买资料",type:"data"})}},activated:function(){var t=this;this.$showLoading(),this.loaded=!1,this.detail={},Object(s.b)({id:this.$route.params.id}).then(function(a){if("success"===a.result){1==a.detail.isbuy||0==a.detail.chargetype||"0.00"===a.detail.price?a.detail.isCanDownload=!0:a.detail.isCanDownload=!1;var e=a.detail.file_name.split("."),i=e?e[e.length-1]:"";a.detail.type=i,t.detail=a.detail,t.loaded=!0,t.$hideLoading()}})},components:{DataFormat:i.a}},l={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.loaded?e("div",{staticClass:"data-view"},[e("div",{staticClass:"data-view__format"},[e("data-format",{attrs:{type:t.detail.type,height:"80px"}}),t._v("\n    资料大小："+t._s(t.detail.size||"未知")+"\n  ")],1),t._v(" "),e("ks-form",[e("ks-form-item",{attrs:{label:"资料名称"}},[t._v("\n      "+t._s(t.detail.title)+"\n      "),1==t.detail.chargetype&&1==t.detail.isbuy?e("span",{staticClass:"ks-tag",staticStyle:{position:"relative",top:"-3px"}},[t._v("已购买")]):t._e()]),t._v(" "),e("ks-form-item",{attrs:{label:"下载次数"}},[t._v(t._s(t.detail.down_num))]),t._v(" "),e("ks-form-item",{attrs:{label:"资料介绍"}},[t._v(t._s(t.detail.intro||"暂无介绍"))]),t._v(" "),e("ks-form-item",{attrs:{label:"价格"}},[1==t.detail.chargetype&&"0.00"!==t.detail.price?e("span",{staticClass:"ks-color-primary ks-fz18 data-view__price"},[e("i",[t._v("¥")]),t._v("\n        "+t._s(t.detail.price)+"\n      ")]):e("span",{staticClass:"ks-color-success"},[t._v("免费")])])],1),t._v(" "),e("div",{staticClass:"data-view__download"},[t.detail.isCanDownload?e("ks-button",{attrs:{width:"100%",type:"success"},on:{click:t.download}},[t._v("下载资料")]):e("ks-button",{attrs:{width:"100%",type:"primary"},on:{click:t.buyData}},[t._v("购买资料")])],1),t._v(" "),e("store-footer")],1):t._e()},staticRenderFns:[]};var o=e("C7Lr")(d,l,!1,function(t){e("Ou5T")},"data-v-4b530d46",null);a.default=o.exports}});