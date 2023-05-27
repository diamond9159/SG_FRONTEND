<script setup>
import libroAbierto from '../components/libroAbierto.vue';
import { onMounted } from 'vue';

onMounted(() => {
  localStorage.setItem('historial',true)
  localStorage.setItem("random",false)
});
</script>

<template>
    <main>
    <libroAbierto></libroAbierto>
    <RouterView />
  </main>
</template>

<style scoped>
header{
  margin-top: 10px;
}
</style>