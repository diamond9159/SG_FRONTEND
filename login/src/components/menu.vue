<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
const props = defineProps({
  titulo: String,
  links: Array,
});

let usuario = ref(null);
usuario.value = localStorage.getItem("usuario");

/**
 * Desconectar un usuario
 */
function desconectar() {
  localStorage.setItem("usuario", null);
  location.reload();
}
</script>

<template>
<RouterLink to="/inicio" >
     <h1>Socket en Raya</h1>
</RouterLink>
</template>

<style scoped>

h1 {
  color: #fff;
  text-align: center;
}

</style>