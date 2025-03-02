package com.personalproject.schooADM.entities.DTOs;

import com.personalproject.schooADM.entities.Teacher;

import java.util.Objects;

public class TeacherDTO {

    private Teacher teacher;
    private String language;

    public TeacherDTO() {

    }

    public TeacherDTO(Teacher teacher, String language) {
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

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        TeacherDTO that = (TeacherDTO) o;
        return Objects.equals(getTeacher(), that.getTeacher()) && Objects.equals(getLanguage(), that.getLanguage());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getTeacher(), getLanguage());
    }
}
