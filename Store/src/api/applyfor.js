import { $post } from './main.entrance'
/**
 * 获取城市地址
 */
export function getArea(params) {
    return $post(`Home.getArea`, params)
}
/**
 * 提交申请
 */
export function saveTeacher(params) {
    return $post(`Home.saveTeacher`, params)
}
/**
 * 获取名师申请详情
 */
export function getTeacher(params) {
    return $post(`Home.getTeacher`, params)
}
/**
 *  获取推广信息 
 */
export function salesList(params) {
    return $post(`Home.salesList`, params)
}
/**
 *  获取推广信息 
 */
export function withdrawList(params) {
    return $post(`Home.withdrawList`, params)
}