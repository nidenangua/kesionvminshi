<template>
    <ks-container class="page">
        <ks-title name="积分管理" border="none"/>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="积分配置" name="IntegralConfig">
                <div class="contitle">
                    <span class="contitle-color"></span>
                    <span class="contitle-name">积分通用配置</span>
                </div>
                <div class="concontent">
                    <span>积分抵现值设置</span>
                    <span class="concontent-set" @click="integralSet = true">设置</span>
                </div>
                <div class="contitle">
                    <span class="contitle-color"></span>
                    <span class="contitle-name">积分任务配置</span>
                </div>
                <el-table :data="list" tooltip-effect="dark" style="width: 100%" class="main">
                    <el-table-column label="任务名称" align="center" prop="name"></el-table-column>
                    <el-table-column label="单笔奖励积分" align="center" prop="reward"></el-table-column>
                    <el-table-column label="上限次数" align="center" prop="limit_num"></el-table-column>
                    <el-table-column label="已奖励总积分" align="center" prop="totalreward"></el-table-column>
                    <el-table-column label="状态" align="center">
                        <template slot-scope="scope">
                            <span>{{scope.row.status == 0 ? '关闭' :'开启'}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="每日上限" align="center">
                        <template slot-scope="scope">
                            <span>{{scope.row.is_limit == 0 ? '关闭' :'开启'}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" align="center">
                        <template slot-scope="scope">
                            <span class="main-set" @click="integralconfigSet(scope.row.id)">设置</span>
                        </template>
                    </el-table-column>
                </el-table>
                <!-- <div class="pirfooter-right">
                    <el-pagination
                        background=""
                        layout="prev, pager, next"
                        :page-size="page.maxperpage"
                        :total="10"
                        :current-page="page.p"
                        @current-change="handleCurrentChange"
                    >
                        :total="Number(listpage.totalput)"
                    </el-pagination>
                </div> -->
                <!-- 积分抵现设置 -->
                <el-dialog title="积分抵现设置" :visible.sync="integralSet" width="30%">
                    <div class="intpop">
                        <div class="intpop-left">积分抵现值 : </div>
                        <div class="intpop-con">
                            <div>
                                <span>1元等于多少积分</span>
                                <el-input
                                    v-model="inputIntegral"
                                    placeholder="请输入积分"
                                    class="intpop-con__input"
                                ></el-input>
                            </div>
                            <div class="intpop-con__explain">积分设置必须大于等于1,建议1元=100个积分</div>
                        </div>
                    </div>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="integralSet = false">取 消</el-button>
                        <el-button type="primary" @click="setscore">确 定</el-button>
                    </span>
                </el-dialog>
                <!-- 积分任务配置设置 -->
                <el-dialog title="积分任务配置设置" :visible.sync="configSet" width="30%">
                    <div class="intconSet">
                        <div class="intconSet-title">开启状态 ：</div>
                        <div>
                            <el-radio v-model="radioStatus" label="1">开启</el-radio>
                            <el-radio v-model="radioStatus" label="0">关闭</el-radio>
                        </div>
                    </div>
                    <div class="intconSet">
                        <div class="intconSet-title">每日上限 ：</div>
                        <div>
                            <el-radio v-model="radioMax" label="1">开启</el-radio>
                            <el-radio v-model="radioMax" label="0">关闭</el-radio>
                        </div>
                    </div>
                    <div class="intconSet">
                        <div class="intconSet-title intconSet-input">上限次数 ：</div>
                        <div>
                            <el-input v-model="maxTime" placeholder="请输入上限次数" :disabled="maxFlag"></el-input>
                        </div>
                    </div>
                    <div class="intconSet">
                        <div class="intconSet-title intconSet-input">奖励积分 ：</div>
                        <div>
                            <el-input v-model="awardIntegral" placeholder="请输入奖励积分"></el-input>
                        </div>
                    </div>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="configSet = false">取 消</el-button>
                        <el-button type="primary" @click="taskConfig()">确 定</el-button>
                    </span>
                </el-dialog>
            </el-tab-pane>
            <el-tab-pane label="积分明细" name="IntegralDetail">
                <div class="intdetail">
                    <div>
                        <el-input v-model="search.name" placeholder="搜索昵称" class="intdetailInput" clearable @clear="clearList"></el-input>
                        <el-input v-model="search.tel" placeholder="搜索手机号" class="intdetailInput" clearable @clear="clearList"></el-input>
                        <el-input v-model="search.username" placeholder="搜索用户名" class="intdetailInput" clearable @clear="clearList"></el-input>
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
                    <div>
                        <el-select v-model="value" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-button @click="exportDel">导出Excel</el-button>
                    </div>
                </div>
                <div class="intgrant">
                    累计发放<span>{{grantMsg.grant_score}}</span> , 消耗积分<span>{{grantMsg.consume_score}}</span>
                </div>
                <!-- 积分明细表格 -->
                <el-table :data="detaillist" tooltip-effect="dark" style="width: 100%" class="main">
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
                    <!-- <el-table-column label="来源手机号" align="center"></el-table-column> -->
                    <el-table-column label="积分值" align="center" prop="score"></el-table-column>
                    <el-table-column label="类型" align="center">
                        <template slot-scope="scope">
                            <span v-if="scope.row.source == 0">分享注册</span>
                            <span v-else-if="scope.row.source == 1">分享文章</span>
                            <span v-else-if="scope.row.source == 2">分享视频</span>
                            <span v-else-if="scope.row.source == 3">分享音频</span>
                            <span v-else-if="scope.row.source == 4">观看视频</span>
                            <span v-else-if="scope.row.source == 5">收听音频</span>
                            <span v-else-if="scope.row.source == 6">购买课程</span>
                            <span v-else-if="scope.row.source == 7">会员卡购买</span>
                            <span v-else-if="scope.row.source == 8">课程购买</span>
                            <span v-else-if="scope.row.source == 9">教辅购买</span>
                            <span v-else-if="scope.row.source == 10">折扣卡</span>
                            <span v-else-if="scope.row.source == 11">答疑卡</span>
                            <span v-else>后台积分调整</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="产品描述" align="center" prop="memo"></el-table-column>
                    <el-table-column label="创建时间" align="center" prop="adddate"></el-table-column>
                </el-table>
                <div class="pirfooter-right">
                    <el-pagination
                        background=""
                        layout="prev, pager, next"
                        :page-size="page.maxperpage"
                        :total="Number(delPageMsg.total)"
                        :current-page="page.p"
                        @current-change="handleCurrentChange"
                    >
                        <!-- :total="Number(listpage.totalput)" -->
                    </el-pagination>
                </div>
            </el-tab-pane>
            <el-tab-pane label="用户积分管理" name="IntegralManage">
                <div class="intdetail">
                    <div>
                        <el-input v-model="manageSearch.name" placeholder="搜索昵称" class="intdetailInput" clearable @clear="searchManage"></el-input>
                        <el-input v-model="manageSearch.tel" placeholder="搜索手机号" class="intdetailInput" clearable @clear="searchManage"></el-input>
                        <el-input v-model="manageSearch.username" placeholder="搜索用户名" class="intdetailInput" clearable @clear="searchManage"></el-input>
                        <el-button icon="el-icon-search" class="searchBtn" @click="searchManage">搜索</el-button>
                    </div>
                    <div>
                        <el-select v-model="managevalue" placeholder="请选择">
                            <el-option
                            v-for="item in manageOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-button @click="manageExc">导出Excel</el-button>
                    </div>
                </div>
                <el-table :data="manageList" tooltip-effect="dark" style="width: 100%" class="main">
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
                    <el-table-column label="积分总额" align="center" prop="score"></el-table-column>
                    <el-table-column label="用户身份" align="center" prop="group_name"></el-table-column>
                    <el-table-column label="操作" align="center">
                        <template slot-scope="scope">
                            <div class="adjust">
                                <span @click="adjustInt(scope.row.score,scope.row.userid)">调整积分</span> | <span @click="godel(scope.row.userid)">积分明细</span>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="pirfooter-right">
                    <el-pagination
                        background=""
                        layout="prev, pager, next"
                        :page-size="managePage.maxperpage"
                        :total="Number(managePage.maxtotal)"
                        :current-page="managePage.p"
                        @current-change="manageCurrentChange"
                    >
                    </el-pagination>
                </div>
                <el-dialog title="调整积分" :visible.sync="integralAdjust" width="30%">
                        <div class="intpop-con__explain managepop-title">用户当前积分 : {{nowintegral}}</div>
                        <div class="managepop">
                            <div> 调整积分：<el-input placeholder="请输入要调整的积分" class="manage-input" v-model="afterintegral"></el-input></div>
                        </div>
                    <span slot="footer" class="dialog-footer">
                        <!-- <el-button @click="integralSet = false">取 消</el-button> -->
                        <el-button type="primary" @click="affirmAdjust">确认调整</el-button>
                    </span>
                </el-dialog>
            </el-tab-pane>
        </el-tabs>
    </ks-container>
</template>

<script>
import {scoreLog,showScoreSet,scoreSet,editScoreSet,scoreManage,scoreTrim,scoreManageExcel} from '@/api/integral'
export default {
  data() {
    return {
      /**开启状态 */
      radioStatus:'1',
      radioMax:'1',
      activeName: "IntegralConfig",
      /**积分配置列表 */
      list: [],
      /**明细列表 */
      detaillist:[],
      /**发放数据 */
      grantMsg:{
          grant_score:'',
          consume_score:''
      },
      integralSet: false,
      configSet: false,
      page: {
        p: 1,
        maxperpage: 10
      },
      delPageMsg:{
          total:''
      },
      /**积分值 */
      inputIntegral: "",
      /**积分搜索信息 */
      search:{
          name:'',
          tel:'',
          username:'',
          startTime:'',
          endTime:''
      },
      /**管理搜索 */
      manageSearch:{
        name:'',
        tel:'',
        username:''
      },
      /**奖励积分 */
      awardIntegral:'',
      /**上限次数 */
      maxTime:'',
      /**上限开关 */
      maxFlag:false,
      /**任务配置ID */
      taskconID:'',
      /**积分管理列表 */
      manageList:[],
      /**管理列表分页 */
      managePage:{
          p:1,
          maxperpage:10,
          maxtotal:''
      },
      /**积分调整 */
      integralAdjust:false,
      /**当前积分 */
      nowintegral:'',
      /**调整后积分 */
      afterintegral:'',
      /**积分管理userid */
      manageUserid:'',
      /**明细导出Exc */
      options: [{
          value: '100',
          label: '前100条'
        }, {
          value: '200',
          label: '前200条'
        }, {
          value: '300',
          label: '前300条'
        }, {
          value: '500',
          label: '前500条'
        }, {
          value: '',
          label: '全部'
        }],
        value: '100',
        manageOptions:[{
          value: '100',
          label: '前100条'
        }, {
          value: '200',
          label: '前200条'
        }, {
          value: '300',
          label: '前300条'
        }, {
          value: '500',
          label: '前500条'
        }, {
          value: '',
          label: '全部'
        }],
        managevalue:'100'
    };
  },
  methods: {
    handleClick(tab, event) {
        if (this.activeName == "IntegralConfig") {
            this.getScoreSet();
        } else if (this.activeName == "IntegralDetail") {
            this.getscoreLog();
        }else {
            this.getmanageList()
        }
    },
    handleCurrentChange(val) {
        this.page.p = val
        this.getscoreLog()
    },
    /**获取积分配置 */
    async getScoreSet() {
        const data  = await showScoreSet()
        this.inputIntegral = data.score
        this.list = data.data
    },
    /**设置积分任务配置 */ 
    integralconfigSet(id) {
        this.taskconID = id
        this.list.map(item=>{
            if(id == item.id) {
                this.maxTime = item.limit_num;
                this.awardIntegral = item.reward
                this.radioStatus = item.status
                this.radioMax = item.is_limit
                this.maxFlag = item.is_limit == 1 ? false : true
            }
        })
        this.configSet = true
    },
    /**修改积分任务配置 */
    async taskConfig() {
        const data = await editScoreSet({is_limit:this.radioMax,status:this.radioStatus,limit:this.maxTime,reward:this.awardIntegral,id:this.taskconID})
        if(data.result === "success"){
            this.$message.success("修改成功")
            this.configSet = false
            this.getScoreSet()
        } 
    },
    async setscore() {
        const data = await scoreSet({score:this.inputIntegral})
        this.integralSet = false
        if(data.result === 'success') return this.$message.success("修改成功")
    },
    /**获取明细列表 */
    async getscoreLog() {
        let starttime = this.search.startTime ? this.search.startTime.valueOf() : ''
        let endtime = this.search.endTime ? this.search.endTime.valueOf() : ''
        let params = {
            p:this.page.p,
            maxperpage:this.page.maxperpage,
            nickname:this.search.name,
            mobile:this.search.tel,
            username:this.search.username,
            starttime,
            endtime
        }
        const data  = await scoreLog(params)
        this.detaillist = data.list
        this.delPageMsg.total = data.page.totalput
        this.options[4].value = data.page.totalput
        this.grantMsg.grant_score = data.grant_score
        this.grantMsg.consume_score = data.consume_score
    },
    clearList() {
        this.getscoreLog()
    },
    /**搜索明细列表 */
    searchList() {
        this.getscoreLog()
    },
    /**获取创建开始时间 */
    getStartTime() {
        if(!this.search.startTime) return this.getscoreLog()
    },
    /**获取创建结束时间 */
    getEndTime() {
        if(!this.search.endTime) return this.getscoreLog()
    },
    /**管理搜索 */
    searchManage() {
        this.getmanageList()
    },
    async getmanageList() {
        let params = {
            p:this.managePage.p,
            maxperpage:this.managePage.maxperpage,
            nickname:this.manageSearch.name,
            mobile:this.manageSearch.tel,
            username:this.manageSearch.username
        }
        const data = await scoreManage(params)
        this.manageList = data.list
        this.manageOptions[4].value = data.page.totalput
        this.managePage.maxtotal = data.page.totalput
    },
    manageCurrentChange(val){
        this.managePage.p = val
        this.getmanageList()
    },
    /**积分调整 */
    adjustInt(score,userid) {
        this.integralAdjust = true
        this.nowintegral = score
        this.manageUserid = userid
    },
    /**确认调整 */
    async affirmAdjust() {
        const data = await scoreTrim({score:this.afterintegral,userid:this.manageUserid})
        if(data.result === 'success') {
            this.$message.success("修改成功")
            this.integralAdjust = false
            this.afterintegral = ""
            this.getmanageList()
        }
    },
    /**导出明细excel */
    exportDel() {
        location.href = `${location.origin}/Json/index.php?act=Users.scoreLogExcel&num=${this.value}`
    },
    /**导出积分管理exc */
    manageExc() {
        location.href = `${location.origin}/Json/index.php?act=Users.scoreManageExcel&num=${this.managevalue}`
    },
    godel(id) {
        this.$router.push(`/integraldetail?id=${id}`)
    }
  },
  created() {
      this.getScoreSet()
  },
  watch: {
      radioMax() {
          this.maxFlag = this.radioMax == 1 ? false : true
      }
  },
};
</script>

<style lang="scss" scoped>
.contitle-color {
  display: inline-block;
  height: 0;
  padding: 5px;
  background-color: $primary-color;
}
.contitle-name {
  font-weight: 700;
  font-size: 14px;
  margin-left: 5px;
}
.concontent {
  padding: 30px 19px 30px 19px;
  .concontent-set {
    color: $primary-color;
    margin-left: 20px;
    cursor: pointer;
  }
}
.main {
  margin-top: 20px;
}
.pirfooter-right {
  display: flex;
  margin-top: 20px;
  flex-direction: row-reverse;
}
.main-set {
  color: $primary-color;
  cursor: pointer;
}
.page /deep/.el-dialog__footer {
  text-align: center;
}
.intpop {
  display: flex;
}
.intpop-left {
  margin-top: 10px;
}
.intpop-con__explain {
  padding-top: 10px;
  box-sizing: border-box;
  font-size: 12px;
  color: $prompt-color;
}
.intpop-con__input {
  width: 120px;
  margin-left: 10px;
}
.intpop-con {
  margin-left: 20px;
}
.intconSet{
    display: flex;
    margin-bottom: 20px;
}
.intconSet-title{
    margin-right: 30px;
}
.intconSet-input{
    line-height: 40px;
}
.intdetail{
    display: flex;
    justify-content: space-between
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
.intgrant{
    padding: 20px 0;
    color: $auxiliary-text-color;
    font-size: 16px;
}
.main-image{
    width: 40px;
    height: 40px;
    margin: 0 auto;
}
.adjust{
    color: $primary-color
}
.adjust span {
    cursor: pointer;
}
.manage-input{
    width: 200px;
}
.managepop{
    margin-top: 25px;
}
.managepop-title{
    font-size: 14px;
}
</style>
