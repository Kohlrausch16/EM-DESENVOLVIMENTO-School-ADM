package com.personalproject.schooADM.entities;

import jakarta.persistence.*;
import org.springframework.cglib.core.Local;

import java.time.LocalDate;
import java.time.Period;
import java.util.Date;

@Entity
@Table(name = "student")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    private String name;

    private String phoneNumber;

    private String email;

    public String picture;

    private LocalDate birthDate;

    private Integer age;

    public Student(){

    }

    public Student(String name, String phoneNumber, String email, LocalDate birthDate, String picture) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.birthDate = birthDate;
        this.picture = picture;

    }

    public String getId(){
        return this.id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
        this.calculateAge();
    }

    public Integer getAge(){
        return this.age;
    }

    public String getPicture() {
        return picture;
    }

    private Integer calculateAge(){
        LocalDate now = LocalDate.now();
        return this.age = Period.between(this.getBirthDate(), LocalDate.now()).getYears();
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }
}
