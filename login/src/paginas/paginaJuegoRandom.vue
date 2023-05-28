<script setup>
import libroAbierto from "../components/libroAbierto.vue";
import { onMounted } from 'vue';

let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let roomId
localStorage.setItem('historial',false)
  localStorage.setItem("random",true)
onMounted(() => {
  if(localStorage.getItem("room")==="null"){
        roomId = String(Math.floor(Math.random() * 10000));
        urlParams.append("room", `${roomId}`)
        localStorage.setItem("room", `${roomId}`);
    }else{
        roomId = localStorage.getItem("room")
        urlParams.append("room", `${roomId}`)
        localStorage.removeItem("room")
    }
})
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
