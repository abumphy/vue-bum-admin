<!--
 * @Author: your name
 * @Date: 2019-12-19 00:20:32
 * @LastEditTime: 2020-06-15 23:06:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-bum-admin\src\views\login\index.vue
--> 
<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" class="login-form">
      <div class="form-title">
        <h3 class="title">Vue-Bum-Admin</h3>
      </div>
      <el-form-item prop="name">
        <el-input
          v-model="loginForm.name"
          placeholder="用户名"
          prefix-icon="el-icon-user"
          size="large"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          placeholder="请输入密码"
          v-model="loginForm.password"
          show-password
          prefix-icon="el-icon-lock"
          size="large"
        ></el-input>
      </el-form-item>
      <el-button
        type="primary"
        @click="handleLogin"
        class="login-btn"
        size="large"
        >立即登录</el-button
      >
    </el-form>
    <!-- 页脚 -->
    <div class="login-footer">
      <div>
        <span>Vue-Bum-Admin</span>
        <span>
          <svg-icon icon-class="github" />
        </span>
        <span>ElementUI</span>
      </div>
      <div>
        CopyRight@copy  bumphy  2020
      </div>
    </div>
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
$bg: #fcfcfc;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: $bg;
  background-image: url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);
  background-repeat: no-repeat;
  background-position: center 110px;
  background-size: 100%;
  overflow: hidden;

  .login-form {
    flex: 1;
    width: 500px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    .login-btn {
      width: 100%;
    }
  }

  .login-footer {
    padding: 20px;
  }
}
</style>