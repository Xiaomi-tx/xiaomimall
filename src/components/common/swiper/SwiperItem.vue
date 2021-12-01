<template>
  <div class="slide" ref="slide">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SwiperItem',
    compoennts: {

    }
  }
</script>


<style scope>
  .slide {
    width: 100%;
    height: 185px;
    flex-shrink: 0;
  }
  .slide img {
    width: 100%;
    height: 100%;
  }
</style>