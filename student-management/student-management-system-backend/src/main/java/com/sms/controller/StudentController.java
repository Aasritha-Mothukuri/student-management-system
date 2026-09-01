package com.sms.controller;


import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sms.dto.CourseStatsDTO;
import com.sms.entity.Student;
import com.sms.service.StudentService;

import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class StudentController {

    private final StudentService studentService;

    // Constructor Injection
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }
    
    @GetMapping("/students")
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }
    
    @GetMapping("/students/search")
    public List<Student> searchStudents(@RequestParam String keyword) {
        return studentService.searchStudents(keyword);
    }
    
    @GetMapping("/students/count")
    public long getStudentCount() {
        return studentService.getStudentCount();
    }
    
    @GetMapping("/students/course-stats")
    public List<CourseStatsDTO> getCourseStats() {
        return studentService.getCourseStats();
    }
    
    @PostMapping("/students")
    public Student addStudent(@Valid @RequestBody Student student) {
    	return studentService.saveStudent(student);
    }
    
    @GetMapping("/students/{id}")
    public Student getStudentById(@PathVariable long id) {
    	return studentService.getStudentById(id);
    }
    
    @PutMapping("/students/{id}")
    public Student updateStudent(@PathVariable long id,
    							 @Valid @RequestBody Student student) {
    	return studentService.updateStudent(id, student);
    }
    
    @DeleteMapping("/students/{id}")
    public String deleteStudent(@PathVariable long id) {
    	studentService.deleteStudent(id);
    	
    	return "Student Deleted Successfully";
    }
}