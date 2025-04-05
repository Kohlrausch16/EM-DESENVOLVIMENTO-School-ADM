package com.personalproject.schooADM.controllers;

import com.personalproject.schooADM.entities.ClassGroup;
import com.personalproject.schooADM.entities.DTOs.requestDTOs.ClassGroupRequestDTO;
import com.personalproject.schooADM.entities.DTOs.responseDTOs.ClassGroupResponseDTO;
import com.personalproject.schooADM.services.ClassGroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ClassGroupController {

    @Autowired
    private ClassGroupService classGroupService;

    @GetMapping(value = "/class")
    public ResponseEntity<List<ClassGroupResponseDTO>> getClasses(){
        List<ClassGroup> classGroupList = classGroupService.getClasses();
        List<ClassGroupResponseDTO> responseList = new ArrayList<>();

        for(ClassGroup cg : classGroupList){
            responseList.add(new ClassGroupResponseDTO(cg));
        }

        return ResponseEntity.ok().body(responseList);
    }

    @GetMapping(value = "/class/{id}")
    public ResponseEntity<ClassGroupResponseDTO> getClassById(@PathVariable String id){
        ClassGroup foundClass = classGroupService.getClassById(id);
        return ResponseEntity.ok().body(new ClassGroupResponseDTO(foundClass));
    }

    @PostMapping(value = "/class")
    public ResponseEntity<ClassGroup> addClass(@RequestBody ClassGroupRequestDTO classGroupRequestDTO){
        return ResponseEntity.ok().body(classGroupService.addClassGlassGroup(classGroupRequestDTO));
    }

    @PutMapping(value = "/class/{id}")
    public ResponseEntity<ClassGroup> updateGroup(@RequestBody ClassGroupRequestDTO classGroupRequestDTO, @PathVariable String id){
        return ResponseEntity.ok().body(classGroupService.updateClass(classGroupRequestDTO, id));
    }

    @DeleteMapping(value = "/class/{id}")
    public ResponseEntity<String> deleteClass(@PathVariable String id){
        return ResponseEntity.ok().body(classGroupService.deleteClass(id));
    }

}
