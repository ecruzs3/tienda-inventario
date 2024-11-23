import React, { useState } from "react";

const AgregarProducto = ({ onAgregar }) => {
  const [nombreProducto, setNombreProducto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [precio, setPrecio] = useState("");
  const [mensaje, setMensaje] = useState(""); // Para mostrar el mensaje de éxito o error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevoProducto = { nombreProducto, categoria, cantidad, precio };

    // Llamada para agregar el producto al backend
    try {
      const response = await fetch("http://localhost:8080/api/productos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoProducto),
      });

      if (response.ok) {
        onAgregar(nuevoProducto);
        setMensaje("Producto agregado exitosamente, por favor recarge la url para validar");
      } else {
        setMensaje("Error al agregar el producto");
      }
    } catch (error) {
      setMensaje("Error de conexión");
    }
  };

  return (
    <div className="form-container">
      <h2>Agregar Producto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre del Producto:</label>
          <input
            type="text"
            value={nombreProducto}
            onChange={(e) => setNombreProducto(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Categoría:</label>
          <input
            type="text"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Cantidad:</label>
          <input
            type="number"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Precio:</label>
          <input
            type="number"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">Agregar Producto</button>
      </form>
      {mensaje && <div className="mensaje">{mensaje}</div>} {/* Mensaje de confirmación */}
    </div>
  );
};

export default AgregarProducto;