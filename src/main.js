import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store";

import FastClick from "fastclick";
import VueLazyload from "vue-lazyload";

import toast from "components/common/toast"

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue();

// 安装toast插件
Vue.use(toast);

// 解决移动端300ms延迟
FastClick.attach(document.body);

// 使用懒加载插件
Vue.use(VueLazyload, {
	loading: require("./assets/img/common/placeholder.png")
});

new Vue({
	router,
	store,
  render: h => h(App),
}).$mount('#app')

// template -> AST语法树 -> render函数 ->




