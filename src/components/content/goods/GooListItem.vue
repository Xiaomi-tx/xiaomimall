<template>
  <div class="goods-item" @click="itemClick">
    <img :src="goodsItem.image" alt="" @load="imageLoad">
    <div>
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
    </div>
  </div>
</template>

<script>
	export default {
		name: "GooListItem",
    props: {
			goodsItem: {
				type: Object,
        default() {
					return {}
        }
      }
    },
    methods: {
			imageLoad() {
				this.$bus.$emit("itemImageLoad");
				// if (this.$route.path.indexOf('/home')) {
				// 	this.$bus.$emit("itemImageLoad");
				// } else if (this.$route.path.indexOf('/detail')) {
        //   this.$bus.$emit("detailItemImgLoad")
        // }
      },
			itemClick() {
				this.$router.push('/detail/' + 1111);
			}
    }
	};
</script>

<style scoped>
  .goods-item {
    width: 48vw;
    float: left;
    text-align: center;
  }
  .goods-item img {
    width: 100%;
    border-radius: 10px;
  }
  .goods-item div p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
  }

</style>
