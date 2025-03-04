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

        Optional<Teacher> foundTeacherEmail = teacherRepository.findTeacherByEmail(teacher.getEmail());

        if(foundTeacherEmail.isPresent()){
            throw new RuntimeException("Email already registred");
        }

        Optional<Language> foundLanguage = languageRepository.findById(teacherDTO.getLanguage());

        if(foundLanguage.isPresent() || teacherDTO.getLanguage() == null){
            teacher.setLanguage(foundLanguage.get());
            foundLanguage.get().addTeacher(teacher);
        } else {
            teacher.setLanguage(null);
        }

        return teacherRepository.save(teacher);
    }

    public Teacher updateTeacher(TeacherDTO teacher, String id){
        Optional<Teacher> foundTeacher = this.getTeacherById(id);
        if(foundTeacher == null){
            throw new RuntimeException("Id not found!");
        }

        Teacher updatedTeacher = this.teacherUpdateHelper(foundTeacher.get(), teacher);
        teacherRepository.save(updatedTeacher);
        return updatedTeacher;
    }

    private Teacher teacherUpdateHelper(Teacher foundTeacher, TeacherDTO teacher){
        foundTeacher.setName(teacher.getTeacher().getName());
        foundTeacher.setEmail(teacher.getTeacher().getEmail());
        foundTeacher.setPicture(teacher.getTeacher().getPicture());
        foundTeacher.setPassword(teacher.getTeacher().getPassword());
        foundTeacher.setPhone(teacher.getTeacher().getPhone());

        Optional<Language> foundLanguage = languageRepository.findById(teacher.getLanguage());

        if(foundLanguage.isPresent() || teacher.getLanguage() == null){
            foundTeacher.setLanguage(foundLanguage.get());
        } else {
            foundTeacher.setLanguage(null);
        }

        return foundTeacher;
    }

    public String deleteTeacher(String id){
        Optional<Teacher> foundTeacher = this.getTeacherById(id);

        if(foundTeacher.isPresent()) {
            teacherRepository.deleteById(id);
            return " Teacher " + id + " deleted successfully";
        }
        return "Teacher id " + id + " not found";
    }
}
