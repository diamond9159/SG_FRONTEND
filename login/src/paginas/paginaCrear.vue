<script setup>
import libro from "../components/libro.vue";
import { onMounted } from "vue";

onMounted(() => {
    localStorage.setItem('historial',false)
    localStorage.setItem("random",false)
    localStorage.setItem("crear",true)
});

</script>
<template>
    <main>
        <libro></libro>
    </main>
</template>
<style scoped></style>
