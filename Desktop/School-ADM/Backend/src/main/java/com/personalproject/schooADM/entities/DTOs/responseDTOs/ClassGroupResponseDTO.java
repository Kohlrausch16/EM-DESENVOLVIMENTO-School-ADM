package com.personalproject.schooADM.entities.DTOs.responseDTOs;

import com.personalproject.schooADM.entities.*;
import com.personalproject.schooADM.entities.enums.WeekDayEnum;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

public class ClassGroupResponseDTO {

    private String id;
    private String name;
    private Double totalCost;
    private Double classFee;
    private Double materialFee;
    private Double monthlyCourseFee;
    private Double monthlyMaterialFee;
    private Double totalMonthlyFee;
    private Integer instalments;
    private WeekDayEnum weekDay;
    private LocalTime dayHour;
    private String classroom;
    private Boolean activeStatus;
    private String course;
    private String teacher;
    private String courseLevel;
    private List<String> studentList = new ArrayList<>();


    public ClassGroupResponseDTO() {

    }

    public ClassGroupResponseDTO(ClassGroup classGroup){
        this.id = classGroup.getId();
        this.name = classGroup.getName();
        this.totalCost = classGroup.getTotalCost();
        this.classFee = classGroup.getClassFee();
        this.materialFee = classGroup.getMaterialFee();
        this.monthlyCourseFee = classGroup.getMonthlyCourseFee();
        this.monthlyMaterialFee = classGroup.getMonthlyMaterialFee();
        this.totalMonthlyFee = classGroup.getTotalMonthlyFee();
        this.instalments = classGroup.getInstalments();
        this.weekDay = classGroup.getWeekDay();
        this.dayHour = classGroup.getDayHour();
        this.classroom = classGroup.getClassroom();
        this.activeStatus = classGroup.getActiveStatus();
        this.course = classGroup.getCourse().getId();
        this.teacher = classGroup.getTeacher().getId();
        this.courseLevel = classGroup.getCourseLevel();

        for(Student student : classGroup.getStudentList()){
            studentList.add(student.getId());
        }
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getClassFee() {
        return classFee;
    }

    public void setClassFee(Double classFee) {
        this.classFee = classFee;
    }

    public Double getMaterialFee() {
        return materialFee;
    }

    public void setMaterialFee(Double materialFee) {
        this.materialFee = materialFee;
    }

    public Double getTotalCost() {
        return totalCost;
    }

    public void setTotalCost(Double totalCost) {
        this.totalCost = totalCost;
    }

    public Double getMonthlyCourseFee() {
        return monthlyCourseFee;
    }

    public void setMonthlyCourseFee(Double monthlyCourseFee) {
        this.monthlyCourseFee = monthlyCourseFee;
    }

    public Double getMonthlyMaterialFee() {
        return monthlyMaterialFee;
    }

    public void setMonthlyMaterialFee(Double monthlyMaterialFee) {
        this.monthlyMaterialFee = monthlyMaterialFee;
    }

    public Double getTotalMonthlyFee() {
        return totalMonthlyFee;
    }

    public void setTotalMonthlyFee(Double totalMonthlyFee) {
        this.totalMonthlyFee = totalMonthlyFee;
    }

    public Integer getInstalments() {
        return instalments;
    }

    public void setInstalments(Integer instalments) {
        this.instalments = instalments;
    }

    public WeekDayEnum getWeekDay() {
        return weekDay;
    }

    public void setWeekDay(WeekDayEnum weekDay) {
        this.weekDay = weekDay;
    }

    public LocalTime getDayHour() {
        return dayHour;
    }

    public void setDayHour(LocalTime dayHour) {
        this.dayHour = dayHour;
    }

    public String getClassroom() {
        return classroom;
    }

    public void setClassroom(String classroom) {
        this.classroom = classroom;
    }

    public Boolean getActiveStatus() {
        return activeStatus;
    }

    public void setActiveStatus(Boolean activeStatus) {
        this.activeStatus = activeStatus;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public String getTeacher() {
        return teacher;
    }

    public void setTeacher(String teacher) {
        this.teacher = teacher;
    }

    public String getCourseLevel() {
        return courseLevel;
    }

    public void setCourseLevel(String courseLevel) {
        this.courseLevel = courseLevel;
    }

    public List<String> getStudentList() {
        return studentList;
    }
}
