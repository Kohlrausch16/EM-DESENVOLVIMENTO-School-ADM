package com.personalproject.schooADM.services;

import com.personalproject.schooADM.entities.Student;
import com.personalproject.schooADM.repository.StudentRepository;
import com.personalproject.schooADM.services.exceptions.FoundEmailException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

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

    public Student addStudent(Student student){
       List<Student> students = this.getStudents();
       Optional <Student> foundStudent = students.stream().filter(item -> item.getEmail().equals(student.getEmail())).findFirst();

       if(foundStudent.isPresent()){
           throw new FoundEmailException(student.getEmail());
       }
        student.calculateAge();
        studentRepository.save(student);
        return student;
    }

}
