package com.personalproject.schooADM.entities.DTOs;

import com.personalproject.schooADM.entities.*;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope("session")
public class ClassGroupDTO {

    private ClassGroup classGroup;
    private String teacher;
    private String course;

    public ClassGroup getClassGroup() {
        return classGroup;
    }

    public void setClassGroup(ClassGroup classGroup) {
        this.classGroup = classGroup;
    }

    public String getTeacher() {
        return teacher;
    }

    public void setTeacher(String teacher) {
        this.teacher = teacher;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }
}
