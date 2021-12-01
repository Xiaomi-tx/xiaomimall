<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
  </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";

  import {getDetail, GoodsInfo} from "network/detail";
	import DetailSwiper from "./childComps/DetailSwiper";

	export default {
		name: "Detail",
    components: {
			DetailSwiper,
			DetailNavBar,
			DetailBaseInfo
    },
    data() {
      return {
      	iid: null,
        topImages: [],
        goods: {}
      }
    },
    created() {
			// 1. 保存传入的iid
			this.iid = this.$route.params.iid;

			// 2. 根据iid请求详情数据
			getDetail(this.iid).then(res => {
				console.log(res);
				const data = res.detail.result;
				// 1. 获取顶部的图片轮播数据
        this.topImages = data.topImages;

        // 2. 获取商品信息
        this.goods = new GoodsInfo(data.itemInfo, data.itemServices.columns[0], data.itemServices.services)

        // 3. 创建店铺信息
      })
    }

	};
</script>

<style scoped>

</style>
