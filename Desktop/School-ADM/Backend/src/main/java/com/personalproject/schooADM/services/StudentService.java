package com.personalproject.schooADM.services;

import com.personalproject.schooADM.entities.Student;
import com.personalproject.schooADM.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;


    public List<Student> getStudents(){
        return studentRepository.findAll();
    }

    public Student getStudentById(String id){
        Optional<Student> foundStudent = studentRepository.findById(id);
        return foundStudent.isPresent() ? foundStudent.get() : null;
    }

}
