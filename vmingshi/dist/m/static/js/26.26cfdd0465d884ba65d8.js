webpackJsonp([26],{"7o9i":function(t,e){},KaRK:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("h0S9"),a={name:"GraphicLearn",data:function(){return{flag:!1,isbuy:0,isjoin:"",loaded:!1,free_id:null,isCanLearn:!1,catalogShow:!1,isFree:!1,courseInfo:{},keshiList:[],currentKeshi:{},currentPlayId:this.$route.query.chapterid,firstKeshiId:"",lastKeshiId:"",chapter:[],chapterType:null}},computed:{isCanShow:function(){var t=this;return!(4==this.courseInfo.courseType&&this.courseInfo.order_json&&this.courseInfo.order_json.length>0)||this.courseInfo.order_json.some(function(e){return e==t.$route.query.chapterid})}},watch:{"$route.query.chapterid":function(t){this.currentPlayId=t,this.getCurrentKeshi(),this.playChange()},catalogShow:function(){this.flag=!!this.catalogShow}},methods:{gift:function(){this.$hideMask();var t={};this.$route.query.chapterid&&(t.chapterid=this.$route.query.chapterid),this.free_id&&(t.free_id=this.free_id),this.$router.push({name:"ShowGift",params:{id:this.$route.params.id},query:t})},getCurrentKeshi:function(){var t=this;this.keshiList.map(function(e){e.chapterid==t.currentPlayId&&(t.currentKeshi=e,t.$nextTick(function(){t.$refs.skContent?t.$setPreview(t.$refs.skContent):t.$refs.content&&t.$setPreview(t.$refs.content)}))})},setChapterData:function(t){var e=this;t.map(function(t){1==t.depth||2==t.depth?t.slideShow=!0:3==t.depth&&e.keshiList.push(t),t.Section?e.setChapterData(t.Section):t.keshi&&e.setChapterData(t.keshi)})},catalog:function(){var t=this;this.flag||(this.catalogShow=!0,this.$showMask({click:function(){t.catalogShow=!1,t.$hideMask()}}))},playChange:function(){this.catalogShow=!1,this.$hideMask()},keshiRouteJump:function(t){this.$router.push({name:"GraphicLearn",params:{id:this.$route.params.id},query:{chapterid:t}})},prev:function(){var t=this,e=null;if(this.keshiList.map(function(s,i){s.chapterid==t.currentPlayId&&(e=i)}),null!==e){var s=this.keshiList[e-1];s&&this.keshiRouteJump(s.chapterid)}},next:function(){var t=this,e=null;if(this.keshiList.map(function(s,i){s.chapterid==t.currentPlayId&&(e=i)}),null!==e){var s=this.keshiList[e+1];s&&this.keshiRouteJump(s.chapterid)}}},activated:function(){var t=this;this.loaded=!1;var e=this.$route.params.id;this.currentPlayId=this.$route.query.chapterid,Object(i.f)({id:e}).then(function(e){t.isbuy=e.courseinfo.isbuy,t.isjoin=e.is_join,t.free_id=e.free_id?e.free_id:null;var s=e.courseinfo;t.courseInfo=s,1==s.iscopy&&t.$antiCopy(!0);var i=e.chapter.chapter;switch(t.setChapterData(i),t.keshiList.length&&(t.firstKeshiId=t.keshiList[0].chapterid,t.lastKeshiId=t.keshiList[t.keshiList.length-1].chapterid),t.chapter=i,t.chapterType=e.chapter.istype,"0.00"!=s.price&&1==s.chargetype||(t.isFree=!0),t.isjoin){case void 0:t.isCanLearn=!1;break;default:"0.00"!=s.price&&1!=s.isbuy&&1==s.chargetype||(t.isCanLearn=!0)}t.loaded=!0,t.$wxShare({title:s.title,desc:s.shortdesc,imgUrl:s.defaultpic}),t.getCurrentKeshi(),t.$hideLoading()})},components:{CourseCatalog:s("llyA").a}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.loaded?s("div",[s("router-link",{staticClass:"graphic-course",attrs:{to:{name:"CourseView",params:{id:t.courseInfo.courseid}},tag:"div"}},[s("i",{staticClass:"ks-icon ks-icon-arrow-ios-forward-outline"}),t._v(" "),s("ks-create-bg",{staticClass:"graphic-course__img",attrs:{src:t.courseInfo.defaultpic}}),t._v(" "),s("div",{staticClass:"graphic-course-info"},[s("div",{staticClass:"graphic-course__title"},[t._v(t._s(t.courseInfo.title))]),t._v(" "),s("div",{staticClass:"graphic-course__desc"},[t._v(t._s(t.courseInfo.shortdesc))])])],1),t._v(" "),s("div",{staticClass:"graphic-info ks-mt10"},[s("div",{staticClass:"graphic-info__title"},[t._v(t._s(t.currentKeshi.title))]),t._v(" "),s("div",{staticClass:"ks-content ks-mt20"},[t.isCanShow&&(1==t.currentKeshi.freeplay||t.isCanLearn||1==t.isbuy)?s("div",[s("div",{ref:"content",domProps:{innerHTML:t._s(t.currentKeshi.content)}})]):s("div",[s("div",{ref:"skContent",domProps:{innerHTML:t._s(t.currentKeshi.intro)}}),t._v(" "),t.isFree?s("div",{staticClass:"buy-article-tips line line-top"},[t._v("本内容需要加入学习之后才能阅读全文")]):s("div",{staticClass:"buy-article-tips line line-top"},[t._v("本内容需要购买之后才能阅读全文")])])])]),t._v(" "),s("store-footer"),t._v(" "),s("div",{staticClass:"ks-col-5 ks-text-center course-title-box",on:{click:t.gift}},[s("p",{staticClass:"course-title-tag"},[t._v("免费送好友")]),t._v(" "),t._m(0)]),t._v(" "),s("div",{staticClass:"graphic-footer-blank"}),t._v(" "),s("div",{staticClass:"graphic-footer line line-top"},[s("ul",[s("li",{class:t.currentPlayId==t.firstKeshiId&&"disabled",on:{click:t.prev}},[s("i",{staticClass:"ks-icon ks-icon-arrow-back-outline"}),t._v("上一篇\n\t\t\t\t")]),t._v(" "),s("li",{on:{click:t.catalog}},[t._v("目录")]),t._v(" "),s("li",{class:t.currentPlayId==t.lastKeshiId&&"disabled",on:{click:t.next}},[t._v("\n\t\t\t\t\t下一篇\n\t\t\t\t\t"),s("i",{staticClass:"ks-icon ks-icon-arrow-forward-outline"})])])]),t._v(" "),s("transition",{attrs:{name:"slide-in-up"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.catalogShow,expression:"catalogShow"}],staticClass:"graphic-catalog"},[s("div",{staticClass:"graphic-catalog__title"},[t._v("课程目录")]),t._v(" "),s("course-catalog",{staticClass:"graphic-catalog__body",attrs:{"course-type":4,"current-play-id":t.currentPlayId,"is-can-learn":t.isCanLearn,chapter:t.chapter,"chapter-type":t.chapterType,isbuy:t.isbuy}})],1)])],1):t._e()},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"course-title-box-bg"},[e("i",{staticClass:"ks-icon ks-icon-gift-outline"}),this._v(" "),e("p",[this._v("送好友")])])}]};var c=s("C7Lr")(a,r,!1,function(t){s("7o9i")},"data-v-24f0d664",null);e.default=c.exports},eNtd:function(t,e){},llyA:function(t,e,s){"use strict";var i={name:"CourseCatalog",props:{isbuy:Number,chapter:{type:Array,default:function(){return[]}},chapterType:{type:[Number,String]},currentPlayId:{type:[Number,String]},courseType:{type:[Number,String]}},computed:{formatTimestamp:function(){return function(t){if(!t)return"";var e=new Date(parseInt(t)),s=e.getFullYear(),i=e.getMonth()+1,a=e.getDate(),r=e.getHours(),c=e.getMinutes(),n=e.getSeconds();return(s=s<10?"0"+s:s)+"-"+(i=i<10?"0"+i:i)+"-"+(a=a<10?"0"+a:a)+" "+(r=r<10?"0"+r:r)+":"+(c=c<10?"0"+c:c)+":"+(n=n<10?"0"+n:n)}}},methods:{play:function(t,e){1==this.courseType||3==this.courseType||2==this.courseType?this.$emit("play",t,e):4==this.courseType&&this.$router.push({name:"GraphicLearn",params:{id:t.courseid},query:{chapterid:t.chapterid}})}},created:function(){console.log(this.isbuy)}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.chapter.length?s("div",[2==t.chapterType?s("div",{staticClass:"keshi-box"},t._l(t.chapter,function(e,i){return s("div",{key:i,staticClass:"keshi-item",class:t.currentPlayId==e.chapterid&&"on",style:5==t.courseType&&"padding-right:130px;",on:{click:function(s){return t.play(e)}}},[5==t.courseType?s("span",{staticClass:"time"},[t._v(t._s(t.formatTimestamp(1e3*e.begindate)))]):t._e(),t._v(" "),2==t.courseType?s("span",{staticClass:"time1"},[t._v(t._s(t.formatTimestamp(1e3*e.begindate)))]):t._e(),t._v(" "),0!=e.freeplay||t.isbuy?t._e():s("i",{staticClass:"ks-icon ks-icon-lock-outline"}),t._v(" "),1==t.courseType?s("span",{staticClass:"type"},[t._v("视频")]):2==t.courseType?s("span",{staticClass:"type"},[t._v("直播")]):3==t.courseType?s("span",{staticClass:"type"},[t._v("音频")]):4==t.courseType?s("span",{staticClass:"type"},[t._v("图文")]):t._e(),t._v(" "),s("span",{staticClass:"per_title"},[t._v(t._s(e.title))])])}),0):s("div",t._l(t.chapter,function(e,i){return s("div",{key:i,staticClass:"chapter-box"},[s("div",{staticClass:"chapter-name",on:{click:function(t){e.slideShow=!e.slideShow}}},[s("i",{staticClass:"eva-icon arrow-ios-downward-outline",class:e.slideShow&&"arrow-up"}),t._v("\n          "+t._s(e.title)+"\n        ")]),t._v(" "),e.Section?s("div",{directives:[{name:"show",rawName:"v-show",value:e.slideShow,expression:"item.slideShow"}],staticClass:"section-box"},t._l(e.Section,function(e,i){return s("div",{key:i,staticClass:"section-item"},[s("div",{staticClass:"section-name",on:{click:function(t){e.slideShow=!e.slideShow}}},[e.keshi&&e.keshi.length?s("i",{staticClass:"eva-icon arrow-ios-downward-outline",class:e.slideShow&&"arrow-up"}):t._e(),t._v("\n              "+t._s(e.title)+"\n            ")]),t._v(" "),e.keshi?s("div",{directives:[{name:"show",rawName:"v-show",value:e.slideShow,expression:"section.slideShow"}],staticClass:"keshi-box"},t._l(e.keshi,function(i,a){return s("div",{key:a,staticClass:"keshi-item",class:t.currentPlayId==i.chapterid&&"on",style:5==t.courseType&&"padding-right:130px;",on:{click:function(s){return t.play(i,e)}}},[5==t.courseType?s("span",{staticClass:"time"},[t._v(t._s(t.formatTimestamp(1e3*i.begindate)))]):t._e(),t._v(" "),0!=i.freeplay||t.isbuy?t._e():s("i",{staticClass:"ks-icon ks-icon-lock-outline"}),t._v(" "),1==t.courseType?s("span",{staticClass:"type"},[t._v("视频")]):2==t.courseType?s("span",{staticClass:"type"},[t._v("直播")]):3==t.courseType?s("span",{staticClass:"type"},[t._v("音频")]):4==t.courseType?s("span",{staticClass:"type"},[t._v("图文")]):t._e(),t._v(" "),s("span",{staticClass:"per_title"},[t._v(t._s(i.title))])])}),0):t._e()])}),0):e.keshi?s("div",{directives:[{name:"show",rawName:"v-show",value:e.slideShow,expression:"item.slideShow"}],staticClass:"keshi-box"},t._l(e.keshi,function(i,a){return s("div",{key:a,staticClass:"keshi-item",class:t.currentPlayId==i.chapterid&&"on",style:5==t.courseType&&"padding-right:130px;",on:{click:function(s){return t.play(i,e)}}},[5==t.courseType?s("span",{staticClass:"time"},[t._v(t._s(t.formatTimestamp(1e3*i.begindate)))]):t._e(),t._v(" "),0!=i.freeplay||t.isbuy?t._e():s("i",{staticClass:"ks-icon ks-icon-lock-outline"}),t._v(" "),1==t.courseType?s("span",{staticClass:"type"},[t._v("视频")]):2==t.courseType?s("span",{staticClass:"type"},[t._v("直播")]):3==t.courseType?s("span",{staticClass:"type"},[t._v("音频")]):4==t.courseType?s("span",{staticClass:"type"},[t._v("图文")]):t._e(),t._v(" "),s("span",{staticClass:"per_title"},[t._v(t._s(i.title))])])}),0):t._e()])}),0)]):s("ks-empty",{attrs:{msg:"该课程下暂无课时～",type:"nolesson"}})],1)},staticRenderFns:[]};var r=s("C7Lr")(i,a,!1,function(t){s("eNtd")},"data-v-0de1e1dc",null);e.a=r.exports}});