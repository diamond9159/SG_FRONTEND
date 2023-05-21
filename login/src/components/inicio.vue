<script setup>
import { ref } from 'vue'
const usuario = localStorage.getItem('usuario')
function desconectar() {
  localStorage.setItem("usuario", null);
  location.reload();
}

let sala = ref('')
let random = ref('')


</script>
<template>
        <div id="form-container d-flex">
            <div id="form_container_header">
                <p>Crear o unirse a una sala de Juego</p>
            </div>
            <div id="form_content_wrapper">
                <form id="join-form">
                    <input type="text" class="mt-3" v-model="sala" name="room_name" required />
                    <input type="submit" class="mt-4" value="Unirse a sala" />
                </form>
                <form id="join-random-form" class="mt-3">
                    <RouterLink to="/juego" >
                        <input type="submit" value="Unirse a sala random" />
                    </RouterLink>
                </form>
                <form id="join-random-form2" class="mt-4">
                    <RouterLink to="/historial" >
                    <input class="otro" value="Historial">
                    </RouterLink>
                </form>
            </div>
        </div>
        <div class="d-flex justify-content-center mt-2">
            <span v-if="usuario !== 'null'">Usuario : {{ usuario }}</span>
            <button class="btn btn-danger ml-2" id="boton-desconectar" @click="desconectar">Desconectar</button>
        </div>
</template>
<style>

#form_container_header{
    color: white;
    border-radius: 10px 10px 0 0;
    padding: 30px;
    text-align: center;
    background-color: rgb(101, 9, 103);
    font-size: 18px;
    line-height: 0;
}

#form_content_wrapper{
    padding: 20px;
}

input{
    box-sizing: border-box;
    color: white;
    width: 100%;
    border: none;
    border-radius: 5px;
    padding: 16px 20px;
    font-size:15px;
    background-color: white;
    margin-top: 32px;
    cursor: pointer;
}

input[type='submit']{
    background-color: violet;
    
}
.otro{
    text-align: center;
    background-color: violet;
    cursor: pointer;
}
span{
    color: white;
}


</style>