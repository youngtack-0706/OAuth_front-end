import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export const store =  new Vuex.Store({
    plugins: [createPersistedState()], // 요렇게 하면, 브라우저 닫았다 들어와도 정보 남아 있음!!!
    state:{
        // nickname:'',
        // birthDay:'',
        // email:'',
        // age:'',
        // gender:'',
        // profileImage:'',
        user:{},
        atoken: '',
        count: 0,
    },
    // getters:{
    //     nickname: state => {
    //         return state.nickname
    //     },
    //     birthDay: state => {
    //         return state.birthDay
    //     },
    //     email: state => {
    //         return state.email
    //     },
    //     age: state => {
    //         return state.age
    //     },
    //     gender: state => {
    //         return state.gender
    //     },
    //     profileImage: state => {
    //         return state.profileImage
    //     },
    // },
    mutations:{
        // setNickname(state, nickname) {
        //     state.nickname = nickname;
        // },
        // setBirthDay(state, birthDay) {
        //     state.birthDay = birthDay;
        // },
        // setEmail(state, email) {
        //     state.email = email;
        // },
        // setAge(state, age) {
        //     state.age = age;
        // },
        // setGender(state, gender) {
        //     state.gender = gender;
        // },
        // setProfileImage(state, profileImage) {
        //     state.profileImage = profileImage;
        // },
        setUser(state, user) {
            state.user = user;
        },
        setAtoken(state, atoken){
            state.atoken = atoken
        },
        increment(state){
            state.count++
        },
        decrement(state){
            state.count--
        }
    },
})