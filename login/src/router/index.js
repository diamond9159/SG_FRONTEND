import { createRouter, createWebHistory } from "vue-router";
import paginaInicio from "@/paginas/paginaInicio.vue";
import paginaListar from "@/paginas/paginaListar.vue";
import paginaHistorial from "@/paginas/paginaHistorial.vue";
import paginaJuego from "@/paginas/paginaJuego.vue"
import paginaJuegoRandom from "@/paginas/paginaJuegoRandom.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        //Públicas
        {
            path: '/',
            name: 'inicio',
            component: paginaInicio
        },
        {
            path: '/listado',
            name: 'listar',
            component: paginaListar,
            beforeEnter: (to, from, next) => {
                let usuario = localStorage.getItem('usuario')                
                if (usuario!=='null') {
                    next()
                } else {
                    next('/')
                }
            }
        },
        {
            path: '/historial',
            name: 'historial',
            component: paginaHistorial,
            beforeEnter: (to, from, next) => {
                let usuario = localStorage.getItem('usuario')                
                if (usuario!=='null') {
                    next()
                } else {
                    next('/')
                }
            }
        },{
            path: '/juego',
            name: 'juego',
            component: paginaJuego,
            beforeEnter: (to, from, next) => {
                let usuario = localStorage.getItem('usuario')                
                if (usuario!=='null') {
                    next()
                } else {
                    next('/')
                }
            }
        },
        {
            path: '/juegoRandom',
            name: 'juegoRandom',
            component: paginaJuegoRandom,
            beforeEnter: (to, from, next) => {
                let usuario = localStorage.getItem('usuario')                
                if (usuario!=='null') {
                    next()
                } else {
                    next('/')
                }
            }
        },
        {         //Si se produce un error
            path: '/:pathMatch(.*)*',
            redirect: () => ({ name: 'inicio' })
        }
    ]

});


export default router;