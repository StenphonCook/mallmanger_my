// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MyHttpServe from '@/plugins/http';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/reset.css'
import moment from 'moment'


Vue.use(ElementUI);
Vue.use(MyHttpServe)

Vue.config.productionTip = false

// 全局过滤器
Vue.filter('fmtdate', (v) => {
    v = v * 1000
    return moment(v).format('YYYY-MM-DD')
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    // render:(h)=>h{App}下方代码等价写法，
    components: { App },
    template: '<App/>'
})