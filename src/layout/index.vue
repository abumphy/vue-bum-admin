<!--
 * @Author: your name
 * @Date: 2019-12-21 13:28:47
 * @LastEditTime: 2020-06-23 23:17:04
 * @LastEditors: Please set LastEditors
 * @Description: 布局文件
 * @FilePath: \vue-bum-admin\src\layout\index.vue
--> 
<template>
  <el-container class="layout-container">
    <!-- 侧边栏 -->
    <el-scrollbar>
      <el-aside class="layout-aside" width="200">
        <sidebar />
      </el-aside>
    </el-scrollbar>

    <!-- 内容区 -->
    <el-container>
      <!-- 头部 -->
      <el-header class="layout-header">
        <headbar />
      </el-header>

      <!-- 主体 -->
      <el-scrollbar>
        <el-main class="layout-main">
          <app-main />
        </el-main>
      </el-scrollbar>
    </el-container>
  </el-container>
</template>

<script>
import logo from "@/assets/logo.png";
import { Headbar, Sidebar, AppMain } from "./components";
export default {
  name: "",

  components: {
    Headbar,
    Sidebar,
    AppMain
  },

  data() {
    return {};
  },

  computed: {},

  created() {
    fetch("/api/users")
      .then(res => res.json())
      .then(json => {
        this.users = json.users;
      });
  },

  mounted() {},

  methods: {}
};
</script>
<style lang='scss' scoped>
.layout-container {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  // 去除横向滚动条
  ::v-deep.el-scrollbar__wrap {
    overflow-x: hidden;
  }
}

.layout-aside {
  background-color: rgb(238, 241, 246);
  .el-aside {
    color: #333;
    // overflow: hidden;
  }
}

.layout-header {
  display: inline-flex;
  justify-content: space-between;
  line-height: 60px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.layout-main {
  // padding: 20px;
  min-height: calc(100vh - 40px);
  width: 100%;
  position: relative;
  overflow: hidden;
  background: #f5f5f5;
}
</style>