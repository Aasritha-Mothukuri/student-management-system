package com.sms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sms.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {

    boolean existsByEmail(String email);

    @Query("SELECT s.course, COUNT(s) FROM Student s GROUP BY s.course")
    List<Object[]> countStudentsByCourse();
    
    @Query("""
    	    SELECT s FROM Student s
    	    WHERE LOWER(s.firstName) LIKE LOWER(CONCAT('%', :keyword, '%'))
    	       OR LOWER(s.lastName) LIKE LOWER(CONCAT('%', :keyword, '%'))
    	       OR LOWER(s.email) LIKE LOWER(CONCAT('%', :keyword, '%'))
    	""")
    	List<Student> searchStudents(@Param("keyword") String keyword);

}