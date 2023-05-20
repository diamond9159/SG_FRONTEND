<script setup>
import servicioHistorial from '../servicios/historial/servicioHistorial'
import { ref  } from "vue";
let partidas = ref('')
let resultado = ref('')
servicioHistorial
      .getAll()
      .then((response) => {
        let array = response.data
        array.forEach(element => {
            if(element.usuario.username !== localStorage.getItem('usuario')){
                partidas.value=element.usuario.username
                resultado.value=element.puntos
        }
        });
      }
      )
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-4"></div>
      <div class="col-3 mt-5">
        <h1>Historial</h1>
        <table class="table table-striped table-hover mt-3">
            <thead>
                <tr>
                    <th>Oponente</th>
                    <th>Resultado</th>
                </tr>
            </thead>
          <tbody>
            <tr>
              <td>{{ partidas }}</td>
              <td>{{ resultado }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<style></style>
