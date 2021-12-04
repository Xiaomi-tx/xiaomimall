import Vue from "vue";
import Vuex from "vuex";

import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

// 1. 安装插件
Vue.use(Vuex);

// 2. 创建store对象
const store = new Vuex.Store({
	state: {
		cartList: []
	},
	mutations,
	getters,
	actions
})

// 3. 挂在Vue实例上
export default store;
