<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :goods-item="item"/>
  </div>
</template>

<script>
  import GoodsListItem from "./GooListItem";
	export default {
		name: "GoodsList",
    props: {
			goods: {
				type: Array,
        default() {
					return []
        }
      }
    },
    components: {
			GoodsListItem
    }
	};
</script>

<style scoped>
  .goods {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    /*padding-bottom: 49px;*/
  }
</style>
