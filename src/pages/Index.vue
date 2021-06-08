<template>
  <div>
      유저 이름:{{$store.state.user.nickname}}<br>
      유저 메일:{{$store.state.user.email}}<br>
      유저 생일:{{$store.state.user.birthday}}<br>
      유저 성별:{{$store.state.user.gender ==='M'?'남자': '여자'}}<br>
      유저 프로필: <img :src="$store.state.user.profile_image"><br>
      유저 연령대: {{$store.state.user.age}}<br>

      count : {{this.$store.state.count}}<br>
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
      console.log(this.$store.state.user)
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
