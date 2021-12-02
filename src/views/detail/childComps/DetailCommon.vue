<template>
  <div id="detail-common">
    <div class="detail-common-top">
      <div class="left">{{detailComment.bottomText}}</div>
      <div class="right">评分
        <span>{{detailComment.averageScore}}</span>
      </div>
    </div>
    <div class="detail-common-center">
      <scroll class="content1" ref="scroll">
        <div class="tagItem" v-for="tagItem in tag">{{tagItem.value}}</div>
      </scroll>
    </div>
    <div class="detail-common-bottom">
      <scroll class="content2" ref="scroll2">
        <div class="commentItem" v-for="listItem in list">
          <div class="comment-item-top">
            <img :src="listItem.user.avatar" alt="">
            <span>{{listItem.user.uname}}</span>
          </div>
          <div class="comment-item-bottom">{{listItem.content}}</div>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/ScrollY";
	export default {
		name: "DetailCommon",
    components: {
			Scroll
    },
    data() {
			return {
			  tag: 	[],
        list: []
      }
    },
    props: {
			detailComment: {
				type: Object,
        default() {
					return {}
        }
      }
    },
    watch: {
			detailComment() {
				this.tag = this.detailComment.rateTags;
				this.list = this.detailComment.list;
      }
    },
    methods: {

    },
		mounted() {
      this.$refs.scroll.refresh();
      this.$refs.scroll2.refresh();
    }
	};
</script>

<style scoped>
  #detail-common{
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
  }
  .detail-common-top {
    display: flex;
    justify-content: space-between;
  }
  .detail-common-top .left {
    font-size: 16px;
    font-weight: bold;
  }
  .detail-common-top .right {
    font-size: 14px;
  }
  .detail-common-top .right span {
    color: var(--color-high-text)
  }
  .detail-common-center {
    margin-top: 10px;
  }
  .detail-common-center div {
    font-size: 12px;
  }
  .detail-common-center .tagItem {
    flex-shrink: 0;
    padding: 0 10px;
    margin: 0 5px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 10px;
  }
  .content1, .content2 {
    position: relative;
    white-space: nowrap;
    overflow: hidden
  }
  .detail-common-bottom {
    margin-top: 10px;
  }
  .commentItem {
    width: 300px;
    margin-right: 15px;
    border-radius: 10px;
    display: inline-block;
    height: 160px;
    background: #d0bcbc;
    padding: 5px;
  }
  .commentItem img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    vertical-align: middle;
  }
  .commentItem span {
    padding-left: 20px;
  }
  .comment-item-top {
    margin-bottom: 20px;
    border-bottom: 1px solid #00B7FF;
    padding: 10px;
  }
  .comment-item-bottom {
    font-size: 15px;
    white-space: normal;
    position: absolute;
    width: 280px;
  }
</style>
