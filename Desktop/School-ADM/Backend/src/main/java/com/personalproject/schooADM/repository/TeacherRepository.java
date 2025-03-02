package com.personalproject.schooADM.repository;

import com.personalproject.schooADM.entities.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TeacherRepository extends JpaRepository<Teacher, String> {

    Optional<Teacher> findTeacherByEmail(String email);
}
