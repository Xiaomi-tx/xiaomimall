<template>
  <scroll class="content" ref="scroll">
    <cart-list-item
      v-for="(item, index) in cartList"
      :product="item"
      :key="index"/>
  </scroll>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";

	import CartListItem from "./CartListItem";

  import { mapGetters } from "vuex";
	export default {
		name: "CartList",
    components: {
			Scroll,
			CartListItem
    },
    computed: {
			...mapGetters(['cartList'])
    },
    activated() {
			this.$refs.scroll.refresh();
			console.log('------');
    }
	};
</script>

<style scoped>
  .content {
    height: calc(100% - 44px - 49px - 40px);
    overflow: hidden;
  }
</style>
