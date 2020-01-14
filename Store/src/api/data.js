import { $post } from './main.entrance'

/**
 * 获取资料列表
 */
export function getMaterialsList(params) {
    return $post(`Microportal.Common.getMaterialsList`, params)
}

/**
 * 修改资料开放状态
 */
export function changeMaterialsOpen(params) {
    return $post(`Microportal.store.changeMaterialsOpen`, params)
}
/**
 * 添加资料
 */
export function addMaterials(params) {
    return $post(`Microportal.store.addMaterials`, params)
}
/**
 * 删除课程资料
 */
export function delMaterials(params) {
    return $post(`Microportal.store.delMaterials`, params)
}

/**
 * 添加课程资料
 */
export function addCourseMaterials(params) {
    return $post(`Microportal.store.addCourseMaterials`, params)
}

/**
 * 获取资料
 */
export function getMaterialsDetail(params) {
    return $post(`Microportal.store.getMaterialsDetail`, params)
}

/**
 * 获取资料文件列表
 */
export function getFileList(params) {
    return $post(`Home.store.getFileList`, params)
}

/**
 * 删除资料
 */
export function delFile(params) {
    return $post(`Home.store.delFile`, params)
}