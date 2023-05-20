<script setup>
import { ref, computed, reactive } from "vue";
import signin from "../components/signin.vue";
import inicio from "../components/inicio.vue"
const usuario = localStorage.getItem('usuario')

</script>

<template>
<div class="container" >
    <div class="row">
      <div class="col-6">
                <div class="d-flex justify-content-center align-items-center titulo">
                    <h1>SquareGame</h1>
                </div>
            </div>
    <div class="col-6">
        <div class="book">
          <div class="tapa">
            <div class="card-body p-4 p-sm-5 contenido">
              <div v-show="usuario == 'null'">
                <signin></signin>
              </div>
             <div v-show="usuario !== 'null'">
              <inicio></inicio>
             </div>
            </div>
            <div class="circles2 borrado"></div>
            <div class="circles">
                <div class="line"></div>
            </div>
        </div>
        </div>
    </div>
    </div>
    </div>
</template>

<style scoped>
.book{
   width: 650px;
    height: 650px;
    background-color: rgb(214, 207, 207);
    margin-top: 40px;
    border-radius: 10px;
    box-shadow: 10px 10px #fff, 20px 20px rgba(0, 0, 0, .17);
    position: relative;
}

.circles{
    position: absolute;
    top: 30px;
    left: 7px;
    width: 14px;
    height: 14px;
    background-color: #fff;
    border-radius: 50%;
    color: #fff;
    box-shadow: 0 40px,0 80px,0 120px, 0 160px, 0 200px, 0 240px,0 280px, 0 320px, 0 360px, 0 400px, 0 440px, 0 480px,0 520px, 0 560px;
}
.circles2{
  position: absolute;
  top: 30px;
  left: -25px;
  width: 14px;
  height: 14px;
  background-color: #fff;
  border-radius: 50%;
  color: #fff;
  
  box-shadow: 0 40px,0 80px,0 120px, 0 160px, 0 200px, 0 240px,0 280px, 0 320px, 0 360px, 0 400px, 0 440px, 0 480px,0 520px, 0 560px;
}

.line{
  
    position: absolute;
    top: 3px;
    left: -29px;
    width: 41px;
    height: 8px;
    background-color: rgb(101, 101, 101);
    color: rgb(101, 101, 101);
    box-shadow: 0 40px,0 80px,0 120px, 0 160px, 0 200px, 0 240px,0 280px, 0 320px, 0 360px, 0 400px, 0 440px, 0 480px,0 520px, 0 560px;
}
.animacion{
    animation: cambiarportada 6s forwards;
  }
.borrado{
  display: none;
}
  

.tapa{
  position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(128, 0, 128);
    transform-origin: left;
    border-radius: 10px;
    box-shadow: 10px 10px #fff, 20px 20px rgba(0, 0, 0, .17);
  }
.contenido{
  margin-left: 10%;
  margin-top: 6%;
  width: 80%;
  height: 90%;
  background-color: rgba(215, 24, 215, 0.3);
  border-radius: 10px;
}

.titulo{
  height: 700px;
}
</style>