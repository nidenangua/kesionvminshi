webpackJsonp([81],{"7IBB":function(r,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e("dAT0"),a=e("g+M4"),n={name:"WrongEntry",components:{PaperMedal:o.a},data:function(){return{categoryid:this.$route.query.categoryid,errorobj:{},categoryname:[]}},methods:{doexam:function(){this.errorobj.error_num<=0?this.$toast("没有找到错题"):this.$router.push({path:"/exam/DoError",query:{categoryid:this.categoryid,type:2}})},getMyError:function(){var r=this;Object(a.d)({categoryid:this.categoryid}).then(function(t){r.categoryname=t.categoryname,r.errorobj=t})},clearAll:function(){var r=this;this.errorobj.error_num>0&&this.$confirm("确认清空错题记录吗").then(function(){Object(a.b)({type:1,categoryid:r.categoryid}).then(function(t){"success"===t.result&&(r.$toast("清除成功","success"),r.getMyError())})})}},activated:function(){this.categoryid=this.$route.query.categoryid,this.errorobj={},this.getMyError(),document.title="查看答题情况"}},s={render:function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("div",[e("paper-medal",{attrs:{value:r.errorobj.error_num,name:"我的错题"}}),r._v(" "),e("div",{staticClass:"wrong-entry"},[e("div",{staticClass:"wrong-entry__entro"},[e("div",{staticClass:"wrong-entry__number"},[r._v("\n        今日错题："+r._s(r.errorobj.today_error)+"       正确率："),e("strong",{staticStyle:{color:"#80c269"}},[r._v(r._s(r.errorobj.accuracy)+"%")])])])]),r._v(" "),e("div",{staticClass:"wrong-list"},[e("div",{staticClass:"wrong-list__item",on:{click:r.doexam}},[e("div",{staticClass:"wrong-list__title"},[r._v(r._s(r.categoryname.join("、")||"错题集"))]),r._v(" "),e("div",{staticClass:"wrong-list__num"},[r._v(r._s(r.errorobj.error_num))])])]),r._v(" "),e("div",{staticClass:"clearall-button",class:r.errorobj.error_num<=0&&"clearall-button--disabled",on:{click:r.clearAll}},[r._v("清空我的错题")])],1)},staticRenderFns:[]};var i=e("C7Lr")(n,s,!1,function(r){e("OXop")},"data-v-515c1253",null);t.default=i.exports},OXop:function(r,t){}});