<template>
  <el-card class="boxcard">
      <!-- 1.面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
      <!-- 2.搜索 -->

      <!-- 3.表格 -->

      <!-- 4.分页 -->

  </el-card>
</template>

<script>
    export default {
        name:'Users',
        mounted: {
            
        }
    }
</script>

<style>
    .box-card{
        height: 100%;
    }
</style>