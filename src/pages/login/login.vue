<template>
   <div>
       <mt-header title="首页">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <mt-field label="手机号：" placeholder="请输入正确的手机号码" type="tel" v-model="phone"></mt-field>  
        <mt-field label="密码：" placeholder="请输入正确的密码" type="password" v-model="password"></mt-field>
        <div class="loginBtn">
            <mt-button type="primary" @click="login">登录</mt-button>
        </div>
        <div>{{ message.split('').reverse().join('') }}</div>
        <div>{{ message.split('').reverse().join('') }}</div>
        <div>{{now}}</div>
        <div>你是中国人吗</div>
   </div>
</template>
<script>
import  { Header, Button ,Toast } from 'mint-ui'
   export default {
        data() {
            return {
              phone:'',
              password:'',
              message:'我是中国人',
              isactive:false
            }
        },
        components: {
             Header,
             Button,
             Toast
            },
        computed:{
            //判断手机号码
            rightPhoneNumber: function (){
                return /^1\d{10}$/.test(this.phone)
            },
            reverseForm:function(){
                return message.split('').reverse().join('')
            },
            now:function(){
                return Date.now();
            }
            
        },
        watch:{
            
        },
        methods: {
            login () {               
                if(!this.rightPhoneNumber){
                    Toast({
                        message: '请输入正确的手机号码',
                        position: 'middle',
                        duration: 5000
                    });
                    return;
                }else if(!this.password){
                    Toast({
                        message: '请输入正确的密码',
                        position: 'middle',
                        duration: 5000
                    });
                    return;  
                }
                this.$router.push('/home');
            }
        }
    }
    </script>
    <style>
       .mint-cell-title{
          width:120px !important;  
       }
       .mint-cell-text{
            font-size: 16px
       }
       .loginBtn{
          width: 90%;
          margin: auto;
          margin-top: 60px;
       }
       .loginBtn button{
           width: 100%;
       }
       .gcolor{
           color: green;
       }
       .rcolor{
           color: red;
       }
    </style>