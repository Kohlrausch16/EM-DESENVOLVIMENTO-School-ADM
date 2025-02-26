package com.personalproject.schooADM.services.exceptions;

import java.io.Serializable;

public class FoundEmailException extends RuntimeException {
    public FoundEmailException(String message) {
        super("Email " + message + " já registrado!");
    }
}
