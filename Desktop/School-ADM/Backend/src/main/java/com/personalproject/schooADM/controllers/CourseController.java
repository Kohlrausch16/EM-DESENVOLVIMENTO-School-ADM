package com.personalproject.schooADM.controllers;

import com.personalproject.schooADM.entities.Course;
import com.personalproject.schooADM.entities.DTOs.CourseDTO;
import com.personalproject.schooADM.services.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CourseController {

    @Autowired
    private CourseService courseService;


    @GetMapping(value = "/course")
    public ResponseEntity<List<Course>> getCourses(){
        return ResponseEntity.ok().body(courseService.getCourses());
    }


    @PostMapping(value = "/course")
    public ResponseEntity<Course> addCourse(@RequestBody CourseDTO courseDTO){
        return ResponseEntity.ok().body(courseService.addCourse(courseDTO));
    }


}

/*
    {
        "course": {
            "name",
            "activeStatus",
        },
        "language"
    }



*/
