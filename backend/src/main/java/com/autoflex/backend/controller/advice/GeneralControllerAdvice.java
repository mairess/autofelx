package com.autoflex.backend.controller.advice;

import com.autoflex.backend.exceptions.ValidationErrorResponse;
import com.autoflex.backend.service.exception.NotFoundException;
import com.autoflex.backend.service.exception.ProductAlreadyExistsException;
import java.util.List;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GeneralControllerAdvice {


  @ExceptionHandler(MethodArgumentNotValidException.class)
  public ResponseEntity<ValidationErrorResponse> handleValidationErrors(
      MethodArgumentNotValidException ex) {

    List<String> errors = ex.getBindingResult()
        .getFieldErrors()
        .stream()
        .map(DefaultMessageSourceResolvable::getDefaultMessage)
        .toList();

    ValidationErrorResponse response = new ValidationErrorResponse(
        errors
    );

    return ResponseEntity.badRequest().body(response);
  }

  @ExceptionHandler(NotFoundException.class)
  public ResponseEntity<String> handleNotFound(NotFoundException exception) {
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
  }

  @ExceptionHandler(ProductAlreadyExistsException.class)
  public ResponseEntity<String> handleProductAlreadyExists(
      ProductAlreadyExistsException exception) {

    return ResponseEntity
        .status(HttpStatus.CONFLICT)
        .body(exception.getMessage());
  }
}