<template>
  <div class="wrapper" ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll";
	export default {
		name: "ScrollY",
    data() {
			return {
				scroll: null,
      }
    },
    mounted() {
			this.scroll = new BScroll(this.$refs.scroll, {
				scrollX: true,
				probeType: 3
			});
		},
    methods: {
			refresh() {
				let timer = setTimeout(() => {
					this.scroll && this.scroll.refresh();
					clearTimeout(timer);
				}, 200);
      }
    }
	};
</script>

<style scoped>
  .content {
    display: inline-block;
    /*display: flex;*/
  }
</style>
