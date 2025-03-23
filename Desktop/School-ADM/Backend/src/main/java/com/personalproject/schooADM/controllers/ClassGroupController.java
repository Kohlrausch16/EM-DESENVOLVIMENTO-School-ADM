package com.personalproject.schooADM.controllers;

import com.personalproject.schooADM.entities.ClassGroup;
import com.personalproject.schooADM.entities.DTOs.ClassGroupDTO;
import com.personalproject.schooADM.services.ClassGroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ClassGroupController {

    @Autowired
    private ClassGroupService classGroupService;

    @GetMapping(value = "/class")
    public ResponseEntity<List<ClassGroup>> getClasses(){
        return ResponseEntity.ok().body(classGroupService.getClasses());
    }

    @PostMapping(value = "/class")
    public ResponseEntity<ClassGroup> addClass(@RequestBody ClassGroupDTO classGroupDTO){
        return ResponseEntity.ok().body(classGroupService.addCourse(classGroupDTO));
    }



}
