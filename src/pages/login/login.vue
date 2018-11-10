<template>
   <div>
       我是登陆首页 
       <button @click="sayHi">登陆按钮</button>
   </div>
</template>
<script>
import  topheader from '@/pages/common/topheader'
   export default {
        components: {

            },
        methods: {
            sayHi: function () {
                alert('我被点击了')
            }
        }
    }