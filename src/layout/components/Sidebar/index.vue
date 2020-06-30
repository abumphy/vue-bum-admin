<!--
 * @Author: your name
 * @Date: 2019-12-23 00:28:55
 * @LastEditTime: 2020-06-30 23:58:48
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-bum-admin\src\layout\components\Sidebar\index.vue
--> 
<template>
  <div class="sidebar-container">
    <div class="logo-container">
      <img class="logo-img" :src="logo" alt="" />
    </div>
    <el-menu
      class="el-menu-vertical"
      :default-openeds="['1', '3']"
      :collapse="isCollapse"
    >
      <sidebar-item
        v-for="route in routes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </div>
</template>

<script>
import logo from "@/assets/logo.png";
import SidebarItem from "./SidebarItem";
export default {
  name: "Sidebar",
  data() {
    return {
      logo
    };
  },

  components: { SidebarItem },

  computed: {
    routes() {
      return this.$router.options.routes;
    }
  },

  created() {},

  mounted() {},

  methods: {}
};
</script>
<style lang='scss' scoped>
.sidebar-container {
  overflow: auto;
}
</style>