<script setup lang="ts">
import { RouterView } from 'vue-router';
import { computed ,ref } from 'vue';
import PageHeader from './views/PageHeader.vue';
import PageFooter from './views/PageFooter.vue';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import en from 'element-plus/dist/locale/en.mjs';

const language = ref('zh-cn');
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en));
</script>

<template>
  <el-config-provider :locale="locale">
    <PageHeader />
    <div id="content">
      <RouterView />
    </div>
    <PageFooter />
  </el-config-provider>
</template>

<style scoped>
#content {
  flex: 1;
}
</style>
