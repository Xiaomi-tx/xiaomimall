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
