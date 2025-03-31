package com.personalproject.schooADM.entities.DTOs.responseDTOs;

import com.personalproject.schooADM.entities.ClassGroup;
import com.personalproject.schooADM.entities.Teacher;

import java.util.ArrayList;
import java.util.List;

public class TeacherResponseDTO {

    private String id;
    private String name;
    private String email;
    private String picture;
    private String phone;
    private String password;
    private String language;
    private List<String> classGroupList = new ArrayList<>();

    public TeacherResponseDTO(){

    }

    public TeacherResponseDTO(Teacher teacher){
        this.id = teacher.getId();
        this.name = teacher.getName();
        this.email = teacher.getEmail();
        this.picture = teacher.getPicture();
        this.phone = teacher.getPhone();
        this.password = teacher.getPassword();
        this.language = teacher.getLanguage().getId();

        for(ClassGroup cl : teacher.getClassGroupList()){
            classGroupList.add(cl.getId());
        }

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

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<String> getClassGroupList() {
        return classGroupList;
    }
}
