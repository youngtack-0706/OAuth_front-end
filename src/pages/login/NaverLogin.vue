<template>
  <div id="app">
    <div id="naverIdLogin"></div>
  </div>
</template>
 
<script>
export default {
  name: 'App',
  mounted(){
    this.loginBtn();
  },
  methods:{
    loginBtn(){
      this.$store.commit('setUser', null)
      var naverLogin = new naver.LoginWithNaverId({
        clientId: "TRX6mXGLUFaFi4Q4wpbY",
        callbackUrl: "http://localhost:8080/callback",
        loginButton: {color: "green", type: 3, height: 47}, /* 로그인 버튼의 타입을 지정 */
        callbackHandle:true,
        isPopup: true, /* 팝업을 통한 연동처리 여부, true 면 팝업 */
      });

      naverLogin.init();
    }
  }
}
</script>