<template>
  <div class="login-warp">
    <el-form 
    class="login-form"
    label-position="top" 
    label-width="80px" 
    :model="formdata">
    <h2>用户登陆</h2>
        <el-form-item label="用户名">
            <el-input v-model="formdata.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="formdata.password"></el-input>
        </el-form-item>
        <el-button class="login-btn" @click.prevent="handleLogin()" type="primary">登录</el-button>
    </el-form>
  </div>
</template>

<script>
import axios from "axios"

export default {
    name:'Login',
    data () {
        return {
            formdata:{
                username:'',
                password:''
            }
        }
    },
    methods: {
        // 
        handleLogin(){
            this.$http.post('login',this.formdata).then(res=>{
                // console.log(res)
                /* 登录成功
                1.跳转home 
                2.提示成功
                不成功：1.提示信息
                */

            })
        }
    },
}
</script>

<style scoped>
    .login-warp{
        height: 100%;
        background-color: #324152;
        /* 弹性盒布局 */
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .login-warp .login-form{
        width: 400px;
        background-color: #fff;
        border-radius: 5px;
        padding: 30px;
    }
    .login-btn{
        width: 100%;
    }
</style>