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
        label="创建日期">
        <!-- 使用全局过滤器 -->
        <!-- 如果单元格内显示的内容不是字符串(文本)，需要给被显示的内容外层包裹一个template
        template内部要使用数据 设置slot-scope属性，该属性的值是要使用数据creat_time的数据源userlist
        slot-scope的值(可以自定义，会自动找上一级的数据源)userlist其实就是el-table绑定的数据userlist
        userlist.row->数组中的每个对象
        -->
        <template slot-scope="scope">
            {{scope.row.create_time | fmtdate}}
        </template>
      </el-table-column>


      <el-table-column
        label="用户状态">
        <!-- 设置用户当前状态 -->
        <template slot-scope="scope">
            <el-switch
            v-model="scope.row.mg_state"
            active-color="#13ce66"
            inactive-color="#ff4949">
            </el-switch>
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作">
        <template slot-scope="scope">
            <el-row >
                <el-button plain size="mini" type="primary" icon="el-icon-edit" circle></el-button>
                <el-button plain size="mini" type="success" icon="el-icon-check" circle></el-button>
                <el-button plain size="mini" type="danger" icon="el-icon-delete" circle></el-button>
            </el-row>
        </template>
      </el-table-column>
    </el-table>
      <!-- 4.分页 -->
    <div>
        <div class="block">
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage1"
            :page-sizes="[8, 16, 24, 30]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
            </el-pagination>
        </div>
    </div>
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
                currentPage1: 5,
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 4
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
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
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