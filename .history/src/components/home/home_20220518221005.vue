<template>
    <el-container class="container">
        <el-header class="header">
            <el-row>
                <el-col :span="4">
                <div class="grid-content bg-purple">
                    <img src="../../assets/logo.jpg" width="32%" alt="无法显示图片">
                </div>
                </el-col>
                <el-col :span="18" class="middle">
                    <h3>电商后台管理系统</h3>
                </el-col>
                <el-col :span="2">
                <div class="grid-content bg-purple">
                    <a class="loginOut" href="#">退出</a>
                </div>
                </el-col>
            </el-row>
        </el-header>
        <el-container>
            <el-aside class="aside" width="200px">Aside</el-aside>
            <el-main class="main">Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name:'Home'
    }
</script>

<style>
    .container{
        height: 100%;
    }
    .header{
        background-color: #b3c0d1;
    }
    .aside{
        background-color: #d3dce6;
    }
    .main{
        background-color: #e9eef3;
        height: 100%;
    }
    /* 头部样式 */
    .middle{

    }
    .loginOut{
        text-decoration: none;
    }
</style>