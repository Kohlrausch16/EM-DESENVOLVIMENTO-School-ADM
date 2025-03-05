package com.personalproject.schooADM.services.exceptions;


public class FoundEmailException extends RuntimeException {
    public FoundEmailException(String message) {
        super("Email " + message + " já registrado!");
    }
}
