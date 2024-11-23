import React, { useState, useEffect } from "react";
import AgregarProducto from "./components/AgregarProducto";
import ListarProductos from "./components/ListarProductos";

function App() {
  const [productos, setProductos] = useState([]);

  // Función para obtener productos desde el backend
  const obtenerProductos = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/productos");
      const data = await response.json();
      setProductos(data); // Actualiza el estado de productos con los datos del backend
    } catch (error) {
      console.error("Error al obtener productos", error);
    }
  };

  // Función que se pasa como prop a AgregarProducto
  const agregarProducto = (nuevoProducto) => {
    // Aquí simplemente actualizas la lista de productos sin llamar a la API nuevamente
    setProductos((prevProductos) => [...prevProductos, nuevoProducto]);
  };

  // Llamada inicial para obtener los productos
  useEffect(() => {
    obtenerProductos();
  }, []); // El array vacío asegura que solo se ejecute una vez cuando el componente se monta

  return (
    <div className="App">
      <h1>Sistema de Gestión de Inventario</h1>
      <AgregarProducto onAgregar={agregarProducto} />
      <ListarProductos productos={productos} />
    </div>
  );
}

export default App;