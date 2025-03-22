package com.personalproject.schooADM.services;

import com.personalproject.schooADM.entities.ClassGroup;
import com.personalproject.schooADM.repository.ClassGroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClassGroupService {


    @Autowired
    private ClassGroupRepository classGroupRepository;

    public List<ClassGroup> getAll(){
        return (classGroupRepository.findAll());
    }




}
