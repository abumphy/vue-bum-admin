<!--
 * @Author: your name
 * @Date: 2019-12-23 00:29:21
 * @LastEditTime: 2020-06-23 23:13:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-bum-admin\src\layout\components\AppMan\index.vue
--> 
<template>
  <div class="appmain-container">
    <transition name="fade-transform" mode="out-in">
      <!-- <keep-alive :include="cachedViews"> -->
      <router-view :key="key" />
      <!-- </keep-alive> -->
    </transition>
  </div>
</template>

<script>
export default {
  name: "AppMain",
  data() {
    return {};
  },

  components: {},

  computed: {
    // cachedViews() {
    //   return this.$store.state.tagsView.cachedViews;
    // },
    key() {
      return this.$route.path;
    }
  },

  created() {},

  mounted() {},

  methods: {}
};
</script>
<style lang='scss' scoped>
.appmain-container {
}
</style>