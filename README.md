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