import {
	ADD_TO_CART,
	ADD_COUNTER
} from "./mutation-types"
export default {
	// mutations唯一的目的就是修改state中状态
	// mutations中完成的事情尽可能单一一点
	[ADD_COUNTER](state, payload) {
		payload.count++;
	},
	[ADD_TO_CART](state, payload) {
		payload.checked = true;
		state.cartList.push(payload);
	}
}
