<!--
 * @Author: bumphy
 * @Date: 2020-06-23 23:21:24
 * @LastEditors: your name
 * @LastEditTime: 2020-07-01 00:02:43
 * @Description: file content
--> 
<template>
  <div class="sideitem-container">
    {{ item }}
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ""
    }
  },

  data() {
    return {};
  },

  computed: {},

  created() {},

  mounted() {},

  methods: {}
};
</script>
<style lang='scss' scoped>
</style>