<template>
  <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
    <h2>Contacto</h2>
    <p>Comunícate con la organización de Mercado Ñuble Digital.</p>
    <div v-if="formularioEnviado" style="background-color: #d4edda; color: #155724; padding: 15px; border-radius: 8px;">
      <h3>¡Mensaje enviado con éxito!</h3>
      <p><strong>Resumen de tu información:</strong></p>
      <ul>
        <li><strong>Nombre:</strong> {{ resumen.nombre }}</li>
        <li><strong>Correo:</strong> {{ resumen.correo }}</li>
        <li><strong>Teléfono:</strong> {{ resumen.telefono }}</li>
        <li><strong>Comuna:</strong> {{ resumen.comuna }}</li>
        <li><strong>Mensaje:</strong> {{ resumen.mensaje }}</li>
      </ul>
      <button @click="formularioEnviado = false" style="margin-top: 10px; cursor: pointer;">Enviar otro mensaje</button>
    </div>
    <form v-else @submit.prevent="validarFormulario" style="display: flex; flex-direction: column; gap: 15px;">
      <div v-if="mostrarError" style="background-color: #f8d7da; color: #721c24; padding: 10px; border-radius: 5px;">
        <p style="margin: 0;"><strong>Falta información:</strong> Por favor, completa todos los campos obligatorios.</p>
      </div>

      <div>
        <label>Nombre:</label><br>
        <input type="text" v-model="form.nombre" style="width: 100%; padding: 5px;" />
      </div>
      
      <div>
        <label>Correo electrónico:</label><br>
        <input type="email" v-model="form.correo" style="width: 100%; padding: 5px;" />
      </div>

      <div>
        <label>Teléfono:</label><br>
        <input type="text" v-model="form.telefono" style="width: 100%; padding: 5px;" />
      </div>

      <div>
        <label>Comuna:</label><br>
        <select v-model="form.comuna" style="width: 100%; padding: 5px;">
          <option value="" disabled>Selecciona tu comuna...</option>
          <option value="Chillán">Chillán</option>
          <option value="San Carlos">San Carlos</option>
          <option value="Pinto">Pinto</option>
          <option value="Bulnes">Bulnes</option>
        </select>
      </div>

      <div>
        <label>Mensaje:</label><br>
        <textarea v-model="form.mensaje" rows="4" style="width: 100%; padding: 5px;"></textarea>
      </div>

      <button type="submit" style="padding: 10px; cursor: pointer; background-color: #4CAF50; color: white; border: none; border-radius: 5px;">
        Enviar Mensaje
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
  nombre: '',
  correo: '',
  telefono: '',
  comuna: '',
  mensaje: ''
})

const mostrarError = ref(false)
const formularioEnviado = ref(false)
const resumen = reactive({})
const validarFormulario = () => {
  mostrarError.value = false
  
  if (!form.nombre || !form.correo || !form.telefono || !form.comuna || !form.mensaje) {
    mostrarError.value = true
    return
  }

  Object.assign(resumen, form)
  formularioEnviado.value = true
  form.nombre = ''
  form.correo = ''
  form.telefono = ''
  form.comuna = ''
  form.mensaje = ''
}
</script>