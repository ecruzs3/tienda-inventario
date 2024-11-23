 Sistema de Gestión de Inventario

Este es un sistema de gestión de inventario que permite agregar productos, listarlos y almacenarlos en una base de datos MongoDB. El frontend está desarrollado con React y el backend con Spring Boot.

## Requisitos

- **Node.js**
- **MongoDB**
- **Java 17 o superior**
- **Maven**

## Pasos para ejecutar el proyecto

1. Clonar el repositorio
git clone https://github.com/ecruzs3/tienda-inventario

2. Ejecutar el Backend (Spring Boot)
Navega al directorio del backend:
cd tienda-inventario-backend

Ejecuta el backend con Maven:
mvn spring-boot:run
El servidor del backend debería estar corriendo en http://localhost:8080.

3. Ejecutar el Frontend (React)
Navega al directorio del frontend:
cd tienda-inventario-frontend

Instala las dependencias de npm:
npm install

Inicia el frontend:
npm start
El frontend debería estar corriendo en http://localhost:3000.
