package com.personalproject.schooADM.controllers;

import com.personalproject.schooADM.entities.DTOs.TeacherDTO;
import com.personalproject.schooADM.entities.Teacher;
import com.personalproject.schooADM.services.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class TeacherController {

    @Autowired
    private TeacherService teacherService;


    @GetMapping(value = "/teacher")
    public ResponseEntity<List<Teacher>> getTeachers(){
        List<Teacher> teacherList = teacherService.getTeachers();
        return ResponseEntity.ok().body(teacherList);
    }

    @GetMapping(value = "/teacher/{id}")
    public ResponseEntity<Optional<Teacher>> getTeacherById(@PathVariable String id){
        Optional<Teacher> teacher = teacherService.getTeacherById(id);
        return ResponseEntity.ok().body(teacher);
    }

    @PostMapping(value = "/teacher")
    public ResponseEntity<Teacher> addTeacher(@RequestBody TeacherDTO teacherDTO){
        Teacher addedTeacher = teacherService.addTeacher(teacherDTO);
        return ResponseEntity.ok().body(addedTeacher);
    }

    @PutMapping(value = "/teacher/{id}")
    public ResponseEntity<Teacher> updateTeacher(@RequestBody TeacherDTO teacherDTO, @PathVariable String id){
        Teacher updatedTeacher = teacherService.updateTeacher(teacherDTO, id);
        return ResponseEntity.ok().body(updatedTeacher);
    }

    @DeleteMapping(value= "/teacher/{id}")
    public ResponseEntity<String> delelteTeacher(@PathVariable String id){
        String deleteResult = teacherService.deleteTeacher(id);
        return ResponseEntity.ok().body(deleteResult);
    }
}


/*
    {
    "teacher": {
        "name": ,
        "email": ,
        "password": ,
        "phone":
    },
    "language":
    }
*/
