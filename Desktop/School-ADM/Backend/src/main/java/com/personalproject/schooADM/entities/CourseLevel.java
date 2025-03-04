package com.personalproject.schooADM.entities;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "course_level")
public class CourseLevel {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    private String name;
    private String shortName;
    private Boolean activeStatus;

    /*private Course course;*/


    public CourseLevel(){

    }

    public CourseLevel(String shortName, Boolean activeStatus, String name) {
        this.name = name;
        this.shortName = shortName;
        this.activeStatus = activeStatus;
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

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        CourseLevel that = (CourseLevel) o;
        return Objects.equals(getId(), that.getId()) && Objects.equals(getName(), that.getName()) && Objects.equals(getShortName(), that.getShortName()) && Objects.equals(getActiveStatus(), that.getActiveStatus());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getName(), getShortName(), getActiveStatus());
    }
}
