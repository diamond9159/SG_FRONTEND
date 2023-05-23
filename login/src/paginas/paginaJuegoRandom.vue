<script setup>
import libroAbierto from "../components/libroAbierto.vue";
import barraMenu from '../components/menu.vue'
localStorage.setItem('historial',false)
localStorage.setItem(`random`,true)
</script>
<template>
    <header>      
     <barraMenu titulo="Menú Principal" :links="['inicio','listar','historial']"/>    
  </header>   
    
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
