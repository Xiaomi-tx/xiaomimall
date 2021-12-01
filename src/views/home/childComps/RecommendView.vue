<template>
  <div class="recommend">
    <div v-for="item in recommends">
      <a href="#">
        <img :src="item.acm" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
	export default {
		name: "RecommendView",
    props: {
			recommends: {
				type: Array,
        default() {
					return []
        }
      }
    }
	};
</script>

<style scoped>
  .recommend {
    display: flex;
    justify-content: space-around;
    text-align: center;
    font-size: 14px;
    padding: 10px 0 14px;
    border-bottom: 4px solid #111;
  }
  .recommend img {
    display: inline;
    width: 40px;
    height: 40px;
  }
</style>
