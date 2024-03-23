<template>
    <main>
        <h1>日期计算器</h1>
        <el-tabs v-model="activeName" class="demo-tabs" stretch @tab-click="handleClick">
            <el-tab-pane label="计算日期差" name="days">
                <p>开始日期</p>
                <el-date-picker v-model="startDate" type="date" placeholder="Pick a day" :size="size" />
                <p>结束日期</p>
                <el-date-picker v-model="endDate" type="date" placeholder="Pick a day" :size="size" />
                <div id="includeEndDate">
                    <p>计算时结束日期包括在内</p>
                    <div style="flex: 1"></div>
                    <el-checkbox v-model="include" size="large" @click="includeCheckbox" />
                </div>
                <el-button type="primary" @click="calculate">计算</el-button>
                <div id="result" v-if="days !== 0">
                    <div id="result-table">
                        <div>两个日期之间的天数</div>
                        <div style="font-size: large; font-weight: bold; font-size: 32px;">{{ days }}</div>
                    </div>
                    <div id="result-table">
                        <div>两个日期之间的周数</div>
                        <div style="font-size: large; font-weight: bold; font-size: 32px;">{{ (days / 7).toFixed(2) }}</div>
                    </div>
                    <div id="result-table">
                        <div>两个日期之间的月数</div>
                        <div style="font-size: large; font-weight: bold; font-size: 32px;">{{ (days / 30).toFixed(2) }}</div>
                    </div>
                    <div id="result-table">
                        <div>两个日期之间的年数</div>
                        <div style="font-size: large; font-weight: bold; font-size: 32px;">{{ (days / 365).toFixed(2) }}</div>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="计算几天后日期" name="future">
                <p>开始日期</p>
                <el-date-picker v-model="currentDate" type="date" placeholder="Pick a day" :size="size" />
                <p>年数</p>
                <el-input v-model="inputYears" placeholder="请输入年数"></el-input>
                <p>月数</p>
                <el-input v-model="inputMonths" placeholder="请输入月数"></el-input>
                <p>周数</p>
                <el-input v-model="inputWeeks" placeholder="请输入周数"></el-input>
                <p>日数</p>
                <el-input v-model="inputDays" placeholder="请输入日数"></el-input>
                <el-button type="primary" @click="calculateFuture">计算</el-button>
                <div id="future-day-result" v-if="futureDate !== ''">
                    {{ futureDate }}
                </div>
            </el-tab-pane>
            <el-tab-pane label="计算几天前日期" name="past">计算几天前日期</el-tab-pane>
            <el-tab-pane label="UTC时间" name="utc">计算UTC时间</el-tab-pane>
        </el-tabs>
    </main>

</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type { TabsPaneContext } from 'element-plus';

const activeName = ref('days');

const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event);
}

const size = ref<'default' | 'large' | 'small'>('default');
const startDate = ref('');
const endDate = ref('');

const include = ref(false);
const days = ref(0);

const includeCheckbox = () => {
    console.log(include.value);
}

const calculate = () => {
    if (startDate.value === '' || endDate.value === '') {
        return;
    }
    days.value = (startDate.value - endDate.value) / (24 * 3600 * 1000);
    days.value = Math.abs(days.value);
    if (include.value === true) {
        days.value++;
    }
}

const currentDate = ref('');
const futureDate = ref('');
const inputYears = ref(0);
const inputMonths = ref(0);
const inputWeeks = ref(0);
const inputDays = ref(0);

const calculateFuture = () => {
    if (currentDate.value === '') {
        return;
    }
    if (inputYears.value !== 0) {
        currentDate.value = currentDate.value.getTime();
    }
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

h1 {
    padding: 10px 0;
}

.el-tabs {
    width: 600px;
    padding: 20px;
}

.el-tabs :deep(.el-input) {
    width: 100%;
    height: 45px;
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

#includeEndDate {
    display: flex;
    flex-direction: row;
}

p {
    padding: 5px 2px;
}

.el-button {
    width: 100%;
    margin-top: 10px;
    height: 40px;
}

#result {
    margin-top: 20px;
    border-radius: 10px;
    background-color: #fff;
}

.el-tabs :deep(#result-table) {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #ccc;
}

.el-tabs :deep(#result-table:last-child) {
    border-bottom: none;
}

.el-tabs :deep(#future-day-result) {
    margin-top: 20px;
}
</style>