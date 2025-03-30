package com.personalproject.schooADM.repository;

import com.personalproject.schooADM.entities.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentRepository extends JpaRepository<Student, String> {

    List<Student> findByNameLike(String name);
}
