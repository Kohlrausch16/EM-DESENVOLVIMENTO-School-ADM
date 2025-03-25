package com.personalproject.schooADM.services;

import com.personalproject.schooADM.entities.*;
import com.personalproject.schooADM.entities.DTOs.ClassGroupDTO;
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

    @Autowired
    private StudentService studentService;

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

        Course foundCourse = courseService.getCourseById(classGroupDTO.getCourse());

        addedClass = classGroupDTO.getClassGroup();
        addedClass.executeCalculus();
        addedClass.setTeacher(foundTeacher.get());
        foundTeacher.get().getClassGroupList().add(addedClass);
        addedClass.setCourse(foundCourse);
        foundCourse.getClassGroupList().add(addedClass);

        return(classGroupRepository.save(addedClass));
    }

    public ClassGroup updateClass(ClassGroupDTO classGroupDTO, String id){
        ClassGroup foundClass = this.getClassById(id);
        ClassGroup updatedClass = this.updateClassHelper(classGroupDTO.getClassGroup(), foundClass);
        updatedClass.getStudentList().clear();

        for(String student : classGroupDTO.getStudentList()){
            Student foundStudent = this.studentService.getStudentById(student);
            foundStudent.getClassGroupList().add(updatedClass);
            updatedClass.getStudentList().add(foundStudent);
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

        return foundClassGroup;
    }


    public String deleteClass(String id){
        classGroupRepository.delete(this.getClassById(id));
        return "Class " + id + " deleted successfully";
    }

}