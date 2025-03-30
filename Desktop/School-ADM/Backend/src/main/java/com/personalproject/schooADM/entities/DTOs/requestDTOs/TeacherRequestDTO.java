package com.personalproject.schooADM.entities.DTOs.requestDTOs;

import com.personalproject.schooADM.entities.Teacher;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope("session")
public class TeacherRequestDTO {

    private Teacher teacher;
    private String language;

    public TeacherRequestDTO() {

    }

    public TeacherRequestDTO(Teacher teacher, String language) {
        Teacher newTeacher = new Teacher();
        this.teacher = newTeacher;
        this.language = language;
    }

    public Teacher getTeacher() {
        return teacher;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

}
