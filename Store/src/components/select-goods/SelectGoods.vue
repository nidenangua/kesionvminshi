<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="getList()">
            <el-tab-pane label="课程" name="1"></el-tab-pane>
            <el-tab-pane label="专栏" name="2"></el-tab-pane>
            <el-tab-pane label="教辅" name="3"></el-tab-pane>
        </el-tabs>
        <el-table
            size="medium"
            v-loading="loading"
            height="500"
            :data="list">
            <el-table-column label="选择" width="60">
                <div slot-scope="scope" style="margin-left:5px;">
                    <el-checkbox v-model="scope.row.checked" @change="onCheckChange(scope.row)" />
                </div>
            </el-table-column>
            <el-table-column
            label="商品名称"
            width="300">
                <template slot-scope="scope">
                    <div class="goods">
                        <ks-image class="goods__cover" :src="scope.row.defaultpic" />
                        <div class="goods__info">
                            <div class="goods__title">
                                {{ scope.row.title }}
                            </div>
                            <div class="goods__price">
                                {{ scope.row.price }}
                            </div>
                        </div>
                    </div>
                    
                </template>
            </el-table-column>
            <el-table-column
            prop="type_title"
            label="商品类型">
                <template slot-scope="scope">
                    <span v-if="scope.row.$goods_type == 1">
                        {{(scope.row.courseType == 1 && '视频') || (scope.row.courseType == 2 && '直播') || (scope.row.courseType == 3 && '音频') || (scope.row.courseType == 4 && '图文') || (scope.row.courseType == 5 && '面授') || (scope.row.courseType == 6 && '活动') || ''}}
                    </span>
                    <span v-else-if="scope.row.$goods_type == 2">
                        专栏
                    </span>
                    <span v-else-if="scope.row.$goods_type == 3">
                    </span>
                </template>
            </el-table-column>
            <el-table-column
            label="价格（元）">
                <template slot-scope="scope">
                    {{ scope.row.price }}
                </template>
            </el-table-column>
        </el-table>
        <div class="ks-mt20 clearfix">
          <div class="ks-fl ks-ml15">
            <el-checkbox v-model="checkAll" @change="onSelectAllChange">{{checkAll ? '反选' : '全选'}}</el-checkbox>
            <el-button size="medium" :disabled="!selected.length" class="ks-ml15" type="primary" @click="sure">确定({{selected.length}})</el-button>
          </div>
          <div class="ks-fr">
            <el-pagination
              @current-change="getList"
              :current-page="page"
              :page-count="pageCount"
              :pager-count="pagerCount"
              layout="prev, pager, next"
              background
            ></el-pagination>
          </div>
        </div>
    </div>
</template>
<script>
import {mallList} from '@/api/microportal'
import { getStoreData } from '@/api/store'
export default {
    name:'SelectGoods',
    data(){
        return {
            checkAll:false,
            loading:false,
            page:1,
            pageCount:1,
            pagerCount:5,
            activeName:'1',
            selected:[],
            list:[]
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
            let params = {
                callKeyName:'data',
                p,
                maxperpage:10,
                data:{
                    chargetype:'1',
                    isdistribution:'0'
                }
            }
            switch(this.activeName){
                case '1':
                    params.act = 'appCourse'
                    params = [params]
                    break
                case '2':
                    params.act = 'appColumn'
                    params = [params]
                    break
                case '3':
                    return mallList({
                        p,
                        maxperpage:10,
                        chargetype:'1',
                        isdistribution:'0'
                    }).then(res=>{
                        this.handerList(res.list,res.page)
                    })
                    break
            }
            getStoreData(params).then(res=>{
                this.handerList(res.data.list,res.data.page)
            })
        },
        handerList(list,page){
            let checkedLength = 0
            list.map(item=>{
                switch(this.activeName){
                    case '1':
                    case '3':
                        item.$id = item.courseid
                        break
                    case '2':
                        item.$id = item.columnid
                        break
                }
                item.$goods_type = this.activeName
                let has = this.selected.filter(checkedItem=>(checkedItem.$goods_type == item.$goods_type && checkedItem.$id == item.$id))
                if(has.length > 0){
                    item.checked = true
                    checkedLength++
                }else{
                    item.checked = false
                }
            })
            this.checkAll = list.length == checkedLength
            this.list = list
            this.page = page.now_page
            this.pageCount = page.total_pages
            this.loading = false
        },
        /**
         * 复选项选中变化
         */
        onCheckChange(row){
            if(row.checked){
                let has = this.selected.filter(item=>(item.$id == row.$id && item.$goods_type == row.$goods_type))
                if(!has.length){
                    this.selected.push(row)
                }
            }else{
                this.selected.map((item,i)=>{
                    if(item.$id == row.$id && item.$goods_type == row.$goods_type){
                        this.selected.splice(i,1)
                    }
                })
            }
            let checkedItems = this.list.filter(item=>item.checked)
            this.checkAll = checkedItems.length == this.list.length
        },
        /**
         * 全选、反选
         */
        onSelectAllChange(e){
            this.list.map(item=>{
                item.checked = e
                this.onCheckChange(item)
            })
            
        },
        /**
         * 确定
         */
        sure(){
            this.$emit('sure',this.selected)
        }
    }
}
</script>
<style lang="scss" scoped>
.el-tabs /deep/ .el-tabs__content{
    display: none;
}
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
</style>