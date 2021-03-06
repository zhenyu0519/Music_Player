import 'babel-polyfill' // 对一些es6的API进行转译
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Routes from './router'
import VueLazyLoad from 'vue-lazyload'
// 取消移动端点击300毫秒延迟
import fastclick from 'fastclick'
import 'common/stylus/index.styl'; // eslint-disable-line

// 将fastclick关联到dom的body上去这样的话, body下面按钮或者div等被点击的时候就不会有300毫秒的延迟了
fastclick.attach(document.body)
// 使用’vue-route‘
Vue.use(VueRouter)
Vue.use(VueLazyLoad, {
  loading: require('common/img/default.png')
})
// 实例化route
const router = new VueRouter({
  routes: Routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
