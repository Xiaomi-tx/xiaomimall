import {request} from "./request";

export function getDetail(iid) {
	return request({
		url: "/detail",
		params: {
			iid
		}
	})
}

export class GoodsInfo {
	constructor(itemInfo, columns, services) {
		this.title = itemInfo.title;
		this.desc = columns.desc;
		this.newPrice = itemInfo.lowNowPrice;
		this.oldPrice = itemInfo.lowPrice;
		this.service = services;
	}
}
export class ShopInfo {
	constructor(shopInfo) {
		this.title = shopInfo.name;
		this.sell = shopInfo.cSells;
		this.goods = shopInfo.cGoods;
		this.score = shopInfo.score
		this.url = shopInfo.shopUrl;
		this.logo = shopInfo.shopLogo
	}
}

export function getRecommend() {
	return request({
		url: "/recommend"
	})
}
