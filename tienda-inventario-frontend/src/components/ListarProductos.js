import React, { useEffect, useState } from "react";
import ActualizarEliminar from "./ActualizarEliminar";

const ListarProductos = () => {
  const [productos, setProductos] = useState([]);

  const fetchProductos = async () => {
    const response = await fetch("http://localhost:8080/api/productos");
    const data = await response.json();
    setProductos(data);
  };

  useEffect(() => {
    fetchProductos(); // Llamamos a la función cuando el componente se monta
  }, []);

  const actualizarLista = () => {
    // Refresca la lista de productos
    fetchProductos();
  };

  const eliminarProducto = (id) => {
    setProductos(productos.filter((producto) => producto.id !== id));
  };

  return (
    <div className="productos-list">
      <h2>Lista de Productos</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.nombreProducto}</td>
              <td>{producto.categoria}</td>
              <td>{producto.cantidad}</td>
              <td>{producto.precio}</td>
              <td>
                <ActualizarEliminar
                  producto={producto}
                  onActualizar={actualizarLista}
                  onEliminar={() => eliminarProducto(producto.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListarProductos;