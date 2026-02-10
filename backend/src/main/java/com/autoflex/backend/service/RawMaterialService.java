package com.autoflex.backend.service;

import com.autoflex.backend.entity.RawMaterial;
import com.autoflex.backend.repository.RawMaterialRepository;
import com.autoflex.backend.service.exception.RawMaterialNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class RawMaterialService {
  private final RawMaterialRepository rawMaterialRepository;

  public RawMaterialService(RawMaterialRepository rawMaterialRepository) {
    this.rawMaterialRepository = rawMaterialRepository;
  }

  public RawMaterial findById(Long id) throws RawMaterialNotFoundException {
    return rawMaterialRepository.findById(id).orElseThrow(RawMaterialNotFoundException::new);
  }

}