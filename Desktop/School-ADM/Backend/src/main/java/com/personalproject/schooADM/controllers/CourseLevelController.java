package com.personalproject.schooADM.controllers;

import com.personalproject.schooADM.entities.Course;
import com.personalproject.schooADM.entities.CourseLevel;
import com.personalproject.schooADM.entities.DTOs.responseDTOs.CourseLevelResponseDTO;
import com.personalproject.schooADM.services.CourseLevelService;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class CourseLevelController {

    @Autowired
    private CourseLevelService courseLevelService;

    @GetMapping(value = "/level")
    public ResponseEntity<List<CourseLevelResponseDTO>> getLevels(){
        List<CourseLevel> courseLevelList = courseLevelService.getLevels();
        List<CourseLevelResponseDTO> courseLevelDTOList = new ArrayList<>();

        for(CourseLevel cl : courseLevelList){
            courseLevelDTOList.add(new CourseLevelResponseDTO(cl));
        }

        return ResponseEntity.ok().body(courseLevelDTOList);
    }

    @GetMapping(value = "/level/{id}")
    public ResponseEntity<CourseLevelResponseDTO> getLevelById(@PathVariable String id){
        CourseLevel courseLevel = courseLevelService.getLevelById(id);
        return ResponseEntity.ok().body(new CourseLevelResponseDTO(courseLevel));
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

