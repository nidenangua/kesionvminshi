webpackJsonp([107],{JWkb:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("BXtI"),n={name:"SignInResult",data:function(){return{loading:!1,noSignUp:!1,title:"",signList:[]}},computed:{formatTimestamp:function(){return function(t){var s=new Date(parseInt(t)),i=s.getFullYear(),e=s.getMonth()+1,n=s.getDate(),a=s.getHours(),r=s.getMinutes(),c=s.getSeconds();return i+"."+(e=e<10?"0"+e:e)+"."+(n=n<10?"0"+n:n)+" "+(a=a<10?"0"+a:a)+":"+(r=r<10?"0"+r:r)+":"+(c=c<10?"0"+c:c)}}},activated:function(){this.loading=!1,this.getActivitySignList()},methods:{signBtn:function(t){var s=this;Object(e.a)({id:t}).then(function(t){s.getActivitySignList()})},getActivitySignList:function(){var t=this;Object(e.b)({courseid:this.$route.params.id}).then(function(s){t.title=s.title,"error"==s.result&&"你没有报名"==s.msg?t.noSignUp=!0:t.signList=s.list,t.loading=!0})},signpay:function(t,s){this.$router.push("/myactivity")}}},a={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return t.loading&&!t.noSignUp?i("div",[i("div",{staticClass:"sign-list"},t._l(t.signList,function(s,e){return i("div",{key:e,staticClass:"ks-line sign-item"},[i("div",[i("div",{staticClass:"ks-fz14 ks-color-info"},[t._v("\n          您的票种为\n          "),i("span",{staticClass:"ks-fz16 ks-color-error"},[t._v(t._s(s.ticket_info.title))])]),t._v(" "),i("div",{staticClass:"ks-row ks-mt10 sign-details__title sign-time"},[t._v("\n          签到时间：\n          "),s.sign_date>0?i("span",[t._v(t._s(t.formatTimestamp(1e3*s.sign_date)))]):i("span",{staticClass:"no-sign"},[t._v("未签到")])])]),t._v(" "),i("div",[0==s.is_sign?i("div",[3==s.status&&0==s.is_sign?i("ks-button",{staticClass:"sign-btn",attrs:{type:"success",size:"small"},on:{click:function(i){return t.signBtn(s.id)}}},[t._v("签到")]):t._e(),t._v(" "),0==s.status?i("span",{staticClass:"unrevised"},[t._v("未审核")]):t._e(),t._v(" "),1==s.status&&1==s.ticket_info.chargetype?i("ks-button",{staticClass:"sign-btn",attrs:{type:"primary",size:"small"},on:{click:function(i){return t.signpay(s.json.ordersn,s.url)}}},[t._v("支付")]):t._e()],1):i("ks-button",{staticClass:"sign-btn",attrs:{type:"gray",size:"small"}},[t._v("已签到")])],1)])}),0),t._v(" "),i("div",{staticClass:"sign-details ks-fz14 ks-mt10"},[i("div",{staticClass:"ks-row ks-mt10"},[i("div",{staticClass:"ks-col-6 sign-details__title"},[t._v("活动名称：")]),t._v(" "),i("div",{staticClass:"ks-col-16"},[t._v(t._s(t.title))])]),t._v(" "),1==t.signList.length?i("div",{staticClass:"ks-row ks-mt10 sign-details__title"},[i("div",{staticClass:"ks-col-6"},[t._v("活动时间：")]),t._v(" "),i("div",{staticClass:"sign-details__time ks-col-16"},[t._v(t._s(t.formatTimestamp(t.signList[0].setting.begindate))+"-"+t._s(t.formatTimestamp(t.signList[0].setting.enddate)))])]):t._e()]),t._v(" "),i("router-link",{attrs:{to:{name:"ActivityDetail",params:{id:t.$route.params.id}}}},[i("ks-button",{staticClass:"check-activity",attrs:{type:"success"}},[t._v("查看活动详情")])],1),t._v(" "),i("store-footer")],1):t.loading&&t.noSignUp?i("div",[i("div",{staticClass:"ks-bg-white ks-fz14 activity-tile"},[i("div",{staticClass:"name"},[t._v("活动名称:")]),t._v(" "),i("div",[t._v(" "+t._s(t.title))])]),t._v(" "),i("div",[i("ks-empty",{attrs:{type:"noorder",msg:"您还没有可签到的票哦~"}}),t._v(" "),i("div",{staticClass:"ks-text-center ks-mt10"},[i("router-link",{attrs:{to:{name:"ActivityDetail",params:{id:t.$route.params.id}}}},[i("ks-button",{staticClass:"go-registed",attrs:{type:"primary",size:"small"}},[t._v("去报名")])],1)],1)],1)]):t._e()},staticRenderFns:[]};var r=i("C7Lr")(n,a,!1,function(t){i("ed/p")},"data-v-0384a6ac",null);s.default=r.exports},"ed/p":function(t,s){}});