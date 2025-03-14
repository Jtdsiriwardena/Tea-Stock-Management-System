package com.teabusiness.inventory.inventory_management_system.repository;

import com.teabusiness.inventory.inventory_management_system.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByCategory(String category);
    List<Product> findByNameContaining(String name);
    List<Product> findByQuantityInStockLessThan(int quantity);

    List<Product> findByQuantityLessThan(int i);
}