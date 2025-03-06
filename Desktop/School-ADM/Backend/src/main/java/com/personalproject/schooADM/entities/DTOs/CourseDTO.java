package com.personalproject.schooADM.entities.DTOs;

import com.personalproject.schooADM.entities.Course;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope("session")
public class CourseDTO {

    private Course course;
    private String language;

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
}
