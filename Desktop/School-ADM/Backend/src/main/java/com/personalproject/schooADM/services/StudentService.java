package com.personalproject.schooADM.services;

import com.personalproject.schooADM.entities.Student;
import com.personalproject.schooADM.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class StudentService {

    @Autowired
    private StudentRepository studentRepository;


    public List<Student> getStudents(){
        return studentRepository.findAll();
    }



}
