import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Productos from '../views/Productos.vue'
import Productores from '../views/Productores.vue'
import Contacto from '../views/Contacto.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'inicio', component: Inicio },
    { path: '/productos', name: 'productos', component: Productos },
    { path: '/productores', name: 'productores', component: Productores },
    { path: '/contacto', name: 'contacto', component: Contacto }
  ],
})

export default router
