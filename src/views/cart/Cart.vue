<template>
  <div class="cart">
    <!--导航-->

    <nav-bar>
      <template #center class="nav-bar">
        购物车({{length}})
      </template>
    </nav-bar>

    <!--商品的列表-->
    <cart-list />


    <!--底部的汇总-->
    <cart-bottom-bar/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import CartList from "./childComps/CartList";
  import CartBottomBar from "./childComps/CartBottomBar";

  import {mapGetters} from 'vuex';

	export default {
		name: "Cart",
    components: {
			NavBar,
			CartList,
			CartBottomBar
    },
    computed: {
			// 两种用法
      // ...mapGetters(['cartLength'])
      ...mapGetters({
        length: 'cartLength',
      })
    }
	};
</script>

<style scoped>
  .cart {
    height: 100vh;
  }
  .nav-bar {
    background: var(--color-high-text);
    color: #fff;
    font-weight: bold;
  }
</style>
