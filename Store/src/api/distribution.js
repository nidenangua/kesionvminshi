import { $post } from './main.entrance'

/**保存分销配置 */
export function saveSetting(params){
    return $post('Distribution.saveSetting',params)
}
/**保存招募配置 */
export function saveRecruit(params){
    return $post('Distribution.saveRecruit',params)
}

/**删除分销规则前判断是否有此等级的分销商 */
export function delSettingCheck(params){
    return $post('Distribution.delSettingCheck',params)
}
/**获取分销商品列表 */
export function distributionList(params){
    return $post('Distribution.distributionList',params)
}
/**分销推广记录 */
export function distributionOrderList(params){
    return $post('Distribution.distributionOrderList',params)
}
/**分销员详情 */
export function distributionMemberDetail(params){
    return $post('Distribution.distributionMemberDetail',params)
}
/**添加、删除分销商品 */
export function operationCourse(params){
    return $post('Distribution.operationCourse',params)
}
/**保存商品独立配置 */
export function saveCourseSetting(params){
    return $post('Distribution.saveCourseSetting',params)
}

/**获取分销员列表 */
export function distributionMemberList(params){
    return $post('Distribution.distributionMemberList',params)
}

/**批量修改分销等级 */
export function batchLevel(params){
    return $post('Distribution.batchLevel',params)
}
/**批量删除分销员 */
export function batchDel(params){
    return $post('Distribution.batchDel',params)
}


