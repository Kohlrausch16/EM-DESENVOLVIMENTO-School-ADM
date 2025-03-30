package com.personalproject.schooADM.entities;

import com.fasterxml.jackson.annotation.*;
import com.personalproject.schooADM.entities.enums.LanguageEnum;
import jakarta.persistence.*;

import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "languages")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Language {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    private String flagIcon;

    private String roundFlagIcon;

    private Boolean activeStatus;

    @Enumerated(EnumType.STRING)
    private LanguageEnum language;

    @OneToMany(mappedBy = "language")
    private List<Teacher> teacherList;

    @OneToMany(mappedBy = "language")
    private List<Course> courseList;

    public Language(){
    }

    public Language(String flagIcon, String roundFlagIcon, Boolean activeStatus, LanguageEnum language) {
        this.flagIcon = flagIcon;
        this.roundFlagIcon = roundFlagIcon;
        this.activeStatus = activeStatus;
        this.language = language;
    }

    public String getId() {
        return id;
    }

    public String getFlagIcon() {
        return flagIcon;
    }

    public String getRoundFlagIcon() {
        return roundFlagIcon;
    }

    public Boolean getActiveStatus() {
        return activeStatus;
    }

    public LanguageEnum getLanguage() {
        return language;
    }

    public List<Teacher> getTeacherList(){
        return this.teacherList;
    }

    public List<Course> getCourseList(){
        return this.courseList;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        Language language = (Language) o;
        return Objects.equals(getId(), language.getId()) && Objects.equals(getActiveStatus(), language.getActiveStatus());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getActiveStatus());
    }
}
