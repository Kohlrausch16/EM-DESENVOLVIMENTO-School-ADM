package com.personalproject.schooADM.services;

import com.personalproject.schooADM.entities.CourseLevel;
import com.personalproject.schooADM.repository.CourseLevelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseLevelService {

    @Autowired
    private CourseLevelRepository courseLevelRepository;


    public List<CourseLevel> getLevels(){
        return courseLevelRepository.findAll();
    }


    public CourseLevel getLevelById(String id){
        Optional<CourseLevel> foundLevel = courseLevelRepository.findById(id);

        if(foundLevel.isEmpty()){
            throw new RuntimeException("Id" + id  + "not found");
        }

        return foundLevel.get();
    }

    public CourseLevel addLevel(CourseLevel courseLevel){
        courseLevelRepository.save(courseLevel);
        return courseLevel;
    }



    public String deleteLevel(String id){
        CourseLevel foundLevel = this.getLevelById(id);
        courseLevelRepository.deleteById(foundLevel.getId());
        return "Register " + id + " was deleted successfully!";
    }


}
