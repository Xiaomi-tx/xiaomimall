<template>
  <Swiper :count="banners.length">
    <SwiperItem v-for="item in banners">
      <a href="#">
        <img :src="item.acm" alt="" @load="imageLoad">
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
	import { Swiper, SwiperItem } from "components/common/swiper/index";
	export default {
		name: "HomeSwiper",
    props: {
			banners: {
				type: Array,
        default() {
					return []
        }
      }
    },
    components: {
			Swiper,
			SwiperItem
    },
    data() {
      return {
      	isLoad: false
      }
    },
    methods: {
			imageLoad() {
				if(!this.isLoad) {
					this.$emit("SwiperImageLoad")
          this.isLoad = true;
				}
      }
    }
	};
</script>

<style scoped>

</style>
