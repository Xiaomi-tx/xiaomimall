<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
	export default {
		name: "BackTop",
    methods: {
			backClick() {
				console.log(1);
				this.$emit("backClick")
      }
    }
	};
</script>

<style scoped>
  .back-top {
    position: fixed;
    z-index: 99999;
    bottom: 140px;
    right: 60px;
  }
  .back-top img {
    width: 43px;
    height: 43px;
  }
</style>
