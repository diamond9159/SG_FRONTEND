<script setup>
import libroAbierto from "../components/libroAbierto.vue";
localStorage.setItem('historial',false)
localStorage.setItem(`random`,true)
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
