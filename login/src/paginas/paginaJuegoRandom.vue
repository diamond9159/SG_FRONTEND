<script setup>
import libroAbierto from "../components/libroAbierto.vue";
import { onMounted } from 'vue';

let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let roomId
onMounted(() => {
  localStorage.setItem('historial',false)
  localStorage.setItem("random",true)
  console.log(typeof(localStorage.getItem("room")));
  console.log(typeof("null"));
  console.log(localStorage.getItem("room")==="null");
  if(localStorage.getItem("room")==="null"){
    console.log("es nulo");
        roomId = String(Math.floor(Math.random() * 10000));
        urlParams.append("room", `${roomId}`)
        localStorage.setItem("room", `${roomId}`);
        console.log(localStorage.getItem("room"));
    }else{
      console.log("no es nulo");
        roomId = localStorage.getItem("room")
        urlParams.append("room", `${roomId}`)
        console.log("El id es "+roomId);
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
