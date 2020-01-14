import { $post } from './main.entrance'
/**
 * 获取证书列表
 */
export function certificateList(params) {
    return $post(`Certificate.certificateList`, params)
}
/**
 * 证书开关
 */
export function changeStatus(params) {
    return $post(`Certificate.changeStatus`, params)
}
/**
 * 关联列表
 */
export function getLinkList(params) {
    return $post(`Certificate.getLinkList`, params)
}
/**
 * 列表删除
 */
export function del(params) {
    return $post(`Certificate.del`, params)
}
/**
 * 关联详情
 */
export function getLinkDetail(params) {
    return $post(`Certificate.getLinkDetail`, params)
}
/**
 * 添加证书
 */
export function addCertificate(params) {
    return $post(`Certificate.addCertificate`, params)
}
/**
 * 证书详情
 */
export function getCertificate(params) {
    return $post(`Certificate.getCertificate`, params)
}
