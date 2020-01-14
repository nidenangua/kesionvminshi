<template>
    <div class="page">
        <div class="intlhead">
            <div class="intlhead-num">
                <img src="../../../assets/integral/jf@2x.png" class="intlhead-num__img" alt="">
                <span>{{score}}</span>
            </div>
            <div class="intlhead-del">
                <span @click="gotodel">积分明细<img src="../../../assets/integral/yjt.png" alt=""></span>
            </div>
        </div>
        <div class="inttitle">
            做任务赚积分
        </div>
        <div class="intcontent">
            <div class="intcontent-list" v-for="(item,i) in list" :key="i">
                <div class="intcontent-list__left">
                    <div class="intcontent-list__left--img">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="intcontent-list__left--msg">
                        <p class="intcontent-list__left--title">{{item.name}}</p>
                        <p class="intcontent-list__left--num">+{{item.reward}}积分</p>
                    </div>
                </div>
                <div class="intcontent-list__right" @click="goOperation(item.type)">
                    <span v-if="item.type == 4">去观看</span>
                    <span v-else-if="item.type == 5">去收听</span>
                    <span v-else>去分享</span>
                </div>
            </div>
        </div>
        <reg-integral ref="integral"></reg-integral>
    </div>
</template>

<script>
import {myScore} from '@/api/integral'
import regIntegral from './components/regIntegral'
export default {
    components:{
        regIntegral
    },
    data() {
        return {
            list:[],
            score:'',
            
        }
    },
    methods: {
        async getlist() {
            const data = await myScore()
            this.list = data.config_data
            this.score = data.score
        }, 
        goOperation(type){
            let userid 
            this.$store.ready(state=>{
                userid = state.userInfo.userid
            })
            switch (type) {
                case '0':
                    this.$refs.integral.getcanvas()
                    break;
                case '4' :
                    this.$router.push(`/course?categoryid=0&coursetype=1&userid=${userid}`)
                    break;
                case '3' :
                    this.$router.push(`/course?categoryid=0&coursetype=3&userid=${userid}`)
                    break;
                case '2' :
                    this.$router.push(`/course?categoryid=0&coursetype=1&userid=${userid}`)
                    break;
                case '1' :
                    this.$router.push(`/course?categoryid=0&coursetype=4&userid=${userid}`)
                    break;
                case '5' :
                    this.$router.push(`/course?categoryid=0&coursetype=3&userid=${userid}`)
                    break;
                default:
                    break;
            }
        },
        gotodel() {
            this.$router.push('/user/integraldel')
        }
    },
    activated() {
        this.$store.ready(state=>{
            // console.log(state)
        })
        document.title = "我的积分"
        this.getlist()
    },
}
</script>

<style scoped>
.page{
    padding: 10px 20px;
    background-color: #fff;
    min-height: 100vh
}
.intlhead{
    width: 100%;
    height: 5rem;
    background:  url('../../../assets/integral/jfbj@2x.png')  no-repeat center center;
    box-shadow:0px 1.5px 8px 0px rgba(0, 0, 0, 0.13);
    border-radius:.75rem;
}
.intlhead-num{
    text-align: center;
    padding: 1.25rem 0 .3rem 0 ;
}
.intlhead-num span {
    font-size: 30px
}
.intlhead-num__img{
    width: .8rem;
    height: .9rem;
}
.intlhead-del{
    text-align: center
}
.intlhead-del img{
    width:16px;
    height: 16px;
    vertical-align: bottom;
}
.inttitle{
    padding: 1rem 0 .5rem 0;
    font-size:19px;
    color:rgba(74,74,76,1);
}
.intcontent{
    background:rgba(255,255,255,1);
    box-shadow:0px 2px 4px .5px rgba(0, 0, 0, 0.09);
    border-radius:10px 10px 0px 0px;
    padding: 0 1rem;
}
.intcontent-list{
    padding: 0.75rem 0;
    border-bottom: 1px solid #f3f3f3;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.intcontent-list__left{
    display: flex;
    align-items: center;
}
.intcontent-list__left--img {
    margin-right: 10px
}
.intcontent-list__left--img img {
    width: 40px;
    height: 40px;
}
.intcontent-list__right span {
    border-radius: 1rem;
    background-color: #F14055;
    color: #fff;
    width: 72px;
    display: inline-block;
    height: 30px;
    line-height: 30px;
    text-align: center;
}
.intcontent-list__left--title{
    color: #4A4A4C;
    font-size: 14px;
    margin-bottom: 2px;
}
.intcontent-list__left--num{
    color: #808080
}
</style>
