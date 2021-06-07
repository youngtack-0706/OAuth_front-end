<template>
  <div>
      유저 이름:{{$store.state.user.nickname}}<br>
      유저 메일:{{$store.state.user.email}}<br>
      유저 생일:{{$store.state.user.birthday}}<br>
      유저 성별:{{$store.state.user.gender ==='M'?'남자': '여자'}}<br>
      <b>count : {{this.$store.state.count}}</b><br>
      <input type="button" @click="increment()" value="increment"/>
      <input type="button" @click="decrement()" value="decrement"/>
  </div>
</template>
<script>
  export default {
    data(){
      return{

      }
    },
    mounted(){

    },
    methods:{
      async increment() {
       this.$store.commit('increment')
      },
      async decrement() {
        this.$store.commit('decrement')
      }
    }
  }
</script>