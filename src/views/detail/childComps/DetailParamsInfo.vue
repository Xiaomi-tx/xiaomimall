<template>
  <div id="detail-params-info">
    <ul>
      <li v-for="item in title" class="detail-params-item">
        {{item}}
        <span v-for="value in rule">{{...value}}</span>
      </li>
      <li  class="detail-params-item" v-for="(setItem, setKey) in set">
        <span class="set-key">{{setKey}}</span>
        <span class="set-item">{{setItem}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
	export default {
		name: "DetailParamsInfo",
    data() {
			return {
				rule: [],
        title: [],
        set: {},
      }
    },
    props: {
			itemParams: {
				type: Object,
        default() {
					return {}
        }
      }
    },
    watch: {
			itemParams() {
				this.rule = this.itemParams.rule.tables[0];
				this.title = this.rule[0];
        this.rule.splice(0, 4);
        this.set = this.itemParams.info.set;

			}
    }
	};
</script>

<style scoped>
  .detail-params-item {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    margin: 10px;
    padding-bottom: 10px;
  }
  .detail-params-item span {
    font-size: 14px;
    padding: 0 5px;
  }
  .set-item {
    color: var(--color-high-text)
  }
</style>
