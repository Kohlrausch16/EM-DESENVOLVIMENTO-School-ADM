package com.personalproject.schooADM.controllers;

import com.personalproject.schooADM.entities.Language;
import com.personalproject.schooADM.repository.LanguageRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class LanguageController {

    private LanguageRepository languageRepository;


    @GetMapping(value = "/language")
    public ResponseEntity<List<Language>> getLanguages(){
        return ResponseEntity.ok().body(this.languageRepository.findAll());
    }


}
