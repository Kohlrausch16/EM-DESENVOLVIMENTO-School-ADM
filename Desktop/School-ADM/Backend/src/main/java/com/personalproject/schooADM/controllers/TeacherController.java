package com.personalproject.schooADM.controllers;

import com.personalproject.schooADM.entities.DTOs.requestDTOs.TeacherRequestDTO;
import com.personalproject.schooADM.entities.DTOs.responseDTOs.TeacherResponseDTO;
import com.personalproject.schooADM.entities.Teacher;
import com.personalproject.schooADM.services.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class TeacherController {

    @Autowired
    private TeacherService teacherService;

    @GetMapping(value = "/teacher")
    public ResponseEntity<List<TeacherResponseDTO>> getTeachers(){
        List<Teacher> teacherList = teacherService.getTeachers();
        List<TeacherResponseDTO> responseList = new ArrayList<>();

        for(Teacher teacher : teacherList){
            responseList.add(new TeacherResponseDTO(teacher));
        }

        return ResponseEntity.ok().body(responseList);
    }

    @GetMapping(value = "/teacher/{id}")
    public ResponseEntity<TeacherResponseDTO> getTeacherById(@PathVariable String id){
        Optional<Teacher> teacher = teacherService.getTeacherById(id);
        return ResponseEntity.ok().body(new TeacherResponseDTO(teacher.get()));
    }

    @PostMapping(value = "/teacher")
    public ResponseEntity<Teacher> addTeacher(@RequestBody TeacherRequestDTO teacherRequestDTO){
        Teacher addedTeacher = teacherService.addTeacher(teacherRequestDTO);
        return ResponseEntity.ok().body(addedTeacher);
    }

    @PutMapping(value = "/teacher/{id}")
    public ResponseEntity<Teacher> updateTeacher(@RequestBody TeacherRequestDTO teacherRequestDTO, @PathVariable String id){
        Teacher updatedTeacher = teacherService.updateTeacher(teacherRequestDTO, id);
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
