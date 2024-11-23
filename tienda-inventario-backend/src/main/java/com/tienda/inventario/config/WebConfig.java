package com.tienda.inventario.config; // Asegúrate de ponerlo en el paquete correcto

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Permite solicitudes CORS a la API desde http://localhost:3000 (puerto de tu frontend)
        registry.addMapping("/api/**")  // Aplica a todas las rutas que empiecen con /api/
                .allowedOrigins("http://localhost:3000") // Permite solicitudes desde el frontend
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Métodos HTTP permitidos
                .allowedHeaders("*") // Permite cualquier tipo de encabezado
                .allowCredentials(true); // Permite cookies, si es necesario
    }
}