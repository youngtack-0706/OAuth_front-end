<template>
  <div>
    유저 이름:{{$store.state.user.nickname}}<br>
    유저 메일:{{$store.state.user.email}}<br>
    <b>count : {{this.$store.state.count}}</b><br>
    <input type="button" @click="increment()" value="increment"/>
    <input type="button" @click="decrement()" value="decrement"/>
  </div>
</template>

<script>
// import {store} from '../store/store'

export default ({
  data(){
    return{

    }
  },
  mounted(){
    console.log(this.$store.state.user)
  },
  methods: {
    increment: function () {
      this.$store.commit('increment')
    },
    decrement: function () {
      this.$store.commit('decrement')
    }
  }
});
</script>
