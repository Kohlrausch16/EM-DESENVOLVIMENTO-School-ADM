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
    private CourseLevelRepository clRepository;

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

        Course toBeAddCourse = new Course();
        toBeAddCourse = this.addCourseHandler(toBeAddCourse, courseDTO.getCourse());
        toBeAddCourse.setLanguage(foundLang.get());
        foundLang.get().getCourseList().add(toBeAddCourse);

        for(String cl : courseDTO.getCourseLevelList()){
            Optional<CourseLevel> foundLevel = clRepository.findById(cl);

            if(foundLevel.get() != null){
                foundLevel.get().setCourse(toBeAddCourse);
                toBeAddCourse.getCourseLevelList().add(foundLevel.get());
            }
        }
        return courseRepository.save(toBeAddCourse);
    }

    public Course addCourseHandler(Course toBeAddedCourse, Course courseDTO){
        toBeAddedCourse.setName(courseDTO.getName());
        toBeAddedCourse.setActiveStatus(courseDTO.getActiveStatus());

        return toBeAddedCourse;
    }


    public Course updateCourse(CourseDTO courseDTO, String id){
        Course foundCourse = this.getCourseById(id);
        Optional<Language> foundLang = (languageRepository.findById(courseDTO.getLanguage()));
        if(foundLang.get() == null){
            throw new RuntimeException("Informed language doesn't exist");
        }

        foundCourse.getCourseLevelList().clear();

        Course updatedCourse = this.updateCourseHandler(foundCourse, courseDTO.getCourse());
        updatedCourse.setLanguage(foundLang.get());
        foundLang.get().getCourseList().remove(foundCourse);
        foundLang.get().getCourseList().add(updatedCourse);

        for(String cl : courseDTO.getCourseLevelList()){
            updatedCourse.getCourseLevelList().add(clService.getLevelById(cl));
        }

        return courseRepository.save(updatedCourse);
    }

    public Course updateCourseHandler(Course foundCourse, Course course){
        foundCourse.setName(course.getName());
        foundCourse.setActiveStatus(course.getActiveStatus());
        return foundCourse;
    }

    public String deleteCourse(String id){
        Course foundCourse = this.getCourseById(id);
        for(CourseLevel cl : foundCourse.getCourseLevelList()){
            cl.setCourse(null);
        }
        courseRepository.deleteById(foundCourse.getId());
        return "Course " + id + " was deleted successfully!";
    }
}
