<template>
    <main>
        <h1>Guid生成工具</h1>
        <el-form :model="form" label-width="auto">
            <el-form-item label="选择生成个数(1-100)">
                <el-input-number v-model="form.num" :min="1" :max="100" />
            </el-form-item>
            <el-form-item label="是否带{}">
                <el-radio-group v-model="form.bracket">
                    <el-radio value="yes">带大括号</el-radio>
                    <el-radio value="no">不带大括号</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="是否带连字符-">
                <el-radio-group v-model="form.hyphen">
                    <el-radio value="yes">带连字符</el-radio>
                    <el-radio value="no">不带连字符</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="是否大写">
                <el-radio-group v-model="form.capital">
                    <el-radio value="yes">大写</el-radio>
                    <el-radio value="no">小写</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="结果" ref="result">
                <el-input v-model="form.result" type="textarea" />
            </el-form-item>
            <el-form-item id="action-button">
                <el-button type="primary" @click="onSubmit">生成</el-button>
                <el-button @click="onCopy">复制</el-button>
            </el-form-item>
            <el-form-item v-if="isCopied">
                <el-alert style="max-width: 600px; margin-left: 143px;" title="Success alert" type="success" @close="closeAlert" />
            </el-form-item>
        </el-form>
    </main>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { v4 as uuid4 } from 'uuid';

// do not use same name with ref
const form = reactive({
    num: 1,
    bracket: 'no',
    hyphen: 'yes',
    capital: 'yes',
    result: '',
})

var isCopied = ref(false);

const onSubmit = () => {
    var generatedUuid: string[] = [];
    for (let i = 0; i < form.num; i++) {
        var uuid = uuid4();
        if (form.bracket === 'yes') {
            uuid = '{' + uuid + '}';
        }
        if (form.hyphen === 'no') {
            uuid = uuid.replace(/-/g, '');
        }
        if (form.capital === 'no') {
            uuid = uuid.toLowerCase();
        }
        else {
            uuid = uuid.toUpperCase();
        }
        generatedUuid.push(uuid);
    }
    form.result = generatedUuid.join('\n');
}

const onCopy = () => {
    navigator.clipboard.writeText(form.result);
    isCopied.value = true;
}

const closeAlert = () => {
    isCopied.value = false;
}

</script>

<style scoped>
main {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.el-form {
    max-width: 100%;
    padding: 20px;
}

.el-form-item :deep(textarea) {
    max-width: 400px;
}

#action-button {
    display: block;
    margin-left: 143px;
}
</style>