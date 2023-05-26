<script setup>
import servicioHistorial from '../servicios/historial/servicioHistorial'
import { ref  } from "vue";
import { onMounted } from 'vue';
let array = ref(null);


function historial(){ 
  servicioHistorial
      .historial(localStorage.getItem("id"))
      .then((response) => {
        array.value = response.data
        console.log(response.data)
      }
      )
}
onMounted(() => {
  historial();
});
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
            <tr v-for="contricante in array">
              <td>{{ contricante.usuario.username }}</td>
              <td>{{ contricante.resultado }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<style></style>
