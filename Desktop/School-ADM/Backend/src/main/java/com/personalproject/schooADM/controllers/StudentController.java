package com.personalproject.schooADM.controllers;

import com.personalproject.schooADM.entities.DTOs.responseDTOs.StudentResponseDTO;
import com.personalproject.schooADM.entities.Student;
import com.personalproject.schooADM.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping(value = "/student")
    public ResponseEntity<List<StudentResponseDTO>> getStudents(){
        List<Student> studentList = studentService.getStudents();
        List<StudentResponseDTO> responseList = new ArrayList<>();

        for(Student student : studentList){
            responseList.add(new StudentResponseDTO(student));
        }

        return ResponseEntity.ok().body(responseList);
    }

    @GetMapping(value = "/student/{id}")
    public ResponseEntity<StudentResponseDTO> getStudentById(@PathVariable String id){
        Student student = studentService.getStudentById(id);
        return ResponseEntity.ok().body(new StudentResponseDTO(student));
    }

    @PostMapping(value = "/student")
    public ResponseEntity<Student> addStudent(@RequestBody Student student) {
        Student result = studentService.addStudent(student);
        return ResponseEntity.ok().body(result);
    }

    @PutMapping(value = "/student/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable String id, @RequestBody Student student){
        Student result = studentService.updateStudent(student, id);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping(value = "/student/{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable String id){
        String result = studentService.deleteStudent(id);
        return ResponseEntity.ok().body(result);
    }

}
