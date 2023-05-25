<script setup>
import { ref, computed, reactive } from "vue";
import { RouterLink,useRouter,useRoute } from 'vue-router';
import bcrypt from 'bcryptjs';
import servicioLogin from "../servicios/login/servicioLogin.js";
const usuarioInput = ref('');
const contraseniaInput = ref('');
const usuario = ref(null);
usuario.value = localStorage.getItem("usuario");
import Swal from "sweetalert2/dist/sweetalert2.all.js";

const iniciarSesion = () => {
  if (usuarioInput.value != '' && contraseniaInput.value != '') {
    let salt = bcrypt.genSaltSync(10);
    let password = bcrypt.hashSync(contraseniaInput.value, salt);
    servicioLogin
      .login(usuarioInput.value, password)
      .then((response) => {
        console.log(response.status);
        if (response.data == "") {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Usuario incorrecto",
          }).then(function () {
            location.reload();
          });
          localStorage.setItem("usuario", null);
        } else {
          console.log(response.data.id);
          localStorage.setItem("id", response.data.id);
          Swal.fire({
            icon: "success",
            title: `Hola ${usuarioInput.value}`,
            text: "Usuario correcto",
          }).then(function () {
            location.reload();
          });
          localStorage.setItem("usuario", usuarioInput.value);
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
  <!--
      <section class="vh-100">
        <div class="container py-5">
            <div class="row d-flex align-items-center justify-content-center h-100">
                <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                    <form @submit.prevent="iniciarSesion">
                        
                        <div class="form-outline mb-4">
                            <input type="text" id="formLoginLabelEmail" class="form-control form-control-lg"
                                v-model="usuarioInput" required autofocus />
                            <label class="form-label" for="formLoginLabelEmail">Email</label>
                        </div>

                        
                        <div class="form-outline mb-4">
                            <input type="password" id="formLoginLabelSenha" class="form-control form-control-lg"
                                v-model="contraseniaInput"  />
                            <label class="form-label" for="formLoginLabelSenha">Contraseña</label>
                        </div>

                        <div class="d-flex justify-content-around align-items-center mb-4">
                            
                            <router-link to="/registrar">Registrarse</router-link>
                        </div>

                        
                        <button type="submit" class="col-12 btn btn-primary btn-lg btn-block">Entrar</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  -->
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
