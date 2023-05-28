<script setup>
import { reactive,ref } from "vue";
import { RouterLink } from 'vue-router';
import servicioLogin from "../servicios/login/servicioLogin.js";
import Swal from "sweetalert2/dist/sweetalert2.all.js";
const usuarioEmail = ref('');
const usuarioContrasenia = ref('');
const usuarioUsername = ref('')
let datas = reactive([]);
let user = reactive({ username: null, email: null, password: null });

const crearUser = () => {

    user.username = usuarioUsername.value
    user.email = usuarioEmail.value,
    user.password = usuarioContrasenia.value
    datas.push(user)
    
    if (user.username != '' && user.email != 'null' && user.password != 'null') {
        servicioLogin.create(JSON.stringify(datas[0]))
        .then((response) => {
            if (response.data == "") {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Usuario no creado",
                })
                usuarioUsername.value = ""
                usuarioEmail.value = ""
                usuarioContrasenia.value = ""
            } else {
                Swal.fire({
                    icon: "success",
                    title: `Hola ${usuarioInput.value}`,
                    text: "Usuario correcto",
                }).then(function () {
                    location.href = "http://localhost:5173/inicio";
                });
            }
        });
    }
}
</script>
<template>
    <div class="container">
        <div class="row">
            <h5 class="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
            <form @submit.prevent="crearUser">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingUsername" placeholder="username" required
                        v-model="usuarioUsername" />
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" required
                        v-model="usuarioEmail" />
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="floatingPassword"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                        title="Al menos un número, una letra en mayúscula, una letra en minúscula y al menos 6 caracteres"
                        placeholder="Password" required v-model="usuarioContrasenia" />
                </div>

                <div class="form-check mb-3"></div>
                <div class="d-grid">
                    <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">
                        Sign in
                    </button>
                </div>
            </form>
        </div>
    </div>

</template>

<style scoped></style>