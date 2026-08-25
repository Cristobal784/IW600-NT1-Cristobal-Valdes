# Mercado Ñuble Digital

## Estudiante
Cristóbal Valdés

## Descripción
Prototipo frontend de una SPA para la agrupación de productores de la Región de Ñuble, desarrollada con Vue 3.

## Parte A - Estructura y navegación
Para esta parte, se creó una carpeta `views` donde se agregaron los cuatro componentes básicos solicitados: Inicio, Productos, Productores y Contacto. Luego, se configuró Vue Router en la carpeta `router` para enlazar estas vistas y se implementó un menú de navegación en `App.vue` usando `<router-link>` para permitir el desplazamiento sin recargar la página.

## Parte B - Componentes y Props
Se creó el componente reutilizable `ProductoCard.vue` que recibe la información a través de props (nombre, categoría, productor, comuna y precio). Estos datos son enviados desde la vista padre `Productos.vue`, donde se almacenó un arreglo con 6 productos correspondientes a distintas comunas de la región de Ñuble.