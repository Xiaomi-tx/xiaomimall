<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-common ref="common" :detail-comment="comment"></detail-common>
      <detail-shops :shops="shops"></detail-shops>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-params-info :itemParams="itemParams" ref="params"></detail-params-info>
      <goods-list ref="recommend" :goods="recommends"/>
    </scroll>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShops from "./childComps/DetailShops";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailParamsInfo from "./childComps/DetailParamsInfo";
  import DetailCommon from "./childComps/DetailCommon";
  import DetailBottomBar from "./childComps/DetailBottomBar";


  import Scroll from "components/common/scroll/Scroll";
  import GoodsList from "components/content/goods/GoodsList";
	import DetailSwiper from "./childComps/DetailSwiper";


	import {getDetail, GoodsInfo, ShopInfo, getRecommend} from "network/detail";
  import {debounce, sort} from "common/utils";
  import {itemListenerMixin, backTopMixin} from "common/mixin";

	export default {
		name: "Detail",
    components: {
			Scroll,
			DetailSwiper,
			DetailNavBar,
			DetailBaseInfo,
			DetailShops,
			DetailGoodsInfo,
			DetailParamsInfo,
			DetailCommon,
			GoodsList,
			DetailBottomBar,
    },
    mixins: [itemListenerMixin, backTopMixin],
    data() {
      return {
      	iid: null,
        topImages: [],
        goods: {},
        shops: {},
				detailInfo: {},
				itemParams: {},
				comment: {},
        recommends: [],
        themeTopYs: [],
				beforeValue: 0,
				currentIndex: 0,
				isShowBackTop: false,
			}
    },
    created() {
			// 1. 保存传入的iid
			this.iid = this.$route.params.iid;

			// 2. 根据iid请求详情数据
			getDetail(this.iid).then(res => {
				const data = res.detail.result;
				// 1. 获取顶部的图片轮播数据
        this.topImages = data.topImages;

      // 3. 请求推荐数据
      getRecommend().then(res => {
      	this.recommends = res.wall.list;
      })

        // 2. 获取商品信息
        this.goods = new GoodsInfo(data.itemInfo, data.itemServices.columns[0], data.itemServices.services)

        // 3. 创建店铺信息
        this.shops = new ShopInfo(data.shopInfo);

        // 4. 保存详情数据
        this.detailInfo = data.detailInfo;

        // 5. 取出参数的信息
        this.itemParams = data.itemParams;

        // 6. 取出评论信息
        this.comment = res.comment;

        // this.$nextTick(() => {
        // 	// 根据最新的数据，对应的DOM是渲染出来
        //   // 但是图片依然是没有加载完毕的。
				// 	this.themeTopYs.push(0);
				// 	this.themeTopYs.push(this.$refs.params.$el.offsetTop)
				// 	this.themeTopYs.push(this.$refs.common.$el.offsetTop)
				// 	this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
				// 	console.log(this.themeTopYs);
        // })
			})
    },
    methods: {
			imageLoad() {
        this.$refs.scroll.refresh();
				this.themeTopYs.push(0);
				this.themeTopYs.push(this.$refs.params.$el.offsetTop)
				this.themeTopYs.push(this.$refs.common.$el.offsetTop)
				this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
				this.themeTopYs.push(Number.MAX_VALUE)
				console.log(this.themeTopYs);

      },
			contentScroll(position) {
				// 1. 获取y值
        const positionY = -position.y;
        let obj = {};
				this.themeTopYs.forEach((item, index) => {
					obj[item] = index;
        });
        // 2. positionY和祖籍的值进行对比
        // 0, 14099, 647, 14898
        // 500  > 0 && 500 < 647  ===  0
        // 678 > 0 && 678 > 674    ============ 647    14099
				let themeTopYs = sort(this.themeTopYs);
				for (let i = 0; i < themeTopYs.length - 1; i++) {
					i = parseInt(i);
					if(this.currentIndex != i && positionY >= themeTopYs[i] && positionY <= themeTopYs[i + 1]) {
            this.currentIndex = obj[themeTopYs[i] + ""]
            this.$refs.nav.currentIndex = this.currentIndex;
          }
        }
				// 3. 是否显示顶部
        this.listenShowBackTop(position);
      },
			titleClick(index) {
				console.log(index);
				this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100);
      },
      addToCart() {
				// 1. 获取购物车需要展示信息
        const product = {}
        product.image = this.topImages[0];
        product.desc = '贼牛逼！！的内衣~~~女人看了都爱啊！~'
        product.title = this.goods.title;
        product.price = this.goods.newPrice;

        // 2. 将商品添加到购物车中
				console.log(product);
      }
    },
    updated() {

    },
    mounted() {

    },
    // deactivated() {
		// 	console.log('deactiveated');
		// },
    destroyed() {
			this.$bus.$off('itemImgLoad', this.itemImgListener)
		}

	};
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background: #fff;
    height: 100vh;
  }
  .content {
    height: calc(100% - 44px - 49px);
  }
  .detail-nav {
    position: relative;
    z-index: 999;
    background: #fff;
  }
</style>
