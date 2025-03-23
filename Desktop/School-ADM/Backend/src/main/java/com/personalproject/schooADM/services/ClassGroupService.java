package com.personalproject.schooADM.services;

import com.personalproject.schooADM.entities.ClassGroup;
import com.personalproject.schooADM.entities.Course;
import com.personalproject.schooADM.entities.DTOs.ClassGroupDTO;
import com.personalproject.schooADM.entities.Teacher;
import com.personalproject.schooADM.repository.ClassGroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClassGroupService {

    @Autowired
    private ClassGroupRepository classGroupRepository;

    @Autowired
    private TeacherService teacherService;

    @Autowired
    private CourseService courseService;

    public List<ClassGroup> getClasses(){
        return (classGroupRepository.findAll());
    }

    public ClassGroup getClassById(String id){
        Optional<ClassGroup> foundClass = classGroupRepository.findById(id);

        if(foundClass.isEmpty()){
            throw new RuntimeException();
        }

        return foundClass.get();
    }

    public ClassGroup addCourse(ClassGroupDTO classGroupDTO){
        ClassGroup addedClass = new ClassGroup();
        Optional<Teacher> foundTeacher = teacherService.getTeacherById(classGroupDTO.getTeacher());

        if(!foundTeacher.isPresent()){
            throw new RuntimeException();
        }

        return(classGroupRepository.save(classGroupDTO.getClassGroup()));
    }

    public String deleteClass(String id){
        classGroupRepository.delete(this.getClassById(id));
        return "Class ${id} deleted successfully";
    }

}
