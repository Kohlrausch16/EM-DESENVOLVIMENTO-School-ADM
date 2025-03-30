package com.personalproject.schooADM.entities.DTOs.responseDTOs;

import com.personalproject.schooADM.entities.CourseLevel;

public class CourseLevelResponseDTO {

    private String id;
    private String name;
    private String shortName;
    private Boolean activeStatus;
    private String course;

    public CourseLevelResponseDTO() {

    }

    public CourseLevelResponseDTO(CourseLevel courseLevel){
        this. id = courseLevel.getId();
        this.name = courseLevel.getName();
        this.shortName = courseLevel.getShortName();
        this.activeStatus = courseLevel.getActiveStatus();
        this.course = courseLevel.getCourse().getId();
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

    public String getShortName() {
        return shortName;
    }

    public void setShortName(String shortName) {
        this.shortName = shortName;
    }

    public Boolean getActiveStatus() {
        return activeStatus;
    }

    public void setActiveStatus(Boolean activeStatus) {
        this.activeStatus = activeStatus;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }
}
