package com.autoflex.backend.exceptions;

import java.util.List;

public record ValidationErrorResponse(List<String> errors) {

}