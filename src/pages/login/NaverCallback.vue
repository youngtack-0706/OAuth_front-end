<template lang="pug">
    <div>
    
    </div>
</template>
<script>
// import {store} from '../../store/store'
import EventBus from './EventBus'
import axios from 'axios'
export default ({
    data(){
        return{
            clientId: "TRX6mXGLUFaFi4Q4wpbY",
            callbackUrl: "http://localhost:8080/callback",
            location:'',
            sns_auth:'',
        }
    },
    async mounted(){
        this.setAtoken()
        this.naverLogin();
    },
    methods: {
        async setAtoken(){
            if(window.location.href.includes("access_token")){
                this.location = window.location.href.split("=")[1]
                this.sns_auth = this.location.split("&")[0]
                this.$store.commit('setAtoken', this.sns_auth)
                console.log("token: ", this.$store.state.atoken)
            }
        },
        async naverLogin(){
            let isRequire = true

            var naverLogin = new naver.LoginWithNaverId({
                clientId: this.clientId,
                callbackUrl: this.callbackUrl,
                callbackHandle:true,
                isPopup: true, /* 팝업을 통한 연동처리 여부 */
            });
            naverLogin.init();
            naverLogin.getLoginStatus((status) => {
                if (status) {
                    console.log(naverLogin.user)
                    let id			= naverLogin.user.id;
                    let gender		= naverLogin.user.gender;
                    let birthday	= naverLogin.user.birthday;
                    let nm			= naverLogin.user.nickname;
                    let email		= naverLogin.user.email;
                    let age		    = naverLogin.user.age;
                    let profile_image = naverLogin.user.profile_image;
            

                    if(nm === 'undefined' || nm === null || nm === '') {
                        alert('이름은 필수 정보입니다. 정보제공을 동의해주세요.');
                        isRequire = false;
                    } else if(email === 'undefined' || email === null || email ==='') {
                        alert('이메일은 필수 정보입니다. 정보제공을 동의해주세요.');
                        isRequire = false;
                    }  else if(birthday === 'undefined' || birthday === null || birthday ==='') {
                        alert('생일은 필수 정보입니다. 정보제공을 동의해주세요.');
                        isRequire = false;
                    }  else if(gender === 'undefined' || gender === null || gender ==='') {
                        alert('성별은 필수 정보입니다. 정보제공을 동의해주세요.');
                        isRequire = false;
                    }  else if(age === 'undefined' || age === null || age ==='') {
                        alert('연령대는 필수 정보입니다. 정보제공을 동의해주세요.');
                        isRequire = false;
                    }  else if(profile_image === 'undefined' || profile_image === null || profile_image ==='') {
                        alert('프로필 정보는 필수 정보입니다. 정보제공을 동의해주세요.');
                        isRequire = false;
                    }


                    if(isRequire === false) {
                        naverLogin.reprompt(); // 필수정보를 얻지 못 했을 때 다시 정보제공 동의 화면으로 이동
                        return;	
                    }
                    this.$store.commit('setUser', naverLogin.user)
                    console.log(this.$store.state.user) 
                    // close();
                    
                    
                }else{
                    console.log("callback 처리에 실패하였습니다.");
                }
            });
        },
        getToken(){
            axios.get(`https://nid.naver.com/oauth2.0/authorize`)
            .then(response => {
                console.log("response:", response)
            })
            .catch(response => {
                console.log("Error")
            });
        }
    }
})
</script>