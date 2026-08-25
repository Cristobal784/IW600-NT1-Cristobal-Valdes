<template>
  <div>
    <h2>Catálogo de Productos</h2>
    
    <div style="display: flex; flex-wrap: wrap;">
      <ProductoCard 
        v-for="prod in listaProductos" 
        :key="prod.id"
        :nombre="prod.nombre"
        :categoria="prod.categoria"
        :productor="prod.productor"
        :comuna="prod.comuna"
        :precio="prod.precio"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProductoCard from '../components/ProductoCard.vue'

const listaProductos = ref([
  { id: 1, nombre: 'Miel de Abeja Natural', categoria: 'Miel', productor: 'Apícola Los Andes', comuna: 'Pinto', precio: 4500 },
  { id: 2, nombre: 'Queso de Vaca Artesanal', categoria: 'Lácteos', productor: 'Fundos del Sur', comuna: 'San Carlos', precio: 6000 },
  { id: 3, nombre: 'Arándanos Frescos', categoria: 'Frutas', productor: 'Huertos Chillán', comuna: 'Chillán', precio: 2500 },
  { id: 4, nombre: 'Mermelada de Mora', categoria: 'Conservas', productor: 'Dulces Caseros', comuna: 'Chillán', precio: 3000 },
  { id: 5, nombre: 'Tomates Cherry', categoria: 'Hortalizas', productor: 'Invernaderos San Carlos', comuna: 'San Carlos', precio: 1500 },
  { id: 6, nombre: 'Castañas en Almíbar', categoria: 'Conservas', productor: 'Frutos de Pinto', comuna: 'Pinto', precio: 5000 }
])
</script>