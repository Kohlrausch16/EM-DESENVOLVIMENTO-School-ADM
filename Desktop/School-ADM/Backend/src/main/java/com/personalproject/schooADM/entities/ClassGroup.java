package com.personalproject.schooADM.entities;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "classGroup")
public class ClassGroup {

    private String id;

    private String name;

    private Course course;

    private Teacher teacher;

    private List<Student> studentList = new ArrayList<>();

}
