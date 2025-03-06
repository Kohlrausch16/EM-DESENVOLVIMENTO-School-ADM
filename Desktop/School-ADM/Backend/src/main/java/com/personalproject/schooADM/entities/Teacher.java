package com.personalproject.schooADM.entities;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;

import java.util.Objects;


@Entity
@Table(name = "teacher")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Teacher {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column(name= "teacher_name", nullable = false)
    private String name;

    @Column(name= "teacher_email", nullable = false, unique=true)
    private String email;

    @Column(name= "teacher_picture")
    private String picture;

    @Column(name= "teacher_phone", nullable = false)
    private String phone;

    @Column(name= "teacher_password", nullable = false)
    private String password;

    @JoinColumn(name = "language_id")
    private Language language;

    public Teacher(){
    }

    public Teacher(String name, String email, String picture, String phone, String password) {
        this.name = name;
        this.email = email;
        this.picture = picture;
        this.phone = phone;
        this.password = password;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Language getLanguage() {
        return language;
    }

    public void setLanguage(Language language) {
        this.language = language;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        Teacher teacher = (Teacher) o;
        return Objects.equals(id, teacher.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }
}
