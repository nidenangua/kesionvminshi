<template>
  <div>
    <el-tabs v-model="status" type="card" @tab-click="getList()">
      <el-tab-pane label="分销员" name="1"></el-tab-pane>
      <el-tab-pane label="审核信息" name="2"></el-tab-pane>
    </el-tabs>
    <div class="promoter-head clearfix">
      <el-input
        @change="getList()"
        class="promoter-head__input"
        placeholder="请输入商品名搜索"
        v-model="keyword"
      >
        <i class="el-icon-search el-input__icon ks-cursor-pointer" slot="suffix" @click="getList()"></i>
      </el-input>
      <el-select
        class="ks-fr"
        v-model="level"
        placeholder="请选择"
        @change="getList()"
        v-if="level !== null"
      >
        <el-option
          v-for="item in levelOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <el-table :data="list" style="width: 100%" v-loading="loading">
      <el-table-column label="选择" width="60px">
        <div slot-scope="scope" style="margin-left:5px;">
          <el-checkbox v-model="scope.row.checked" />
        </div>
      </el-table-column>
      <el-table-column label="头像/昵称" width="300">
        <template slot-scope="scope">
          <div class="promoter">
            <ks-image class="promoter__avatar" type="user" :src="scope.row.userinfo.head" />
            <div class="promoter__info">
              <div class="promoter__name">{{ scope.row.name }}</div>
              <div class="promoter__level">{{ scope.row.userinfo.level }}</div>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="mobile" label="手机号码"></el-table-column>
      <el-table-column prop="parentid" label="上级分销员"></el-table-column>
      <el-table-column prop="all_client" label="累计客户（人）"></el-table-column>
      <el-table-column prop="all_invite" label="累计邀请（人）"></el-table-column>
      <el-table-column prop="distributionMoney" label="累计收益（元）"></el-table-column>
      <el-table-column prop="adddate" label="加入时间"></el-table-column>
      <el-table-column label="操作">
        <div class="operate" slot-scope="scope">
          <span @click="openDetail(scope.row)">详情</span>
          <el-dropdown :show-timeout="0" @command="handleCommand">
            <span>更多</span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item :command="{action:'link',userid:scope.row.userid}">生成推广链接</el-dropdown-item>
                <el-dropdown-item :command="{action:'editLevel',userid:scope.row.userid}">修改等级</el-dropdown-item>
                <el-dropdown-item :command="{action:'del',userid:scope.row.userid}">清退</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          
        </div>
      </el-table-column>
    </el-table>
    <div class="ks-mt20 clearfix" v-if="list.length">
      <div class="ks-fl ks-ml15">
        <el-checkbox
          v-model="checkAll"
          @change="onCheckAllChange"
        >{{checkAll ? '反选' : '全选'}}</el-checkbox>
        <el-button class="ks-ml15" @click="modifyLevel">批量修改等级</el-button>
        <el-button class="ks-ml15" @click="modifyDel">批量清退</el-button>
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
    <el-dialog :visible.sync="batchLevelDialog" title="修改分销员等级" width="600px">
      <div class="batch-level">
        <div class="batch-level__text">{{selectedMsg}}</div>
        <div class="batch-level__text">
          修改推广员等级为：
          <el-select size="medium" v-model="levelValue" placeholder="请选择">
            <el-option
              v-for="item in levelList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>
      <div class="dialog-footer">
        <el-button size="medium" @click="batchLevelDialog = false">取消</el-button>
        <el-button size="medium" @click="batchLevelSure" type="primary">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { cloneData } from "@/utils";
import { distributionMemberList,batchLevel,batchDel } from "@/api/distribution";
import CheckAll from "@/mixins/check.all";
import { getAppSetting } from "@/api/home";
export default {
  name: "PromoterList",
  mixins: [CheckAll],
  data() {
    return {
      level: null,
      levelOptions: [],
      batchLevelDialog: false,
      levelValue: "",
      levelList: [],
      loading: false,
      keyword: "",
      status: "1",
      page: 1,
      pageCount: 1,
      list: [],
      selectedMsg: ''
    };
  },
  mounted() {
    getAppSetting({
      appid: 105
    }).then(res => {
      let levelOptions = [];
      res.setting.map((item, i) => {
        levelOptions.push({
          label: res.level_name[i],
          value: `${i + 1}`
        });
      });
      this.levelList = cloneData(levelOptions);
      let defLevel = [
        {
          label: "全部分销员",
          value: "0"
        }
      ];
      levelOptions = defLevel.concat(levelOptions);
      this.level = levelOptions[0].value;
      this.levelOptions = levelOptions;
      this.getList();
    });
  },
  methods: {
    /**
     * 修改分销等级
     */
    modifyLevel() {
        if(!this.checkedData.length){
            return this.$msg('请选择分销员')
        }
        let selectedInfo = []
        this.levelList.map((item,i)=>{
            selectedInfo.push({
                name:item.label,
                level:i+1,
                value:0
            })
        })
        this.checkedData.map((item,i)=>{
            selectedInfo.map(m=>{
                if(m.level == item.level){
                    m.value += 1
                }
            })
        })
        let msg = []
        selectedInfo.map(item=>{
            msg.push(`${item.name}${item.value}个`)
        })
        msg = msg.join('，')
        msg = `本次选择分销员${this.checkedData.length}个，其中：${msg}。`
        this.selectedMsg = msg
        this.batchLevelDialog = true
    },
    /**
     * 批量清退
     */
    modifyDel(userids = []){
        if(!userids.length && !this.checkedData.length){
            return this.$msg('请选择分销员')
        }
        this.$tipsDialog('若清退选择的分销员，这些用户将不再是分销员，下级客户会全部解绑。 确定要清退么？',{
            buttons:[
                {
                    type:'default',
                    name:'取消'
                },
                {
                    type:'primary',
                    name:'确定',
                    callback:()=>{
                        if(!userids.length){
                            this.checkedData.map(item=>{
                                userids.push(item.userid)
                            })
                        }
                        batchDel({
                            userids
                        }).then(res=>{
                            if(res.result === 'success'){
                                this.$msg('清退成功','success')
                                this.getList(this.page)
                            }
                        })
                    }
                }
            ]
        })
    },
    /**
     * 获取数据列表
     */
    getList(p = 1) {
      if (this.loading) {
        return
      }
      this.loading = true;
      distributionMemberList({
        p,
        level: this.level,
        maxperpage: 10,
        title: this.keyword,
        status: this.status
      }).then(res => {
        if (res.result === "success") {
          res.list.map(item => {
            item.checked = false;
          });
          this.page = res.page.now_page;
          this.pageCount = res.page.total_pages;
          this.list = res.list;
          this.loading = false;
        }
      });
    },
    /**
     * 批量修改分销商等级
     */
    batchLevelSure() {
        let userids = []
        this.checkedData.map(item=>{
            userids.push(item.userid)
        })
        batchLevel({
            userids,
            level:this.levelValue
        }).then(res=>{
            if(res.result === 'success'){
                this.$msg('修改成功','success')
                this.batchLevelDialog = false
                this.getList(this.page)
            }
        })
    },
    /**
     * 分销员（单个操作）
     */
    handleCommand(e){
        switch(e.action){
            case 'link':
                break
            case 'del':
                this.modifyDel([e.userid])
                break
        }
    },
    /**
     * 查看详情
     */
    openDetail(row){
        this.$router.push('/distribute/detail?userid='+row.userid)
    }
  }
};
</script>
<style lang="scss" scoped>
.el-tabs /deep/ .el-tabs__content {
  display: none;
}
.promoter-head {
  padding-bottom: 20px;
}
.promoter-head__input {
  max-width: 440px;
  float: right;
  margin-left: 10px;
}
/**分销员 */
.promoter {
  position: relative;
  padding-left: 50px;
  min-height: 40px;
}
.promoter__avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
}
.promoter__level,
.promoter__name {
  font-size: 14px;
  line-height: 18px;
}
.promoter__level {
  color: $prompt-color;
  padding-top: 3px;
}

.operate {
  span {
    margin: 0 10px;
    position: relative;
    cursor: pointer;
    color: $primary-color;
  }
  span + span::after {
    content: "";
    width: 1px;
    height: 100%;
    position: absolute;
    left: -10px;
    top: 0;
    background: #ebebeb;
  }
}

.batch-level__text {
  text-align: center;
  padding: 10px 0;
}

.dialog-footer {
  text-align: center;
  border-top: 1px solid #ebebeb;
  padding-top: 20px;
  margin-top: 40px;
}
</style>