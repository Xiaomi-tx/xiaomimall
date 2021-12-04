import {
	ADD_TO_CART,
	ADD_COUNTER
} from "./mutation-types"
export default {
	addCart(context, payload) {
		return new Promise((resolve, reject) => {
			// payload新添加的商品
			let oldProduct = context.state.cartList.find(item => item.id === payload.id);
			// 2. 判斷是否有值
			if (oldProduct) { // 数量加一
				context.commit(ADD_COUNTER, oldProduct);
				resolve("当前的商品的数量+1")
			} else {
				payload.count = 1
				context.commit(ADD_TO_CART, payload);
				resolve("添加了新的商品")
			}
		})
	}
}
