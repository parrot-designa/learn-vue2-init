import Vue from '@/my-vue2/core/index'
import { isReservedTag } from "../util/index"

// 新增了Vue.prototype.$mount、
// 新增了Vue.prototype.__patch__
// 扩展 Vue.config一些属性
Vue.config.isReservedTag = isReservedTag;
// 扩展 Vue.options.directive
// 扩展 Vue.options.components

export default Vue