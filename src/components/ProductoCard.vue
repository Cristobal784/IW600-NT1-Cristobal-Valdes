<template>
  <div class="producto-card" style="border: 1px solid #ccc; padding: 15px; margin: 10px; border-radius: 8px;">
    <h3>{{ nombre }}</h3>
    <p><strong>Categoría:</strong> {{ categoria }}</p>
    <p><strong>Productor:</strong> {{ productor }}</p>
    <p><strong>Comuna:</strong> {{ comuna }}</p>
    <p><strong>Precio:</strong> ${{ precio }}</p>
  </div>
</template>

<script setup>

defineProps({
  nombre: String,
  categoria: String,
  productor: String,
  comuna: String,
  precio: Number
})
</script>