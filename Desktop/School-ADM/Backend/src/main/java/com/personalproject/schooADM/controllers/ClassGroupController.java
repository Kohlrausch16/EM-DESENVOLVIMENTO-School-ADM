package com.personalproject.schooADM.controllers;

import com.personalproject.schooADM.entities.ClassGroup;
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
    public ResponseEntity<List<ClassGroup>> getAll(){
        return ResponseEntity.ok().body(classGroupService.getAll());
    }





}
