package com.personalproject.schooADM.entities.DTOs.responseDTOs;

import com.personalproject.schooADM.entities.ClassGroup;
import com.personalproject.schooADM.entities.Student;
import jakarta.persistence.ManyToMany;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class StudentResponseDTO {

    private String id;
    private String name;
    private String phoneNumber;
    private String email;
    private String picture;
    private LocalDate birthDate;
    private Integer age;
    private List<String> classGroupList = new ArrayList<>();


    public StudentResponseDTO(){

    }

    public StudentResponseDTO(Student student){
        this.id = student.getId();
        this.name = student.getName();
        this.phoneNumber = student.getPhoneNumber();
        this.email = student.getEmail();
        this.picture =  student.getPicture();
        this.birthDate = student.getBirthDate();
        this.age = student.getAge();

        for(ClassGroup cg : student.getClassGroupList()){
            this.classGroupList.add(cg.getId());
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

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    public List<String> getClassGroupList() {
        return classGroupList;
    }

}
