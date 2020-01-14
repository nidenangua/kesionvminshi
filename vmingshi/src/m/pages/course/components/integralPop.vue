<template>
    <van-overlay :show="show" @click="show = false">
        <div class="integralPop">
            <p class="integralPop-num">{{integralNum}}</p>
            <p class="integralPop-add">+{{integralNum}}</p>
            <p class="integralPop-get" @click="gotoget()">如何获得积分</p>
        </div>
    </van-overlay>
</template>

<script>
export default {
    props:{
        integralNum:[Number,String],
    },
    data() {
        return {
            show:false
        }
    },
    methods: {
        gotoget() {
            this.$router.push('/user/integral')
        },
        showpop() {
            this.show = true
        }
    },
}
</script>

<style scoped>
.integralPop{
    width: 208px;
    height: 181px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;
    background: url(../../../assets/integral/group4@3x.png) no-repeat center center/100% 100%;
}
.integralPop-num{
    font-size: 24px;
    color: #976a39;
    padding-top: 60px;
    text-align: center;
}
.integralPop-add{
    font-size: 12px;
    padding: 41px 0 0 131px;
    color: #ffe5c0
}
.integralPop-get{
    font-size: 12px;
    padding-top: 8px;
    color: #231435;
    text-decoration:underline;
    text-align: center
}
</style>
