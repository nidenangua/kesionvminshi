import { $post } from './main.entrance'
/**
 * 积分配置
 */
export function showScoreSet(params) {
    return new Promise(resolve => {
        $post('Users.showScoreSet', params).then(res => {
            resolve(res)
        })
    })
}
/**
 * 积分明细
 */
export function scoreLog(params) {
    return new Promise(resolve => {
        $post('Users.scoreLog', params).then(res => {
            resolve(res)
        })
    })
}
// 修改积分通用配置
export function scoreSet(params) {
    return new Promise(resolve => {
        $post('Users.scoreSet', params).then(res => {
            resolve(res)
        })
    })
}
// 修改积分任务配置
export function editScoreSet(params) {
    return new Promise(resolve => {
        $post('Users.editScoreSet', params).then(res => {
            resolve(res)
        })
    })
}
// 修改积分任务配置
export function scoreManage(params) {
    return new Promise(resolve => {
        $post('Users.scoreManage', params).then(res => {
            resolve(res)
        })
    })
}
// 调整积分
export function scoreTrim(params) {
    return new Promise(resolve => {
        $post('Users.scoreTrim', params).then(res => {
            resolve(res)
        })
    })
}
// 积分管理导出excel
export function scoreManageExcel(params) {
    return new Promise(resolve => {
        $post('Users.scoreManageExcel', params).then(res => {
            resolve(res)
        })
    })
}