package com.personalproject.schooADM.entities.DTOs;

import com.personalproject.schooADM.entities.Course;
import com.personalproject.schooADM.entities.CourseLevel;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@Scope("session")
public class CourseDTO {

    private Course course;
    private String language;
    private List<String> courseLevelList = new ArrayList<>();

    public CourseDTO(){

    }

    public CourseDTO(Course course, String language) {
        this.course = course;
        this.language = language;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public List<String> getCourseLevelList() {
        return courseLevelList;
    }

    public void setCourseLevelList(List<String> courseLevelList) {
        this.courseLevelList = courseLevelList;
    }
}
