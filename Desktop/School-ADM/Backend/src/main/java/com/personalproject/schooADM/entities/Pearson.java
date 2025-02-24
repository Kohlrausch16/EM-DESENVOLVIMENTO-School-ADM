package com.personalproject.schooADM.entities;

import jakarta.persistence.*;

public abstract class Pearson {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    protected String id;
    protected String name;
    protected String phoneNumber;
    protected String email;

    protected String getId() {
        return id;
    }

    protected String getName() {
        return name;
    }

    protected void setName(String name) {
        this.name = name;
    }

    protected String getPhoneNumber() {
        return phoneNumber;
    }

    protected void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    protected String getEmail() {
        return email;
    }

    protected void setEmail(String email) {
        this.email = email;
    }
}
