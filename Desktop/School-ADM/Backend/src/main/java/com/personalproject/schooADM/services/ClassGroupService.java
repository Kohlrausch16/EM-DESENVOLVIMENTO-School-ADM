package com.personalproject.schooADM.services;

import com.personalproject.schooADM.entities.*;
import com.personalproject.schooADM.entities.DTOs.requestDTOs.ClassGroupRequestDTO;
import com.personalproject.schooADM.repository.ClassGroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ClassGroupService {

    @Autowired
    private ClassGroupRepository classGroupRepository;

    @Autowired
    private TeacherService teacherService;

    @Autowired
    private CourseService courseService;

    @Autowired
    private StudentService studentService;

    @Autowired
    private CourseLevelService courseLevelService;

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

    public ClassGroup addClassGlassGroup(ClassGroupRequestDTO classGroupRequestDTO){
        ClassGroup addedClass;
        Optional<Teacher> foundTeacher = teacherService.getTeacherById(classGroupRequestDTO.getTeacher());

        if(!foundTeacher.isPresent()){
            throw new RuntimeException("Teacher " + classGroupRequestDTO.getTeacher() + " not found");
        }

        Course foundCourse = courseService.getCourseById(classGroupRequestDTO.getCourse());
        CourseLevel foundCourseLevel = courseLevelService.getLevelById(classGroupRequestDTO.getClassGroup().getCourseLevel());

        addedClass = classGroupRequestDTO.getClassGroup();
        addedClass.executeCalculus();
        addedClass.setTeacher(foundTeacher.get());
        foundTeacher.get().getClassGroupList().add(addedClass);
        addedClass.setCourse(foundCourse);
        foundCourse.getClassGroupList().add(addedClass);
        addedClass.setCourseLevel(foundCourseLevel.getShortName());

        for(String student : classGroupRequestDTO.getStudentList()){
            Student foundStudent = studentService.getStudentById(student);
            addedClass.getStudentList().add(foundStudent);
            foundStudent.getClassGroupList().add(addedClass);
        }

        return(classGroupRepository.save(addedClass));
    }

    public ClassGroup updateClass(ClassGroupRequestDTO classGroupRequestDTO, String id){
        ClassGroup foundClass = this.getClassById(id);
        CourseLevel foundCourseLevel = courseLevelService.getLevelById(classGroupRequestDTO.getClassGroup().getCourseLevel());
        ClassGroup updatedClass = this.updateClassHelper(classGroupRequestDTO.getClassGroup(), foundClass);

        updatedClass.setCourseLevel(foundCourseLevel.getShortName());
        updatedClass.getStudentList().clear();

        for(String student : classGroupRequestDTO.getStudentList()){
            Student foundStudent = this.studentService.getStudentById(student);
            foundStudent.getClassGroupList().add(foundClass);
            foundClass.getStudentList().add(foundStudent);
        }
        return classGroupRepository.save(updatedClass);
    }

    public ClassGroup updateClassHelper(ClassGroup classGroup, ClassGroup foundClassGroup){

        foundClassGroup.setName(classGroup.getName());
        foundClassGroup.setClassFee(classGroup.getClassFee());
        foundClassGroup.setInstalments(classGroup.getInstalments());
        foundClassGroup.setWeekDay(classGroup.getWeekDay());
        foundClassGroup.setClassroom(classGroup.getClassroom());
        foundClassGroup.setActiveStatus(classGroup.getActiveStatus());
        foundClassGroup.setCourseLevel(classGroup.getCourseLevel());

        return foundClassGroup;
    }

    public String deleteClass(String id){
        classGroupRepository.delete(this.getClassById(id));
        return "Class " + id + " deleted successfully";
    }

}