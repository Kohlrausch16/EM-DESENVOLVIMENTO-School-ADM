package com.personalproject.schooADM.controllers;

import com.personalproject.schooADM.entities.Course;
import com.personalproject.schooADM.entities.DTOs.requestDTOs.CourseRequestDTO;
import com.personalproject.schooADM.entities.DTOs.responseDTOs.CourseResponseDTO;
import com.personalproject.schooADM.services.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class CourseController {

    @Autowired
    private CourseService courseService;


    @GetMapping(value = "/course")
    public ResponseEntity<List<CourseResponseDTO>> getCourses(){
        List<Course> courses = courseService.getCourses();
        List<CourseResponseDTO> responseList = new ArrayList<>();

        for(Course course : courses){
            responseList.add(new CourseResponseDTO(course));
        }

        return ResponseEntity.ok().body(responseList);
    }

    @GetMapping(value = "/course/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable String id){
        return ResponseEntity.ok().body(courseService.getCourseById(id));
    }

    @PostMapping(value = "/course")
    public ResponseEntity<Course> addCourse(@RequestBody CourseRequestDTO courseRequestDTO){
        return ResponseEntity.ok().body(courseService.addCourse(courseRequestDTO));
    }

    @PutMapping(value = "/course/{id}")
    public ResponseEntity<Course> updateCourse(@PathVariable String id, @RequestBody CourseRequestDTO courseRequestDTO){
        return ResponseEntity.ok().body(courseService.updateCourse(courseRequestDTO, id));
    }

    @DeleteMapping(value = "/course/{id}")
    public ResponseEntity<String> deleteCourse(@PathVariable String id){
        return ResponseEntity.ok().body(courseService.deleteCourse(id));
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
