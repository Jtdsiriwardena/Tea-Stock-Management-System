
package com.teabusiness.inventory.inventory_management_system;

        import org.springframework.context.annotation.Configuration;
        import org.springframework.web.servlet.config.annotation.CorsRegistry;
        import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:4200")  // Allow Angular app running on port 4200
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedHeaders("*");  // Allow all headers
    }
}
