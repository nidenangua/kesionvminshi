webpackJsonp([96],{"0mej":function(t,s){},"V7+N":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("a3Yh"),n=i.n(e),a=i("6L+O"),c={name:"",data:function(){var t;return t={changeColor:!1,isFirstLoad:!0,loaded:!1,filterType:"",pageCount:null},n()(t,"filterType",""),n()(t,"p",1),n()(t,"list",[]),t},computed:{},methods:{delAddress:function(t,s){var i=this;this.$confirm("确定要删除该收货地址？").then(function(){var e={id:s,type:1};Object(a.g)(e).then(function(s){i.list.splice(t,1)})})},defaultAddress:function(t){var s=this;this.$confirm("确定要默认该收货地址？").then(function(){var i={id:t};Object(a.f)(i).then(function(t){s.getList()})})},put:function(){this.$router.push("/editAddress")},editput:function(t){console.log(111),this.$router.push("/editAddress?id="+t)},getList:function(){var t=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$showLoading(),this.p=s,1==s&&(this.list=[]);var i={p:s,maxperpage:10};Object(a.b)(i).then(function(i){t.list=1==s?i.list:t.list.concat(i.list),t.pageCount=i.page.total_pages,t.loaded=!0,t.$hideLoading()})},selectsite:function(t){sessionStorage.setItem("index",t),this.$router.go(-1,"&index="+t)}},activated:function(){document.title="收货地址",this.getList()}},o={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"shipping"},[t.list.length?i("ks-page-scroll-container",{attrs:{page:t.p,"page-count":t.pageCount},on:{"page-change":t.getList}},t._l(t.list,function(s,e){return i("div",{key:e,staticClass:"letter-box",on:{click:function(s){return t.selectsite(e)}}},[i("div",{staticClass:"letter-container"},[i("div",{staticClass:"shipping-name"},[i("span",[t._v(t._s(s.realname))]),t._v("\n          "+t._s(s.telphone)+"\n        ")]),t._v(" "),i("div",{staticClass:"shipping-site"},[t._v("地址："+t._s(s.province)+t._s(s.city)+t._s(s.area)+t._s(s.street))]),t._v(" "),i("div",{staticClass:"shipping-btn"},[1==s.is_address?i("span",{staticClass:"changeColor"},[i("i",{staticClass:"ks-icon ks-icon-checkmark-circle-"})]):t._e(),t._v(" "),0==s.is_address?i("span",{on:{click:function(i){return i.stopPropagation(),t.defaultAddress(s.id)}}},[i("i",{staticClass:"ks-icon ks-icon-checkmark-circle-"})]):t._e(),t._v("\n          默认地址\n          "),i("span",{staticClass:"ks-fr"},[i("i",{staticClass:"ks-icon ks-icon-checkmark-square"}),t._v(" "),i("span",{on:{click:function(i){return i.stopPropagation(),t.editput(s.id)}}},[t._v("编辑")]),t._v(" "),i("i",{staticClass:"ks-icon ks-icon-trash--outline"}),t._v(" "),i("span",{on:{click:function(i){return i.stopPropagation(),t.delAddress(e,s.id)}}},[t._v("删除")])])])])])}),0):t.loaded?i("ks-empty",{attrs:{msg:"您还未添加任何收货地址",type:"nogift"}}):t._e(),t._v(" "),i("div",{staticClass:"shipping-add",on:{click:t.put}})],1)},staticRenderFns:[]};var r=i("C7Lr")(c,o,!1,function(t){i("0mej")},"data-v-17ebbdaa",null);s.default=r.exports}});