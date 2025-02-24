package com.personalproject.schooADM.repository;

import com.personalproject.schooADM.entities.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, String> {

}
