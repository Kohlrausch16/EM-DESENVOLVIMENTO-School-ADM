package com.personalproject.schooADM.controllers;

import com.personalproject.schooADM.entities.DTOs.responseDTOs.LanguageResponseDTO;
import com.personalproject.schooADM.entities.Language;
import com.personalproject.schooADM.repository.LanguageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class LanguageController {

    @Autowired
    private LanguageRepository languageRepository;

    @GetMapping(value = "/language")
    public ResponseEntity <List<LanguageResponseDTO>> getLanguages(){
        List<Language> languageList = languageRepository.findAll();
        List<LanguageResponseDTO> responseDTO = new ArrayList<>();

        for(Language lg : languageList){
            responseDTO.add(new LanguageResponseDTO(lg));
        }

        return ResponseEntity.ok().body(responseDTO);
    }

    @GetMapping(value = "/language/{id}")
    public ResponseEntity<LanguageResponseDTO> getLanguageById(@PathVariable String id){
        Optional<Language> foundLanguage = languageRepository.findById(id);
        return ResponseEntity.ok().body(new LanguageResponseDTO(foundLanguage.get()));
    }


}
