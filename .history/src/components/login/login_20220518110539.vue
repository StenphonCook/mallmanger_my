<template>
  <div class="login-warp">
    <el-form 
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
        <el-button type="primary">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
    name:'Login',
    data () {
        return {
            formdata:{
                username:'',
                password:''
            }
        }
    }
}
</script>

<style>

</style>