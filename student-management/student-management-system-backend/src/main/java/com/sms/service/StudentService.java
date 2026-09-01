package com.sms.service;

import java.util.List;

import java.util.ArrayList;
import com.sms.dto.CourseStatsDTO;

import org.springframework.stereotype.Service;

import com.sms.entity.Student;
import com.sms.repository.StudentRepository;

import java.util.Optional;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;

@Service
public class StudentService {

    private final StudentRepository studentRepository;

    // Constructor Injection
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
    
    public List<Student> searchStudents(String keyword) {
        return studentRepository.searchStudents(keyword);
    }
    
    public long getStudentCount() {
        return studentRepository.count();
    }
    
    public List<CourseStatsDTO> getCourseStats() {

        List<Object[]> results = studentRepository.countStudentsByCourse();

        List<CourseStatsDTO> courseStats = new ArrayList<>();

        for (Object[] result : results) {

            String course = (String) result[0];
            Long studentCount = (Long) result[1];

            courseStats.add(
                new CourseStatsDTO(course, studentCount)
            );
        }

        return courseStats;
    }
    
    public Student saveStudent(Student student) {

        if (studentRepository.existsByEmail(student.getEmail())) {

            throw new ResponseStatusException(
                    HttpStatus.CONFLICT,
                    "Email already exists"
            );
        }

        return studentRepository.save(student);
    }
    
    
    public Student getStudentById(Long id) {

        Optional<Student> student = studentRepository.findById(id);

        return student.orElseThrow(() ->
                new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "Student not found with ID: " + id
                ));
    }
    
    public Student updateStudent(Long id, Student student) {

        Student existingStudent = getStudentById(id);

        if (!existingStudent.getEmail().equals(student.getEmail())
                && studentRepository.existsByEmail(student.getEmail())) {

            throw new ResponseStatusException(
                    HttpStatus.CONFLICT,
                    "Email already exists"
            );
        }

        existingStudent.setFirstName(student.getFirstName());
        existingStudent.setLastName(student.getLastName());
        existingStudent.setEmail(student.getEmail());
        existingStudent.setCourse(student.getCourse());

        return studentRepository.save(existingStudent);
    }
    
    public void deleteStudent(Long id) {

        Student student = getStudentById(id);

        studentRepository.delete(student);
    }
    
    
}