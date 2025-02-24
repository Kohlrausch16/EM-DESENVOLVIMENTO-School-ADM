package com.personalproject.schooADM.entities;

import com.personalproject.schooADM.entities.enums.LanaguageEnum;
import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "languages")
public class Language {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    private String flagIcon;

    private String roundFlagIcon;

    private Boolean activeStatus;

    private LanaguageEnum language;


    public Language(String flagIcon, String roundFlagIcon, Boolean activeStatus, LanaguageEnum language) {
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

    public LanaguageEnum getLanguage() {
        return language;
    }

    public void setLanguageEnum(LanaguageEnum language) {
        this.language = language;
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
