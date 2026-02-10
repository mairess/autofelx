package com.autoflex.backend.repository;

import com.autoflex.backend.entity.ProductRawMaterial;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRawMaterialRepository extends JpaRepository<ProductRawMaterial, Long> {

  List<ProductRawMaterial> findByProductId(Long productId);

  void deleteByProductIdAndRawMaterialId(Long productId, Long rawMaterialId);
}