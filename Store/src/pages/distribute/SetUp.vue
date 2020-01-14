<template>
    <div v-if="loaded">
        <el-tabs v-model="activeTab" type="card">
            <el-tab-pane label="分销规则" name="rule">
            <ks-title name="分销员招募" plain />
            <el-form label-position="left" label-width="90px">
                <el-form-item label="开启招募">
                    <div class="radio-item">
                        <el-radio v-model="formData.isopen" label="1">开启</el-radio>
                        <span>开启后，用户可申请成为分销员</span>
                    </div>
                    <div class="radio-item">
                        <el-radio v-model="formData.isopen" label="0">关闭</el-radio>
                        <span>关闭后，用户不可申请成为分销员</span>
                    </div>
                    <div class="radio-item-group" v-if="formData.isopen == 1">
                        <el-form-item label="加入条件">
                            <div class="radio-item">
                                <el-radio v-model="formData.iscondition" label="1">开启</el-radio>
                                <span>有条件时，用户需要先满足条件，才可申请</span>
                            </div>
                            <div class="radio-item">
                                <el-radio v-model="formData.iscondition" label="0">关闭</el-radio>
                                <span>无条件时，所有用户可申请</span>
                            </div>
                        </el-form-item>
                    </div>
                    <div class="radio-item-group" v-if="formData.isopen == 1">
                        <el-form-item label="招募审核">
                            <div class="radio-item">
                                <el-radio v-model="formData.ischeck" label="1">开启</el-radio>
                                <span>开启后，用户申请推广员，需要商家审核；<a @click="activeTab = 'recruit'">招募页设置</a></span>
                            </div>
                            <div class="radio-item">
                                <el-radio v-model="formData.ischeck" label="0">关闭</el-radio>
                                <span>关闭后，满足条件的用户可成为推广员，无需商家审核</span>
                            </div>
                        </el-form-item>
                    </div>
                </el-form-item>
                <el-form-item label="发展下级">
                    <div class="radio-item">
                        <el-radio v-model="formData.islevel" label="1">开启</el-radio>
                        <span>开启后，所有推广员可邀请好友成为推广员；被邀请方成功推广后，邀请方会获得“间接推广佣金”</span>
                    </div>
                    <div class="radio-item">
                        <el-radio v-model="formData.islevel" label="0">关闭</el-radio>
                        <span>关闭后，所有推广员不可邀请好友成为推广员，已存在的邀请关系不受影响</span>
                    </div>
                </el-form-item>
            </el-form>
            <ks-title name="权益设置" plain />
            <el-form label-width="90px">
                <el-form-item label="结算方式">
                    <div class="radio-item">
                        自动结算
                        <span>订单完成后立即结算，推广员可提现</span>
                    </div>
                </el-form-item>
                <el-form-item label="等级规则">
                    <div>
                        <el-table
                        size="medium"
                        class="form-table"
                        :data="formData.setting"
                        style="width: 100%">
                            <el-table-column
                                label="推广员等级">
                                <template slot-scope="scope">
                                {{ruleLevelName[scope.$index]}}
                                </template>
                            </el-table-column>
                            <el-table-column
                                label="升级规则"
                                width="280px">
                                <template slot-scope="scope">
                                <div class="upgrade-rules" v-if="scope.$index === 0">
                                    所有分销员默认等级
                                </div>
                                <div class="upgrade-rules" v-else-if="compiler == scope.$index">
                                    <p>
                                        <ks-input-number
                                        :disabled="scope.row.isclien == 0"
                                        max-width="90px"
                                        size="medium"
                                        unit="人"
                                        plain
                                        v-model="scope.row.all_client" />
                                        <el-checkbox
                                        true-label="1"
                                        false-label="0"
                                        v-model="scope.row.isclien">累计推广用户
                                        </el-checkbox>
                                    </p>
                                    <p>
                                        <ks-input-number
                                        :disabled="scope.row.ismoney == 0"
                                        max-width="90px"
                                        size="medium"
                                        plain
                                        unit="元"
                                        v-model="scope.row.all_money" />
                                        <el-checkbox 
                                        true-label="1"
                                        false-label="0"
                                        v-model="scope.row.ismoney">累计推广金额</el-checkbox>
                                        
                                    </p>
                                    <p>
                                        <ks-input-number
                                        :disabled="scope.row.ismember == 0"
                                        max-width="90px"
                                        size="medium"
                                        plain
                                        unit="人"
                                        v-model="scope.row.all_member" />
                                        <el-checkbox 
                                        true-label="1"
                                        false-label="0"
                                        v-model="scope.row.ismember">累计邀请分销员</el-checkbox>
                                        
                                    </p>
                                </div>
                                <div class="upgrade-rules" v-else>
                                    <p v-if="scope.row.isclien == 1">
                                        <span>
                                            {{scope.row.all_client}}人
                                        </span>累计推广用户</p>
                                    <p v-if="scope.row.ismoney == 1">
                                        <span>
                                            {{scope.row.all_money}}元
                                        </span>累计推广金额</p>
                                    <p v-if="scope.row.ismember == 1">
                                        <span>
                                        {{scope.row.all_member}}人
                                        </span>
                                        累计邀请分销员</p>
                                </div>
                                        
                                </template>
                            </el-table-column>
                            <el-table-column
                                label="默认直接推广佣金比例">
                                <template slot-scope="scope">
                                    <div v-if="compiler == scope.$index">
                                        <ks-input-number
                                            max-width="90px"
                                            :max="100"
                                            size="medium"
                                            plain
                                            v-model="scope.row.direct_commission" unit="%" />
                                    </div>
                                    <div v-else>
                                        {{scope.row.direct_commission}}%
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                label="默认间接推广佣金比例	">
                                <template slot-scope="scope">
                                    <div v-if="compiler == scope.$index">
                                        <ks-input-number
                                            max-width="90px"
                                            :max="100"
                                            size="medium"
                                            plain
                                            v-model="scope.row.indirect_commission" unit="%" />
                                    </div>
                                    <div v-else>
                                        {{scope.row.indirect_commission}}%
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                label="操作"
                                width="130px">
                                <div slot-scope="scope" class="operate">
                                    <div v-if="compiler == scope.$index">
                                        <span @click="saveRule(scope.$index)">保存</span><span @click="ruleCancel(scope.$index)">{{isNewCompiler ? '删除' : '取消'}}</span>
                                    </div>
                                    <div v-else>
                                        <span @click="ruleEdit(scope.$index)">编辑</span><span @click="deleteRule(scope.$index)" v-if="scope.$index > 0">删除</span>
                                    </div>
                                    
                                </div>
                            </el-table-column>
                        </el-table>
                        <div class="ks-tips ks-pt10">
                            选择多个升级条件时，需要同时满足才能升级
                        </div>
                        <el-button @click="addLevel" class="ks-mt10" type="primary" size="medium" plain v-if="formData.setting.length < ruleLevelName.length">
                            添加等级
                        </el-button>
                    </div>
                   
                </el-form-item>
            </el-form>
            </el-tab-pane>
            <el-tab-pane label="招募页设置" name="recruit">
                <el-alert type="warning">
                    由于微信风控升级，请勿在招募页设置中显示【发展下级】、【入门费或消费门槛】、【二级及二级以上关系】等敏感内容，会存在被微信警告或者禁用的风险
                </el-alert>
                <ks-title class="ks-mt30" name="招募页设置" plain />
                <el-form label-position="left" label-width="90px">
                    <el-form-item label="链接地址">
                        {{recruitData.url}}
                        <el-button class="ks-ml10" type="primary" size="small" @click="copyUrl('recruitUrl')" plain>复制链接</el-button>
                        <input
                            style="height:0px;border:0px;"
                            ref="recruitUrl"
                            :value="recruitData.url"
                        >
                    </el-form-item>
                    <el-form-item label="页面标题">
                        <el-input v-model="recruitData.title" />
                    </el-form-item>
                    <el-form-item label="详情描述">
                        <ks-editor style="max-width:900px;" v-model="recruitData.content" :height="300" />
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            
        </el-tabs>
        <div class="setup-footer">
            <el-button type="primary" :loading="saving" @click="save">{{saving ? '保存中...' : '保存设置'}}</el-button>
        </div>
    </div>
</template>
<script>
import {cloneData} from '@/utils'
import {saveSetting,delSettingCheck,saveRecruit} from '@/api/distribution'
import {getAppSetting} from '@/api/home'
export default {
    name:'DistributeSetUp',
    data(){
        return {
            loaded:false,
            saving:false,
            isNewCompiler:false,
            compiler:-1,
            activeTab:'recruit',
            recruitData:{
                url:'',
                title:'',
                content:''
            },
            formData:{},
            ruleLevelName:[]
        }
    },
    mounted(){
        getAppSetting({
            appid:105
        }).then(res=>{
            let {isopen,iscondition,ischeck,islevel,level_name,setting} = res
            this.formData = {
                setting,
                isopen,
                iscondition,
                ischeck,
                islevel
            }
            this.recruitData.url = res.url
            this.recruitData.title = res.title
            this.ruleLevelName = level_name
            this.$store.ready(state=>{
                this.recruitData.content = res.content.replace(/{{name}}/g,state.userInfo.name)
            })
            this.loaded = true
        })
    },
    methods:{
        /**
         * 保存规则
         */
        saveRule(index){
            let prevRule = this.formData.setting[index-1]
            let currRule = this.formData.setting[index]
            let nextRule = this.formData.setting[index+1]
            let currLevel = this.ruleLevelName[index]
            if(prevRule){
                if(currRule.direct_commission < prevRule.direct_commission || currRule.indirect_commission < prevRule.indirect_commission){
                    return this.$msg(currLevel + '的佣金比例，不能小于低等级的分销员')
                }
                if(prevRule.isclien == 1 && (prevRule.all_client >= currRule.all_client || currRule.isclien != 1)){
                    return this.$msg(currLevel + '的升级条件，必须大于低等级')
                }
                if(prevRule.ismoney == 1 && (prevRule.all_money >= currRule.all_money || currRule.ismoney != 1)){
                    return this.$msg(currLevel + '的升级条件，必须大于低等级')
                }
                if(prevRule.ismember == 1 && (prevRule.all_member >= currRule.all_member || currRule.ismember != 1)){
                    return this.$msg(currLevel + '的升级条件，必须大于低等级')
                }
            }
            if(nextRule){
                if(currRule.direct_commission > nextRule.direct_commission || currRule.indirect_commission > nextRule.indirect_commission){
                    return this.$msg(currLevel + '的佣金比例，不能大于高等级的分销员')
                }
                if(currRule.isclien == 1 && (currRule.all_client >= nextRule.all_client || nextRule.isclien != 1)){
                    return this.$msg(currLevel + '的升级条件，必须小于高等级')
                }
                if(currRule.ismoney == 1 && (currRule.all_money >= nextRule.all_money || nextRule.ismoney != 1)){
                    return this.$msg(currLevel + '的升级条件，必须小于高等级')
                }
                if(currRule.ismember == 1 && (currRule.all_member >= nextRule.all_member || nextRule.ismember != 1)){
                    return this.$msg(currLevel + '的升级条件，必须小于高等级')
                }
            }
            if(currRule.isclien == 1 && currRule.all_client == 0){
                return this.$msg('累计推广客户的有效值要大于0，请重新设置')
            }
            if(currRule.ismoney == 1 && currRule.all_money == 0){
                return this.$msg('累计推广金额的有效值要大于0，请重新设置')
            }
            if(currRule.ismember == 1 && currRule.all_member == 0){
                return this.$msg('累计邀请分销员的有效值要大于0，请重新设置')
            }
            if(Number(currRule.direct_commission) + Number(currRule.indirect_commission) > 100){
                return this.$msg('直接佣金比例，和间接佣金比例之和，不能大于100%')
            }
            this.isNewCompiler = false
            this.compiler = -1
        },
        /**
         * 添加等级
         */
        addLevel(){
            this.formData.setting.push({
                isclien:"0",
                all_client:"0",
                ismoney:"0",
                all_money:"0",
                ismember:"0",
                all_member:"0",
                direct_commission:"0",
                indirect_commission:"0"
            })
            this.isNewCompiler = true
            this.compiler = this.formData.setting.length-1
        },
        /**
         * 删除规则
         */
        deleteRule(index){
            let currLevel = this.ruleLevelName[index]
            delSettingCheck({
                level:index+1
            }).then(res=>{
                if(res.count > 0){
                    return this.$tipsDialog(`当前有位${res.count}位${currLevel}，不能删除等级。请前往【分销员列表】，修改${currLevel}为其他等级后，即可删除该等级。`,{
                        buttons: [
                            {
                                name: "我知道了",
                                type: "primary"
                            }
                        ]
                    })
                }else{
                    this.formData.setting.splice(index,index)
                }
            })
        },
        /**
         * 编辑规则
         */
        ruleEdit(index){
            this.oldRule = cloneData(this.formData.setting[index])
            this.compiler = index
        },
        /**
         * 取消编辑规则
         */
        ruleCancel(index){
            if(this.isNewCompiler){
                this.formData.setting.splice(index,1)
                return
            }
            let keys = Object.keys(this.oldRule)
            keys.map(k=>{
                this.formData.setting[index][k] = this.oldRule[k]
            })
            this.compiler = -1
        },
        /**
         * 复制链接
         */
        copyUrl(name) {
            var url = this.$refs[name];
            url.select();
            document.execCommand("Copy");
            this.$msg("复制成功", "success");
        },
        /**
         * 保存
         */
        save(){
            switch(this.activeTab){
                case 'rule':
                    if(this.compiler > -1){
                        return this.$msg('请先保存分销员规则')
                    }
                    saveSetting(this.formData).then(res=>{
                        if(res.result === 'success'){
                            this.$msg('保存成功','success')
                        }
                    })
                    break
                case 'recruit':
                    if(this.saving){
                        return
                    }
                    if(!this.recruitData.title){
                        return this.$msg('页面标题不能为空')
                    }
                    if(!this.recruitData.content){
                        return this.$msg('详情描述不能为空')
                    }
                    this.saving = true
                    saveRecruit(this.recruitData).then(res=>{
                        if(res.result === 'success'){
                            this.$msg('保存成功','success')
                            this.saving = false
                        }
                    })
                    break
            }
            
        }
    }
}
</script>
<style lang="scss" scoped>

.radio-item-group{
    margin-top:15px;
}
.radio-item span{
    color:$auxiliary-text-color;
    font-size: 12px;
    margin-left: 10px;
}
.radio-item a{
    color:$primary-color;
    cursor: pointer;
}
.el-radio{
    margin-right: 10px;
}

.setup-footer{
    text-align:center;
    border-top: 1px solid #ebebeb;
    padding-top: 20px;
}
.upgrade-rules{
    min-height: 1ss00px;
}
.upgrade-rules p{
    height: 36px;
    line-height: 36px;
    padding: 5px 0;
}
.upgrade-rules span{ 
    float: right;
    color:$auxiliary-text-color;
    padding-right: 40px;
}
.upgrade-rules .ks-input-number{
    float: right;
}

.form-table{
    max-width: 900px;
    line-height: 18px;
}
.operate{
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
</style>