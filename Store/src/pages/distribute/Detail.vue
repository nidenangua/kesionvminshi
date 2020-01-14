<template>
  <ks-container>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/distribute/list' }">分销</el-breadcrumb-item>
        <el-breadcrumb-item>查看分销员</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="distribute-detail">
      <div class="distribute-detail__head">
        <ks-image :src="distributorInfo.head" type="user" class="distribute-detail__avatar" />
        {{distributorInfo.name}}
      </div>
      <div class="distribute-detail__info">
        <el-row>
          <el-col :span="8">
            <p>姓名： {{distributorInfo.name}}</p>
            <p>手机号：{{distributorInfo.mobile}}</p>
          </el-col>
          <el-col :span="8">
            <p>直接推广笔数： {{distributorInfo.distribution_count}}</p>
            <p>直接推广金额： ¥ {{distributorInfo.distribution_money}}</p>
            <p></p>
          </el-col>
          <el-col :span="8">
            <p>上级推广员： {{distributorInfo.parent_name}}</p>
            <p>加入时间： {{distributorInfo.adddate}}</p>
            <p></p>
          </el-col>
        </el-row>
      </div>
    </div>
    <el-tabs class="distribute-tabs" v-model="activeTab">
      <el-tab-pane label="他的客户" name="client"></el-tab-pane>
      <el-tab-pane label="他的下级" name="subordinate"></el-tab-pane>
    </el-tabs>
    <el-table width="100%">
      <el-table-column label="头像/昵称">
        <template slot-scope="scope">66</template>
      </el-table-column>
      <el-table-column label="累计订单数"></el-table-column>
      <el-table-column label="累计消费金额"></el-table-column>
    </el-table>
    <div class="ks-mt20 clearfix" v-if="list.length">
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
  </ks-container>
</template>
<script>
import {distributionMemberDetail} from '@/api/distribution'
import CheckAll from "@/mixins/check.all";
export default {
  name: "DistributeDetail",
  mixins: [CheckAll],
  data() {
    return {
      distributorInfo: {},
      page: 1,
      pageCount: 1,
      list: [],
      activeTab: "client"
    }
  },
  activated(){
      distributionMemberDetail({
          userid:this.$route.query.userid
      }).then(res=>{
          console.log(res)
          if(res.result === 'success'){
              this.distributorInfo = res.detail
          }
      })
  },
  methods:{
      /**
       * 获取数据列表
       */
      getList(){

      }
  }
}
</script>
<style lang="scss" scoped>
.el-tabs /deep/ .el-tabs__content {
  display: none;
}
.distribute-detail {
  background: $background-color;
  padding: 20px;
  border-radius: 6px;
  margin-top: 20px;
}
.distribute-detail__head {
  position: relative;
  padding-left: 50px;
  line-height: 40px;
  min-height: 40px;
  font-size: 14px;
}
.distribute-detail__avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
}
.distribute-detail__info {
  padding-left: 50px;
  line-height: 26px;
  margin-top: 20px;
  color: $secondary-text-color;
}
.distribute-detail__info .el-col {
  position: relative;
}
.distribute-detail__info .el-col + .el-col {
  padding-left: 60px;
}
.distribute-detail__info .el-col + .el-col::after {
  content: "";
  width: 1px;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: #ebebeb;
}
.distribute-tabs {
  margin-top: 15px;
}
</style>