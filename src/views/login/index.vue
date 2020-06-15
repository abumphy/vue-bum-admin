<template>
  <div>
    <el-button type="primary" @click="handleLogin">登录</el-button>

    <el-button type="primary" class="file">
      选择文件
      <input type="file" name id />
    </el-button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {
    handleLogin() {
      this.$router.push("/dashboard");
    }
  }
};
</script>
<style lang='scss' scoped>
.file {
  position: relative;
  display: inline-block;
  background: #d0eeff;
  border: 1px solid #99d3f5;
  border-radius: 4px;
  padding: 4px 12px;
  overflow: hidden;
  color: #1e88c7;
  text-decoration: none;
  text-indent: 0;
  line-height: 20px;
}
.file input {
  position: absolute;
  font-size: 100px;
  right: 0;
  top: 0;
  opacity: 0;
}
.file:hover {
  background: #aadffd;
  border-color: #78c3f3;
  color: #004974;
  text-decoration: none;
}
</style>