<template>
    <div>
        <div class="goods-head clearfix">
            <el-input
                class="goods-head__input"
                @change="getList()"
                placeholder="请输入商品名搜索"
                v-model="keyword"
            >
                <i
                class="el-icon-search el-input__icon ks-cursor-pointer"
                slot="suffix"
                @click="getList()"
                ></i>
            </el-input>
        </div>
        <el-table :data="recordData" size="medium">
            <el-table-column
            label="交易时间" width="170px">
                2020-01-07 14:37:07
            </el-table-column>
            <el-table-column
            prop="ordersn"
            width="220px"
            label="订单号">
            </el-table-column>
            <el-table-column
                prop="nickname"
                label="联系人">
            </el-table-column>
            <el-table-column
            prop="nickname"
            label="购买人">
            </el-table-column>
            <el-table-column
            width="180px"
            label="推广员昵称">
                <template slot-scope="scope">
                    <div class="promoter">
                        <ks-image class="promoter__avatar" :src="scope.row.userinfo.head" />
                        <div class="promoter__info">
                            <div class="promoter__name">
                                {{ scope.row.userinfo.nickname }}
                            </div>
                            <div class="promoter__level">
                                {{ scope.row.userinfo.level }}
                            </div>
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column
            label="推广员手机号">
            13799054717
            </el-table-column>
            <el-table-column
            prop="title"
            label="商品名称">
            </el-table-column>
            <el-table-column
            label="交易金额">
                <template slot-scope="scope">
                    ¥{{scope.order_amount}}
                </template>
            </el-table-column>
            <el-table-column
            label="佣金比例">
                <template slot-scope="scope">
                    ¥{{scope.twodistribute_commission}}
                </template>
            </el-table-column>
            <el-table-column
            label="佣金">
                <template slot-scope="scope">
                    ¥{{scope.twodistribute_amount}}
                </template>
            </el-table-column>
            <el-table-column
            label="状态">
                已结算
            </el-table-column>
        </el-table>
        
    </div>
</template>
<script>
import {distributionOrderList} from '@/api/distribution'
export default {
    name:'DistributeRecord',
    data(){
        return {
            keyword:'',
            recordData:[]
        }
    },
    mounted(){
      this.getList()  
    },
    methods:{
        getList(p=1){
            distributionOrderList({
                p,
                maxperpage:10
            }).then(res=>{
                console.log(res)
                this.recordData = res.list
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.goods-head{
    padding-bottom: 20px;
}
.goods-head__input{
    max-width: 440px;
    float: right;
}
 /**分销员 */
.promoter{
    position: relative;
    padding-left: 50px;
    min-height: 40px;
}
.promoter__avatar{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
}
.promoter__level,
.promoter__name{
    font-size: 14px;
    line-height: 18px;
}
.promoter__level{
    color:$prompt-color;
    padding-top: 3px;
}
</style>