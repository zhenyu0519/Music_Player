import 'babel-polyfill' //对一些es6的API进行转译
import Vue from 'vue'
import App from './App'

//取消移动端点击300毫秒延迟
import fastclick from 'fastclick'
import 'common/stylus/index.styl'; // eslint-disable-line

//将fastclick关联到dom的body上去这样的话, body下面按钮或者div等被点击的时候就不会有300毫秒的延迟了
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
