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
      :data="userlist"
      style="width: 100%">
      <el-table-column
        type="index"
        label="#"
        width="60">
      </el-table-column>
      <el-table-column
        prop="username"
        label="姓名"
        width="80">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱">
      </el-table-column>
      <el-table-column
        prop="mobile"
        label="电话">
      </el-table-column>


      <el-table-column
        prop="create_time"
        label="创建日期">
        {{create_time | fmtdate}}
      </el-table-column>


      <el-table-column
        prop="mg_state"
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
                userlist:[],
                // 分页
                total:-1,
                pagenum:1,
                pagesize:2,
            }
        },
        created () {
            this.getUserList()
        },
        methods: {
            // 获取用户列表请求
           async getUserList(){
            // 设置请求头验证token
            const AUTH_TOKEN =localStorage.getItem('token')
            this.$http.defaults.headers.common['Authorization'] = AUTH_TOKEN
            // 发送请求
              const res = await this.$http.get(`users?query=${this.query}&pagenum=${this.pagenum}&pagesize=${this.pagesize}`)

              console.log(res)
            const {meta:{status,msg},data:{users,total}} = res.data
            if (status === 200) {
                // 给表格数据赋值
                this.userlist = users
                // 给总数赋值
                this.total = total
                // 提示获取数据结果
                this.$message.success(msg)
            }else{
                this.$message.warning(msg)
            }
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