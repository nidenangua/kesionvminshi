webpackJsonp([97],{Ype0:function(t,e){},nDRc:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("6L+O"),s={name:"",data:function(){return{info:{ordersn:"",expressNumber:"",logistics:"",adddate:"",number:"",title:""},date:[]}},computed:{},methods:{},activated:function(){var t=this,e=this.$route.query.sn;Object(n.n)({ordersn:e}).then(function(e){t.info=e.info,t.info.title=e.info.title.substring(0,5),t.date=e.data})}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("ul",{staticClass:"stice"},[i("li",[t._v("下单时间"),i("span",[t._v(t._s(t.info.adddate))])]),t._v(" "),i("li",[t._v("下单商品"),i("span",[t._v(t._s(t.info.title)+"...等共"+t._s(t.info.number)+"件商品")])]),t._v(" "),i("li",[t._v("物流快递"),i("span",[t._v(t._s(t.info.logistics))])]),t._v(" "),i("li",[t._v("快递单号"),i("span",[t._v(t._s(t.info.expressNumber))])])]),t._v(" "),i("div",{staticClass:"stice-item"},[t._v("物流信息")]),t._v(" "),i("ul",{staticClass:"stice-path"},t._l(t.date,function(e,n){return i("li",{key:n},[i("div",[t._v(t._s(e.time))]),t._v(" "),i("div",[t._v(t._s(e.context))])])}),0)])},staticRenderFns:[]};var r=i("C7Lr")(s,a,!1,function(t){i("Ype0")},"data-v-1762a820",null);e.default=r.exports}});