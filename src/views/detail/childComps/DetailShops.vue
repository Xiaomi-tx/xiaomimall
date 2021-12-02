<template>
  <div class="detail-shops">
    <div class="shop-top">
      <img :src="shops.logo" alt="">
      <span>{{shops.title}}</span>
    </div>
    <div class="shop-message">
      <div class="message-left">
        <div>
          <p>{{shops.sell}}</p>
          <span>总销量</span>
        </div>
        <div>
          <p>{{shops.goods}}</p>
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="message-right">
        <p v-for="item in shops.score">
          {{item.name}} <span>{{item.score}}</span>
        </p>
      </div>

    </div>
    <div class="shop-go">
      <a :href="shops.url">进店逛逛</a>
    </div>
  </div>
</template>

<script>
	export default {
		name: "DetailShops",
    props: {
			shops: {
				type: Object,
        default() {
					return {}
        }
      }
    }
	};
</script>

<style scoped>
  .detail-shops {
    padding: 10px;
    border-bottom: 2px solid #ccc;
  }
  .shop-top span {
    padding-left: 10px;
  }
  .shop-top img {
    width: 40px;
    height: 40px;
    vertical-align: middle;
  }
  .shop-message {
    display: flex;
    margin-top: 20px;
  }
  .shop-message .message-left {
    display: flex;
    text-align: center;
    border-right: 1px solid #ccc;
  }
  .shop-message .message-left div {
    padding: 0 15px;
  }
  .shop-message .message-left div p {
    font-weight: bold;
  }
  .shop-message .message-left div span {
    font-size: 12px;
  }
  .shop-message .message-right {
    margin-left: 40px;
    font-size: 12px;
  }
  .shop-message .message-right p {
    padding: 3px 0;
  }
  .shop-go {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    text-align: center;
  }
  .shop-go a {
    width: 200px;
    height: 30px;
    line-height: 30px;
    background: #f9f9f9;
    border-radius: 10px;
  }
</style>
