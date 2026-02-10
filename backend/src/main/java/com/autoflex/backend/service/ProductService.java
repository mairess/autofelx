package com.autoflex.backend.service;

import com.autoflex.backend.entity.Product;
import com.autoflex.backend.entity.ProductRawMaterial;
import com.autoflex.backend.repository.ProductRepository;
import com.autoflex.backend.service.exception.ProductAlreadyExistsException;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
  private final ProductRepository productRepository;

  public ProductService(ProductRepository productRepository) {
    this.productRepository = productRepository;
  }


  public Product createProduct(Product product) throws ProductAlreadyExistsException {
    if (productRepository.existsByCode(product.getCode())) {
      throw new ProductAlreadyExistsException("Product code already exists!");
    }

    if (product.getRawMaterials() != null) {
      for (ProductRawMaterial productRawMaterial : product.getRawMaterials()) {
        productRawMaterial.setProduct(product);
      }
    }
    return  productRepository.save(product);
  };


}