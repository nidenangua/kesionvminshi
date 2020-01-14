<template>
    <div class="page">
            <div class="intdel">
                <ks-page-scroll-container :page="page.p" :page-count="page.maxperpage" @page-change="onPageChange">
                    <div class="intdel-title">总积分：{{score}}</div>
                    <ks-tabs v-model="tabActive" @tab-click="handleClick" class="intdel-table">
                            <ks-tab-pane :label="item.name" :name="item.value" v-for="(item,i) in tabList" :key="i"></ks-tab-pane>
                    </ks-tabs>
                    <div class="intdel-list" v-for="(item,i) in list" :key="i">
                        <div class='intdel-list_num'>
                            <span :class="['intdel-list_num--img',item.type == 1?'':'active']"></span>
                            <span :class="['intdel-list_num--msg',item.type == 1?'':'isactive']">{{item.score >= 0 ? `+${item.score}` : item.score}}</span>
                            <div class="intdel-list__line" v-if="i != list.length-1"></div>
                        </div>
                        <div class="intdel-list__time">
                            <p>{{item.type == 1 ? '来源':'消耗'}}: 
                                <span v-if="item.source == 0">分享注册</span>
                                <span v-else-if="item.source == 1">分享文章</span>
                                <span v-else-if="item.source == 2">分享视频</span>
                                <span v-else-if="item.source == 3">分享音频</span>
                                <span v-else-if="item.source == 4">观看视频</span>
                                <span v-else-if="item.source == 5">收听音频</span>
                                <span v-else-if="item.source == 6">购买课程</span>
                                <span v-else-if="item.source == 7">会员卡购买</span>
                                <span v-else-if="item.source == 8">课程购买</span>
                                <span v-else-if="item.source == 9">教辅购买</span>
                                <span v-else-if="item.source == 10">折扣卡</span>
                                <span v-else-if="item.source == 11">答疑卡</span>
                                <span v-else>后台积分调整</span>
                            </p>
                            <p>获得日期: {{item.adddate}}</p>
                        </div>
                    </div>
                    <ks-empty msg="暂时没有积分信息~" v-if="!list.length"></ks-empty>
                </ks-page-scroll-container>
            </div>
    </div>
</template>

<script>
import {myScoreDetails} from '@/api/integral'
export default {
    data() {
        return {
            tabActive: 0,
            tabList:[
                {name:"全部",value:0},
                {name:"收入",value:1},
                {name:"支出",value:2},
            ],
            list:[],
            page:{
                p:1,
                maxperpage:10,
                type:0,
            },
            score:''
        }
    },
    methods: {
        handleClick(val) {
            this.page.type = val;
            this.getlist()
        },
        async getlist(page=1){
            this.page.p = page
            const data = await myScoreDetails(this.page)
            this.score = data.score
            this.list = (page == 1 ? data.list : this.list.concat(data.list))
        },
        onPageChange(page) {
            this.getlist(page)
        }
    },
    activated() {
        document.title="我的积分"
        this.getlist()
    },
}
</script>

<style scoped>
.page {
    min-height: 100vh;
    /* background-image: linear-gradient(#ffc877, #fff); */
    background: url(../../../assets/integral/dt@2x.png) no-repeat center center;
    background-size: cover;
    padding: 3vh 1rem 0 1rem
}
.intdel{
    background-color: #fff;
    box-shadow:0px 2px 4.5px .5px rgba(0, 0, 0, 0.09);
    border-radius:10px 10px 0px 0px;
    min-height: 97vh
}
.intdel-title{
    padding: .6rem 0 .8rem 0;
    text-align: center;
    color: #4A4A4C;
    font-size: 21px;
}
.page /deep/ .ks-tab__active_line{
    background-color: #ff3e55;
}
.page /deep/ .ks-tab__item {
    color: var(--primary_text-color);
}
.page /deep/ .active{
    color: #ff3e55 !important
}
.intdel-table{
    padding-bottom: 1.5rem
}
.intdel-list{
    padding: 0 1.2rem 2rem 1.2rem;
    display: flex;
    align-items: center;
}
.intdel-list_num{
    /* margin-right: 2rem; */
    position: relative;
    display: inline-flex;
    align-items: center;
}
.intdel-list_num--img{
    padding: 7px;
    display: inline-block;
    background-color: #ff3e55;
    border-radius: 50%;
    margin-right: 15px;
}
.intdel-list_num--msg{
    font-size: 21px;
    color: #F14055;
    display: inline-block;
    width: 66px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.intdel-list__time p {
    font-size: 15px;
    color: #808080
}
.intdel-list__line{
    width: 2px;
    height: 2rem;
    background-color: #e8e8e8;
    position: absolute;
    left: 5px;
    top: 30px;
}
.active{
    background-color: #2dc4ff; 
}
.isactive{
    color: #2dc4ff
}
</style>
