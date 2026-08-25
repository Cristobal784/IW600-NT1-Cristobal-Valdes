<template>
  <header>
    <nav>
      <router-link to="/">Inicio</router-link> |
      <router-link to="/productos">Productos</router-link> |
      <router-link to="/productores">Productores</router-link> |
      <router-link to="/contacto">Contacto</router-link>
    </nav>
  </header>

  <main>
    <router-view />
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

body {
  font-family: 'Poppins', sans-serif;
  background-color: #faf8f8;
  color: #333;
  margin: 0;
  padding: 0;
}

header nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background-color: #b34747;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

header nav a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: opacity 0.2s;
}

header nav a:hover {
  opacity: 0.8;
}

main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.producto-card {
  background-color: white;
  border: none;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.06); 
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.producto-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.12);
}

button {
  background-color: #b34747;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #923a3a;
}

input, select, textarea {
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 8px;
  font-family: 'Poppins', sans-serif;
}
</style>