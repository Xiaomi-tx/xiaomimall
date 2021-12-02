<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>
        购物街
      </template>
    </nav-bar>
    <tab-control ref="tabControl1" class="tab-control fixed" :titles="['流行', '新款', '精选']" @tabClick="tabClick" v-show="isTabFixed"></tab-control>
    <scroll @scroll="contentScroll"
            class="content" ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <template>
        <home-swiper :banners="banners" @SwiperImageLoad="swiperImageLoad"></home-swiper>
        <RecommendView :recommends="recommends"></RecommendView>
        <feature-view></feature-view>
        <tab-control ref="tabControl2" class="tab-control" :titles="['流行', '新款', '精选']" @tabClick="tabClick"></tab-control>
        <goods-list :goods="showGoods"></goods-list>
      </template>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
	import HomeSwiper from "./childComps/HomeSwiper";
	import RecommendView from "./childComps/RecommendView";
	import FeatureView from "./childComps/FeatureView";

	import NavBar from "components/common/navbar/NavBar";
	import TabControl from "components/content/tabControl/TabControl";
	import GoodsList from "components/content/goods/GoodsList";
	import Scroll from "components/common/scroll/Scroll";
	import {itemListenerMixin, backTopMixin} from "common/mixin";

	import {
  	getHomeMultidata, getHomeGoods
  } from "network/home";

	export default {
		name: "Home",
    components: {
			HomeSwiper,
			RecommendView,
			FeatureView,
			NavBar,
			TabControl,
			GoodsList,
			Scroll,
    },
    mounted() {
			// 1. 完成加载完成的时间监听
      this.scroll = this.$refs.scroll;

			// 3. 监听item图片加载完成
      // 对监听的事件进行保存

      // 2. 拿到tabControl的offsetTop
      // 所有的组件都有衣蛾属性$el: 用于获取组件的元素的
		},
    computed: {
			showGoods() {
				return this.goods[this.currentType].list
      }
    },
    mixins: [itemListenerMixin, backTopMixin],
    data() {
			return {
        banners: [],
				recommends: [],
        goods: {
        	'pop': {page: 0, list: []},
        	'new': {page: 0, list: []},
        	'sell': {page: 0, list: []},
        },
        currentType: 'pop',
        scroll: null,
        tabOffsetTop: 0,
        isTabFixed: false,
        saveY: 0
      }
    },
    activated() {
			this.scroll.scrollTo(0, this.saveY, 0);
			this.scroll.refresh();
    },
    deactivated() {
			// 1. 保存Y值
			this.saveY = this.scroll.getScrollY();
			// 2. 取消事件监听
      this.$bus.$off('itemImgLoad', this.itemImgListener)
		},
		created() {
			// 1. 请求多个数据
			this.getHomeMultidatae();

      // 2. 请求商品数据
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');

    },
    methods: {
			/**
       * 事件监听相关方法
       */
			tabClick(index) {
        switch(index) {
        	case 0:
        		this.currentType = 'pop';
        		break;
          case 1:
						this.currentType = 'new';
						break;
          case 2:
						this.currentType = 'sell';
						break;
        }
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },
			contentScroll(position) {
				// 1. 判断backtop是否显示
        this.listenShowBackTop(position);

        // 2. tabControl是否吸顶（position: fixed）
        this.isTabFixed = (-position.y) > this.tabOffsetTop;
      },
			loadMore() {
        this.getHomeGoods(this.currentType)
      },
			swiperImageLoad() {
				this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      },

			/**
       * 网络请求相关方法
			 */
			getHomeMultidatae() {
				getHomeMultidata().then((res) => {
					this.banners = res.banner.list;
					this.recommends = res.recommends.list;
				})
      },

      getHomeGoods(type) {
				const page = this.goods[type].page + 1;
				getHomeGoods(type, page).then(res => {
					this.goods[type].list.push(...res);
					this.goods[type].page += 1;
					// this.scroll.scroll.refresh();
					this.scroll.finishPullUp();
				})
      }

    }
	};
</script>

<style scoped>
  .fixed {
    position: relative;
    z-index: 11;
  }
  #home {
    height: 100vh;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
  .tab-control {
    position: sticky;
    top: 44px;
  }
  .content {
    /*height: 300px;*/
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    /*height: calc(100% - 93px);*/
  }

</style>
