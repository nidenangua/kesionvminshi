webpackJsonp([49],{LJGX:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("T4EX"),i=s("/Njs"),o={components:{MediaPreview:n.a},data:function(){return{empty_show:!1,page:1,pageCount:0,friendList:[],commentShow:!1,replyContent:"",id:"",replyId:"",flag:!0,placeholder:"请输入你的回复",commentId:null,oldfriendList:{},type:"",is_teacher:""}},activated:function(){document.title="朋友圈动态",document.addEventListener("click",this.onDocClick),this.getlist()},deactivated:function(){document.removeEventListener("click",this.onDocClick)},methods:{onDocClick:function(){this.commentShow=!1},getlist:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$showLoading(),this.page=t,Object(i.c)({p:t,maxperpage:10}).then(function(s){s.list.map(function(t){e.resetJson(t.json),t.reply_list&&t.reply_list.length&&(t.$reply_list=[],t.$show_more_reply=!1,t.reply_list.map(function(e){t.$reply_list.push({topicid:t.id,id:e.id,json:e.json,head:e.head,name:e.name,reply_name:!1,userid:e.userid}),e.reply_list&&t.reply_list.length&&e.reply_list.map(function(e){t.$reply_list.push({topicid:t.id,id:e.parentid,$id:e.id,json:e.json,head:e.head,name:e.name,reply_name:e.reply_name,userid:e.userid})})}))}),e.pageCount=s.page.total_pages,e.friendList=1==t?s.list:e.friendList.concat(s.list),e.oldfriendList.new_reply=s.new_reply,e.$store.ready(function(t){e.is_teacher=t.userInfo.usertype}),0==s.list.length?e.empty_show=!0:e.empty_show=!1,e.$hideLoading()})},comment:function(e,t){var s=this;e.stopPropagation(),this.flag=!0,this.id=t,this.commentShow=!0,this.$nextTick(function(){s.$refs.sendreply.focus()})},resetJson:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch(e.$info={},Number(e.type)){case 1:e.$type="image";var t=[];e.info instanceof Array&&e.info.map(function(e){t.push({src:e})}),e.$info={list:t};break;case 2:e.$type="video",e.$info={src:e.info[0]||""};break;case 3:e.$type="audio",e.$info={src:e.info[0]||""}}},send:function(){var e=this;if(this.flag){var t={socialid:this.id,content:this.replyContent};if(""===this.replyContent)return this.$toast("请输入内容");Object(i.f)(t).then(function(t){"success"==t.result&&(e.$toast("评论成功","success"),e.commentShow=!1,e.replyContent="",e.getlist())})}else{var s={socialid:this.id,content:this.replyContent,reply_uid:this.replyId,parentid:this.commentId};if(""===this.replyContent)return this.$toast("请输入内容");Object(i.f)(s).then(function(t){"success"==t.result&&(e.$toast("回复成功","success"),e.commentShow=!1,e.replyContent="",e.getlist())})}},replyCom:function(e,t,s,n,i){var o=this;if(event.stopPropagation(),this.id=e,this.replyId=t,this.flag=!1,this.commentShow=!0,this.$nextTick(function(){o.$refs.sendreply.focus()}),this.commentId=n,this.$store.state.userInfo.userid===this.replyId)return this.commentShow=!1,this.$toast("不能自己回复自己");this.placeholder="回复： "+s},deleteFrinden:function(e,t){var s=this;this.$store.ready(function(n){var o=n.userInfo.usertype,r=n.userInfo.userid;o>0?s.$confirm("是否确认删除？").then(function(){Object(i.a)({type:1,id:e}).then(function(e){s.getlist(),s.$toast("删除成功","success")})}):t===r&&s.$confirm("是否确认删除？").then(function(){Object(i.a)({type:1,id:e}).then(function(e){s.getlist(),s.$toast("删除成功","success")})})})},friendsZan:function(e){var t=this;Object(i.d)({id:e}).then(function(e){t.getlist()})},firendsDet:function(e){this.$router.push("/friend/"+e)},newlist:function(){this.$router.push("/friendlist")},onPageChange:function(e){this.getlist(e)},goissue:function(){this.$router.push("/friendIssue")},handleClose:function(e){this.commentShow=!1},stopbubb:function(e){event.stopPropagation()}}},r={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"page"},[4==e.$store.state.style.id||5==e.$store.state.style.id?s("div",{staticClass:"page-header"},[s("kd-big-title",{attrs:{title:"朋友圈"}})],1):e._e(),e._v(" "),s("ks-page-scroll-container",{attrs:{page:e.page,"page-count":e.pageCount},on:{"page-change":e.onPageChange}},[e.oldfriendList.new_reply>0?s("div",{staticClass:"bubble"},[s("a",{staticClass:"bubble-info",on:{click:e.newlist}},[e._v(e._s(e.oldfriendList.new_reply)+"条新的回复")])]):e._e(),e._v(" "),e._l(e.friendList,function(t){return s("div",{key:t.id,staticClass:"friend"},[s("ks-image",{staticClass:"friend-head",attrs:{type:"teacher",src:t.head}}),e._v(" "),s("div",{staticClass:"friend-name"},[e._v(e._s(t.name))]),e._v(" "),s("p",{staticClass:"friend-time"},[e._v(e._s(t.adddate))]),e._v(" "),s("p",{staticClass:"friend-content",on:{click:function(s){return e.firendsDet(t.id)}}},[e._v(e._s(t.json.content))]),e._v(" "),s("media-Preview",{attrs:{type:t.json.$type,info:t.json.$info}}),e._v(" "),s("div",{staticClass:"friend-tool"},[e.is_teacher>0?s("span",{staticClass:"friend-tool__delete",on:{click:function(s){return e.deleteFrinden(t.id,t.userid)}}},[e._v("删除")]):e._e(),e._v(" "),s("span",{staticClass:"friend-tool__comment",on:{click:function(s){return e.comment(s,t.id)}}},[s("i",{staticClass:"ks-icon ks-icon-message-square-outline"}),e._v("\r\n            "+e._s(t.reply_num)+"\r\n          ")]),e._v(" "),s("span",{staticClass:"friend-tool__like",on:{click:function(s){return e.friendsZan(t.id)}}},[t.is_zan?s("i",{staticClass:"ks-icon ks-icon-dianzan"}):s("i",{staticClass:"ks-icon ks-icon-dianzan-outline"}),e._v("\r\n            "+e._s(t.zan_num)+"\r\n          ")])]),e._v(" "),s("div",{staticClass:"clearfix"}),e._v(" "),t.$reply_list&&t.$reply_list.length?s("div",{staticClass:"comment"},[e._l(t.$reply_list,function(n,i){return s("div",{directives:[{name:"show",rawName:"v-show",value:i<4||t.$show_more_reply,expression:"i < 4 || item.$show_more_reply"}],key:n.$id,staticClass:"comment-foot",on:{click:function(s){return e.replyCom(t.id,n.userid,n.name,n.id,s)}}},[!1===n.reply_name?s("div",[s("a",[e._v(e._s(n.name))]),e._v("\r\n              : "+e._s(n.json)+"\r\n            ")]):s("div",[s("a",[e._v(e._s(n.name))]),e._v("回复\r\n              "),s("a",[e._v(e._s(n.reply_name))]),e._v("\r\n              : "+e._s(n.json)+"\r\n            ")])])}),e._v(" "),t.$reply_list.length>4?s("div",{staticClass:"comment-reply",on:{click:function(e){t.$show_more_reply=!t.$show_more_reply}}},[t.$show_more_reply?s("span",[e._v("收起回复")]):s("span",[e._v("共"+e._s(t.reply_num)+"条回复")])]):e._e()],2):e._e(),e._v(" "),s("div",{staticClass:"gridClass"}),e._v(" "),s("div",{staticClass:"gridClass"})],1)}),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.commentShow,expression:"commentShow"}],staticClass:"replyBox",on:{click:function(t){return e.stopbubb(t)}}},[s("ks-input",{ref:"sendreply",attrs:{line:"",placeholder:e.placeholder},model:{value:e.replyContent,callback:function(t){e.replyContent=t},expression:"replyContent"}}),e._v(" "),s("ks-button",{attrs:{type:"primary",size:"medium"},on:{click:e.send}},[e._v("发送")])],1),e._v(" "),e.is_teacher>0?s("div",{staticClass:"issue",on:{click:e.goissue}}):e._e(),e._v(" "),e.empty_show?s("ks-empty",{attrs:{type:"nolesson",msg:"老师还没有发表动态，去其他地方逛逛吧~"}}):e._e()],2),e._v(" "),s("store-footer-bar")],1)},staticRenderFns:[]};var a=s("C7Lr")(o,r,!1,function(e){s("SwM/")},"data-v-f39dcefc",null);t.default=a.exports},"SwM/":function(e,t){}});