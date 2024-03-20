<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
        @select="handleSelect">
        <el-menu-item index="0">
            <img style="width: 100px" src="../assets/images/element-plus-logo.svg" alt="Element logo" @click="backToHomePage"/>
        </el-menu-item>
        <el-menu-item index="1">Processing Center</el-menu-item>
        <el-sub-menu index="2">
            <template #title>Workspace</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
                <template #title>item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
        <div class="flex-grow" />
        <el-button type="primary">Sign Up</el-button>
        <el-button type="primary" @click="onClickLoginIn">Sign In</el-button>
    </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {useRouter} from 'vue-router';

const router = useRouter();
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const backToHomePage = () => {
    router.push('/');
};
const onClickLoginIn = () => {
    router.push('/login');
};
</script>

<style scoped>
.el-menu-demo {
    align-items: center;
}

.flex-grow {
    flex-grow: 1;
}
</style>