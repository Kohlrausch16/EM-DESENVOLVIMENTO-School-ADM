package com.personalproject.schooADM.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.personalproject.schooADM.entities.enums.WeekDayEnum;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

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

    private Double monthlyMAterialFee;

    private Integer instalments;

    private WeekDayEnum weekDay;

    private LocalDateTime dayHour;

    private String classroom;

    private Double activeStatus;

    @ManyToOne
    @JoinColumn(name = "course")
    private Course course;

    @ManyToOne
    @JoinColumn(name = "teacher")
    private Teacher teacher;

    @ManyToMany
    @JoinTable(name = "student_class", joinColumns = @JoinColumn(name = "student_id"), inverseJoinColumns = @JoinColumn(name = "class_id"))
    private List<Student> studentList = new ArrayList<>();

    public ClassGroup(){

    }

    public ClassGroup(String name, Double totalCost, Double classFee,
                      Double materialFee, Double monthlyCourseFee, Double monthlyMAterialFee,
                      Integer instalments, WeekDayEnum weekDay, LocalDateTime dayHour,
                      String classroom, Double activeStatus, Course course, Teacher teacher,
                      List<Student> studentList) {
        this.name = name;
        this.totalCost = totalCost;
        this.classFee = classFee;
        this.materialFee = materialFee;
        this.monthlyCourseFee = monthlyCourseFee;
        this.monthlyMAterialFee = monthlyMAterialFee;
        this.instalments = instalments;
        this.weekDay = weekDay;
        this.dayHour = dayHour;
        this.classroom = classroom;
        this.activeStatus = activeStatus;
        this.course = course;
        this.teacher = teacher;
        this.studentList = studentList;
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

    public void setTotalCost(Double totalCost) {
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

    public Double getMonthlyMAterialFee() {
        return monthlyMAterialFee;
    }

    public void setMonthlyMAterialFee(Double monthlyMAterialFee) {
        this.monthlyMAterialFee = monthlyMAterialFee;
    }

    public Double getMonthlyCourseFee() {
        return monthlyCourseFee;
    }

    public void setMonthlyCourseFee(Double monthlyCourseFee) {
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

    public LocalDateTime getDayHour() {
        return dayHour;
    }

    public void setDayHour(LocalDateTime dayHour) {
        this.dayHour = dayHour;
    }

    public WeekDayEnum getWeekDay() {
        return weekDay;
    }

    public void setWeekDay(WeekDayEnum weekDay) {
        this.weekDay = weekDay;
    }

    public Double getActiveStatus() {
        return activeStatus;
    }

    public void setActiveStatus(Double activeStatus) {
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
