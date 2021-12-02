<template>
  <div>
    <h2>分类</h2>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  import {backTopMixin} from "common/mixin"
	export default {
		name: "Category",
    data() {
			return {
        scroll: null
      }
    },
    mixins: [backTopMixin],
    mounted() {

    },
    methods: {

    }
	};
</script>

<style scoped>
  .wrapper {
    height: 150px;
    background: red;
    /*overflow: hidden;*/
    /*overflow-y: scroll;*/
  }
</style>
