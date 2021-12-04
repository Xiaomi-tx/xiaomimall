import Toast from "./Toast";
const obj = {};

obj.install = function (Vue) {
	// document.body.appendChild(Toast.$el);
	// 1. 插件组件构造器
	const toastConstructor = Vue.extend(Toast);
	console.log(toastConstructor);
	// 2. new 的方式，根据组件构造器，可以创建出来一个组件对象
	const toast = new toastConstructor();
	// 3. 将组件对象手动挂在到某一个元素上
	toast.$mount(document.createElement("div"));
	// 4. toast.$el对应的就是上面的div了
	document.body.appendChild(toast.$el);

	Vue.prototype.$toast = toast;
}

export default obj;
