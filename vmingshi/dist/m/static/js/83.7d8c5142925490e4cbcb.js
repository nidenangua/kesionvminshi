webpackJsonp([83],{"Qr/I":function(t,s){},ohIz:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("X1H5"),r=e.n(a),i=e("0xDb"),o=e("vMJZ"),n={name:"CourseOrder",data:function(){return{value1:0,option1:[{text:"全部订单",value:0}],express:[{abridge:"rrs",logistics:"日日顺"},{abridge:"shunfeng",logistics:"顺丰"},{abridge:"ems",logistics:"EMS"},{abridge:"zhongtong",logistics:"中通"},{abridge:"yuantong",logistics:"圆通"},{abridge:"yuantong",logistics:"百世快递"}],one:"",expressNumber:"",hasToken:-1,page:1,pageCount:1,paystatus:-1,loaded:!1,datas:[],refund:!1,tel:"",wechat:"",tuikuanindex:-1,showFlag:!1,action:1,usertype:0,yorder_amount:0,order_amount:"",orderid:"",isprice:0,mark:"",extuserid:"0"}},deactivated:function(){this.showFlag=!1},methods:{dropdown:function(t){this.extuserid=t,this.getOrderList()},sure:function(){var t=this;if(1==this.action){if(""==this.order_amount)return this.$toast("请输入修改后价格"),!1;Object(o.l)({order_amount:this.order_amount,orderid:this.orderid}).then(function(s){"success"===s.result&&(t.$toast("修改成功","success"),t.showFlag=!1,t.getOrderList())})}else 2==this.action?Object(o.H)({mark:this.mark,orderid:this.orderid}).then(function(s){"success"===s.result&&(t.$toast("确认支付成功","success"),t.showFlag=!1,t.getOrderList())}):3==this.action&&Object(o.F)({expressNumber:this.expressNumber,orderid:this.orderid,abridge:this.one.abridge,logistics:this.one.logistics}).then(function(s){"success"===s.result&&(t.$toast("确认发货成功","success"),t.showFlag=!1,t.getOrderList())})},showbox:function(t,s,e){this.one="",this.order_amount="",this.expressNumber="",this.action=t,this.orderid=s,this.yorder_amount=e,this.showFlag=!0},changeTab:function(t){3==t&&(this.orderstatus=1,this.paystatus=3),4==t&&(this.orderstatus=2,this.paystatus=4),5==t&&(this.orderstatus=3,this.paystatus=5),-1!=t&&1!=t&&2!=t||(this.paystatus=t,this.orderstatus=-1),this.pageCount=null,this.loaded=!1,this.getOrderList()},delorder:function(t,s){var e=this;this.$confirm("确定要删除该订单吗？").then(function(){var a={ordersn:s};Object(o.i)(a).then(function(s){e.$toast(s.msg,"success").then(function(){e.datas.splice(t,1)})})})},open:function(t){location.href=t},openView:function(t,s){14==t.type||15==t.type?this.$router.push("/commodity?id="+t.courseid):12==t.type?this.$router.push("/activity/"+t.courseid):this.$router.push("/course/"+t.courseid)},chakanDetail:function(t){this.$router.push({name:"UserOrderInfo",params:{id:t}})},confirmReceip:function(t){var s=this;this.$confirm("是否确认收货？").then(function(){var e={ordersn:t};Object(o.g)(e).then(function(t){s.$toast(t.msg,"success").then(function(){s.getOrderList()})})})},logistics:function(t){this.$router.push("/logistics?sn="+t)},pay:function(t,s){"miniprogram"===window.__wxjs_environment?this.$store.ready(function(t){r.a.miniProgram.navigateTo({url:"/pages/pay/pay?wxid="+t.info.wxid+"&ordersn="+s})}):location.href=t},getOrderList:function(){var t=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$showLoading(),this.page=s;var e={paystatus:this.paystatus,orderstatus:this.orderstatus,p:this.page,maxperpage:10,extuserid:this.extuserid};Object(o.w)(e).then(function(s){1===t.page?t.datas=s.values:t.datas=t.datas.concat(s.values),t.pageCount=s.page.total_pages,t.loaded=!0,t.$hideLoading()})}},computed:{id:function(){return this.$route.query.id}},watch:{id:function(){void 0==this.$route.query.id?this.value1=0:this.value1=this.$route.query.id,void 0==this.$route.query.id?this.extuserid="0":this.extuserid=this.$route.query.id}},activated:function(){var t=this;document.title="我的订单",void 0==this.$route.query.id?this.value1=0:this.value1=this.$route.query.id,void 0==this.$route.query.id?this.extuserid="0":this.extuserid=this.$route.query.id,this.$store.ready(function(s){if(t.usertype=s.userInfo.usertype||0,Object(i.e)().h5token)return t.hasToken=1,void t.getOrderList();t.hasToken=0,0==s.isLogin?t.$router.push("/user/login"):(t.getOrderList(),0!=t.usertype&&Object(o.R)().then(function(s){0!=t.usertype&&s.list.map(function(s){t.option1.push({text:s.username,value:s.userid})})}))})}},u={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"page"},[e("ks-tabs",{on:{"tab-click":t.changeTab},model:{value:t.paystatus,callback:function(s){t.paystatus=s},expression:"paystatus"}},[e("ks-tab-pane",{attrs:{label:"全部",name:-1}}),t._v(" "),e("ks-tab-pane",{attrs:{label:"未付款",name:2}}),t._v(" "),e("ks-tab-pane",{attrs:{label:"已付款",name:1}}),t._v(" "),e("ks-tab-pane",{attrs:{label:"待发货",name:5}}),t._v(" "),e("ks-tab-pane",{attrs:{label:"待收货",name:3}}),t._v(" "),e("ks-tab-pane",{attrs:{label:"已收货",name:4}})],1),t._v(" "),t.usertype>0?e("van-dropdown-menu",[e("van-dropdown-item",{staticClass:"option1",attrs:{options:t.option1},on:{change:t.dropdown},model:{value:t.value1,callback:function(s){t.value1=s},expression:"value1"}})],1):t._e(),t._v(" "),t.datas.length?e("ks-page-scroll-container",{staticClass:"my-order-list",attrs:{page:t.page,"page-count":t.pageCount},on:{"page-change":t.getOrderList}},t._l(t.datas,function(s,a){return e("div",{key:a,staticClass:"item"},[e("div",{staticClass:"myList-time line"},[14!=s.type&&15!=s.type||0==s.paystatus?e("span",{staticClass:"status",class:0==s.paystatus&&"ks-color-error"},[t._v(t._s((0==s.paystatus?"待付款":1==s.paystatus&&"已付款")||2==s.paystatus&&"退款中"||3==s.paystatus&&"已退款"))]):t._e(),t._v(" "),14!=s.type&&15!=s.type||1!=s.paystatus?t._e():e("span",{staticClass:"status",class:0==s.orderstatus&&"ks-color-error"},[t._v(t._s((0==s.orderstatus?"待发货":1==s.orderstatus&&"待收货")||2==s.orderstatus&&"已收货"))]),t._v(" "),0==s.paystatus?e("span",{staticClass:"order-time"},[t._v("下单时间："+t._s(s.adddate))]):1==s.paystatus?e("span",{staticClass:"order-time"},[t._v("付款时间："+t._s(s.paydate))]):t._e()]),t._v(" "),t._l(s.courseOrder,function(a,r){return e("div",{key:r,staticClass:"order-body line",on:{click:function(e){return t.openView(a,s.storeinfo.storeurl)}}},[e("div",{staticClass:"ks-bg"},[e("ks-create-bg",{staticClass:"defaultpic",attrs:{src:a.defaultpic}}),t._v(" "),14==s.type||15==s.type?e("span",{staticClass:"bg-type"},[t._v("商品")]):t._e(),t._v(" "),0==s.type?e("span",{staticClass:"bg-type"},[t._v("课程")]):t._e()],1),t._v(" "),e("div",{staticClass:"order-body-info"},[e("div",{staticClass:"order-body-info-title"},[t._v("\n              "+t._s(a.title)+"\n              "),5==a.coursetype&&JSON.parse(a.json)&&0==JSON.parse(a.json).paymodel?e("span",{staticClass:"order-info__paymodel"},[t._v("订金")]):t._e()]),t._v(" "),14!=s.type&&15!=s.type||!a.json.attr?t._e():e("a",{staticClass:"versions"},t._l(a.json.attr,function(s,a){return e("a",{key:a},[t._v(t._s(s)+";")])}),0),t._v(" "),0==a.type&&1==a.coursetype?e("div",{staticClass:"order-info__type"},[t._v("点播课程")]):0==a.type&&2==a.coursetype?e("div",{staticClass:"order-info__type"},[t._v("语音直播")]):0==a.type&&3==a.coursetype?e("div",{staticClass:"order-info__type"},[t._v("音频课程")]):0==a.type&&4==a.coursetype?e("div",{staticClass:"order-info__type"},[t._v("图文课程")]):1==a.type?e("div",{staticClass:"order-info__type"},[t._v("直播课程")]):7==a.type?e("div",{staticClass:"order-info__type"},[t._v("专栏")]):9==a.type?e("div",{staticClass:"order-info__type"},[t._v("会员卡")]):10==a.type?e("div",{staticClass:"order-info__type"},[t._v("社群")]):t._e(),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"ks-color-error"},[t._v("\n                ￥"+t._s(a.price)+"\n                "),14==s.type||15==s.type?e("a",{staticStyle:{color:"red"}},[t._v("X"+t._s(a.numb))]):t._e()])])])])}),t._v(" "),14==s.type||15==s.type?e("div",{staticClass:"order-mall"},[t._v("\n          共"+t._s(s.all_num)+"件商品，\n          "),e("a",[t._v("原价:"+t._s(s.original_amount))]),t._v("\n          合计￥"+t._s(s.order_amount)+"（含运费￥"+t._s(s.freight)+"）\n        ")]):t._e(),t._v(" "),e("div",{staticClass:"order-bottom"},[e("div",{staticClass:"ks-fr"},[14!=s.type&&15!=s.type||1!=s.orderstatus&&2!=s.orderstatus?t._e():e("ks-button",{staticClass:"ks-ml5",attrs:{size:"small"},on:{click:function(e){return t.logistics(s.ordersn)}}},[t._v("查看物流")]),t._v(" "),14!=s.type&&15!=s.type||1!=s.orderstatus||1==t.usertype?t._e():e("ks-button",{staticClass:"ks-ml5",attrs:{size:"small"},on:{click:function(e){return t.confirmReceip(s.ordersn)}}},[t._v("确认收货")]),t._v(" "),0==s.paystatus?e("ks-button",{staticClass:"ks-ml5",attrs:{size:"small"},on:{click:function(e){return t.delorder(a,s.ordersn)}}},[t._v("删除订单")]):t._e(),t._v(" "),0==s.paystatus&&0==t.usertype?e("ks-button",{staticClass:"ks-ml5",attrs:{size:"small",type:"primary"},on:{click:function(e){return t.pay(s.payurl,s.ordersn)}}},[t._v("立即付款")]):t._e(),t._v(" "),1==s.paystatus||3==s.paystatus?e("ks-button",{staticClass:"ks-ml5",attrs:{size:"small"},on:{click:function(e){return t.chakanDetail(s.ordersn)}}},[t._v("查看订单")]):t._e(),t._v(" "),0==s.paystatus&&0!=t.usertype?e("ks-button",{staticClass:"ks-ml5",attrs:{size:"small"},on:{click:function(e){return t.showbox(2,s.orderid)}}},[t._v("确认支付")]):t._e(),t._v(" "),0!=s.paystatus||0==t.usertype||14!=s.type&&15!=s.type?t._e():e("ks-button",{staticClass:"ks-ml5",attrs:{size:"small"},on:{click:function(e){return t.showbox(1,s.orderid,s.order_amount)}}},[t._v("修改价格")]),t._v(" "),1!=s.paystatus||0!=s.orderstatus||0==t.usertype||14!=s.type&&15!=s.type?t._e():e("ks-button",{staticClass:"ks-ml5",attrs:{size:"small"},on:{click:function(e){return t.showbox(3,s.orderid)}}},[t._v("发货")])],1),t._v(" "),1===t.hasToken?e("div",{on:{click:function(e){return t.open(s.storeinfo.storeurl)}}},[e("ks-create-bg",{staticClass:"ks-fl",attrs:{src:s.storeinfo.storelogo,type:"logo"}}),t._v("\n            "+t._s(s.storeinfo.storename)+"\n          ")],1):t._e()])],2)}),0):t.loaded?e("ks-empty",{attrs:{type:"noorder",msg:"暂时没有订单~"}}):t._e(),t._v(" "),0===t.hasToken?e("store-footer"):t._e(),t._v(" "),e("ks-dialog",{attrs:{title:(1==t.action?"修改价格":2==t.action&&"确认支付")||3==t.action&&"发货",visible:t.showFlag},on:{"update:visible":function(s){t.showFlag=s}}},[1==t.action?e("ks-form",{attrs:{"label-width":"80px"}},[e("ks-form-item",{attrs:{label:"原待支付价格"}},[e("a",{staticClass:"zf_left"},[t._v("￥"+t._s(t.yorder_amount))])]),t._v(" "),e("ks-form-item",{attrs:{label:"修改价格"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.order_amount,expression:"order_amount"}],staticClass:"ks-input",attrs:{type:"number",placeholder:"请输入修改后价格"},domProps:{value:t.order_amount},on:{input:function(s){s.target.composing||(t.order_amount=s.target.value)}}})])],1):t._e(),t._v(" "),2==t.action?e("ks-form",{staticClass:"ktj__form",attrs:{"label-width":"80px"}},[e("ks-radio",{attrs:{label:0},model:{value:t.isprice,callback:function(s){t.isprice=s},expression:"isprice"}},[t._v("银行转账")]),t._v(" "),e("ks-radio",{attrs:{label:1},model:{value:t.isprice,callback:function(s){t.isprice=s},expression:"isprice"}},[t._v("现金支付")]),t._v(" "),e("ks-form-item",{attrs:{label:"备注："}},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.mark,expression:"mark"}],staticClass:"ks-textarea",attrs:{name:"",id:"",cols:"30",rows:"10"},domProps:{value:t.mark},on:{input:function(s){s.target.composing||(t.mark=s.target.value)}}})])],1):t._e(),t._v(" "),3==t.action?e("ks-form",{attrs:{"label-width":"80px"}},[e("ks-form-item",{attrs:{label:"物流名称："}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.one,expression:"one"}],staticClass:"select",on:{change:function(s){var e=Array.prototype.filter.call(s.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.one=s.target.multiple?e:e[0]}}},t._l(t.express,function(s,a){return e("option",{key:a,domProps:{value:s}},[t._v(t._s(s.logistics))])}),0)]),t._v(" "),e("ks-form-item",{attrs:{label:"快递单号："}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.expressNumber,expression:"expressNumber"}],staticClass:"ks-input",attrs:{type:"number",placeholder:"请输快递单号"},domProps:{value:t.expressNumber},on:{input:function(s){s.target.composing||(t.expressNumber=s.target.value)}}})])],1):t._e(),t._v(" "),e("div",{staticClass:"confirm-btn-wrap"},[e("ks-button",{attrs:{size:"medium"},on:{click:function(s){t.showFlag=!1}}},[t._v("取消")]),t._v(" "),e("ks-button",{staticClass:"ks-ml10",attrs:{size:"medium",type:"primary"},on:{click:t.sure}},[t._v("确定")])],1)],1)],1)},staticRenderFns:[]};var c=e("C7Lr")(n,u,!1,function(t){e("Qr/I")},"data-v-4b731cc4",null);s.default=c.exports}});