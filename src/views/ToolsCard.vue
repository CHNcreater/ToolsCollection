<script setup>

import cardData from '../assets/data/card-data.ts'

</script>

<template>
  <div id="cards">
    <router-link v-for="tool in cardData" :key="tool.id" :to="{ path: tool.url }" style="text-decoration: none;">
      <el-card shadow="always">
        <p>{{ tool.title }}</p>
        <p>{{ tool.description }}</p>
      </el-card>
    </router-link>
  </div>
</template>

<style scoped>
#cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-template-rows: auto;
  gap: 20px;
  margin: 10px 50px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;

  .el-card {
    max-width: 240px;
    border-radius: 10px;
    border: none;
    transition: background-color 0.3s ease;
    p {
      text-align: left;
    }
  }

  .el-card:hover {
    transform: translateY(-1px);
    background-color: #007BFF;
  }
}
</style>
