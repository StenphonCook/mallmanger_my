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
            <el-input placeholder="请输入内容" @clear="loadUserList()" v-model="query" class="inputSearch" clearable>
                <el-button @click="searechUser()" slot="append" icon="el-icon-search"></el-button>               
            </el-input>
            <el-button type="success" @click="showAddUserDia()">添加用户</el-button>
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
            @change="changeMgState(scope.row)"
            inactive-color="#ff4949">
            </el-switch>
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作">
        <template slot-scope="scope">
            <el-row >
                <el-button plain @click="showEditUserDia(scope.row)" size="mini" type="primary" icon="el-icon-edit" circle></el-button>
                <el-button plain @click="showDeleUserMsgBox(scope.row.id)" size="mini" type="danger" icon="el-icon-delete" circle></el-button>
                <el-button plain @click="showSetRoleDia(scope.row)" size="mini" type="success" icon="el-icon-setting" circle></el-button>
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
            :current-page="pagenum"
            :page-sizes="[1, 2, 3, 4]"
            :page-size="2"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
            </el-pagination>
        </div>
    </div>

    <!-- 1.添加用户的对话框 -->
    <el-dialog title="编辑用户" :visible.sync="dialogFormVisibleAdd">
        <el-form :model="form">
            <el-form-item label="用户名" label-width="100px">
            <el-input v-model="form.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" label-width="100px">
            <el-input v-model="form.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" label-width="100px">
            <el-input v-model="form.email" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="电话" label-width="100px">
            <el-input v-model="form.mobile" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisibleAdd = false">取 消</el-button>
            <el-button type="primary" @click="addUser()">确 定</el-button>
        </div>
    </el-dialog>


    <!-- 2.编辑用户对话框 -->
    <el-dialog title="编辑用户" :visible.sync="dialogFormVisibleEdit">
        <el-form :model="form">
            <el-form-item  label="用户名"  label-width="100px">
            <el-input :disabled="true" v-model="form.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" label-width="100px">
            <el-input v-model="form.email" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="电话" label-width="100px">
            <el-input v-model="form.mobile" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisibleEdit = false">取 消</el-button>
            <el-button type="primary" @click="editUser()">确 定</el-button>
        </div>
    </el-dialog>

    <!-- 3.修改用户角色 -->
    <el-dialog title="分配角色" :visible.sync="dialogFormVisibleRol">
    <el-form :model="form">
        <el-form-item label="用户名" label-width="100px">
            {{currUserName}}
        </el-form-item>
        <el-form-item label="角色" label-width="100px">

            <!-- 如果select的绑定的数据的值和option的value一样 就会显示该option的lable值 -->
        <el-select v-model="currRoleId" placeholder="请选择活动区域">
            <el-option label="请选择" :value="-1"></el-option>
            <el-option 
            v-for="(item, i) in roles" :key="i" 
            :label="item.rolename" value="item.id">
            </el-option>
        </el-select>

        </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleRol = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisibleRol = false">确 定</el-button>
    </div>
    </el-dialog>

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
                currentPage1: 1,
                // 添加对话框属性
                dialogFormVisibleAdd:false,
                dialogFormVisibleEdit:false,
                dialogFormVisibleRol:false,
                // 添加用户的表单数据
                form:{id:'',username:'',password:'',email:'',mobile:''},

                currUserName:'',
                currRoleId:0,
                roles:[]
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


            // 分页
            // #region
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                this.pagesize = val 
                this.pagenum = 1   
                this.getUserList()    
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.pagenum = val
                this.getUserList()
            },
            // #endregion


            // 搜索用户
            //  #region
            searechUser(){
                this.getUserList()
            },
            // 清空搜索框，重新加载数据
            loadUserList(){
                this.getUserList()
            },
            //  #endregion
            
            // 添加用户——显示对话框
            // #region
            showAddUserDia(){
                this.form = {}
                this.dialogFormVisibleAdd = true
            },
            // 添加用户——发送请求
           async addUser(){
                const res = await this.$http.post(`users`,this.form)
                // console.log(res)
                const {meta:{status,msg},data} = res.data
                if (status === 201) {
                    // 提示成功
                        this.$message.success(msg)
                    // 关闭对话框
                        this.dialogFormVisibleAdd = false
                    // 更新视图
                        this.getUserList()
                    // 清空文本框
                    this.form = {}
                } else {
                    this.$message.warning(msg)
                }
            },
            //  #endregion
            
            // 删除用户——打开消息盒子（config）
            showDeleUserMsgBox(UserId){
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                    }).then(async () => {
                        // 发送删除请求:id->用户id
                        // 1.data中找id----找不到
                        // 2.调用函数时，传入id ----
                        const res = await this.$http.delete(`users/${UserId}`)
                        console.log(res)
                        if (res.data.meta.status === 200) {
                                this.pagenum = 1
                                this.getUserList()
                                this.$message({
                                    type: 'success',
                                    message: res.data.meta.msg
                                });
                            } 
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消删除'
                        });          
                    });
            },


            // 编辑用户信息——打开对话框
            // #region
            showEditUserDia(user){
                // console.log(user)
                // 获取用户数据
                this.form = user
                // 显示弹窗
                this.dialogFormVisibleEdit = true
            },
            // 编辑用户信息——提交用户信息
            async editUser(){
                const res = await this.$http.put(`users/${this.form.id}`,this.form)
                this.dialogFormVisibleEdit = false
                this.getUserList()
            },
            // #endregion

            // 修改用户状态
            async changeMgState(user){
                // 发送请求
                const res = await this.$http.put(`users/${user.id}/state/${user.mg_state}`)
                console.log(res)
            },

            // 分配角色
            async showSetRoleDia(user){
                this.dialogFormVisibleRol = true
                this.currUserName = user.username
                const resR = await this.$http.get(`roles`)
                this.roles = resR.data.data
                const res = await this.$http.get(`users/${user.id}`)
                // this.currRoleId = res.data.data.rid
                // console.log(res)
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