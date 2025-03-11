package com.personalproject.schooADM.services;

import com.personalproject.schooADM.entities.*;
import com.personalproject.schooADM.entities.DTOs.CourseDTO;
import com.personalproject.schooADM.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private LanguageRepository languageRepository;

    @Autowired
    private CourseLevelService clService;


    public List<Course> getCourses(){
        return courseRepository.findAll();
    }

    public Course getCourseById(String id){

        Optional<Course> foundCourse = courseRepository.findById(id);

        if(foundCourse.isPresent() == false){
            throw new RuntimeException("Unable to find course " + id);
        }

        return foundCourse.get();
    }

    public Course addCourse(CourseDTO courseDTO){
        Optional<Language> foundLang = (languageRepository.findById(courseDTO.getLanguage()));
        if(foundLang.get() == null){
            throw new RuntimeException("Informed language doesn't exist");
        }
  
        for(String cl : courseDTO.getCourseLevelList()){
            var foundLevel = clService.getLevelById(cl);

            if(foundLevel.get() != null){
                foundLevel.get().setCourse(courseDTO.getCourse());
            } else {
                clService.addLevel(foundLevel.get());
                foundLevel.setCourse(courseDTO.getCourse());
            }
        }

        foundLang.get().getCourseList().add(courseDTO.getCourse());
        courseDTO.getCourse().setLanguage(foundLang.get());
        return courseRepository.save(courseDTO.getCourse());
    }

    public Course updateCourse(CourseDTO courseDTO, String id){

    }

    public Course updateCOurseHandler(CourseDTO courseDTO, String id){

    }

    public String deleteCourse(String id){
        courseRepository.deleteById(this.getCourseById(id).getId());
        return "Course " + id + " was deleted successfully!";
    }
}
