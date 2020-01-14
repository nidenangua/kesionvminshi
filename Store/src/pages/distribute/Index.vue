<template>
    <ks-container>
        <el-alert>
            <div class="title">
                分销
                <el-switch v-model="switchValue">
                </el-switch>
            </div>
            分销功能是科汛云开店推出的一款可帮助商户拓宽推广渠道的应用营销工具，商户在买家成功推广课程后给予其奖励，以此给商户带来更多传播和促进销量提升。<br />
            通过分销功能产生的订单收益会自动存入可提现余额中，您可随时申请提现。
            <br />
            <br />
        </el-alert>
        <el-tabs class="tabs" v-model="activeTab" @tab-click="handleClick">
            <el-tab-pane label="分销员" name="list"></el-tab-pane>
            <el-tab-pane label="商品列表" name="goods"></el-tab-pane>
            <el-tab-pane label="推广记录" name="record"></el-tab-pane>
            <el-tab-pane label="业绩统计" name="achievement"></el-tab-pane>
            <el-tab-pane label="设置" name="setup"></el-tab-pane>
        </el-tabs>
        <router-view />
    </ks-container>
</template>
<script>
export default {
    data(){
        return {
            activeTab:'list',
            switchValue:true
        }
    },
    methods:{
        handleClick(){
            this.$router.push(`/distribute/${this.activeTab}`)
        }
    },
    activated(){
        switch(this.$route.name){
            case 'PromoterList':
                this.activeTab = 'list'
                break
            case 'GoodsList':
                this.activeTab = 'goods'
                break
            case 'DistributeRecord':
                this.activeTab = 'record'
                break
            case 'DistributeSetUp':
                this.activeTab = 'setup'
                break
        }
    }
}
</script>
<style lang="scss" scoped>
    .title{
        font-size: 18px;
        line-height: 48px;
        color:$primary-text-color;
        .el-switch{
            margin: -3px 0 0 5px;
        }
    }
    .tabs{
        margin-top: 15px;
    }
    .el-tab-pane{
        padding: 5px 0;
    }

   
</style>