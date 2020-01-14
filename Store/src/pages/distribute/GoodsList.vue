<template>
    <div>
        <div class="goods-head clearfix">
            <el-button class="ks-fr" icon="el-icon-plus" type="primary" @click="dialogVisible=true;showGoods=true;">添加推广商品</el-button>
            <el-input
                @change="getList()"
                class="goods-head__input"
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
        <el-table
            v-loading="loading"
            ref="multipleTable"
            :data="list"
            tooltip-effect="dark"
            style="width: 100%">
            <el-table-column label="选择" width="60">
                <div slot-scope="scope" style="margin-left:5px;">
                    <el-checkbox v-model="scope.row.checked" />
                </div>
            </el-table-column>
            <el-table-column
            label="商品名称"
            width="440">
            <template slot-scope="scope">
                <div class="goods">
                    <ks-image class="goods__cover" :src="scope.row.defaultpic" />
                    <div class="goods__info">
                        <div class="goods__title">
                            {{ scope.row.title }}
                        </div>
                        <div class="goods__price">
                            ¥{{ scope.row.price }}
                        </div>
                    </div>
                </div>
                
            </template>
            </el-table-column>
            <el-table-column
            prop="type_title"
            label="商品类型">
                
            </el-table-column>
            <el-table-column
            label="价格（元）">
                <template slot-scope="scope">
                    ¥{{ scope.row.price }}
                </template>
            </el-table-column>
            <el-table-column
            label="直接/间接推广佣金">
                <template slot-scope="scope">
                    直接佣金比例： {{scope.row.$direct}}% <br />
                    间接佣金比例： {{scope.row.$indirect}}%
                </template>
            </el-table-column>
            <el-table-column
                width="220px"
                label="状态">
                <div class="goods-list__operate" slot-scope="scope">
                    <span @click="setGoodsRatio(scope.row)">比例设置</span><span>海报设置</span>
                </div>
            </el-table-column>
            
        </el-table>
        <div class="ks-mt20 clearfix">
          <div class="ks-fl ks-ml15">
            <el-checkbox v-model="checkAll" @change="onCheckAllChange">{{checkAll ? '反选' : '全选'}}</el-checkbox>
            <el-button class="ks-ml15" @click="cancelPromotion">取消推广</el-button>
          </div>
          <div class="ks-fr">
            <el-pagination
              @current-change="getList"
              :current-page="page"
              :page-count="pageCount"
              layout="prev, pager, next"
              background
            ></el-pagination>
          </div>
        </div>
        <el-dialog
            title="添加推广商品"
            :visible.sync="dialogVisible" @closed="showGoods = false">
            <select-goods @sure="addGoods" v-if="showGoods" />
        </el-dialog>
        <el-dialog :visible.sync="scaleSetVisible" title="比例设置" width="600px">
            <el-form>
                <el-form-item label="比例设置">
                    <el-radio-group v-model="currentGoods.isdefcommission">
                        <el-radio label="1">使用默认比例</el-radio>
                        <el-radio label="0">自定义比例</el-radio>
                    </el-radio-group>
                    <div class="ks-tips">
                        注意：如需修改默认佣金比例，请前往【分销员】-【设置】-【分销规则】
                    </div>
                </el-form-item>
            </el-form>
            <el-table :data="currentGoods.commission.setting" size="medium">
                <el-table-column
                    label="推广员级别">
                    <template slot-scope="scope">
                        {{ruleLevelName[scope.$index]}}
                    </template>
                </el-table-column>
                <el-table-column
                    label="直接推广佣金比例">
                    <template slot-scope="scope">
                        <ks-input-number
                            v-if="currentGoods.isdefcommission == 0"
                            max-width="90px"
                            :max="100"
                            size="medium"
                            plain
                            v-model="scope.row.direct_commission" unit="%" />
                        <span v-else>
                            {{scope.row.direct_commission}}%
                        </span>
                    </template>
                </el-table-column>
                <el-table-column
                    label="间接推广佣金比例">
                    <template slot-scope="scope">
                        <ks-input-number
                            v-if="currentGoods.isdefcommission == 0"
                            max-width="90px"
                            :max="100"
                            size="medium"
                            plain
                            v-model="scope.row.indirect_commission" unit="%" />
                        <span v-else>
                            {{scope.row.indirect_commission}}%
                        </span>
                    </template>
                </el-table-column>
            </el-table>
            <div class="dialog-footer">
                <el-button size="medium" @click="scaleSetVisible = false">
                    取消
                </el-button>
                <el-button size="medium" @click="saveGoodsRatio" type="primary">
                    确定
                </el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import {getAppSetting} from '@/api/home'
import SelectGoods from '@/components/select-goods'
import {distributionList,operationCourse,saveCourseSetting} from '@/api/distribution'
import CheckAll from '@/mixins/check.all'
export default {
    name:'GoodsList',
    /**checkedData checkAll 来自mixin CheckAll */
    mixins:[CheckAll],
    components:{
        SelectGoods
    },
    data(){
        return {
            ruleLevelName:[],
            showGoods:true,
            scaleSetVisible:false,
            dialogVisible:false,
            loading:false,
            listActiveTab:'list',
            page:1,
            pageCount:1,
            list:[],
            keyword:'',
            currentGoods:{
                isdefcommission:'1',
                commission:{
                    setting:[]
                }
            }
        }
    },
    mounted(){
        this.getList()
    },
    methods:{
        /**
         * 获取数据列表
         */
        getList(p=1){
            if(this.loading){
                return
            }
            this.loading = true
            distributionList({
                title:this.keyword,
                p,
                maxperpage:10
            }).then(res=>{
                res.list.map(item=>{
                    item.checked = false
                    let setting = item.commission.setting || []
                    if(setting.length){
                        item.$direct = setting[0].direct_commission
                        item.$indirect = setting[0].indirect_commission
                        if(setting.length > 1){
                            if(setting[setting.length-1].direct_commission > setting[0].direct_commission){
                                item.$direct += ' ~ ' + setting[setting.length-1].direct_commission
                            }
                            if(setting[setting.length-1].indirect_commission > setting[0].indirect_commission){
                                item.$indirect += ' ~ ' + setting[setting.length-1].indirect_commission
                            }
                        }
                    }else{
                        item.$direct = ''
                        item.$indirect = ''
                    }
                })
                this.page = res.page.now_page
                this.pageCount = res.page.total_pages
                this.list = res.list
                this.loading = false
            })
        },
        /**
         * 批量取消推广
         */
        cancelPromotion(){
            let ids = []
            this.checkedData.map(item=>{
                ids.push({
                    id:item.id,
                    type:item.type
                })
            })
            operationCourse({
                operation:2,
                ids
            }).then(res=>{
                if(res.result === 'success'){
                    this.$msg('取消成功','success')
                    let page = ids.length < this.list.length ? this.page : this.page-1
                    page = Math.max(page,1)
                    this.getList(page)
                    
                }
            })
        },
        /**
         * 添加推广商品
         */
        addGoods(e){
            this.dialogVisible = false
            let ids = []
            e.map(item=>{
                ids.push({
                    id:item.$id,
                    type:item.$goods_type
                })
            })
            operationCourse({
                operation:1,
                ids
            }).then(res=>{
                if(res.result === 'success'){
                    this.$msg('添加成功','success')
                    this.getList()
                }
            })
        },
        /**
         * 设置商品比例
         */
        setGoodsRatio(row){
            if(!this.appSetInfoGeted){
                this.appSetInfoGeted = true
                getAppSetting({
                    appid:105
                }).then(res=>{
                    this.ruleLevelName = res.level_name
                })
            }
            this.currentGoods = row
            this.scaleSetVisible = true
        },
        /**
         * 保存商品比例
         */
        saveGoodsRatio(){
            saveCourseSetting({
                type:this.currentGoods.type,
                id:this.currentGoods.id,
                isdefcommission:this.currentGoods.isdefcommission,
                setting:this.currentGoods.commission.setting
            }).then(res=>{
                if(res.result === 'success'){
                    this.$msg('保存成功','success')
                    this.scaleSetVisible = false
                    this.getList(this.page)
                }
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
    margin-right: 15px;
}
 /**分销员 */
.goods{
    position: relative;
    padding-left: 100px;
    min-height: 56px;
}
.goods__cover{
    width: 90px;
    height: 56px;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
}
.goods__price,
.goods__title{
    font-size: 14px;
    line-height: 18px;
}
.goods__title {
    height: 36px;
    overflow: hidden;
}
.goods__price{
    color:$ornament-color;
    padding-top: 3px;
}

.goods-list__operate{
    color:$primary-color;
    span{
        margin: 0 10px;
        position: relative;
        cursor: pointer;
    }
    span + span::after{
        content: '';
        width: 1px;
        height: 100%;
        position:absolute;
        left: -10px;
        top: 0;
        background: #ebebeb;
    }
}
.dialog-footer{
    text-align: center;
    margin-top: 20px;
}
</style>