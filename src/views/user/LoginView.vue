<script setup>
import { reactive, ref } from 'vue';

const loginForm = reactive({
    username: 'Joey',
    password: "123456"
});

const loginRules = reactive({
    username: [
        { required: true, message: 'Please input the username', trigger: 'blur' },
        { min: 3, max: 10, message: 'The length of username should be 3 to 10', trigger: 'blur' }
    ],
    password: [
        { required: true, message: 'Please input the password', trigger: 'blur' },
        { min: 6, max: 20, message: 'The length of password should be 6 to 20', trigger: 'blur' }
    ]
});

</script>

<template>
  <div id="login">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-width="80px">
      <el-form-item label="Username" prop="username">
        <el-input v-model="loginForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
  #login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
</style>