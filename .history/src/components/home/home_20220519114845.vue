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
                    <h2>电商后台管理系统</h2>
                </el-col>
                <el-col :span="2">
                <div class="grid-content bg-purple">
                    <a class="loginOut" href="#">退出</a>
                </div>
                </el-col>
            </el-row>
        </el-header>
        <el-container>
            <el-aside class="aside" width="200px">
                  <el-col  :span="24">
                    <el-menu
                    unique-opened="true"
                    >
                    <el-submenu index="1">
                        <template slot="title">
                        <i class="el-icon-s-custom"></i>
                        <span>用户管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">
                                <i class="el-icon-menu"></i>
                                <span>用户列表</span> 
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template  slot="title">
                            <i class="el-icon-s-check"></i>
                            <span>权限管理</span>
                        </template>                      
                        <el-menu-item-group>
                            <el-menu-item index="2-1">
                                <i class="el-icon-menu"></i>
                                <span>角色列表</span> 
                            </el-menu-item>
                            <el-menu-item index="2-2">
                                <i class="el-icon-menu"></i>
                                <span>权限列表</span> 
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template  slot="title">
                            <i class="el-icon-s-finance"></i>
                            <span>商品管理</span>
                        </template>                      
                        <el-menu-item-group>
                            <el-menu-item index="3-1">
                                <i class="el-icon-menu"></i>
                                <span>商品列表</span> 
                            </el-menu-item>
                            <el-menu-item index="3-2">
                                <i class="el-icon-menu"></i>
                                <span>分类参数</span> 
                            </el-menu-item>
                            <el-menu-item index="3-3">
                                <i class="el-icon-menu"></i>
                                <span>商品分类</span> 
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="4">
                        <template  slot="title">
                            <i class="el-icon-s-claim"></i>
                            <span>订单管理</span>
                        </template>                      
                        <el-menu-item-group>
                            <el-menu-item index="4-1">
                                <i class="el-icon-menu"></i>
                                <span>订单列表</span> 
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="5">
                        <template  slot="title">
                            <i class="el-icon-s-marketing"></i>
                            <span>数据统计</span>
                        </template>                      
                        <el-menu-item-group>
                            <el-menu-item index="5-1">
                                <i class="el-icon-menu"></i>
                                <span>数据报表</span> 
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    </el-menu>
                </el-col>
            </el-aside>
            <el-main class="main">Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name:'Home',
        // 判定当前的登录状态
        beforeCreate(){
            const token = localStorage.getItem('token')
            if (!token) {
                this.$router.push({name:'login'})
            }
        }
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
        text-align: center;
    }
    .loginOut{
        text-decoration: none;
        line-height: 60px;
    }
</style>