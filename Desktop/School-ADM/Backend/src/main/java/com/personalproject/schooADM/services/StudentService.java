package com.personalproject.schooADM.services;

import com.personalproject.schooADM.entities.Student;
import com.personalproject.schooADM.repository.StudentRepository;
import com.personalproject.schooADM.services.exceptions.FoundEmailException;
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

        if(foundStudent.isEmpty()){
            throw new RuntimeException("Student not found");
        }

        return foundStudent.get();
    }

    public Student addStudent(Student student){
       List<Student> students = this.getStudents();
       Optional <Student> foundStudent = students.stream().filter(item -> item.getEmail().equals(student.getEmail())).findFirst();

       if(foundStudent.isPresent()){
           throw new FoundEmailException(student.getEmail());
       }
        studentRepository.save(student);
        return student;
    }

    public Student updateStudent(Student student, String id){
        Student foundStudent = this.getStudentById(id);

        if(foundStudent == null){
            throw new RuntimeException("Student" + id + " not found");
        }

        Student updatedStudent = this.studentUpdateHandler(foundStudent, student);
        studentRepository.save(updatedStudent);
        return updatedStudent;
    }

    private Student studentUpdateHandler(Student foundStudent, Student student){
        foundStudent.setName(student.getName());
        foundStudent.setPhoneNumber(student.getPhoneNumber());
        foundStudent.setEmail(student.getEmail());
        foundStudent.setPicture(student.getPicture());
        foundStudent.setBirthDate(student.getBirthDate());

        return foundStudent;
    }


    public String deleteStudent(String id){
        this.getStudentById(id);
        studentRepository.deleteById(id);

        return "Estudante " + id + " deletado com sucesso!";
    }

}
