package com.personalproject.schooADM.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import java.util.Objects;

@Entity
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    private String name;
    private Boolean activeStatus;

    @JsonProperty("language")
    @ManyToOne
    @JoinColumn(name = "language_id")
    private Language language;

    public Course(){

    }

    public Course(String name, Boolean activeStatus, Language language) {
        this.name = name;
        this.activeStatus = activeStatus;
        this.language = language;
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

    public Language getLanguage() {
        return language;
    }

    public void setLanguage(Language language) {
        this.language = language;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        Course course = (Course) o;
        return Objects.equals(getId(), course.getId()) && Objects.equals(getName(), course.getName()) && Objects.equals(getActiveStatus(), course.getActiveStatus()) && Objects.equals(getLanguage(), course.getLanguage());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getName(), getActiveStatus(), getLanguage());
    }
}
