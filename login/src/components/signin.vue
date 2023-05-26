<script setup>
import { ref } from "vue";
import { RouterLink } from 'vue-router';
import bcrypt from 'bcryptjs';
import servicioLogin from "../servicios/login/servicioLogin.js";
const usuarioInput = ref('');
const contraseniaInput = ref('');
const usuario = ref(null);
usuario.value = localStorage.getItem("usuario");
import Swal from "sweetalert2/dist/sweetalert2.all.js";

const iniciarSesion = () => {
  if (usuarioInput.value != '' && contraseniaInput.value != '') {
    servicioLogin.findByUsuario(usuarioInput.value)
    .then((respuesta) => {
      console.log(respuesta.data)
      console.log(bcrypt.compare(contraseniaInput.value, respuesta.data.password));
      if(usuarioInput.value == respuesta.data.username){
        bcrypt.compare(contraseniaInput.value, respuesta.data.password)
        .then((response) => {
          if(response){
            localStorage.setItem("id", respuesta.data.id)
            localStorage.setItem("usuario", respuesta.data.username)
            Swal.fire({
              icon: "success",
              title: `Hola ${usuarioInput.value}`,
              text: "Usuario correcto",
            }).then(function () {
              location.reload();
          });
          }
          else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Usuario incorrecto",
              }).then(function () {
                location.reload();
              });
          }
        })
        .catch((e) => {
          console.log(e)
        })
      }
    })
    .catch((e) => {
      localStorage.setItem("usuario", null);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Error del servidor -> ${e}`,
      }).then(function () {
        location.reload();
      });
    });
  }
};
</script>

<template>
  <div class="container">
    <div class="row">
      <h5 class="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
      <form @submit.prevent="iniciarSesion">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            v-model="usuarioInput" />
        </div>
        <div class="form-floating mb-3">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            title="Al menos un número, una letra en mayúscula, una letra en minúscula y al menos 6 caracteres"
            placeholder="Password"
            v-model="contraseniaInput" />
        </div>

        <div class="form-check mb-3"></div>
        <div class="d-grid">
          <button
            class="btn btn-primary btn-login text-uppercase fw-bold"
            type="submit">
            Sign in
          </button>
        </div>
      </form>
      <RouterLink to="/crear" >
          <a>Registro usuario</a>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  box-sizing: border-box;
}

.btn {
  width: 100%;
}

body {
  background-color: lightblue;
}

.titulo {
  height: 600px;
}
</style>
