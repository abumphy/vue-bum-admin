<!--
 * @Author: your name
 * @Date: 2020-06-23 19:32:29
 * @LastEditTime: 2020-06-23 22:03:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-bum-admin\src\layout\components\HeaderNav\index.vue
--> 
<template>
  <div class="headbar-container">
    <div class="header-left">
      <hamburger :is-active="sidebar.opened" @toggleClick="toggleSideBar" />
      <breadcrumb />
    </div>
    <div class="header-right">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Hamburger from "@/components/Hamburger";
import Breadcrumb from "@/components/Breadcrumb";
export default {
  name: "Headbar",
  data() {
    return {};
  },

  components: { Hamburger, Breadcrumb },

  computed: {
    ...mapGetters(["sidebar"])
  },

  created() {},

  mounted() {},

  methods: {
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    }
  }
};
</script>
<style lang='scss' scoped>
.headbar-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  .header-left {
    display: inline-flex;
    align-items: center;
  }
  .header-right {
  }
}
</style>