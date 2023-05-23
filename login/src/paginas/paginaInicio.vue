<script setup>
import libro from "../components/libro.vue";
localStorage.setItem('historial',false)
localStorage.setItem(`random`,false)
</script>
<template>
    <main>
        <libro></libro>
    </main>
</template>
<style scoped></style>
