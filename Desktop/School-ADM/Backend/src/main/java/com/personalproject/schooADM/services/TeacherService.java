package com.personalproject.schooADM.services;

import com.personalproject.schooADM.entities.Teacher;
import com.personalproject.schooADM.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TeacherService {

    @Autowired
    private TeacherRepository teacherRepository;

    public List<Teacher> getTeachers(){
        return teacherRepository.findAll();
    }
    public Optional<Teacher> getTeacherById(String id){
        return teacherRepository.findById(id);
    }



}
