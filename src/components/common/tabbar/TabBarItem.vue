<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
	export default {
		name: "TabBarItem",
    props: {
			path:  String,
      activeColor: {
				type: String,
        default: 'red'
      }
    },
    data() {
			return {
				// isActive: true
      }
    },
    computed: {
      isActive() {
      	return this.$route.path.indexOf(this.path) !== -1;
      },
      activeStyle() {
      	return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
			itemClick() {
				this.$router.replace(this.path);
      }
    }
	};
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
  }
  .active {
    color: red;
  }
  .tab-bar-item img {
    vertical-align: middle;
    height: 24px;
    width: 24px;
  }
</style>
