<script setup>
import inicio from './inicio.vue';
import historial from './historial.vue'
import juego from './juego.vue';
import juegoRandom from './juegoRandom.vue';
const historia = localStorage.getItem('historial')
const random = localStorage.getItem('random')

</script>
<template>
    <div class="container" v-show="usuario !== 'null'">
    <div class="row">
    <div class="col-6"></div>
    <div class="col-6">
                <div class="book2">
                    <div class="tapa2">
                        <div class="card-body p-4 p-sm-5 contenido2">
                            <inicio></inicio>
                        </div>
                    </div>
                    <div v-if="historia=='true'">
                        <historial></historial>
                    </div>
                    <div v-else>
                      <div v-if="random">
                        <juegoRandom></juegoRandom>
                      </div>
                      <div v-else>
                        <juego></juego>
                      </div>
                    </div>
                        
                    <div class="circles22"></div>
                    <div class="circles2">
                        <div class="line2"></div>
                    </div>
                </div>
            </div>
            </div>
    </div>
</template>
<style scoped>
*{
    margin: 0;
    box-sizing: border-box;
}

body{
    background-color: lightblue;
}

.book2{
   width: 650px;
    height: 650px;
    background-color: rgb(214, 207, 207);
    margin-top: 40px;
    border-radius: 10px;
    box-shadow: 10px 10px #fff, 20px 20px rgba(0, 0, 0, .17);
    position: relative;
}

.circles2{
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
.circles22{
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

.line2{
  
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
  

.tapa2{
  position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(128, 0, 128);
    transform-origin: left;
    border-radius: 10px;
    box-shadow: 10px 10px #fff, 20px 20px rgba(0, 0, 0, .17);
    translate: -5px;
    transform: rotateY(-180deg);
  }
.contenido2{
  margin-left: 10%;
  margin-top: 6%;
  width: 80%;
  height: 90%;
  background-color: rgba(215, 24, 215, 0.3);
  border-radius: 10px;
        transform: rotateY(180deg);
}

@keyframes cambiarportada {
    0% {
        transform: rotateY(0deg);
      }
      100% {
        translate: -5px;
        transform: rotateY(-180deg);
      }
      

}
body {
  background: #007bff;
  background: linear-gradient(to right, #0062E6, #33AEFF);
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