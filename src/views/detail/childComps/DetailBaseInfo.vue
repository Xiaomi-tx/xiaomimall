<template>
  <div class="base-info">
    <div class="base-title">{{goods.title}}</div>
    <div class="base-price">
      <span class="new-price">￥{{goods.newPrice}}</span>
      <span class="old-price">￥{{goods.oldPrice}}</span>
    </div>
    <div class="base-message">
      <span>{{goods.desc}}</span>
    </div>
    <div class="base-detail">
      <div v-for="item in goods.service" class="detail-item"><img :src="item.icon" alt="">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "DetailBaseInfo",
    props: {
			goods: {
				type: Object,
        default() {
					return {}
        }
      }
    }
	}
</script>

<style scoped>
  .base-info {
    padding: 10px;
  }
  .base-title {
    font-size: 18px;
    font-weight: bold;
  }
  .base-price {
    margin-top: 10px;
  }
  .base-price .new-price {
    color: var(--color-high-text);
    font-size: 25px;
    font-weight: bold;
  }
  .base-price .old-price {
    font-size: 15px;
    text-decoration: line-through;
  }
  .base-message {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-top: 15px;
    color: #ccc;
    border-bottom: 1px solid #ccc;
    padding-bottom: 5px;
  }
  .base-detail {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border-bottom: 1px solid #ccc;
    padding: 10px
  }
  .base-detail .detail-item {
    font-size: 12px;
    width: 100px;
    margin: 3px;
  }
  .base-detail .detail-item img {
    width: 14px;
    height: 14px;
    margin-right: 3px;
  }
</style>
