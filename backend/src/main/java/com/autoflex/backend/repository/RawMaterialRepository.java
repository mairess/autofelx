package com.autoflex.backend.repository;

import com.autoflex.backend.entity.RawMaterial;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RawMaterialRepository extends JpaRepository<RawMaterial, Long> {

  boolean existsByCode(String code);

}