let libro= document.getElementsByClassName("tapa")[0]
let contenido = document.getElementsByClassName("contenido")[0]
let circles = document.getElementsByClassName("circles")[0]
let circles2 = document.getElementsByClassName("circles2")[0]
console.log(circles);
function animar(){
    setTimeout(borrar,1689)
    setTimeout(noBorrar,1800)
    libro.classList.add("animacion")
}

function cerrarAnimacion(){
    contenido.classList.remove("borrado")
    libro.classList.remove("animacion")
    circles2.classList.add("borrado")
    
}

function borrar() {
    contenido.classList.add("borrado")
}

function noBorrar() {
    circles2.classList.remove("borrado")
}
