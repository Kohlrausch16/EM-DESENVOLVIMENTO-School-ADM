package com.personalproject.schooADM.entities.DTOs.responseDTOs;

import com.personalproject.schooADM.entities.Course;
import com.personalproject.schooADM.entities.Language;
import com.personalproject.schooADM.entities.Teacher;
import com.personalproject.schooADM.entities.enums.LanguageEnum;

import java.util.ArrayList;
import java.util.List;

public class LanguageResponseDTO {

    private String id;
    private String flagIcon;
    private String roundFlagIcon;
    private Boolean activeStatus;
    private LanguageEnum language;
    private List<String> teacherList = new ArrayList<>();
    private List<String> courseList = new ArrayList<>();

    public LanguageResponseDTO(){

    }

    public LanguageResponseDTO(Language language){
        this.id = language.getId();
        this.flagIcon = language.getFlagIcon();
        this.roundFlagIcon = language.getRoundFlagIcon();
        this.activeStatus = language.getActiveStatus();
        this.language = language.getLanguage();

        for(Teacher teacher : language.getTeacherList()){
            teacherList.add(teacher.getId());
        }

        for(Course course : language.getCourseList()){
            courseList.add(course.getId());
        }
    }

    public String getId() {
        return id;
    }

    public String getFlagIcon() {
        return flagIcon;
    }

    public void setFlagIcon(String flagIcon) {
        this.flagIcon = flagIcon;
    }

    public String getRoundFlagIcon() {
        return roundFlagIcon;
    }

    public void setRoundFlagIcon(String roundFlagIcon) {
        this.roundFlagIcon = roundFlagIcon;
    }

    public Boolean getActiveStatus() {
        return activeStatus;
    }

    public void setActiveStatus(Boolean activeStatus) {
        this.activeStatus = activeStatus;
    }

    public LanguageEnum getLanguage() {
        return language;
    }

    public void setLanguage(LanguageEnum language) {
        this.language = language;
    }

    public List<String> getCourseList() {
        return courseList;
    }

    public List<String> getTeacherList() {
        return teacherList;
    }
}
