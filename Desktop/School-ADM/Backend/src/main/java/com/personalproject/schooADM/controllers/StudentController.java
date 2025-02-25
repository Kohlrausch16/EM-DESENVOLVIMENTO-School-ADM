package com.personalproject.schooADM.controllers;

import com.personalproject.schooADM.entities.Student;
import com.personalproject.schooADM.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping(value = "/student")
    public ResponseEntity<List<Student>> getStudents(){
        List<Student> studentList = studentService.getStudents();
        return ResponseEntity.ok().body(studentList);
    }

    @GetMapping(value = "/student/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable String id){
        Student student = studentService.getStudentById(id);
        return ResponseEntity.ok().body(student);
    }

}
