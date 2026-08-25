<template>
  <div>
    <h2>Catálogo de Productos</h2>
    <div style="margin-bottom: 20px;">
      <label>
        <input type="checkbox" v-model="mostrarSoloDisponibles">
        Ocultar productos agotados
      </label>
    </div>

    <div v-if="productosFiltrados.length > 0" style="display: flex; flex-wrap: wrap;">
      <ProductoCard 
        v-for="prod in productosFiltrados" 
        :key="prod.id"
        :nombre="prod.nombre"
        :categoria="prod.categoria"
        :productor="prod.productor"
        :comuna="prod.comuna"
        :precio="prod.precio"
      />
    </div>

    <div v-else style="padding: 20px; background-color: #fee; border-radius: 8px;">
      <p>Lo sentimos, no hay productos disponibles con el filtro seleccionado en Mercado Ñuble Digital.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProductoCard from '../components/ProductoCard.vue'

const mostrarSoloDisponibles = ref(false)

const listaProductos = ref([
  { id: 1, nombre: 'Miel de Abeja Natural', categoria: 'Miel', productor: 'Apícola Los Andes', comuna: 'Pinto', precio: 4500, disponible: true },
  { id: 2, nombre: 'Queso de Vaca Artesanal', categoria: 'Lácteos', productor: 'Fundos del Sur', comuna: 'San Carlos', precio: 6000, disponible: false },
  { id: 3, nombre: 'Arándanos Frescos', categoria: 'Frutas', productor: 'Huertos Chillán', comuna: 'Chillán', precio: 2500, disponible: true },
  { id: 4, nombre: 'Mermelada de Mora', categoria: 'Conservas', productor: 'Dulces Caseros', comuna: 'Chillán', precio: 3000, disponible: false },
  { id: 5, nombre: 'Tomates Cherry', categoria: 'Hortalizas', productor: 'Invernaderos San Carlos', comuna: 'San Carlos', precio: 1500, disponible: true },
  { id: 6, nombre: 'Castañas en Almíbar', categoria: 'Conservas', productor: 'Frutos de Pinto', comuna: 'Pinto', precio: 5000, disponible: true }
])

const productosFiltrados = computed(() => {
  if (mostrarSoloDisponibles.value) {
    return listaProductos.value.filter(prod => prod.disponible)
  }
  return listaProductos.value
})
</script>