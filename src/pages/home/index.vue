<template>
    <div class="index box box-tb" v-show="loading">
        <div class="login">新用户登录</div>
        <div class="login-box box box-tb">
            <input type="text" placeholder="请输入您的姓名" v-model="userLogin.userName" ref="username">
            <input type="password" placeholder="请输入密码" v-model="userLogin.password" ref="pwd">
            <button class="login-btn" @click="submit">登录</button>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  components: {},
  data() {
    return {
      userLogin: {
        userName: "",
        password: ""
      },
      isLogin: true
    };
  },
  computed: {
      ...mapState('home', {
          loading: state => state.loading
      })
  },
  created() {
      this.getInit()
    //   document.addEventListener('keydown', this.enterSubmit, false)
  },
  destroyed() {
    //   document.removeEventListener('keydown', this.enterSubmit, false)
  },
  methods: {
      ...mapActions('home', [
          'getInit'
      ]),
    async submit() {
      let nameReg = /[\u4e00-\u9fa5]/gm;
      let pwdReg = /^\w+$/;
      if (!nameReg.test(this.userLogin.userName)) {
        console.log(this.userLogin.userName);
        alert("请输入正确的姓名");
        return;
      }
      if (!pwdReg.test(this.$refs.password)) {
        alert("请输入正确的密码");
        return;
      }
      this.$router.push("/loginSuccess");
    }
    //   enterSubmit(e) {
    //       if(e.kerCode === 13) this.submit()
    //   }
  }
};
</script>

<style lang="less" scoped>
.index {
  text-align: center;
  font-size: 24pr;
}
</style>