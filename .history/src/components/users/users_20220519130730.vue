<template>
  <el-card class="boxcard">
      <!-- 1.面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
      <!-- 2.搜索 -->
    <el-row class="searchRow">
        <el-col>
            <el-input placeholder="请输入内容" v-model="query" class="inputSearch">
                <el-button slot="append" icon="el-icon-search"></el-button>               
            </el-input>
            <el-button type="success">添加用户</el-button>
        </el-col>
    </el-row>
      <!-- 3.表格 -->
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        type="index"
        label="#"
        width="60">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="80">
      </el-table-column>
      <el-table-column
        prop="address"
        label="邮箱">
      </el-table-column>
      <el-table-column
        prop="address"
        label="电话">
      </el-table-column>
      <el-table-column
        prop="address"
        label="创建日期">
      </el-table-column>
      <el-table-column
        prop="address"
        label="用户状态">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作">
      </el-table-column>
    </el-table>
      <!-- 4.分页 -->

  </el-card>
</template>

<script>
    export default {
        name:'Users',
        data () {
            return {
                query:'',
                pagenum:1,
                pagesize:2,
                tableData:[
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                        date: '2016-05-04',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1517 弄'
                    },
                ]
            }
        },
        created () {
            this.getUserList()
        },
        methods: {
            // 获取用户列表请求
           async getUserList(){
            // 设置请求头验证token
            const token =localStorage.getItem('token')
            axios.deafults.headers.common['Authorization'] = token
              const res = await this.$http.get(`users?query=${this.query}&pagenum=${this.pagenum}&pagesize=${this.pagesize}`)

              console.log(res)
            }
            
        },
    }
</script>

<style>
    .box-card{
        height: 100%;
    }
    .inputSearch{
        width: 300px;
    }
    .searchRow{
        margin-top: 20px;
    }
</style>