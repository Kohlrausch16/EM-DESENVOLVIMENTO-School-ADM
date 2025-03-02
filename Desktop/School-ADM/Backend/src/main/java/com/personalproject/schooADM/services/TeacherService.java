package com.personalproject.schooADM.services;

import com.personalproject.schooADM.entities.*;
import com.personalproject.schooADM.entities.DTOs.TeacherDTO;
import com.personalproject.schooADM.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TeacherService {

    @Autowired
    private TeacherRepository teacherRepository;

    @Autowired
    private LanguageRepository languageRepository;

    public List<Teacher> getTeachers(){
        return teacherRepository.findAll();
    }

    public Optional<Teacher> getTeacherById(String id){
        return teacherRepository.findById(id);
    }

    public Teacher addTeacher(TeacherDTO teacherDTO){

        Teacher teacher = teacherDTO.getTeacher();

        Optional<Language> foundLanguage = languageRepository.findById(teacherDTO.getLanguage());

        if(foundLanguage.isPresent()){
            teacher.setLanguage(foundLanguage.get());
        } else {
            teacher.setLanguage(null);
        }

        return teacherRepository.save(teacher);
    }


}
