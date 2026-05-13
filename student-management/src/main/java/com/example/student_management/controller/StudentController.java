package com.example.student_management.controller;

import com.example.student_management.entity.Student;
import com.example.student_management.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;

    @GetMapping("/")
    public String home(Model model) {

        model.addAttribute("student", new Student());

        model.addAttribute("students",
                studentRepository.findAll());

        return "index";
    }

    @PostMapping("/save")
    public String saveStudent(Student student) {

        studentRepository.save(student);

        return "redirect:/";
    }
}