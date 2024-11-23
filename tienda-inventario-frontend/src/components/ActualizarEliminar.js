import React, { useState } from "react";

const ActualizarEliminar = ({ producto, onActualizar, onEliminar }) => {
  const [cantidad, setCantidad] = useState(producto.cantidad);

  const handleActualizar = async () => {
    const updatedProducto = { ...producto, cantidad };

    const response = await fetch(`http://localhost:8080/api/productos/${producto.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProducto),
    });

    if (response.ok) {
      alert("Producto actualizado exitosamente");
      onActualizar();
    }
  };

  const handleEliminar = async () => {
    const response = await fetch(`http://localhost:8080/api/productos/${producto.id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      alert("Producto eliminado exitosamente");
      onEliminar();
    }
  };

  return (
    <div>
      <h3>Actualizar Producto: {producto.nombreProducto}</h3>
      <input
        type="number"
        value={cantidad}
        onChange={(e) => setCantidad(e.target.value)}
      />
      <button onClick={handleActualizar}>Actualizar Cantidad</button>
      <button onClick={handleEliminar}>Eliminar Producto</button>
    </div>
  );
};

export default ActualizarEliminar;