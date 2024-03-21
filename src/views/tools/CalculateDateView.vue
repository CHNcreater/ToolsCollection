<template>
    <main>
        <h1>日期计算器</h1>
        <el-tabs v-model="activeName" class="demo-tabs" stretch="true" @tab-click="handleClick">
            <el-tab-pane label="计算日期差" name="days">
                计算日期差
                <textarea></textarea>
            </el-tab-pane>
            <el-tab-pane label="Future" name="future">计算几天后日期</el-tab-pane>
            <el-tab-pane label="Past" name="past">计算几天前日期</el-tab-pane>
            <el-tab-pane label="UTC" name="utc">计算UTC时间</el-tab-pane>
        </el-tabs>
    </main>

</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('days')

const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}
</script>
<style scoped>
main {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
}

.el-tabs {
    width: 600px;
}

.demo-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}

.el-tabs :deep(.el-tabs__active-bar) {
    width: 150px;
}

.el-tabs :deep(.el-tabs__item) {
    padding: 0;
}
</style>