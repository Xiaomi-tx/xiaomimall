<template>
  <div id="swiper"
    @touchstart="swiperStart"
    @touchmove="swiperMove">
    <div id="swiper-box" ref="main" @transitionend="transition">
      <slot></slot>
    </div>
    <div class="swiper-btn">
      <div :class="{'swiper-item': true, 'swiper-active': index === (count - 1)}" v-for="count in count" @click="swItemClick(count)" ref="item"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Swiper',
    props: {
      count: {
        type: Number,
        default: 4,
      },
      delay: {
        type: Number,
        default: 2000,
      }
    },
		data: function () {
			return {
				beforeActive: null,
				index: 0,
				startX: null,
				moveX: null,
				flag: true,
				swiperItem: null
			};
		},
    methods: {
      slide() {
				this.swiperItem.style.left = -(this.index) * this.swiperItem.offsetWidth + "px";
      },
      swiperStart(e) {
        clearInterval(this.timer);
        this.startX = e.touches[0].clientX;
      },
      swiperMove(e) {
				this.moveX = e.touches[0].clientX - this.startX;
        // 向那边滑
        if (this.moveX <= 0) {
          if (Math.abs(this.moveX) >= 30) {
            if (this.flag) {
              clearTimeout(this.timeout)
              this.flag = false;
              this.index++;
              if (this.index >= this.count) {
                this.index = 0;
              }
              this.slide();
              this.timeout = setTimeout(() => {
                this.autoRolling();
              }, 300);
            }

          }
        } else {
					if (Math.abs(this.moveX) >= 100) {
						if (this.flag) {
							clearTimeout(this.timeout)
							this.flag = false;
							this.index--;
							if (this.index < 0) {
								this.index = this.count - 1;
							}
							this.slide();
							this.timeout = setTimeout(() => {
								this.autoRolling();
							}, 300);
						}
					}
        }
      },
      swItemClick(count) {
        count = count - 1;
        this.index = count;
        this.slide();
      },
      autoRolling() {
        this.timer = setInterval(() => {
        	this.index++;
          if (this.index >= this.count) {
            this.index = 0;
          }
          this.slide();
        }, this.delay);
      },
			transition() {
				this.flag = true;
      }
    },
    components: {
    },
    mounted() {
			this.swiperItem = this.$refs.main;
      this.autoRolling();
    }
  }
</script>


<style scope>
  * {
    padding: 0;
    margin: 0;
  }
  #swiper {
    position: relative;
    width: 100vw;
    overflow: hidden;
  }
  #swiper-box {
    position: relative;
    left: 0px;
    display: flex;
    transition: all 1s;
  }
  .swiper-btn {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
  }
  .swiper-item {
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 50%;
    margin: 0 3px 0 3px;
  }
  .swiper-btn .swiper-active {
    background: red;
  }
</style>
