<template>
  <div id="detail-goods-info">
    <p>{{detailInfo.desc}}</p>
    <p>{{getDetailKey}}</p>
    <div class="detail-goods-img">
      <img alt="" v-for="item in getDetailImage" :src="item" @load="imgLoad">
    </div>
  </div>
</template>

<script>
	export default {
		name: "DetailGoodsInfo",
    props: {
			detailInfo: {
				type: Object,
        default() {
					return {}
        }
      }
    },
    data() {
			return {
				imagesLength: 0,
        counter: 0,
        detailKey: '',
        detailImage: []
      }
    },
		methods: {
			imgLoad() {
				if (++this.counter === this.imagesLength) {
					this.$emit("imageLoad")
        }
      }
    },
    computed: {
			getDetailKey() {
				if (this.detailKey) {
					return this.detailKey
        }
      },
      getDetailImage() {
				if (this.detailImage.length) {
					return this.detailInfo.detailImage[0].list
				}
      }
    },
    watch: {
			detailInfo() {
				this.imagesLength = this.detailInfo.detailImage[0].list.length;
				this.detailKey = this.detailInfo.detailImage[0].key;
				this.detailImage = this.detailInfo.detailImage[0].list;
      }
    }
	};
</script>

<style scoped>
  #detail-goods-info {
    padding: 10px;

  }
  #detail-goods-info p {
    font-size: 15px;
  }
  .detail-goods-img img {
    width: 100%;
  }
</style>
