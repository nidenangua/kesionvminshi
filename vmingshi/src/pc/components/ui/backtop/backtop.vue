<template>
    <div class="backtop">
        <transition name="fade">
            <ul v-if="pageflag">
                <li @click="gotop">
                    <i class="ks-icon ks-icon-arrow-ios-upward-outline"></i>
                    <span>返回顶部</span>
                </li>
                <li class="backtop-scan" @mouseover="getimg" @mouseleave="removeImg()" v-if="$store.state.info.json.teacher_wechat_code">
                    <transition name="fade">
                        <div class="backtop-code" v-if="flag">
                            <p>扫码添加微信</p>
                            <ks-image :src="$store.state.info.json.teacher_wechat_code" class="backtop-scan__img"/>
                        </div>
                    </transition>
                    <i class="ks-icon ks-icon-saomiao"></i>
                    <span>扫码添加</span>
                </li>
                <li class="backtop-scan" @mouseover="getpublic" @mouseleave="removepublic()">
                    <transition name="fade">
                        <div class="backtop-code public-code" v-if="publicFlag">
                            <p>扫码添加公众号</p>
                            <ks-image :src="$store.state.info.weixinqr" class="backtop-scan__img"/>
                        </div>
                    </transition>
                    <i class="ks-icon ks-icon-people-outline"></i>
                    <span>公众号</span>
                </li>
                <li class="backtop-scan" @mouseover="getwechat" @mouseleave="removewechat()" v-if="$store.state.info.json.wechat_applet_code">
                    <transition name="fade">
                        <div class="backtop-code public-wechat" v-if="wechatFalg">
                            <p>扫码添加小程序</p>
                            <ks-image :src="$store.state.info.json.wechat_applet_code" class="backtop-scan__img"/>
                        </div>
                    </transition>
                    <i class="ks-icon ks-icon-link--outline"></i>
                    <span>小程序</span>
                </li>
            </ul> 
        </transition>   
    </div>    
</template>

<script>
export default {
    props:{

    },
    name:'KsBacktop',
    data() {
        return {
            flag:false,
            publicFlag:false,
            pageflag:false,
            wechatFalg:false
        }
    },
    methods: {
        gotop() {
            let top = document.documentElement.scrollTop || document.body.scrollTop;
            const timeTop = setInterval(() => {
                document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
                if (top <= 0) {
                clearInterval(timeTop);
                }
            }, 10);
        },
        getimg() {
            this.flag=true
        },
        removeImg() {
            this.flag = false
        },
        getpublic() {
            this.publicFlag = true
        },
        removepublic() {
            this.publicFlag = false
        },
        handleScroll () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            this.pageflag = scrollTop > 1000 ? true : false
        },  
        getwechat() {
            this.wechatFalg = true
        },
        removewechat() {
            this.wechatFalg = false
        }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll)
    },
}
</script>

<style lang="scss" scoped>
.backtop{
    position: fixed;
    bottom: 300px;
    right: 70px;
    ul {
        width: 55px;
        box-sizing: border-box;
        position: fixed;
        bottom: 120px;
        right: 40px;
        font-family: Helvetica Neue,Helvetica,Arial,Hiragino Sans GB,Microsoft YaHei,宋体,"sans-serif";
        background-color: #fff;
        z-index: 1000;
        transition: all .7s ease;
        li{
            display: block;
            width: 55px;
            height: 55px;
            box-sizing: border-box;
            border: 1px solid #e2e2e2;
            color: #b2b2b2;
            text-align: center;
            margin-top: -1px;
            position: relative;
            cursor: pointer;
            i{
                font-size: 24px;
                width: 24px;
                height: 24px;
                display: block;
                margin: 12px auto 0;
                background-position: 0 0;
            }
            span{
                font-size: 12px;
                -webkit-transform: scale(.8);
                -moz-transform: scale(.8);
                -o-transform: scale(.8);
                transform: scale(.8);
                display: block;
                position: absolute;
                bottom: 1px;
                width: 100%;
            }
        }
    }
}
.backtop-scan{
    position: relative
}
.backtop-code{
    width: 150px;
    height: 180px;
    background-color: #fff;
    position: absolute;
    right: 80px;
    bottom: -55px;
    p{
        padding-top: 10px;
        font-size: 14px;
        color: #323232!important;
    }
}
.backtop-scan__img{
    display: block;
    width: 120px;
    height: 120px;
    margin: 15px auto 0;
}
.public-code{
    bottom: -15px;
}
.public-wechat{
    bottom: 10px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
