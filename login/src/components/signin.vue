<script setup>
import { ref, computed, reactive } from "vue";
import servicioLogin from "../servicios/login/servicioLogin.js";
const usuarioInput = ref(null);
const usuario = ref(null);
usuario.value = localStorage.getItem("usuario");

const iniciarSesion = () => {
  if (usuarioInput.value != null) {
    servicioLogin
      .findByNombreContrasenia(usuarioInput.value)
      .then((response) => {
        console.log(response.data);
        if (response.data == "") {
          console.log("ho");
          alert("Usuario Incorrecto");
          localStorage.setItem("usuario", null);
          location.reload();
        } else {
          console.log(response.data.id);
          localStorage.setItem("id", response.data.id);
          alert("Usuario Correcto");
          localStorage.setItem("usuario", usuarioInput.value);
          location.reload();
        }
      })
      .catch((e) => {
        localStorage.setItem("usuario", null);
        alert("usuario incorrecto, problemas de conexion");
        console.log(e);
        //location.reload();
      });
  }
};

</script>

<template> 
    <h5 class="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
              <form @submit.prevent="iniciarSesion">
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    v-model="usuarioInput"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                    title="Al menos un número, una letra en mayúscula, una letra en minúscula y al menos 6 caracteres"
                    placeholder="Password"
                    v-model="contraseniaInput"
                  />
                  <label for="floatingPassword">Password</label>
                </div>

                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="rememberPasswordCheck"
                  />
                  <label class="form-check-label" for="rememberPasswordCheck">
                    Remember password
                  </label>
                </div>
                <div class="d-grid">
                  <button
                    class="btn btn-primary btn-login text-uppercase fw-bold"
                    type="submit"
                  >
                    Sign in
                  </button>
                </div>
                <hr class="my-4" />
                <div class="d-grid mb-2">
                  <button
                    class="btn btn-google btn-light text-uppercase fw-bold"
                    type="submit"
                  >
                    <i class="fab fa-google me-2"></i> Sign in with Google
                  </button>
                </div>
              </form>
</template>


<style scoped>

.contenedor-imagen {
  display: flex;
  justify-content: center;
}

.contenedor-imagen img {
  margin: 0 auto;
  max-width: 80%;
  max-height: 500px;
}
*{
    margin: 0;
    box-sizing: border-box;
}



.btn-login {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
}

.btn-google {
  color: white ;
  background-color: #ea4335;
}

.btn-facebook {
  color: white !important;
  background-color: #3b5998;
}

.titulo{
  height: 600px;
}
</style>