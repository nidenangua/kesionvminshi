import { $post, $get } from './main.entrance'

/**添加活动 */
export function addActivity(params) {
    return $post(`Microportal.Store.addActivity`, params)
}

/**编辑活动 */
export function courseDetail(params) {
    return $post(`Microportal.Common.courseDetail`, params)
}

/**签到管理 */
export function getActivityList(params) {
    return $post(`Microportal.getActivityList`, params)
}

/**取消签到/设置签到 */
export function activitySignStatus(params) {
    return $post(`Microportal.activitySignStatus`, params)
}

/**审核 */
export function activityCheck(params) {
    return $post(`Microportal.activityCheck`, params)
}

/** 规格组列表 */
export function commodityList(params) {
    return $post(`Microportal.commodityList`, params)
}

/**规则组显示 */
export function showCommodity(params) {
    return $post(`Microportal.showCommodity`, params)
}

/**规则组编辑 */
export function editCommodity(params) {
    return $post(`Microportal.editCommodity`, params)
}

/**规则组删除 */
export function delCommodity(params) {
    return $post(`Microportal.delCommodity`, params)
}

/**商品列表 */
export function mallList(params) {
    return $post(`Microportal.mallList`, params)
}
/**教辅周边保存添加 */
export function editGoods(params) {
    return $post(`Microportal.editGoods`, params)
}

/** 规格组价格按规格设置分类 */
export function sortCommodity(params) {
    return $post(`Microportal.sortCommodity`, params)
}
/** 查看商品 */
export function showGoods(params) {
    return $post(`Microportal.showGoods`, params)
}
/** 查看是否上下架*/
export function shelves(params) {
    return $post(`Microportal.shelves`, params)
}