<template>
  <div class="check-button" :class="{check: isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
	export default {
		name: "CheckButton",
    props: {
			isChecked: {
				type: Boolean,
        default: true
      }
    }
	};
</script>

<style scoped>
  .check-button {
    border-radius: 50%;
    border: 2px solid #ccc;
    width: 100%;
    height: 25px;
    position: relative;
  }
  .check-button img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .check {
    /*border-color: red;*/
    background: red;
  }
</style>
