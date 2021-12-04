<template>
  <div id="shop-item">
    <div class="item-selector">
      <CheckButton @click.native="checkClick" :is-checked="product.checked"></CheckButton>
    </div>
    <div class="item-img">
      <img :src="product.image" alt="">
    </div>
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <p class="item-desc">{{product.desc}}</p>
      <p class="item-price-info">
        <span class="item-price">￥{{product.price}}</span>
        <span class="item-count">x{{product.count}}</span>
      </p>
    </div>
  </div>
</template>

<script>
  import CheckButton from "components/content/checkButton/CheckButton"
	export default {
		name: "CartListItem",
    props: {
			product: {
				type: Object,
        default() {
					return {}
        }
      }
    },
    methods: {
			checkClick() {
				this.product.checked = !this.product.checked;
      }
    },
    components: {
			CheckButton
    }
	};
</script>

<style scoped>
  .item-selector {
    flex-shrink: 0;
    width: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #shop-item {
    display: flex;
    border-bottom: 1px solid #ccc;
    margin-top: 10px;
  }
  .item-img img{
    width: 100px;
    height: 120px;
    border-radius: 10px;
    margin-right: 10px;
  }
  .item-title {
    font-size: 17px;
    font-weight: 600;
    width: 230px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-desc {
    width: 230px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 10px;
  }
  .item-price-info {
    margin-top: 45px;
    display: flex;
    justify-content: space-between;
  }
  .item-price-info .item-price {
    color: var(--color-high-text)
  }
</style>
