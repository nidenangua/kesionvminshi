webpackJsonp([78],{"El+R":function(t,e){},pbtC:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("ZLEe"),i=a.n(s),o=a("Llv5"),n=a("s1yA"),r={name:"index",data:function(){return{loaded:!1,components:[],dataList:[],swiperOption:{slidesPerView:3.2,spaceBetween:15}}},methods:{gotoMenu:function(t){this.$router.replace("/course?categoryid="+t)},goSearch:function(t){this.$router.push({path:"/course",query:{key:t}})},loadComponents:function(){var t=this;this.loaded=!1,this.$showLoading(),this.$store.ready(function(){var e=[],a=[];t.$store.state.configjson.map(function(t){var s={};i()(t).map(function(e){s[e]=t[e]}),a.push(s),t.api?e.push(t.api):"leaderboard"===t.type&&t.topList.map(function(t){e.push(t.api)})}),Object(o.a)(e).then(function(e){i()(e).map(function(t){a.map(function(a){a.api&&a.api.callKeyName===t?a.list=e[t].list:"leaderboard"===a.type&&a.topList.map(function(a){a.api.callKeyName===t&&(e[t].page?a.totalput=e[t].page.totalput:a.totalput=e[t].list.length,a.list=e[t].list)})})}),t.components=a,t.loaded=!0,t.$hideLoading()}),Object(n.b)(e).then(function(e){t.dataList=e})})}},mounted:function(){this.loadComponents(),"mphone"===window.name&&(window.APP=this)},activated:function(){var t=this;1==this.$route.query.reload&&this.loaded&&this.loadComponents(),this.$store.ready(function(e){document.title=e.info.sitename,t.$wxShare({title:e.info.sharetitle||e.info.sitename,desc:e.info.sharedesc||e.info.tel,imgUrl:e.info.sharepic||e.info.logo})})}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loaded?a("div",{staticClass:"page",class:"page--style"+t.$store.state.style.id},[4==t.$store.state.style.id?a("div",{staticClass:"tophead"}):t._e(),t._v(" "),t._l(t.components,function(e,s){return a("div",{directives:[{name:"show",rawName:"v-show",value:!e.api||e.list.length||t.$store.state.drag,expression:"!item.api || item.list.length || $store.state.drag"}],key:s,staticClass:"component-box",class:e.title&&3==e.title.style&&e.title.more&&e.title.more.length?"component-by-FT component-box--"+e.type:"component-box--"+e.type,attrs:{drag:e.type,"drag-index":s}},[e.title?a("kd-title",{attrs:{"data-title":e.title}}):t._e(),t._v(" "),"storeinfo"===e.type?a("kd-store-info"):"teacherIntro"===e.type?a("kd-teacher-intro"):"topnav"===e.type?a("div",{staticClass:"topnav"},[a("ul",[a("li",{staticClass:"active"},[t._v("推荐")]),t._v(" "),t._l(t.dataList,function(e,s){return a("li",{key:s,on:{click:function(a){return t.gotoMenu(e.categoryid)}}},[t._v(t._s(e.categoryname))])})],2)]):"search"===e.type?a("kd-search",{attrs:{padding:e.padding||"10px",bg:2==e.style?"gray":""},on:{enter:t.goSearch}}):"swiper"===e.type?a("kd-carousel",{style:e.style,attrs:{radius:e.radius,pagination:e.pagination,"centered-slides":e.centeredSlides,"slides-per-view":e.slidesPerView,"data-list":e.list,"data-ratio":e.ratio}}):"richtext"===e.type?a("kd-richtext",{attrs:{"data-code":e.code}}):"banner"===e.type?a("kd-banner",{attrs:{"data-src":e.src,"data-url":e.url}}):"nav"===e.type?a("kd-nav",{attrs:{"data-list":e.list,"data-style":e.style}}):"vipcard"===e.type?a("kd-vip-card",{attrs:{"data-list":e.list,"data-style":e.style}}):"news"===e.type?a("kd-news",{attrs:{"data-list":e.list,"data-style":e.style}}):"leaderboard"===e.type?a("kd-leaderboard",{attrs:{"top-list":e.topList,"data-style":e.style}}):"teacher"===e.type?a("kd-teacher",{attrs:{"data-list":e.list,"data-style":e.style}}):"course"===e.type||"class"===e.type||"column"===e.type?a("kd-course",{attrs:{"data-type":e.type,"data-list":e.list,"data-style":e.style}}):t._e()],1)}),t._v(" "),a("store-footer"),t._v(" "),a("store-footer-bar")],2):t._e()},staticRenderFns:[]};var d=a("C7Lr")(r,l,!1,function(t){a("El+R")},"data-v-5e992f8a",null);e.default=d.exports}});