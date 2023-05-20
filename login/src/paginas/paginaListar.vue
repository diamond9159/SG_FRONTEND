<script setup>
import { ref, onMounted, reactive } from "vue";

// #############################################################
// ################ VARIABLES A UTILIZAR


</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-7"></div>
      <form class="d-flex" >
        <input class="form-control me-2" type="search" v-model="nombreProducto" placeholder="Producto a buscar">
        <button class="btn btn-light ml-2" type="button" @click="buscarProducto">Buscar</button>
      <button class="btn btn-light ml-2" type="button" @click="obtenerProductos(false)">Recargar</button>
      </form>
      
    </div>
    <div class="row mt-3">
      <div class="col-1"></div>
      <div class="col-5">
        <h2>Lista de Productos</h2>
        <ul v-for="(producto, id) in productos" @click="mostrarProducto(producto)" :key="id" class="list-group list-group-horizontal">
          <li class=" list-group-item border-white bg-transparent lista">{{ producto.precio }}</li>
          <li class=" list-group-item border-white bg-transparent lista">{{ producto.descripcion }}</li>
        </ul>
      </div>
      <div class="col-5">
        <span>
          <h2> Carrito {{ precioTotal }}</h2>
          <ul class="list-group list-group-horizontal" v-for="(elemento, id) in carrito" :key="id">
            <li class="list-group-item border-white bg-transparent lista">{{ elemento.descripcion }}</li>
            <li class="list-group-item border-white bg-transparent lista">{{ elemento.cantidad }}</li>
            <li class="list-group-item border-white bg-transparent lista ">{{ elemento.precio*elemento.cantidad }}</li>
            </ul>
        </span>
        <div class="d-flex justify-content-center align-item-center mt-5">
        <button v-show="carrito.length>0" class="btn btn-light ml-2" type="button" @click="finalizarCompra">Finalizar compra</button>
      </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-1"></div>
      <div class="col-10">
        <span v-show="productoSeleccionado.descripcion">
          <h2>Mostrar producto</h2>
          <div class="d-flex justify-content-center align-items-center flex-column">
            <div class="card border border-white bg-transparent">
              <img :src="productoSeleccionado.imagen" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Nombre {{ productoSeleccionado.precio }}</h5>
                <p class="card-text">Descripcion {{ productoSeleccionado.descripcion }}</p>
                <button class="btn btn-light" type="button" @click="anadirCarrito">+</button>
                <button class="btn btn-light ml-2 mb-1" type="button" @click="quitarCarrito">-</button> 
              </div>
            </div>
          </div>

        </span>
      </div>
</div>
  </div>
</template>

<style scoped>
img {
  width: auto;
  height: 150px;
}

.card {
  padding: 10px;
  min-width: 250px;
}

ul {
  list-style-type: none;
}

.lista{
  width: 200px;
}
</style>