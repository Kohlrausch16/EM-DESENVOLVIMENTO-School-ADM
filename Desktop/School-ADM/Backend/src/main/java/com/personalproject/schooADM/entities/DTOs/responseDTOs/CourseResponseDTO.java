package com.personalproject.schooADM.entities.DTOs.responseDTOs;

import com.personalproject.schooADM.entities.*;

import java.util.ArrayList;
import java.util.List;

public class CourseResponseDTO {

    private String id;
    private String name;
    private Boolean activeStatus;
    private List<String> courseLevelList = new ArrayList<>();
    private String language;
    private List<String> classList = new ArrayList<>();

    public CourseResponseDTO(){

    }

    public CourseResponseDTO(Course course) {
        System.out.print(course);
        this.id = course.getId();
        this.name = course.getName();
        this.activeStatus = course.getActiveStatus();
        this.language = course.getLanguage().getId();
        for(CourseLevel cl : course.getCourseLevelList()){
            this.courseLevelList.add(cl.getId());
        }

        for(ClassGroup cg : course.getClassGroupList()){
            this.classList.add(cg.getId());
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

    public Boolean getActiveStatus() {
        return activeStatus;
    }

    public void setActiveStatus(Boolean activeStatus) {
        this.activeStatus = activeStatus;
    }

    public List<String> getCourseLevelList() {
        return courseLevelList;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public List<String> getClassList() {
        return classList;
    }
    
}
