webpackJsonp([70],{DpCv:function(e,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var t=s("a+B/"),r=s("h0S9"),o={name:"CoursePlay",components:{Comment:s("/Wir").a,VideoPlayer:t.a},data:function(){return{loading:!1,free_id:null,courseid:this.$route.params.id,courseinfo:null,chapter:null,keshiList:[],activeKeShiIndex:0,swiperOption:{slidesPerView:2.3,preventClicksPropagation:!0,slideToClickedSlide:!0,on:{transitionEnd:function(){}}},isCanLearn:!1}},activated:function(){var e=this;this.loading=!1,this.keshiList=[],Object(r.f)({id:this.$route.params.id}).then(function(i){e.free_id=i.free_id?i.free_id:null,e.courseinfo=i.courseinfo,e.chapter=i.chapter,e.getKeshiList(i.chapter),e.loading=!0})},methods:{getKeshiList:function(e){var i=this;2!=e.istype?0==e.istype?this.$map(e.chapter,function(e){i.$map(e.Section,function(e){i.$map(e.keshi,function(e){i.resetKeshiData(e),i.keshiList.push(e)})})}):this.$map(e.chapter,function(e){i.$map(e.keshi,function(e){i.resetKeshiData(e),i.keshiList.push(e)})}):this.$map(e.chapter,function(e){i.resetKeshiData(e),i.keshiList.push(e)});var s=this.$route.query.chapterid;this.activeKeShiIndex=this.keshiList.findIndex(function(e){return s==e.chapterid}),this.changeActiveKeShiIndex(this.activeKeShiIndex)},resetKeshiData:function(e){var i=0;switch(1==e.freeplay?i=1:1==this.courseinfo.isbuy&&3==this.courseinfo.gift?i=2:1==this.courseinfo.isbuy&&3!=this.courseinfo.gift&&(i=3),i){case 0:e.is_try_see=0;break;case 1:case 3:e.is_try_see=1;break;case 2:var s=this.courseinfo.order_json.some(function(i){return i==e.chapterid});e.is_try_see=s?1:0}0===e.is_try_see&&e.json&&1==e.json.is_audition&&(e.is_try_see=2)},changeActiveKeShiIndex:function(e){var i=this,s=this.keshiList[e],t=s.is_try_see;if(!t)return this.$toast("请先购买"),!1;this.activeKeShiIndex=e;var o=s.chapterid;Object(r.g)({courseid:this.courseid,chapterid:o}).then(function(e){return"10002"===e.errcode?(i.$toast("请先登录").then(function(){i.$router.push({name:"UserLogin"})}),!1):10005==e.code?(i.$toast(e.msg),!1):"系统出错"==e.msg?(i.errTips="暂无视频",!1):void(e.play&&(2==t&&(e.auditionTime=s.json.audition_time,e.price=i.courseinfo.price),e.cover=i.courseinfo.defaultpic,e.courseid=s.courseid,e.chapterid=s.chapterid,i.$refs.player.play(e)))})},sendFriend:function(){var e={chapterid:this.keshiList[this.activeKeShiIndex].chapterid};this.free_id&&(e.free_id=this.free_id),this.$router.push({name:"ShowGift",params:{id:this.courseid},query:e})},buyCourse:function(){this.$showPay({payid:this.courseinfo.courseid,type:"course",msg:"购买课程",price:this.courseinfo.price})}}},n={render:function(){var e=this,i=e.$createElement,s=e._self._c||i;return e.loading?s("div",[s("header",[s("ks-image",{staticClass:"player",attrs:{src:e.courseinfo.defaultpic}},[s("video-player",{ref:"player",on:{buy:e.buyCourse}})],1),e._v(" "),s("div",{staticClass:"ks-row course-title-box"},[s("div",{staticClass:"ks-col-19"},[s("h3",[e._v(e._s(e.courseinfo.title))]),e._v(" "),s("p",[e._v("共"+e._s(e.courseinfo.hourcount)+"个课时")])]),e._v(" "),s("div",{staticClass:"ks-col-5 ks-text-center",on:{click:e.sendFriend}},[s("p",{staticClass:"course-title-tag"},[e._v("免费送好友")]),e._v(" "),s("i",{staticClass:"ks-icon ks-icon-gift-outline"}),e._v(" "),s("p",[e._v("送好友")])])]),e._v(" "),s("div",{staticClass:"ks-line"})],1),e._v(" "),s("ks-swiper",{ref:"courseSwiper",staticClass:"course-swiper",attrs:{options:e.swiperOption}},e._l(e.keshiList,function(i,t){return s("ks-swiper-slide",{key:t},[s("div",{staticClass:"course-item",class:t==e.activeKeShiIndex&&"course-item-active",on:{click:function(i){return e.changeActiveKeShiIndex(t)}}},[s("ks-text",{staticClass:"course-item-title",attrs:{lineClamp:2,"font-size":"16px"}},[e._v(e._s(t+1)+"."+e._s(i.title))]),e._v(" "),s("div",{staticClass:"course-item-des"},[e._v(e._s(i.content))]),e._v(" "),s("div",{staticClass:"course-item-type"},[e._v("视频")]),e._v(" "),s("div",{staticClass:"course-item-try-see"},[2==i.is_try_see?s("i",{staticClass:"course-item-try-see__text ks-color-success"},[e._v("试看")]):1!=i.is_try_see?s("i",{staticClass:"ks-icon ks-icon-lock-outline"}):e._e()])],1)])}),1),e._v(" "),s("div",{staticClass:"comment"},[e.courseid?s("comment",{attrs:{"comment-switch":e.isCanLearn,appid:"6","info-id":e.courseid}}):e._e()],1),e._v(" "),1!=e.$route.query.miniprogram?s("store-info",{staticClass:"ks-mt10"}):e._e(),e._v(" "),s("store-footer")],1):e._e()},staticRenderFns:[]};var c=s("C7Lr")(o,n,!1,function(e){s("rooS")},"data-v-73e76768",null);i.default=c.exports},rooS:function(e,i){}});