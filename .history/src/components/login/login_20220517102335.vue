<template>
  <div>
    <el-form 
    :label-position="top" 
    label-width="80px" 
    :model="formdata">
        <el-form-item label="名称">
            <el-input v-model="formdata.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
            <el-input v-model="formdata.region"></el-input>
        </el-form-item>
        <el-form-item label="活动形式">
            <el-input v-model="formdata.type"></el-input>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    name:'Login'
}
</script>

<style>

</style>