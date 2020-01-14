import { $post } from './main.entrance'
/**
 * 积分配置
 */
export function myScore(params) {
    return new Promise(resolve => {
        $post('Users.myScore', params).then(res => {
            resolve(res)
        })
    })
}
/**
 * 积分列表
 */
export function myScoreDetails(params) {
    return new Promise(resolve => {
        $post('Users.myScoreDetails', params).then(res => {
            resolve(res)
        })
    })
}
/**
 * 获取积分
*/
export function scoreChange(params) {
    return new Promise(resolve => {
        $post('Users.scoreChange', params).then(res => {
            resolve(res)
        })
    })
}
/**
 * 邀请二维码
*/
export function inviterQr(params) {
    return new Promise(resolve => {
        $post('Users.inviterQr', params).then(res => {
            resolve(res)
        })
    })
}