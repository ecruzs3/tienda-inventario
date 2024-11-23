package com.tienda.inventario.service;

import com.tienda.inventario.model.Producto;
import com.tienda.inventario.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductoService {

    @Autowired
    private ProductoRepository productoRepository;

    public List<Producto> obtenerTodos() {
        return productoRepository.findAll();
    }

    public Producto agregarProducto(Producto producto) {
        return productoRepository.save(producto);
    }

    public Optional<Producto> obtenerProducto(String id) {
        return productoRepository.findById(id);
    }

    public Producto actualizarProducto(String id, Producto producto) {
        producto.setId(id);
        return productoRepository.save(producto);
    }

    public void eliminarProducto(String id) {
        productoRepository.deleteById(id);
    }
}