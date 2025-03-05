package com.personalproject.schooADM.services;

import com.personalproject.schooADM.entities.Course;
import com.personalproject.schooADM.entities.DTOs.CourseDTO;
import com.personalproject.schooADM.entities.Language;
import com.personalproject.schooADM.repository.CourseRepository;
import com.personalproject.schooADM.repository.LanguageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private LanguageRepository languageRepository;


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

        foundLang.get().addCourse(courseDTO.getCourse());
        courseDTO.getCourse().setLanguage(foundLang.get());

        return courseRepository.save(courseDTO.getCourse());
    }

    public String deleteCourse(String id){

        courseRepository.deleteById(this.getCourseById(id).getId());
        return "Course " + id + " was deleted successfully!";
    }
}
