
import { mark,measure } from "../util/perf";
import config from "../config";

let uid = 0;

export function initMixin(Vue){
    Vue.prototype._init = function(options){
        // 获取 vue实例
        const vm = this;
        // vue实例唯一标识
        vm._uid = uid++;  
        // init 函数刚执行时
        let startTag, endTag
        if (__DEV__ && config.performance && mark) {
            startTag = `vue-perf-start:${vm._uid}`
            endTag = `vue-perf-end:${vm._uid}`
            mark(startTag)
        }
        // 用于后续判断是否是有效的 vue实例使用
        vm._isVue = true;
        // 是否跳过视图更新
        vm.__v_skip = true
        // 省略作用域相关的部分
        // xxx 作用域部分
        // 组件合并暂时不讨论
        if(options && options._isComponent){

        }else{
            
        }
        // 将 vm._self指向实例本身
        vm._self = vm; 
        // init 函数初始化逻辑完成
        if (__DEV__ && config.performance && mark) {
            mark(endTag)
            measure(`vue ${vm._uid} init`, startTag, endTag)
        } 
    }
}