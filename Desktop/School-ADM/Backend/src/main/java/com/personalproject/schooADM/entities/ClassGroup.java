package com.personalproject.schooADM.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.personalproject.schooADM.entities.enums.WeekDayEnum;
import jakarta.persistence.*;

import java.time.*;
import java.util.*;

@Entity
@Table(name = "classGroup")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class ClassGroup {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
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

    private String courseLevel;

    @ManyToOne
    @JoinColumn(name = "course")
    private Course course;

    @ManyToOne
    @JoinColumn(name = "teacher")
    private Teacher teacher;

    @ManyToMany
    @JoinTable(name = "student_class", joinColumns = @JoinColumn(name = "class_id"), inverseJoinColumns = @JoinColumn(name = "student_id"))
    private List<Student> studentList = new ArrayList<>();

    public ClassGroup(){

    }

    public ClassGroup(String name, Double totalCost, Double classFee,
                      Double materialFee, Double monthlyCourseFee, Double monthlyMaterialFee,
                      Integer instalments, WeekDayEnum weekDay, LocalTime dayHour,
                      String classroom, Boolean activeStatus, String courseLevel) {
        this.name = name;
        this.totalCost = totalCost;
        this.classFee = classFee;
        this.materialFee = materialFee;
        this.monthlyCourseFee = monthlyCourseFee;
        this.monthlyMaterialFee = monthlyMaterialFee;
        this.instalments = instalments;
        this.weekDay = weekDay;
        this.dayHour = dayHour;
        this.courseLevel = courseLevel;
        this.classroom = classroom;
        this.activeStatus = activeStatus;
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

    public Double getTotalCost() {
        return totalCost;
    }

    private void setTotalCost(Double totalCost) {
        this.totalCost = totalCost;
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

    public Double getMonthlyMaterialFee() {
        return monthlyMaterialFee;
    }

    private void setMonthlyMaterialFee(Double monthlyMAterialFee) {
        this.monthlyMaterialFee = monthlyMAterialFee;
    }

    public Double getMonthlyCourseFee() {
        return monthlyCourseFee;
    }

    private void setMonthlyCourseFee(Double monthlyCourseFee) {
        this.monthlyCourseFee = monthlyCourseFee;
    }

    public Integer getInstalments() {
        return instalments;
    }

    public void setInstalments(Integer instalments) {
        this.instalments = instalments;
    }

    public String getClassroom() {
        return classroom;
    }

    public void setClassroom(String classroom) {
        this.classroom = classroom;
    }

    public Teacher getTeacher() {
        return teacher;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }

    public LocalTime getDayHour() {
        return dayHour;
    }

    public void setDayHour(LocalTime dayHour) {
        this.dayHour = dayHour;
    }

    public WeekDayEnum getWeekDay() {
        return weekDay;
    }

    public void setWeekDay(WeekDayEnum weekDay) {
        this.weekDay = weekDay;
    }

    public Boolean getActiveStatus() {
        return activeStatus;
    }

    public void setActiveStatus(Boolean activeStatus) {
        this.activeStatus = activeStatus;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }

    public List<Student> getStudentList() {
        return studentList;
    }

    public Double getTotalMonthlyFee() {
        return totalMonthlyFee;
    }

    public String getCourseLevel() {
        return courseLevel;
    }

    public void setCourseLevel(String courseLevel) {
        this.courseLevel = courseLevel;
    }

    private void setTotalMonthlyFee(Double totalMonthlyFee) {
        this.totalMonthlyFee = totalMonthlyFee;
    }

    private void calculateMonthlyClassFee(){
        this.setMonthlyCourseFee(this.classFee / this.getInstalments());
    }

    private void calculateMonthlyMaterialFee(){
        this.setMonthlyMaterialFee(this.materialFee / this.getInstalments());
    }

    private void calculateTotalFee(){
        this.setTotalCost(this.getClassFee() + this.getMaterialFee());
        this.setTotalMonthlyFee(this.getMonthlyCourseFee() + this.getMonthlyMaterialFee());
    }

    public void executeCalculus(){
        this.calculateMonthlyMaterialFee();
        this.calculateMonthlyClassFee();
        this.calculateTotalFee();

    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        ClassGroup that = (ClassGroup) o;
        return Objects.equals(getId(), that.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }
}
