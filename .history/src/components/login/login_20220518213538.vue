<template>
  <div class="login-warp">
    <el-form 
    class="login-form"
    label-position="top" 
    label-width="80px" 
    :model="formdata">
    <h2>用户登陆</h2>
        <el-form-item label="用户名">
            <el-input v-model="formdata.username"></el-input>
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
                /* 登录成功
                1.跳转home 
                2.提示成功
                不成功：提示信息
                */
            /* this.$http.post('login',this.formdata).then(res=>{
                // console.log(res)
                const {
                    data,
                    meta:{msg,status}
                } = res.data

                if (status === 200) {
                    this.$router.push({name:'home'})
                    this.$message.success(msg)
                } else {
                    this.$message.error(msg)
                }
            }) */
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