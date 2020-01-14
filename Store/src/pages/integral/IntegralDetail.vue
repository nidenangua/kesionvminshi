<template>
    <ks-container>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/integral' }">积分管理</el-breadcrumb-item>
            <el-breadcrumb-item>积分明细</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="intdetail">
            <div>
                <el-date-picker
                    v-model="search.startTime"
                    type="datetime"
                    @change="getStartTime"
                    placeholder="创建时间 ( 开始 )">
                </el-date-picker>
                <el-date-picker
                    v-model="search.endTime"
                    type="datetime"
                    @change="getEndTime"
                    placeholder="创建时间 ( 结束 )">
                </el-date-picker>
                <el-button icon="el-icon-search" class="searchBtn" @click="searchList">搜索</el-button>
            </div>
        </div>
        <el-table :data="list" tooltip-effect="dark" style="width: 100%" class="main">
            <el-table-column label="头像" align="center" width="100">
                <template slot-scope="scope">
                    <div class="main-image">
                        <ks-image :src="scope.row.head" :radius="50"></ks-image>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="昵称" align="center" prop="nickname"></el-table-column>
            <el-table-column label="用户名" align="center" prop="username"></el-table-column>
            <el-table-column label="手机号" align="center" prop="mobile"></el-table-column>
            <el-table-column label="积分值" align="center" prop="score"></el-table-column>
            <el-table-column label="产品描述" align="center" prop="memo"></el-table-column>
            <el-table-column label="类型" align="center" prop="group_name">
                <template slot-scope="scope">
                    <span v-if="scope.row.source == 0">分享注册</span>
                    <span v-else-if="scope.row.source == 1">分享文章</span>
                    <span v-else-if="scope.row.source == 2">分享视频</span>
                    <span v-else-if="scope.row.source == 3">分享音频</span>
                    <span v-else-if="scope.row.source == 4">观看视频</span>
                    <span v-else-if="scope.row.source == 5">收听音频</span>
                    <span v-else-if="scope.row.source == 6">购买课程</span>
                    <span v-else-if="scope.row.source == 7">会员卡购买</span>
                    <!-- <span v-else-if="scope.row.source == 8">课程购买</span> -->
                    <span v-else-if="scope.row.source == 9">教辅购买</span>
                    <span v-else-if="scope.row.source == 10">折扣卡</span>
                    <span v-else-if="scope.row.source == 11">答疑卡</span>
                    <span v-else>后台积分调整</span>
                </template>
            </el-table-column>
            <el-table-column label="创建时间" align="center" prop="adddate"></el-table-column>
        </el-table>
         <div class="pirfooter-right">
            <el-pagination
                background=""
                layout="prev, pager, next"
                :page-size="page.maxperpage"
                :total="Number(page.total)"
                :current-page="page.p"
                @current-change="handleCurrentChange"
            >
            </el-pagination>
        </div>
    </ks-container>
</template>

<script>
import {scoreLog} from '@/api/integral'
export default {
    data() {
        return {
            search:{
                startTime:'',
                endTime:''
            },
            list:[],
            page:{
                p:1,
                maxperpage:10,
                total:''
            }
        }
    },
    methods: {
        getStartTime(){
            if(!this.search.startTime) return this.getList()
        },
        getEndTime() {
            if(!this.search.endTime) return this.getList()
        },
        searchList() {
            this.getList()
        },
        async getList() {
            let starttime = this.search.startTime ? this.search.startTime.valueOf() : ''
            let endtime = this.search.endTime ? this.search.endTime.valueOf() : ''
            let params = {
                userid:this.$route.query.id,
                p:this.page.p,
                maxperpage:this.page.maxperpage,
                starttime,
                endtime
            }
            console.log(this.page.p)
            const data  = await scoreLog(params)
            this.list = data.list
            this.page.total = data.page.totalput
        },
        handleCurrentChange(val) {
            this.page.p = val
            this.getList()
        }
    },
    created() {
        this.getList()
    },
    computed: {
        id() {
            return this.$route.query.id
        }
    },
    watch: {
        id() {
            if(this.$route.name === "IntegralDetail") {
                this.getList()
            }
        }
    },
}
</script>

<style scoped>
.intdetail{
    display: flex;
    justify-content: space-between;
    margin: 40px 0 20px 0
}
.intdetailInput{
    width: 230px;
}
.searchBtn{
    background-color: #304156;
    color: #fff;
    height: 44px;
    line-height: 22px;
}
.main-image{
    width: 40px;
    height: 40px;
    margin: 0 auto;
}
.pirfooter-right {
  display: flex;
  margin-top: 20px;
  flex-direction: row-reverse;
}
</style>
