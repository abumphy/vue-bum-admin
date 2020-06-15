<!--
 * @Author: your name
 * @Date: 2019-12-19 00:20:32
 * @LastEditTime: 2020-06-15 21:35:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-bum-admin\src\views\login\index.vue
--> 
<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      label-width="80px"
      class="login-form"
    >
      <el-form-item label="用户名">
        <el-input v-model="loginForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          placeholder="请输入密码"
          v-model="loginForm.password"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin">立即登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        name: "",
        password: ""
      }
    };
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
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }
}
</style>