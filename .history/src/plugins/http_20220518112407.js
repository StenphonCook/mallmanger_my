//插件模块

const MyHttpServe = {}

MyHttpServe.install = (Vue) => {
    // 1. 添加全局方法或 property
    Vue.myGlobalMethod = function() {
        // 逻辑...
    }

    // 2. 添加全局资源
    Vue.directive('my-directive', {
        bind(el, binding, vnode, oldVnode) {
            // 逻辑...
        }
        ...
    })

    // 3. 注入组件选项
    Vue.mixin({
        created: function() {
                // 逻辑...
            }
            ...
    })

    // 4. 添加实例方法
    Vue.prototype.$myMethod = function(methodOptions) {
        // 逻辑...
    }
}