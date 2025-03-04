package com.personalproject.schooADM.controllers;

import com.personalproject.schooADM.entities.CourseLevel;
import com.personalproject.schooADM.services.CourseLevelService;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CourseLevelController {

    @Autowired
    private CourseLevelService courseLevelService;

    @GetMapping(value = "/level")
    public ResponseEntity<List<CourseLevel>> getLevels(){
        return ResponseEntity.ok().body(courseLevelService.getLevels());
    }

    @GetMapping(value = "/teacher/{id}")
    public ResponseEntity<CourseLevel> getLevelById(@PathVariable String id){
        return ResponseEntity.ok().body(courseLevelService.getLevelById(id));
    }



}
