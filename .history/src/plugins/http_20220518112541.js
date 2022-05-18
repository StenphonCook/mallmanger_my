//插件模块

import axios from "axios";
const MyHttpServe = {}

MyHttpServe.install = (Vue) => {
    // 4. 添加实例方法
    Vue.prototype.$http = axios
}

export default MyHttpServe