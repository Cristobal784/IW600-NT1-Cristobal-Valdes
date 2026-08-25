# Mercado Ñuble Digital

## Estudiante
Cristóbal Valdés

## Descripción
Prototipo frontend de una SPA para la agrupación de productores de la Región de Ñuble, desarrollada con Vue 3.

## Parte A - Estructura y navegación
Para esta parte, se creó una carpeta `views` donde se agregaron los cuatro componentes básicos solicitados: Inicio, Productos, Productores y Contacto. Luego, se configuró Vue Router en la carpeta `router` para enlazar estas vistas y se implementó un menú de navegación en `App.vue` usando `<router-link>` para permitir el desplazamiento sin recargar la página.

## Parte B - Componentes y Props
Se creó el componente reutilizable `ProductoCard.vue` que recibe la información a través de props (nombre, categoría, productor, comuna y precio). Estos datos son enviados desde la vista padre `Productos.vue`, donde se almacenó un arreglo con 6 productos correspondientes a distintas comunas de la región de Ñuble.

## Parte C - Listas y condicionales
El catálogo se genera dinámicamente utilizando la directiva `v-for`. Se implementó un checkbox vinculado con `v-model` que permite filtrar la lista para ocultar los productos agotados. Se utilizó una propiedad computada para manejar la lógica del filtro y las directivas `v-if` y `v-else` para renderizar las tarjetas o, en su defecto, desplegar un mensaje advirtiendo que no hay productos disponibles.

## Parte D - Comunicación mediante Emit
Se incorporó un botón "¡Me interesa!" en cada producto. Al hacer clic, el componente hijo (`ProductoCard.vue`) genera el evento `seleccionar-producto` enviando el nombre del producto. El componente padre (`Productos.vue`) recibe este evento mediante `@seleccionar-producto` y ejecuta una función que despliega un banner visible en la parte superior de la pantalla confirmando el interés del usuario.

## Parte E - Formulario y validación
Se implementó la vista `Contacto.vue` con los campos solicitados (nombre, correo, teléfono, comuna y mensaje), vinculándolos reactivamente usando `v-model`. Al enviar el formulario, una función valida que todos los datos estén presentes. Si falta alguno, se despliega una alerta de error; si los datos son correctos, se oculta el formulario y se muestra un mensaje de confirmación con el resumen de la información ingresada por el usuario.

## Parte F - Diseño y presentación
Se aplicó un diseño propio y ordenado enfocado en la legibilidad. Se utilizó una paleta de colores basada en un rojo terracota (apagado) y un fondo blanco suave para representar a la región manteniendo un buen contraste. Esto se combinó con la tipografía moderna 'Poppins'. A las tarjetas de productos se les dio un diseño sin bordes sólidos con un efecto de sombra difuminada para que luzcan flotantes. La interfaz utiliza Flexbox para asegurar que los elementos se adapten correctamente a diferentes tamaños de pantalla.

## Tecnologías utilizadas
- Vue 3 (Composition API)
- Vue Router
- HTML5
- CSS3 nativo

## Ejecución
Para visualizar este proyecto localmente:
1. Clonar el repositorio.
2. Abrir una terminal en la carpeta raíz del proyecto.
3. Ejecutar el comando `npm install` para instalar las dependencias.
4. Ejecutar el comando `npm run dev` para iniciar el servidor local.

## Reflexión final
Durante el desarrollo de esta evaluación, la parte que presentó mayor dificultad fue comprender la lógica de comunicación desde el componente hijo hacia el padre utilizando `$emit` (Parte D). Al principio costó identificar cómo enviar el nombre específico del producto en el evento. Logré resolverlo repasando el uso de `defineEmits` en el componente hijo y asegurándome de capturar el evento correctamente con el símbolo `@` en la etiqueta del componente dentro del archivo de la vista padre, lo que permitió finalmente gatillar la función que muestra el banner de interés.