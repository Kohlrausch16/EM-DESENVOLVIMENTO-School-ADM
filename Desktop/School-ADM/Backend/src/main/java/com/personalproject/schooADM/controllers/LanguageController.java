package com.personalproject.schooADM.controllers;

import com.personalproject.schooADM.entities.Language;
import com.personalproject.schooADM.repository.LanguageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class LanguageController {

    @Autowired
    private LanguageRepository languageRepository;

    @GetMapping(value = "/language")
    public ResponseEntity <List<Language>> getLanguages(){
        List<Language> result = languageRepository.findAll();
        return ResponseEntity.ok().body(result);
    }

    @GetMapping(value = "/language/{id}")
    public ResponseEntity<Optional<Language>> getLanguageById(@PathVariable String id){
        Optional<Language> foundLanguage = languageRepository.findById(id);
        return ResponseEntity.ok().body(foundLanguage);
    }


}
