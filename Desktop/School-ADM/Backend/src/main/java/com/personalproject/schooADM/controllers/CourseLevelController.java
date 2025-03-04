package com.personalproject.schooADM.controllers;

import com.personalproject.schooADM.entities.Course;
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

    @GetMapping(value = "/level/{id}")
    public ResponseEntity<CourseLevel> getLevelById(@PathVariable String id){
        return ResponseEntity.ok().body(courseLevelService.getLevelById(id));
    }

    @PostMapping(value = "/level")
    public ResponseEntity<CourseLevel> addLevel(@RequestBody CourseLevel courseLevel){
        return ResponseEntity.ok().body(courseLevelService.addLevel(courseLevel));
    }

    @PutMapping(value = "/level/{id}")
    public ResponseEntity<CourseLevel> updateLevel(@RequestBody CourseLevel courseLevel, @PathVariable String id){
        return ResponseEntity.ok().body(courseLevelService.updateLevel(courseLevel, id));
    }


    @DeleteMapping(value = "/level/{id}")
    public ResponseEntity<String> deleteLevel(@PathVariable String id){
        return ResponseEntity.ok().body(courseLevelService.deleteLevel(id));
    }
}

